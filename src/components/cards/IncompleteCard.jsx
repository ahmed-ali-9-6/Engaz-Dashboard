import { Button } from "antd";
import { useContext } from "react";
import { MainContext } from "../../context/mainContext";

function IncompleteCard() {
  const {
    discardPersonalForm,
    discardWorkForm,
    currentForm,
    discardEductionForm,
    discardPayrollForm,
    setIncompleteCardMessage,
  } = useContext(MainContext);

  let discardForm;
  if (currentForm === "personalInfo") {
    discardForm = discardPersonalForm;
  } else if (currentForm === "workInfo") {
    discardForm = discardWorkForm;
  } else if (currentForm === "eductionInfo") {
    discardForm = discardEductionForm;
  } else if (currentForm === "payrollInfo") {
    discardForm = discardPayrollForm;
  }
  return (
    <div className="max-w-2xl px-8 py-4 bg-white rounded-xl shadow-md">
      <div className="flex items-center justify-between mb-4">
        <span className="text-lg font-bold text-mainColor">
          Profile Incomplete:
        </span>
        <a
          className="px-4 py-1 text-sm font-bold text-mainColor border border-mainColor hover:bg-mainColor hover:text-white transition-colors duration-300 transform rounded cursor-pointe"
          tabIndex="0"
          role="button"
          onClick={() => setIncompleteCardMessage(false)}
        >
          <span className=" text-2xl">x</span>
        </a>
      </div>

      <div className="mt-2">
        <p className="text-sm text-[#323F49]">
          The profile is incomplete. Do you want to save your progress and
          finish later, or discard your changes?
        </p>
      </div>

      <div className="flex items-center justify-end gap-4 mt-8">
        <Button
          className="px-6 py-5 text-mainColor rounded-md font-semibold"
          onClick={discardForm}
        >
          Discard
        </Button>
        <Button
          className="px-9 py-5 text-white bg-mainColor rounded-md font-semibold"
          onClick={() => setIncompleteCardMessage(false)}
        >
          Finish Later
        </Button>
      </div>
    </div>
  );
}

export default IncompleteCard;
