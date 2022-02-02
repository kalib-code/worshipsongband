import {
    AntdLayout,
    Space,
    Icons,
    Avatar,
    Typography,
useApiUrl,
    useGetIdentity,
} from "@pankod/refine";

import { API_URL } from "../../../constants";
const { DownOutlined } = Icons;
const { Text } = Typography;


export const Header= () => {
    const { data: user } = useGetIdentity();
    return (
        <AntdLayout.Header
            style={{
                display: "flex",
                justifyContent: "flex-end",
                alignItems: "center",
                padding: "0px 24px",
                height: "64px",
                backgroundColor: "#FFF",
            }}
        >
            <Space style={{ marginLeft: "8px" }}>
                {user?.username && (
                    <Text ellipsis strong>
                    {user.username}
                    </Text>
                )}
                {user?.image && <Avatar src={`${API_URL}${user?.image[0]?.formats?.thumbnail?.url}`} />}
            </Space>
        </AntdLayout.Header>
    );
};
