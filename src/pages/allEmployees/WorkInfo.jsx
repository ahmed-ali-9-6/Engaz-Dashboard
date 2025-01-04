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
