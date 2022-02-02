import React, { useEffect, useState } from "react";
import {
  Space,
  Form,
  useForm,
  Input,
  Button,
  Show,
  useUpdate,
  useGetIdentity,
  Typography,
  Upload,
  Edit,
} from "@pankod/refine";

import { useStrapiUpload, mediaUploadMapper } from "@pankod/refine-strapi-v4";

import ReactMarkdown from "react-markdown";
import ReactMde from "react-mde";

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};

const { Text } = Typography;
import { API_URL, TOKEN_KEY } from "../constants";

export const UserList = () => {
  const { data: identity } = useGetIdentity();

  const [selectedTab, setSelectedTab] = useState("write");

  const { formProps, saveButtonProps, setEditId, queryResult } = useForm({
    action: "edit",
    resource: "users",
  });

  useEffect(() => {
    setEditId("1");
  }),
    [];

  const { ...uploadProps } = useStrapiUpload({
    maxCount: 1,
  });

  const [form] = Form.useForm();

  const { mutate } = useUpdate();

  const updateStripe = async (key) => {
    mutate({
      resource: "users",
      id: identity.id,
      values: { stripe_secret_key: key },
    });
  };

  const onReset = () => {
    form.resetFields();
  };

  const getValueProps = (data, imageUrl) => {
    if (!data) {
      return { fileList: [] };
    }
    return {
      file: data.file,
      fileList:
        data.fileList ??
        (Array.isArray(data) ? data : [...data]).map((item) => {
          const file = {
            name: item?.attributes?.name,
            percent: item?.attributes?.percent,
            size: item?.attributes?.size,
            status: item?.attributes?.status,
            type: item?.attributes?.mime || item?.attributes?.type,
            uid: item?.attributes?.id,
          };

          if (item?.attributes?.url) {
            file.url = `${imageUrl}${item?.attributes?.url}`;
          }

          return file;
        }),
    };
  };

  const updateUserInfo = async (values) => {
    console.log(values, "values");
    mutate({
      resource: "users",
      id: identity.id,
      values: { ...values },
    });
  };

  return (
    <>
      <Edit
        title="User Info"
        saveButtonProps={saveButtonProps}
        pageHeaderProps={{
          backIcon: false,
          extra: false,
        }}
      >
        <Form
          {...formProps}
          layout="vertical"
          onFinish={(values) => {
            const imagI = mediaUploadMapper({
              ...values,
              image: values?.image,
            });

            updateUserInfo(imagI);
          }}
        >
          <Form.Item label="Avatar">
            <Form.Item
              name={["image"]}
              valuePropName="fileList"
              getValueProps={(data) => getValueProps(data, API_URL)}
              noStyle
            >
              <Upload
                name="files"
                action={`${API_URL}/api/upload`}
                headers={{
                  Authorization: `Bearer ${localStorage.getItem(TOKEN_KEY)}`,
                }}
                listType="picture-card"
                {...uploadProps}
              >
                Click to Upload
              </Upload>
            </Form.Item>
          </Form.Item>

          <Form.Item label="Name" name="firstName">
            <Input />
          </Form.Item>
          <Form.Item
            label="Biography"
            name="biography"
            rules={[
              {
                required: true,
              },
            ]}
          >
            <ReactMde
              selectedTab={selectedTab}
              onTabChange={setSelectedTab}
              generateMarkdownPreview={(markdown) =>
                Promise.resolve(<ReactMarkdown>{markdown}</ReactMarkdown>)
              }
            />
          </Form.Item>
        </Form>
      </Edit>

      <Show
        title="Stripe Connect"
        resource="users"
        pageHeaderProps={{
          backIcon: false,
          extra: false,
        }}
      >
        <Text>
          {" "}
          Please make use to copy/paste the correct secret key from stripe
        </Text>

        <Form
          layout="horizontal"
          onFinish={(values) => {
            updateStripe(values.stripe_secret_key);
            onReset();
          }}
          form={form}
        >
          <Space>
            <Form.Item label="Stipe Secret Key" name="stripe_secret_key">
              <Input />
            </Form.Item>
            <Form.Item
              wrapperCol={{ ...layout.wrapperCol, offset: 8, width: "20%" }}
            >
              <Space style={{ float: "right", marginRight: 24 }}>
                <Button type="primary" htmlType="submit">
                  Save
                </Button>
              </Space>
            </Form.Item>
          </Space>
        </Form>
      </Show>
    </>
  );
};
