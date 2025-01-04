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

function EductionInfo({ form }) {
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
            <Select onChange={(e) => handleInputChange(e, "input1")}>
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
            <Input onChange={(e) => handleInputChange(e, "input2")} />
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
            <Input onChange={(e) => handleInputChange(e, "input3")} />
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
            <Input onChange={(e) => handleInputChange(e, "input4")} />
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
            <InputNumber onChange={(e) => handleInputChange(e, "input5")} />
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
            <InputNumber onChange={(e) => handleInputChange(e, "input6")} />
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
        <h2 className=" text-2xl text-mainColor font-bold self-start pt-5 pb-8 pl-12">
          Certifications & Training
        </h2>
        <div className=" grid grid-cols-3 items-center gap-4 pl-12">
          <Form.Item
            label="Certification Name"
            name="Input9"
            className="w-[120%]"
            rules={[
              {
                required: true,
                message: "Please input!",
              },
            ]}
          >
            <Input onChange={(e) => handleInputChange(e, "input9")} />
          </Form.Item>

          <Form.Item
            label="Issuing Organization"
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
            label="Completion Date"
            name="Input11"
            className="w-[120%]"
            rules={[
              {
                required: true,
                message: "Please input!",
              },
            ]}
          >
            <DatePicker onChange={(e) => handleInputChange(e, "input11")} />
          </Form.Item>

          <Form.Item
            label="Certification Attachment"
            name="Input12"
            className="w-[120%]"
            rules={[
              {
                required: true,
                message: "Please input!",
              },
            ]}
          >
            <InputNumber onChange={(e) => handleInputChange(e, "input12")} />
          </Form.Item>

          <Form.Item
            label="English Proficiency"
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
            label="Certificate"
            name="Input14"
            className="w-[120%]"
            rules={[
              {
                required: true,
                message: "Please input!",
              },
            ]}
          >
            <Input
              placeholder="+ Add Certification"
              onChange={(e) => handleInputChange(e, "input14")}
            />
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

export default EductionInfo;
