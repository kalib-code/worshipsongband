import React from "react";

import { AntdLayout, Grid } from "@pankod/refine";

export const Layout = ({
    children,
    Sider,
    Header,
    Footer,
    OffLayoutArea,
}) => {
    const breakpoint = Grid.useBreakpoint();
    return (
        <AntdLayout style={{ minHeight: "100vh", flexDirection: "row" }}>
            <Sider />
            <AntdLayout>
                <Header />
                <AntdLayout.Content>
                    <div
                        style={{
                            padding: breakpoint.sm ? 24 : 12,
                            minHeight: 360,
                        }}
                    >
                        {children}
                    </div>
                    <OffLayoutArea />
                </AntdLayout.Content>
                <Footer />
            </AntdLayout>
        </AntdLayout>
    );
};
