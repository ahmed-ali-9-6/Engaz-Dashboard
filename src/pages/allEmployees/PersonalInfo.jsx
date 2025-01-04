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
