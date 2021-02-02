import React, { FC } from "react";
import { Layout, Menu } from "antd";
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
} from "@ant-design/icons";
import "./index.less";
import logo from "../asset/imgs/logo.png";
import widthlogo from "../asset/imgs/width-logo.png";
import routes from "../routes/routes-config";

const { Header, Sider, Content } = Layout;

const MenuList = (props) => {
  const [sKey, setSKey] = React.useState<(string|number)[]>(['/']);
  const [openKeys, setOpenKeys] = React.useState(['']);

  const onOpenChange = keys => {
    const latestOpenKey = keys.find(key => openKeys.indexOf(key) === -1);
    setOpenKeys(latestOpenKey ? [latestOpenKey] : []);
  };
  return (
    <Menu
      mode="inline"
      theme={props.theme}
      inlineCollapsed={true}
      onSelect={(e)=>{setSKey(e.selectedKeys); props.history.push(e.key)}}
      selectedKeys={[props.location.pathname]}
      openKeys={openKeys}
      onOpenChange={onOpenChange}
    >
      {
        routes.map((i, k) => {
          if(i.routes){
            return <Menu.SubMenu key={i.path} icon={i.icon && <i.icon />} title={i.title}>
            {i.title && <Menu.Item key={i.path} icon={i.icon && <i.icon />}>{i.title}</Menu.Item>}
            {
              i.routes.map((_i, _k) => {
                return _i.title && <Menu.Item key={_i.path} icon={_i.icon && <_i.icon />}>{_i.title}</Menu.Item>
              })
            }
          </Menu.SubMenu>
          }
          return i.title && <Menu.Item key={i.path} icon={i.icon && <i.icon />}>{i.title}</Menu.Item>
        })
      }
    </Menu>
  );
};

const BaseLayout: FC<ILayoutProps> = (props) => {
  const [collapsed, setCollapsed] = React.useState<boolean>(false);
  const [theme, setTheme] = React.useState<"dark" | "light">("light");
  return (
    <Layout>
      <Sider theme={theme} trigger={null} collapsible collapsed={collapsed}>
        <div className="base-logo">
          <img alt="" src={collapsed ? logo : widthlogo} />
        </div>
        <MenuList theme={theme} {...props} />
      </Sider>
      <Layout>
        <Header className={`base-header base-theme-${theme}`}>
          <div onClick={() => setCollapsed(!collapsed)}>
            {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
          </div>
        </Header>
        <Content>{props.children || props.content}</Content>
      </Layout>
    </Layout>
  );
};

export default BaseLayout;
