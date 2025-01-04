/*eslint-disable*/
import { Button, ConfigProvider, Form, Steps } from "antd";
import { useContext, useEffect, useState } from "react";
import { MainContext } from "../../context/mainContext";
import PersonalInfo from "./PersonalInfo";
import WorkInfo from "./WorkInfo";
import EductionInfo from "./EductionInfo";
import PayrollInfo from "./PayrollInfo";
import BreadCrumb from "../../components/BreadCrumb";
import SuccessCard from "../../components/cards/SuccessCard";
import WarningCard from "../../components/cards/WarningCard";
import IncompleteCard from "../../components/cards/IncompleteCard";

const items = [
  { description: "Personal Information" },
  { description: "Work Information" },
  { description: "Education" },
  { description: "Payroll" },
];

function AllEmployees() {
  const [personalInfoForm] = Form.useForm();
  const [workInfoForm] = Form.useForm();
  const [educationInfoForm] = Form.useForm();
  const [payrollInfoForm] = Form.useForm();
  const { percent, setPercent, switchForm } = useContext(MainContext);
  const [currentStep, setCurrentStep] = useState(0);
  const [successMessage, setSuccessMessage] = useState(false);
  const [warningMessage, setWarningMessage] = useState(false);
  const [incompleteCardMessage, setIncompleteCardMessage] = useState(false);

  const handleCurrentStep = () => {
    if (currentStep === 4) return;

    const nextStep = currentStep + 1;
    setCurrentStep(nextStep);

    if (nextStep === 3) {
      switchForm("payrollInfo");
    } else if (nextStep === 2) {
      switchForm("eductionInfo");
    } else if (nextStep === 1) {
      switchForm("workInfo");
    } else if (nextStep === 0) {
      switchForm("personalInfo");
    }
  };

  const handlePrevStep = () => {
    if (currentStep === 0) return;

    const prevStep = currentStep - 1;
    setCurrentStep(prevStep);

    if (prevStep === 0) {
      switchForm("personalInfo");
    } else if (prevStep === 1) {
      switchForm("workInfo");
    } else if (prevStep === 2) {
      switchForm("eductionInfo");
    } else if (prevStep === 3) {
      switchForm("payrollInfo");
    }
    setPercent(100);
  };

  const handlePersonalDsicard = () => {
    personalInfoForm.resetFields();
    setWarningMessage(true);
    setTimeout(() => {
      setWarningMessage(false);
    }, 5000);
    setPercent(0);
  };

  const handleWorkDsicard = () => {
    workInfoForm.resetFields();
    setWarningMessage(true);
    setTimeout(() => {
      setWarningMessage(false);
    }, 5000);
    setPercent(0);
  };

  const handleEductionDsicard = () => {
    educationInfoForm.resetFields();
    setWarningMessage(true);
    setTimeout(() => {
      setWarningMessage(false);
    }, 5000);
    setPercent(0);
  };

  const handlePayrollDsicard = () => {
    payrollInfoForm.resetFields();
    setWarningMessage(true);
    setTimeout(() => {
      setWarningMessage(false);
    }, 5000);
    setPercent(0);
  };

  useEffect(() => {
    setPercent(0);
  }, []);

  return (
    <>
      <div className=" flex justify-between border-b border-gray-200 relative">
        {successMessage && (
          <div className=" fixed top-1/3 right-5 z-40 transition-all duration-300">
            <SuccessCard />
          </div>
        )}
        {incompleteCardMessage && (
          <div className=" fixed top-1/3 right-5 z-40 transition-all duration-300">
            <IncompleteCard />
          </div>
        )}
        {warningMessage && (
          <div className=" fixed top-1/3 right-5 z-40 transition-all duration-300">
            <WarningCard />
          </div>
        )}
        <BreadCrumb />
        <div className="flex gap-4">
          {currentStep === 0 && (
            <>
              <Button
                className="px-6 py-2 rounded-md font-semibold"
                onClick={handlePersonalDsicard}
              >
                Discard
              </Button>
              <Button
                className="px-9 py-4 text-white bg-mainColor rounded-md font-semibold"
                onClick={() => {
                  personalInfoForm
                    .validateFields()
                    .then((values) => {
                      console.log("Personal Info Saved: ", values);
                      setSuccessMessage(true);
                      setTimeout(() => {
                        setSuccessMessage(false);
                      }, 5000);
                      handleCurrentStep();
                    })
                    .catch((error) => {
                      console.error("Validation Failed: ", error);
                      setIncompleteCardMessage(true);
                      setTimeout(() => {
                        setIncompleteCardMessage(false);
                      }, 5000);
                    });
                }}
              >
                Save
              </Button>
            </>
          )}
          {currentStep === 1 && (
            <>
              <Button
                className="px-6 py-2 rounded-md font-semibold"
                onClick={handleWorkDsicard}
              >
                Discard
              </Button>
              <Button
                className="px-9 py-4 text-white bg-mainColor rounded-md font-semibold"
                onClick={() => {
                  workInfoForm
                    .validateFields()
                    .then((values) => {
                      console.log("Work Info Saved: ", values);
                      setSuccessMessage(true);
                      setTimeout(() => {
                        setSuccessMessage(false);
                      }, 5000);
                      handleCurrentStep();
                    })
                    .catch((error) => {
                      console.error("Validation Failed: ", error);
                      setIncompleteCardMessage(true);
                      setTimeout(() => {
                        setIncompleteCardMessage(false);
                      }, 5000);
                    });
                }}
              >
                Save
              </Button>
            </>
          )}
          {currentStep === 2 && (
            <>
              <Button
                className="px-6 py-2 rounded-md font-semibold"
                onClick={handleEductionDsicard}
              >
                Discard
              </Button>
              <Button
                className="px-9 py-4 text-white bg-mainColor rounded-md font-semibold"
                onClick={() => {
                  educationInfoForm
                    .validateFields()
                    .then((values) => {
                      console.log("Education Info Saved: ", values);
                      setSuccessMessage(true);
                      setTimeout(() => {
                        setSuccessMessage(false);
                      }, 5000);
                      handleCurrentStep();
                    })
                    .catch((error) => {
                      console.error("Validation Failed: ", error);
                      setIncompleteCardMessage(true);
                      setTimeout(() => {
                        setIncompleteCardMessage(false);
                      }, 5000);
                    });
                }}
              >
                Save
              </Button>
            </>
          )}
          {currentStep === 3 && (
            <>
              <Button
                className="px-6 py-2 rounded-md font-semibold"
                onClick={handlePayrollDsicard}
              >
                Discard
              </Button>
              <Button
                className="px-9 py-4 text-white bg-mainColor rounded-md font-semibold"
                onClick={() => {
                  payrollInfoForm
                    .validateFields()
                    .then((values) => {
                      console.log("Payroll Info Saved: ", values);
                      setSuccessMessage(true);
                      setTimeout(() => {
                        setSuccessMessage(false);
                      }, 5000);
                      handleCurrentStep();
                    })
                    .catch((error) => {
                      console.error("Validation Failed: ", error);
                      setIncompleteCardMessage(true);
                      setTimeout(() => {
                        setIncompleteCardMessage(false);
                      }, 5000);
                    });
                }}
              >
                Save
              </Button>
            </>
          )}
        </div>
      </div>
      <div className="flex flex-col justify-center items-center w-full pt-5 gap-5">
        <div className="w-[700px]">
          <ConfigProvider>
            <Steps
              current={currentStep}
              percent={percent}
              labelPlacement="vertical"
              items={items}
            />
          </ConfigProvider>
        </div>
        <div className={`${currentStep === 0 ? "block" : "hidden"} w-full`}>
          <PersonalInfo form={personalInfoForm} />
        </div>
        <div className={`${currentStep === 1 ? "block" : "hidden"} w-full`}>
          <WorkInfo form={workInfoForm} />
        </div>
        <div className={`${currentStep === 2 ? "block" : "hidden"} w-full`}>
          <EductionInfo form={educationInfoForm} />
        </div>
        <div className={`${currentStep === 3 ? "block" : "hidden"} w-full`}>
          <PayrollInfo form={payrollInfoForm} />
        </div>
        <div className="flex gap-5 self-end">
          <Button
            onClick={handlePrevStep}
            className={`${currentStep === 0 ? "hidden" : ""}`}
          >
            <svg
              width="16"
              height="14"
              viewBox="0 0 16 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6.875 12.625L1.25 7M1.25 7L6.875 1.375M1.25 7H14.75"
                stroke="#003465"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Button>
          <Button
            onClick={handleCurrentStep}
            className={`${currentStep === 3 ? "hidden" : ""}`}
            disabled={percent < 100}
          >
            <svg
              width="16"
              height="14"
              viewBox="0 0 16 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9.125 12.625L14.75 7M14.75 7L9.125 1.375M14.75 7H1.25"
                stroke="#003465"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Button>
        </div>
      </div>
    </>
  );
}

export default AllEmployees;
