import {Admin, CustomRoutes, ListGuesser, Resource, ShowGuesser} from "react-admin";
import {Route} from "react-router";
import MyLayout from "./components/AdminLayout";
import Dashboard from "./pages/Dashboard/Dashboard";
import {TaskCreate, TaskEdit, TaskList} from "./pages/Menu/Task";
import LoginPage from "./pages/Login";
import {ProfileEdit} from "./pages/Profile/ProfileEdit";
import {UserCreate, UserEdit, UserList} from "./pages/Menu/Users";
import authProvider from "./providers/authProvider";
import AssignmentIcon from '@mui/icons-material/Assignment';
import PersonIcon from "@mui/icons-material/Person";
import {dataProvider} from "./providers/dataProvider";
import Moment from 'react-moment';
import {StudentEdit, StudentList} from "./pages/Menu/Student";
import {TeacherEdit, TeacherList} from "./pages/Menu/Teacher";
import {StudyGroupCreate, StudyGroupEdit, StudyGroupList} from "./pages/Menu/StudyGroup";
import {TypedDisciplineEdit, TypedDisciplineList} from "./pages/Menu/TypedDiscipline";
import {TaskStudentEdit, TaskStudentList} from "./pages/Menu/TaskStudent";
import {TaskStoreEdit, TaskStoreList} from "./pages/Menu/TaskStore";
import {DisciplineCreate, DisciplineEdit, DisciplineList} from "./pages/Menu/Discipline";
import SchoolIcon from '@mui/icons-material/School';
import GroupIcon from '@mui/icons-material/Group';
import BusinessIcon from '@mui/icons-material/Business';
import CloudIcon from '@mui/icons-material/Cloud';
import WorkIcon from '@mui/icons-material/Work';
import {StudyGroupCipherCreate, StudyGroupCipherEdit, StudyGroupCipherList} from "./pages/Menu/StudyGroupCipher";

// Sets the moment instance to use.
Moment.globalMoment = require('moment');

// Set the locale for every react-moment instance to French.
Moment.globalLocale = 'en';

// Set the output format for every react-moment instance.
Moment.globalFormat = 'D MMM YYYY';

// Set the timezone for every instance.
Moment.globalTimezone = 'Europe/Moscow';

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
        options={{ label: "User" }}
        name="users"
        list={UserList}
        edit={UserEdit}
        create={UserCreate}
        show={ShowGuesser}
        icon={PersonIcon}
      />
      <Resource
        options={{ label: "Student" }}
        name="students"
        list={StudentList}
        edit={StudentEdit}
        show={ShowGuesser}
        icon={SchoolIcon}
      />
      <Resource
        options={{ label: "Teacher" }}
        name="teachers"
        list={TeacherList}
        edit={TeacherEdit}
        show={ShowGuesser}
        icon={SchoolIcon}
      />
      <Resource
        options={{ label: "Study Group" }}
        name="study_groups"
        list={StudyGroupList}
        edit={StudyGroupEdit}
        create={StudyGroupCreate}
        show={ShowGuesser}
        icon={GroupIcon}
      />
      <Resource
        options={{ label: "Study Group Cipher" }}
        name="study_group_ciphers"
        list={StudyGroupCipherList}
        edit={StudyGroupCipherEdit}
        create={StudyGroupCipherCreate}
        show={ShowGuesser}
        icon={GroupIcon}
      />
      <Resource
        options={{ label: "Campus" }}
        name="campuses"
        list={ListGuesser}
        show={ShowGuesser}
        icon={BusinessIcon}
      />
      <Resource
        options={{ label: "Discipline" }}
        name="disciplines"
        list={DisciplineList}
        edit={DisciplineEdit}
        create={DisciplineCreate}
        show={ShowGuesser}
        icon={WorkIcon}
      />
      <Resource
        options={{ label: "Teacher Discipline" }}
        name="typed_disciplines"
        list={TypedDisciplineList}
        edit={TypedDisciplineEdit}
        show={ShowGuesser}
        icon={WorkIcon}
      />
      <Resource
        options={{ label: "Task" }}
        name="tasks"
        list={TaskList}
        edit={TaskEdit}
        create={TaskCreate}
        show={ShowGuesser}
        icon={AssignmentIcon}
      />
      <Resource
        options={{ label: "Student Task" }}
        name="task_students"
        list={TaskStudentList}
        edit={TaskStudentEdit}
        show={ShowGuesser}
        icon={AssignmentIcon}
      />
      <Resource
        options={{ label: "Task Store" }}
        name="task_stores"
        list={TaskStoreList}
        edit={TaskStoreEdit}
        show={ShowGuesser}
        icon={CloudIcon}
      />
    </Admin>
  );
};

export default App;
