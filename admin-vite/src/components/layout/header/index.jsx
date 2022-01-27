import {
    AntdLayout,
    Space,
    Icons,
    Avatar,
    Typography,

    useGetIdentity,
} from "@pankod/refine";


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
                {user?.name && (
                    <Text ellipsis strong>
                    {user.name}
                    </Text>
                )}
                {user?.avatar && <Avatar src={user?.avatar} alt={user?.name} />}
            </Space>
        </AntdLayout.Header>
    );
};
