import {Admin, CustomRoutes, Resource} from "react-admin";
import {Route} from "react-router";
import MyLayout from "./components/AdminLayout";
import Dashboard from "./pages/Dashboard/Dashboard";
import {TaskCreate, TaskEdit, TaskList, TaskShow} from "./pages/Dashboard/Tasks/Task";
import LoginPage from "./pages/Login";
import {ProfileEdit} from "./pages/Profile/ProfileEdit";
import {UserCreate, UserEdit, UserList, UserShow} from "./pages/Dashboard/Users/Users";
import authProvider from "./providers/authProvider";
import AssignmentIcon from '@mui/icons-material/Assignment';
import PersonIcon from "@mui/icons-material/Person";
import {dataProvider} from "./providers/dataProvider";
import {CompanyCreate, CompanyEdit, CompanyList, CompanyShow} from "./pages/Dashboard/Company/Company";
import BusinessIcon from '@mui/icons-material/Business';
import UserReportCreate from "./pages/Dashboard/Users/UsersReport";
import {ClientEdit, ClientList, ClientShow} from "./pages/Dashboard/Clients/Client";

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
        create={UserCreate}
        show={UserShow}
        icon={PersonIcon}
      />
      <Resource
        options={{ label: "Clients" }}
        name="users/role/client_base"
        list={ClientList}
        edit={ClientEdit}
        show={ClientShow}
        icon={PersonIcon}
      />
      <Resource
        options={{ label: "Reports" }}
        name="users/report"
        list={UserReportCreate}
        create={UserReportCreate}
      />
      <Resource
        name="tasks"
        options={{ label: "Tasks" }}
        list={TaskList}
        edit={TaskEdit}
        create={TaskCreate}
        show={TaskShow}
        icon={AssignmentIcon}
      />
      <Resource
        name="companies"
        options={{ label: "Companies" }}
        list={CompanyList}
        edit={CompanyEdit}
        create={CompanyCreate}
        show={CompanyShow}
        icon={BusinessIcon}
      />
    </Admin>
  );
};

export default App;
