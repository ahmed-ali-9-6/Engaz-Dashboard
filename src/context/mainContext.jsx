/*eslint-disable*/
import { createContext, useEffect, useState } from "react";

export const MainContext = createContext({
  percent: 0,
  currentForm: "personalInfo",
  handleInputChange: () => {},
  switchForm: () => {},
});

function MainContextProvider(props) {
  const { children } = props;
  const [percent, setPercent] = useState(0);
  const [currentForm, setCurrentForm] = useState("personalInfo");

  const fieldStatus = {
    personalInfo: {
      input1: false,
      input2: false,
      input3: false,
      input4: false,
      input5: false,
      input6: false,
      input7: false,
      input8: false,
      input9: false,
      input10: false,
      input11: false,
      input12: false,
      input13: false,
      input14: false,
      input15: false,
      input16: false,
      input17: false,
    },
    workInfo: {
      input1: false,
      input2: false,
      input3: false,
      input4: false,
      input5: false,
      input6: false,
      input7: false,
      input8: false,
      input9: false,
      input10: false,
    },
    eductionInfo: {
      input1: false,
      input2: false,
      input3: false,
      input4: false,
      input5: false,
      input6: false,
      input7: false,
      input8: false,
      input9: false,
      input10: false,
      input11: false,
      input12: false,
      input13: false,
      input14: false,
    },
    payrollInfo: {
      input1: false,
      input2: false,
      input3: false,
      input4: false,
      input5: false,
      input6: false,
      input7: false,
      input8: false,
    },
  };

  const [formFieldStatus, setFormFieldStatus] = useState(fieldStatus);

  useEffect(() => {
    const fields = formFieldStatus[currentForm];
    const totalFields = Object.keys(fields).length;
    const completedFields = Object.values(fields).filter(
      (status) => status
    ).length;
    setPercent((completedFields / totalFields) * 100);
  }, [formFieldStatus, currentForm]);

  const handleInputChange = (eventOrValue, fieldName) => {
    let value;
    if (eventOrValue && eventOrValue.target) {
      value = eventOrValue.target.value.trim();
    } else {
      value = eventOrValue;
    }

    const isFieldCompleted =
      value !== null && value !== undefined && value !== "";

    setFormFieldStatus((prev) => ({
      ...prev,
      [currentForm]: {
        ...prev[currentForm],
        [fieldName]: isFieldCompleted,
      },
    }));
  };

  const switchForm = (formName) => {
    setCurrentForm(formName);
    setPercent(0);
  };

  return (
    <MainContext.Provider
      value={{
        percent,
        setPercent,
        handleInputChange,
        switchForm,
      }}
    >
      {children}
    </MainContext.Provider>
  );
}

export default MainContextProvider;
