import React, { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import ReactMde from "react-mde";
import { MinusCircleOutlined, PlusOutlined } from "@ant-design/icons";

import {
  Edit,
  Form,
  Input,
  useForm,
  Select,
  useSelect,
  useGetIdentity,
  Button,
  Space
} from "@pankod/refine";

import {
  useStrapiUpload,
  getValueProps,
  mediaUploadMapper,
} from "@pankod/refine-strapi-v4";

import "react-mde/lib/styles/css/react-mde-all.css";

export const SongEdit = () => {
  const { formProps, saveButtonProps, queryResult } = useForm({
    metaData: { populate: ["album", "Resources", "artist"] },
  });
  const { selectProps } = useSelect({
    resource: "albums",
    optionValue: "id",
    optionLabel: "title",
    defaultValue: "id",
  });

  console.log(queryResult.data?.data , "array");
  const dataMap = queryResult.data?.data?.Resources.map((e) => {
    return {
      __component:e.__component,
      id: e.id,
      price: e.price,
      type: e.type,
      download_link: e.download_link,
    };
  });


  const [selectedTab, setSelectedTab] = useState("write");

  return (
    <Edit saveButtonProps={saveButtonProps}>
      <Form {...formProps} layout="vertical"
      onFinish={(values) => {
        console.log(values,"test")
        return (
            formProps.onFinish &&
            formProps.onFinish({
                    ...values,
                    album: values.album?.data.id,
            }
            )
        );
    }}
      >
        <Form.Item label="Title" name="title">
          <Input />
        </Form.Item>
        <Form.Item label="Duration" name="duration">
          <Input />
        </Form.Item>
        <Form.Item label="Wrtier" name="writer">
          <Input />
        </Form.Item>
        <Form.Item label="Label" name="label">
          <Input />
        </Form.Item>
        <Form.Item label="Year" name="year">
          <Input />
        </Form.Item>
        <Form.Item label="Sample MP3" name="sampleMusic">
          <Input />
        </Form.Item>
        <Form.Item label="Album" name={["album" ,"data","id"]}>
          <Select {...selectProps} />
        </Form.Item>

        <Form.List name="Resources" initialValue={dataMap}>
          {(fields, { add, remove }) => (
            <>
              {fields.map((field) => (
                <Space
                  key={field.key}
                  style={{ display: "flex", marginBottom: 8 }}
                  align="baseline"
                >
            
                  <Form.Item
                    {...field}
                    name={[field.name, "__component"]}
                    fieldKey={[field.fieldKey, "__component"]}
                  >
                  
                    <Select initialValue="__component">
                      <Option value="resources.chord-charts">
                        Chord-Chart
                      </Option>
                      <Option value="resources.file">File</Option>
                      <Option value="resources.multitracks">
                        multitracks
                      </Option>
                    </Select>
                
                  </Form.Item>

      

                  <Form.Item
                    {...field}
                    name={[field.name, "type"]}
                    fieldKey={[field.fieldKey, "type"]}
                  >
                    <Input placeholder="Item Code" />
                  </Form.Item>

                  <Form.Item
                    {...field}
                    name={[field.name, "price"]}
                    fieldKey={[field.fieldKey, "price"]}
                  >
                    <Input placeholder="Price" />
                  </Form.Item>
                  <Form.Item
                    {...field}
                    name={[field.name, "download_link"]}
                    fieldKey={[field.fieldKey, "download_link"]}
                  >
                    <Input placeholder="download_link" />
                  </Form.Item>
                  <MinusCircleOutlined onClick={() => remove(field.name)} />
                </Space>
              ))}
              <Form.Item>
                <Button
                  type="dashed"
                  onClick={() => add()}
                  block
                  icon={<PlusOutlined />}
                >
                  Add item
                </Button>
              </Form.Item>
            </>
          )}
        </Form.List>

        <Form.Item label="Lyric" name="lyric">
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
  );
};
