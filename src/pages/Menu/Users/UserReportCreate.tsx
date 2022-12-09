import {
  Create,
  DateTimeInput,
  ReferenceInput, SaveButton, Toolbar, AutocompleteInput, TabbedForm, FormTab, SimpleForm
} from "react-admin";
import ReportExtInput from "./ReportExtInput";
import {userApi} from "../../../providers/env";
import {useState} from "react";
import TextField from "@mui/material/TextField";
import BrowserUpdatedIcon from '@mui/icons-material/BrowserUpdated';
import {dateParser} from "../../../components/MyDate/CustomDate";

const UserReportCreate = (props: any) => {

  const downloadFile = (reportUserCreate: any ) => {
      userApi.createUserReport({
          "start_timestamp": reportUserCreate.start_timestamp,
          "end_timestamp": reportUserCreate.end_timestamp,
          "ext": reportUserCreate.ext,
          "id": reportUserCreate.id
        })
        .then(data => {
          // Creating the blob file and its url
          const blob = new Blob([JSON.stringify(data.data)]);
          let url = window.URL.createObjectURL(blob);

          // Creating the hyperlink and auto click it to start the download
          let link = document.createElement('a');
          link.href = url;
          link.download = reportUserCreate.id.toString() + '_report.' + reportUserCreate.ext;
          link.click();
          }).catch(reason => {return reason})
  };
  let [email, setEmail] = useState<any|null>('');
  let [role, setRole] = useState<any|null>('');

  return (
    <Create {...props} >
      <SimpleForm onSubmit={downloadFile} toolbar={
        <Toolbar {...props} >
            <SaveButton label="Create report" icon={<BrowserUpdatedIcon/>}/>
        </Toolbar>}>
        <TextField {...props} label="Email" value={email} variant="standard" disabled sx={{mb: 2}}/>
        <TextField {...props} label="Role" value={role} variant="standard" disabled sx={{mb: 2}}/>
        <ReferenceInput source="id" reference="users">
          <AutocompleteInput
            optionText={(record: { email: any; role: any; }) => {
                setRole(`${record.role}`);
                setEmail(`${record.email}`);
                return `${record.email}, ${record.role}`
              }
            }
            optionValue="id"
            label={"Employee"}
            filterToQuery={(searchText: any) => ({ email: `${searchText}`, role: ['manager_base', 'ranker_base'] })}
            sx={{ width: 210 }}
          />
        </ReferenceInput>
        <ReportExtInput {...props} source="ext"/>
        <DateTimeInput source="start_timestamp" parse={dateParser} />
        <DateTimeInput source="end_timestamp" parse={dateParser} />
      </SimpleForm>
    </Create>
  )
};

export default UserReportCreate;
