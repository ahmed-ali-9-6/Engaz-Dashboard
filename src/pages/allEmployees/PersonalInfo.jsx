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

function PersonalInfo({ form }) {
  const { handleInputChange } = useContext(MainContext);

  const handleUploadClick = () => {
    document.getElementById("fileInput").click();
  };

  return (
    <div className=" w-full">
      <h2 className=" text-2xl text-mainColor font-bold self-start pt-5 pb-8 pl-12">
        General Information
      </h2>
      <Form
        {...formItemLayout}
        form={form}
        // style={{
        //   maxWidth: 1000,
        // }}
        initialValues={{
          variant: "filled",
        }}
        layout="vertical"
        requiredMark={false}
      >
        <div className=" grid grid-cols-3 items-center gap-4 pl-12">
          <Form.Item
            label="First Name"
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
            label="Middle Name"
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
            label="Last Name"
            name="Input3"
            className="w-[120%]"
            rules={[
              {
                required: true,
                message: "Please input!",
              },
            ]}
          >
            <Input onChange={(e) => handleInputChange(e, "input3")} />
          </Form.Item>

          <Form.Item
            label="Gender"
            name="input4"
            className="w-[120%]"
            rules={[
              {
                required: true,
                message: "Please input!",
              },
            ]}
          >
            <Select onChange={(e) => handleInputChange(e, "input4")}>
              <Select.Option value="Male">Male</Select.Option>
              <Select.Option value="Female">Female</Select.Option>
            </Select>
          </Form.Item>

          <Form.Item
            label="Age"
            name="Input5"
            className="w-[120%]"
            rules={[
              {
                required: true,
                message: "Please input!",
              },
            ]}
          >
            <InputNumber onChange={(e) => handleInputChange(e, "input5")} />
          </Form.Item>

          <Form.Item
            label="Date of Birth"
            name="Input6"
            className="w-[120%]"
            rules={[
              {
                required: true,
                message: "Please input!",
              },
            ]}
          >
            <DatePicker onChange={(e) => handleInputChange(e, "input6")} />
          </Form.Item>

          <Form.Item
            label="Nationality"
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
              <Select.Option value="Egyptian">Egyptian</Select.Option>
              <Select.Option value="Syrian">syrian</Select.Option>
            </Select>
          </Form.Item>

          <Form.Item
            label="National ID"
            name="Input8"
            className="w-[120%]"
            rules={[
              {
                required: true,
                message: "Please input!",
              },
            ]}
          >
            <InputNumber onChange={(e) => handleInputChange(e, "input8")} />
          </Form.Item>

          <Form.Item
            label="National ID Attachment"
            name="input9"
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
                onChange={(e) => handleInputChange(e.target.files[0], "input9")}
              />
            </div>
          </Form.Item>

          <Form.Item
            label="military status"
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

          <Form.Item
            label="Marital status"
            name="Input11"
            className="w-[120%]"
            rules={[
              {
                required: true,
                message: "Please input!",
              },
            ]}
          >
            <Input onChange={(e) => handleInputChange(e, "input11")} />
          </Form.Item>

          <Form.Item
            label="City"
            name="Input12"
            className="w-[120%]"
            rules={[
              {
                required: true,
                message: "Please input!",
              },
            ]}
          >
            <Input onChange={(e) => handleInputChange(e, "input12")} />
          </Form.Item>

          <Form.Item
            label="Address"
            name="Input13"
            className="w-[120%]"
            rules={[
              {
                required: true,
                message: "Please input!",
              },
            ]}
          >
            <Input onChange={(e) => handleInputChange(e, "input13")} />
          </Form.Item>

          <Form.Item
            label="Email"
            name="Input14"
            className="w-[120%]"
            rules={[
              {
                type: "email",
                message: "The input is not valid E-mail!",
              },
              {
                required: true,
                message: "Please input your E-mail!",
              },
            ]}
          >
            <Input onChange={(e) => handleInputChange(e, "input14")} />
          </Form.Item>

          <Form.Item
            label="Phone Number 1"
            name="Input15"
            className="w-[120%]"
            rules={[
              {
                required: true,
                message: "Please input!",
              },
            ]}
          >
            <InputNumber onChange={(e) => handleInputChange(e, "input15")} />
          </Form.Item>

          <Form.Item
            label="Phone Number 2"
            name="Input16"
            className="w-[120%]"
            rules={[
              {
                required: true,
                message: "Please input!",
              },
            ]}
          >
            <InputNumber onChange={(e) => handleInputChange(e, "input16")} />
          </Form.Item>

          <Form.Item
            label="social insurance number"
            name="Input17"
            className="w-[120%]"
            rules={[
              {
                required: true,
                message: "Please input!",
              },
            ]}
          >
            <InputNumber onChange={(e) => handleInputChange(e, "input17")} />
          </Form.Item>
          {/* </div> */}
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

export default PersonalInfo;
