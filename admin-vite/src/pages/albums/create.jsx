import React from "react";

import {
  Create,
  Form,
  Input,
  Upload,
  useForm
} from "@pankod/refine";


import {
    useStrapiUpload,
    getValueProps,
    mediaUploadMapper,
} from "@pankod/refine-strapi-v4";


import {API_URL , TOKEN_KEY} from "../../constants";

export const AlbumCreate = () => {
  
    const { formProps, saveButtonProps } = useForm({
        metaData: { populate: ["cover"] },
      });

      const { ...uploadProps } = useStrapiUpload({
        maxCount: 1,
    });


  return (
    <Create saveButtonProps={saveButtonProps}>
      <Form {...formProps} layout="vertical"
       onFinish={(values) => {
        return (
            formProps.onFinish &&
            formProps.onFinish(
                mediaUploadMapper({
                    ...values,
                    cover: values.cover?.data,
                }),
            )
        );
    }}
      >
    <Form.Item label="Title" name="title">
          <Input />
        </Form.Item>
        <Form.Item label="Year" name="year">
          <Input />
        </Form.Item>
       
        <Form.Item label="Cover">
                    <Form.Item
                        name={["cover", "data"]}
                        valuePropName="fileList"
                        getValueProps={(data) => getValueProps(data, API_URL)}

                        noStyle
                    >
                        <Upload.Dragger
                            name="files"
                            action={`${API_URL}/api/upload`}
                            headers={{
                                Authorization: `Bearer ${localStorage.getItem(
                                    TOKEN_KEY,
                                )}`,
                            }}
                            listType="picture"
                            {...uploadProps}
                        >
                            <p className="ant-upload-text">
                                Drag & drop a file in this area
                            </p>
                        </Upload.Dragger>
                    </Form.Item>
        </Form.Item>
      </Form>
    </Create>
  );
};
