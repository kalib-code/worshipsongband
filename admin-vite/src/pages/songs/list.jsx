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

export const SongList = () => {


  const { tableProps } = useTable({
    metaData: {
      fields: "*",
      populate: ["artist", "album.cover", "user"],
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
               {console.log(data)}
              <Avatar
                shape="square"
                size={{ xs: 24, sm: 32, md: 40, lg: 64, xl: 100, xxl: 150 }}
                src={
                  <Image
                    width={"auto"}
                    src={
                      API_URL +
                      data?.album?.data?.attributes?.cover?.data?.attributes?.formats?.large?.url
                    }
                  />
                }
              />
            </Space>
          )}
        />
        <Table.Column dataIndex="title" key="title" title="Title" />

        <Table.Column
          dataIndex={["album", "data", "attributes", "title"]}
          key="album"
          title="Album"
          sort
        />

        <Table.Column
          dataIndex="duration"
          key="duration"
          title="Duration"
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
