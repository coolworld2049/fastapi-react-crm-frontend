import simpleRestProvider from "ra-data-simple-rest";
import { Admin, fetchUtils, Resource, CustomRoutes } from "react-admin";
import { Route } from "react-router";
import MyLayout from "./components/AdminLayout";
import Dashboard from "./pages/Dashboard";
import { TaskCreate, TaskEdit, TaskList} from "./pages/Task";
import LoginPage from "./pages/Login";
import { ProfileEdit } from "./pages/ProfileEdit";
import { UserEdit, UserList } from "./pages/Users";
import authProvider from "./providers/authProvider";
import { basePath } from "./providers/env";
import PostIcon from "@mui/icons-material/PostAdd";
import PersonIcon from "@mui/icons-material/Person";

const httpClient = (url: string, options: any = {}) => {
  options.user = {
    authenticated: true,
    token: `Bearer ${localStorage.getItem("token")}`,
  };
  return fetchUtils.fetchJson(url, options);
};

const dataProvider = simpleRestProvider(`${basePath}/api/v1`, httpClient);

const App = () => {
  return (
    <Admin
      dataProvider={dataProvider}
      authProvider={authProvider}
      loginPage={LoginPage}
      layout={MyLayout}
      dashboard={Dashboard}
    >
      <CustomRoutes>
        <Route path="/my-profile" element={<ProfileEdit />} />
      </CustomRoutes>
        <Resource
          options={{ label: "Users" }}
          name="users"
          list={UserList}
          edit={UserEdit}
          icon={PersonIcon}
        />
        <Resource
          name="tasks"
          options={{ label: "Tasks" }}
          list={TaskList}
          edit={TaskEdit}
          create={TaskCreate}
          icon={PostIcon}
        />
    </Admin>
  );
};

export default App;
