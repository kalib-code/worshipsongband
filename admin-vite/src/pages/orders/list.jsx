import React from "react";
import { List, Table, useTable, Tag } from "@pankod/refine";

export const OrderList = () => {
  const { tableProps } = useTable({
    metaData: {
      fields: "*",
      populate: ["song", "payment"],
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
          dataIndex={["song", "data", "attributes", "title"]}
          key="title"
          title="Title"
        />
        <Table.Column
          dataIndex={["payment", "data", "attributes", "payment_status"]}
          key="payment_status"
          title="Status"
          render={(value) => {
            return (
              <Tag color={value === "unpaid" ? "Blue" : "Green"}>
                {value === "unpaid" ? "Unpaid" : "Succeeded"}
              </Tag>
            );
          }}
        />

        <Table.Column
          dataIndex={[
            "payment",
            "data",
            "attributes",
            "payment_response",
            "amount_subtotal",
          ]}
          key="payment_status"
          title="Amount"
          render={(value) => {
            return <Tag>{`$${value / 100}`}</Tag>;
          }}
        />
      </Table>
    </List>
  );
};
