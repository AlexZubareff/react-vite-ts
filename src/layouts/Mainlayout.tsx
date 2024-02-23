import { Layout, Menu } from "antd";
import { Outlet } from "react-router-dom";

const { Header, Content, Footer } = Layout;

const items = new Array(5).fill(null).map((_, index) => ({
  key: index + 1,
  label: `nav ${index + 1}`,
}));

export default function MainLayout(): JSX.Element {
  return (
    <Layout style={{ width: "1400px", minHeight: "100vh" }}>
      <Header style={{ display: "flex", alignItems: "center" }}>
        <div className="demo-logo" />
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={["2"]}
          items={items}
          style={{ flex: 1, minWidth: 0 }}
        />
      </Header>
      <Content style={{ padding: "2rem 2rem" }}>
        <Outlet />
      </Content>
      <Footer style={{ textAlign: "center" }}>
        AlexZ Design ©{new Date().getFullYear()} Created by Ant UED
      </Footer>
    </Layout>
  );
}
