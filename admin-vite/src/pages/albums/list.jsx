import React from "react";
import {
  List,
  Table,
  useTable,
  Space,
  EditButton,
  DeleteButton,
  Image,
  Avatar,

} from "@pankod/refine";

import { API_URL } from "../../constants";

export const AlbumList = () => {


  const { tableProps } = useTable({
    metaData: {
      fields: "*",
      populate: ["artist" ,"cover"],
    },
  });


  return (
    <List>
      <Table
        {...tableProps}
        rowKey="id"
        pagination={{
          ...tableProps.pagination,
          showSizeChanger: true,
        }}
      >
        <Table.Column dataIndex="id" key="id" title="ID" />

        <Table.Column
          dataIndex={[
            "album",
            "data",
            "attributes",
            "cover",
            "data",
            "attributes",
            "url",
            "formats",
            "thumbnail",
            "url",
          ]}
          key="cover"
          title="Cover"
          render={(_, data) => (
            
            <Space>
              <Avatar
                shape="square"
                size={{ xs: 24, sm: 32, md: 40, lg: 64, xl: 100, xxl: 150 }}
                src={
                  <Image
                    width={"auto"}
                    src={
                      API_URL +
                      data?.cover?.data?.attributes?.formats?.large?.url
                    }
                  />
                }
              />
            </Space>
          )}
        />
        <Table.Column dataIndex="title" key="title" title="Title" />

        <Table.Column
          dataIndex="year"
          key="year"
          title="Year"
          sort
        />
         <Table.Column
          title="Actions"
          dataIndex="actions"
          render={(_, record) => (
            <Space>
              <EditButton hideText size="small" recordItemId={record.id} />
              <DeleteButton hideText size="small" recordItemId={record.id} />
            </Space>
          )}
        />

      </Table>
    </List>
  );
};
