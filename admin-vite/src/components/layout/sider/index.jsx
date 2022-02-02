import React, { useState } from "react";

import {
    AntdLayout,
    Menu,
    Grid,
    Icons,
    useTranslate,
    useMenu,
    useLogout,
    useTitle,
    useNavigation,
    useGetIdentity,
} from "@pankod/refine";
import { antLayoutSider, antLayoutSiderMobile } from "./styles.css.js";

const {
    RightOutlined,
    LogoutOutlined,
    UserOutlined
 } = Icons;



export const Sider= () => {
    const { data: user } = useGetIdentity();
    const [collapsed, setCollapsed] = useState(false);
    const { mutate: logout } = useLogout();
    const Title = useTitle();
    const translate = useTranslate();
    const { menuItems, selectedKey } = useMenu();
    const { push } = useNavigation();
    const breakpoint = Grid.useBreakpoint();

    const isMobile = !breakpoint.lg;

    return (
        <AntdLayout.Sider
            collapsible
            collapsed={collapsed}
            onCollapse={(collapsed) => setCollapsed(collapsed)}
            collapsedWidth={isMobile ? 0 : 80}
            breakpoint="lg"
            style={isMobile ? antLayoutSiderMobile : antLayoutSider,{  
            backgroundColor: "#111111",}}
       
        >
            <Title collapsed={collapsed} />
            <Menu
                selectedKeys={[selectedKey]}
                mode="inline"
                onClick={({ key }) => {
                    if (key === "logout") {
                        logout();
                        return;
                    }

                    if (!breakpoint.lg) {
                        setCollapsed(true);
                    }

                    if(key === "user"){
                        push(`/user`);
                        return;
                    }

                    push(key);
                }}
            >
                {menuItems.map(({ icon, label, route }) => {
                    const isSelected = route === selectedKey;
                    return (
                        <Menu.Item
                            style={{
                                fontWeight: isSelected ? "bold" : "normal",
                            }}
                            key={route}
                            icon={icon}
                        >
                            <div
                                style={{
                                    display: "flex",
                                    justifyContent: "space-between",
                                    alignItems: "center",
                                }}
                            >
                                {label}
                                {!collapsed && isSelected && <RightOutlined />}
                            </div>
                        </Menu.Item>
                    );
                })}

                    <Menu.Item key="user" icon={<UserOutlined />}>
                        {"User"}
                    </Menu.Item>

                    <Menu.Item key="logout" icon={<LogoutOutlined />}>
                        {translate("buttons.logout", "Logout")}
                    </Menu.Item>
            </Menu>
        </AntdLayout.Sider>
    );
};
