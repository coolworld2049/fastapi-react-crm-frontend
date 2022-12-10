import {Menu} from "react-admin";

export const MyMenu = () => (
    <Menu>
        <Menu.DashboardItem />
        <Menu.Item to="posts" />
    </Menu>
);
