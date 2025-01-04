import { Button } from "antd";
import { useContext } from "react";
import { MainContext } from "../../context/mainContext";

function WarningCard() {
  const {
    discardPersonalForm,
    discardWorkForm,
    currentForm,
    discardEductionForm,
    discardPayrollForm,
    setWarningMessage,
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
        <span className="text-lg font-bold text-[#FF0024]">Warning:</span>
        <a
          className="px-4 py-1 text-sm font-bold text-mainColor border border-mainColor hover:bg-mainColor hover:text-white transition-colors duration-300 transform rounded cursor-pointe"
          tabIndex="0"
          role="button"
          onClick={() => setWarningMessage(false)}
        >
          <span className=" text-2xl">x</span>
        </a>
      </div>

      <div className="mt-2">
        <p className="text-sm text-[#323F49]">
          Canceling now will delete all entered information. Proceed?
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
          onClick={() => setWarningMessage(false)}
        >
          Save and Exit
        </Button>
      </div>
    </div>
  );
}

export default WarningCard;
