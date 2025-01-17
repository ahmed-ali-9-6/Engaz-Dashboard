/* eslint-disable */
import { DatePicker, Form, Input, InputNumber, Select } from "antd";
import { useContext, useEffect, useState } from "react";
import { MainContext } from "../../context/mainContext";
import "../../assets/css/antStyle.css";

const formItemLayout = {
  labelCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 6,
    },
  },
  wrapperCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 14,
    },
  },
};

let nextId = 2;

function EductionInfo({ form }) {
  const { handleInputChange, setFormFieldStatus } = useContext(MainContext);
  const [certifications, setCertifications] = useState([
    { id: 1, inputs: generateInputNames(9) },
  ]);
  const [lastInputNumber, setLastInputNumber] = useState(13);
  const [fileNames, setFileNames] = useState({});

  const handleAddCertificationGroup = () => {
    const newInputs = generateInputNames(lastInputNumber + 1);
    setCertifications([...certifications, { id: nextId, inputs: newInputs }]);
    setLastInputNumber(lastInputNumber + newInputs.length);
    nextId++;
  };

  const handleRemoveCertificationGroup = (id) => {
    setCertifications(certifications.filter((group) => group.id !== id));
  };

  const handleInputFile = (file, nameField) => {
    handleInputChange(file, nameField);
    setFileNames({ ...fileNames, [nameField]: file.name });
  };

  useEffect(() => {
    setFormFieldStatus((prev) => ({
      ...prev,
      eductionInfo: {
        ...prev.eductionInfo,
        ...certifications.reduce((acc, group) => {
          group.inputs.forEach((inputName) => {
            acc[inputName] = prev.eductionInfo[inputName] || false;
          });
          return acc;
        }, {}),
      },
    }));
  }, [certifications]);

  return (
    <div className=" w-full">
      <Form
        {...formItemLayout}
        form={form}
        initialValues={{
          variant: "filled",
        }}
        layout="vertical"
        requiredMark={false}
      >
        <h2 className=" text-2xl text-mainColor font-bold self-start pt-5 pb-8 pl-12">
          Eductional Information
        </h2>
        <div className=" grid grid-cols-3 items-center gap-4 pl-12">
          <Form.Item
            label="Degree Type"
            name="Input1"
            className="w-[120%]"
            labelCol={{
              style: { fontWeight: "bold" },
            }}
            rules={[
              {
                required: true,
                message: "Please input!",
              },
            ]}
          >
            <Select
              onChange={(e) => handleInputChange(e, "input1")}
              placeholder="Bachelor's"
            >
              <Select.Option value="Bachelor">Bachelor</Select.Option>
              <Select.Option value="Master">Master</Select.Option>
            </Select>
          </Form.Item>

          <Form.Item
            label="Field of Study"
            name="Input2"
            className="w-[120%]"
            rules={[
              {
                required: true,
                message: "Please input!",
              },
            ]}
          >
            <Input
              onChange={(e) => handleInputChange(e, "input2")}
              placeholder="science"
            />
          </Form.Item>

          <Form.Item
            label="Institution Name"
            name="Input3"
            className="w-[120%]"
            rules={[
              {
                required: true,
                message: "Please input!",
              },
            ]}
          >
            <Input
              onChange={(e) => handleInputChange(e, "input3")}
              placeholder="Attach"
            />
          </Form.Item>

          <Form.Item
            label="Location of Institution"
            name="Input4"
            className="w-[120%]"
            rules={[
              {
                required: true,
                message: "Please input!",
              },
            ]}
          >
            <Input
              onChange={(e) => handleInputChange(e, "input4")}
              placeholder="cairo"
            />
          </Form.Item>

          <Form.Item
            label="Graduation Year"
            name="Input5"
            className="w-[120%]"
            rules={[
              {
                required: true,
                message: "Please input!",
              },
            ]}
          >
            <InputNumber
              onChange={(e) => handleInputChange(e, "input5")}
              placeholder="2024"
            />
          </Form.Item>

          <Form.Item
            label="Grade/GPA "
            name="Input6"
            className="w-[120%]"
            rules={[
              {
                required: true,
                message: "Please input!",
              },
            ]}
          >
            <InputNumber
              onChange={(e) => handleInputChange(e, "input6")}
              placeholder="3.5"
            />
          </Form.Item>

          <Form.Item
            label="Start Date"
            name="input7"
            className="w-[120%]"
            rules={[
              {
                required: true,
                message: "Please input!",
              },
            ]}
          >
            <DatePicker onChange={(e) => handleInputChange(e, "input7")} />
          </Form.Item>

          <Form.Item
            label="End Date"
            name="Input8"
            className="w-[120%]"
            rules={[
              {
                required: true,
                message: "Please input!",
              },
            ]}
          >
            <DatePicker onChange={(e) => handleInputChange(e, "input8")} />
          </Form.Item>
        </div>
        <h2 className="text-2xl text-mainColor font-bold self-start pt-5 pb-8 pl-12">
          Certifications & Training
        </h2>

        {certifications.map((group, groupIndex) => (
          <div
            key={group.id}
            className="grid grid-cols-3 items-center gap-4 pl-12 mb-6"
          >
            {group.inputs.map((inputName, index) => (
              <Form.Item
                key={inputName}
                label={getLabelName(index)}
                name={inputName}
                className="w-[120%]"
                rules={[{ required: true, message: "Please input!" }]}
              >
                {index === 2 ? (
                  <DatePicker
                    onChange={(e) => handleInputChange(e, inputName)}
                  />
                ) : index === 3 ? (
                  <div className="relative">
                    <Input
                      placeholder={fileNames[inputName] || "Attach"}
                      className="pr-10"
                      readOnly
                    />
                    <div
                      className="absolute top-1/2 transform -translate-y-1/2 h-[35px] w-full flex justify-end cursor-pointer"
                      onClick={() =>
                        document
                          .getElementById(`fileInput-${inputName}`)
                          .click()
                      }
                    >
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="mr-2 mt-[5px]"
                      >
                        <path
                          d="M4.53564 11.4647L11.4299 4.5704C13.4802 2.52015 16.8044 2.52015 18.8546 4.5704C20.9049 6.62066 20.9046 9.94496 18.8544 11.9952L10.8994 19.9502C9.53258 21.317 7.31688 21.3168 5.95004 19.95C4.58321 18.5831 4.58287 16.3673 5.94971 15.0005L13.9047 7.0455C14.5881 6.36208 15.6967 6.36208 16.3801 7.0455C17.0635 7.72892 17.0631 8.83669 16.3796 9.52011L9.48535 16.4144"
                          stroke="#B1B1B1"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                    <input
                      id={`fileInput-${inputName}`}
                      style={{ display: "none" }}
                      type="file"
                      onChange={(e) =>
                        handleInputFile(e.target.files[0], inputName)
                      }
                    />
                  </div>
                ) : (
                  <Input onChange={(e) => handleInputChange(e, inputName)} />
                )}
              </Form.Item>
            ))}

            {group.id === certifications[certifications.length - 1]?.id && (
              <button
                className="text-[#B1B1B1] border border-[#E0E0E0] px-4 py-2 rounded w-[169px] mt-[10px]"
                onClick={handleAddCertificationGroup}
              >
                + Add Certification
              </button>
            )}

            {groupIndex < certifications.length - 1 && (
              <button
                className="bg-red-500 text-white px-4 py-2 rounded w-40"
                onClick={() => handleRemoveCertificationGroup(group.id)}
              >
                Remove
              </button>
            )}
          </div>
        ))}
      </Form>
    </div>
  );
}

const generateInputNames = (startNumber) => {
  return [
    `input${startNumber}`,
    `input${startNumber + 1}`,
    `input${startNumber + 2}`,
    `input${startNumber + 3}`,
    `input${startNumber + 4}`,
  ];
};

function getLabelName(index) {
  switch (index) {
    case 0:
      return "Certification Name";
    case 1:
      return "Issuing Organization";
    case 2:
      return "Completion Date";
    case 3:
      return "Certification Attachment";
    case 4:
      return "English Proficiency";
    default:
      return "";
  }
}

export default EductionInfo;
