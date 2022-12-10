import {Admin, CustomRoutes, Resource, ShowGuesser} from "react-admin";
import {Route} from "react-router";
import MyLayout from "./components/AdminLayout";
import Dashboard from "./pages/Dashboard/Dashboard";
import {TaskCreate, TaskEdit, TaskList, TaskShow} from "./pages/Menu/Tasks/Task";
import LoginPage from "./pages/Login";
import {ProfileEdit} from "./pages/Profile/ProfileEdit";
import {UserCreate, UserEdit, UserList} from "./pages/Menu/Users/Users";
import authProvider from "./providers/authProvider";
import AssignmentIcon from '@mui/icons-material/Assignment';
import PersonIcon from "@mui/icons-material/Person";
import {dataProvider} from "./providers/dataProvider";
import {CompanyCreate, CompanyEdit, CompanyList, CompanyShow} from "./pages/Menu/Company/Company";
import BusinessIcon from '@mui/icons-material/Business';
import UserReportCreate from "./pages/Menu/Users/UserReportCreate";
import {ClientList, ClientShow} from "./pages/Menu/Clients/Client";
import Moment from 'react-moment';

// Sets the moment instance to use.
Moment.globalMoment = require('moment');

// Set the locale for every react-moment instance to French.
Moment.globalLocale = 'fr';

// Set the output format for every react-moment instance.
Moment.globalFormat = 'D MMM YYYY';

// Set the timezone for every instance.
Moment.globalTimezone = 'America/Los_Angeles';

// Set the output timezone for local for every instance.
Moment.globalLocal = true;

// Use a <span> tag for every react-moment instance.
Moment.globalElement = 'span';

// Upper case all rendered dates.
Moment.globalFilter = (d: string) => {
    return d.toUpperCase();
};

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
        show={ShowGuesser}
        icon={PersonIcon}
      />
      <Resource
        options={{ label: "Clients" }}
        name="users/role/client_base"
        list={ClientList}
        show={ClientShow}
        icon={PersonIcon}
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
      <Resource
        options={{ label: "Reports" }}
        name="users/report"
        list={UserReportCreate}
        create={UserReportCreate}
      />
    </Admin>
  );
};

export default App;
