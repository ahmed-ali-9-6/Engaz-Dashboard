/*eslint-disable*/
import { DatePicker, Form, Input, InputNumber, Select } from "antd";
import { useContext } from "react";
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

function WorkInfo({ form }) {
  const { handleInputChange } = useContext(MainContext);

  const handleUploadClick = () => {
    document.getElementById("fileInput").click();
  };

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
          Job Information
        </h2>
        <div className=" grid grid-cols-3 items-center gap-4 pl-12">
          <Form.Item
            label="Department Name"
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
            <Input onChange={(e) => handleInputChange(e, "input1")} />
          </Form.Item>

          <Form.Item
            label="Jop Title"
            name="Input2"
            className="w-[120%]"
            rules={[
              {
                required: true,
                message: "Please input!",
              },
            ]}
          >
            <Input onChange={(e) => handleInputChange(e, "input2")} />
          </Form.Item>

          <Form.Item
            label="Contract duration"
            name="Input3"
            className="w-[120%]"
            rules={[
              {
                required: true,
                message: "Please input!",
              },
            ]}
          >
            <InputNumber onChange={(e) => handleInputChange(e, "input3")} />
          </Form.Item>

          <Form.Item
            label="Contract start date"
            name="Input4"
            className="w-[120%]"
            rules={[
              {
                required: true,
                message: "Please input!",
              },
            ]}
          >
            <DatePicker onChange={(e) => handleInputChange(e, "input4")} />
          </Form.Item>

          <Form.Item
            label="Contract End Date"
            name="Input5"
            className="w-[120%]"
            rules={[
              {
                required: true,
                message: "Please input!",
              },
            ]}
          >
            <DatePicker onChange={(e) => handleInputChange(e, "input5")} />
          </Form.Item>

          <Form.Item
            label="Contract Attachment"
            name="input6"
            className="w-[120%]"
            rules={[
              {
                required: true,
                message: "Please upload the file!",
              },
            ]}
          >
            <div className="relative">
              <Input placeholder="Upload file" className="pr-10" readOnly />
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="absolute right-2 top-1/2 transform -translate-y-1/2 cursor-pointer"
                onClick={handleUploadClick}
              >
                <path
                  d="M4.53564 11.4647L11.4299 4.5704C13.4802 2.52015 16.8044 2.52015 18.8546 4.5704C20.9049 6.62066 20.9046 9.94496 18.8544 11.9952L10.8994 19.9502C9.53258 21.317 7.31688 21.3168 5.95004 19.95C4.58321 18.5831 4.58287 16.3673 5.94971 15.0005L13.9047 7.0455C14.5881 6.36208 15.6967 6.36208 16.3801 7.0455C17.0635 7.72892 17.0631 8.83669 16.3796 9.52011L9.48535 16.4144"
                  stroke="#B1B1B1"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <input
                id="fileInput"
                style={{ display: "none" }}
                type="file"
                onChange={(e) => handleInputChange(e.target.files[0], "input6")}
              />
            </div>
          </Form.Item>

          <Form.Item
            label="Work Location"
            name="input7"
            className="w-[120%]"
            rules={[
              {
                required: true,
                message: "Please input!",
              },
            ]}
          >
            <Select onChange={(e) => handleInputChange(e, "input7")}>
              <Select.Option value="WFH">WFH</Select.Option>
              <Select.Option value="WFO">WFO</Select.Option>
              <Select.Option value="Hybrid">Hybrid</Select.Option>
            </Select>
          </Form.Item>

          <Form.Item
            label="Work Type"
            name="Input8"
            className="w-[120%]"
            rules={[
              {
                required: true,
                message: "Please input!",
              },
            ]}
          >
            <Select onChange={(e) => handleInputChange(e, "input8")}>
              <Select.Option value="Full-time">Full-time</Select.Option>
              <Select.Option value="Part-Time">Part-Time</Select.Option>
              <Select.Option value="Rotational-Shifts">
                Rotational Shifts
              </Select.Option>
            </Select>
          </Form.Item>
        </div>
        <h2 className=" text-2xl text-mainColor font-bold self-start pt-5 pb-8 pl-12">
          Salary Information
        </h2>
        <div className=" grid grid-cols-3 items-center gap-4 pl-12">
          <Form.Item
            label="Gross Salary"
            name="Input9"
            className="w-[120%]"
            rules={[
              {
                required: true,
                message: "Please input!",
              },
            ]}
          >
            <InputNumber onChange={(e) => handleInputChange(e, "input9")} />
          </Form.Item>

          <Form.Item
            label="Net Salary"
            name="Input10"
            className="w-[120%]"
            rules={[
              {
                required: true,
                message: "Please input!",
              },
            ]}
          >
            <Input onChange={(e) => handleInputChange(e, "input10")} />
          </Form.Item>
        </div>

        {/* <Form.Item
          wrapperCol={{
            offset: 6,
            span: 16,
          }}
        >
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item> */}
      </Form>
    </div>
  );
}

export default WorkInfo;
