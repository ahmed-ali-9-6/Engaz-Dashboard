/*eslint-disable*/
import { Form, Input, InputNumber } from "antd";
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

function PayrollInfo({ form }) {
  const { handleInputChange } = useContext(MainContext);

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
          Bank Information
        </h2>
        <div className=" grid grid-cols-3 items-center gap-4 pl-12">
          <Form.Item
            label="Bank Name"
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
            label="Branch Name"
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
            label="Account Holder's Name"
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
            label="Account Number"
            name="Input4"
            className="w-[120%]"
            rules={[
              {
                required: true,
                message: "Please input!",
              },
            ]}
          >
            <InputNumber onChange={(e) => handleInputChange(e, "input4")} />
          </Form.Item>
        </div>
        <p className=" my-9 pl-12 text-lg">
          To have the employee complete this data,{" "}
          <a href="#" className=" text-[#4C99FD]">
            Click her
          </a>{" "}
          to send an email.
        </p>
        <h2 className=" text-2xl text-mainColor font-bold self-start pt-5 pb-8 pl-12">
          Deduction Details
        </h2>
        <div className=" grid grid-cols-3 items-center gap-4 pl-12">
          <Form.Item
            label="Payment Frequency"
            name="Input5"
            className="w-[120%]"
            rules={[
              {
                required: true,
                message: "Please input!",
              },
            ]}
          >
            <Input onChange={(e) => handleInputChange(e, "input5")} />
          </Form.Item>

          <Form.Item
            label="Insurance Deductions Amount (%)"
            name="Input6"
            className="w-[120%]"
            rules={[
              {
                required: true,
                message: "Please input!",
              },
            ]}
          >
            <InputNumber onChange={(e) => handleInputChange(e, "input6")} />
          </Form.Item>

          <Form.Item
            label="Tax Deductions Amount (%) "
            name="input7"
            className="w-[120%]"
            rules={[
              {
                required: true,
                message: "Please input!",
              },
            ]}
          >
            <InputNumber onChange={(e) => handleInputChange(e, "input7")} />
          </Form.Item>

          <Form.Item
            label="Insurance Deductions Type"
            name="Input8"
            className="w-[120%]"
            rules={[
              {
                required: true,
                message: "Please input!",
              },
            ]}
          >
            <Input onChange={(e) => handleInputChange(e, "input8")} />
          </Form.Item>
        </div>
      </Form>
    </div>
  );
}

export default PayrollInfo;
