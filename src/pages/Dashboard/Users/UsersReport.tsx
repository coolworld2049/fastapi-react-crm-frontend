import {
  Create,
  DateTimeInput,
  SimpleForm,
  AutocompleteInput, ReferenceInput, Show, FileField
} from "react-admin";
import ReportExtInput from "../Tasks/ReportExtInput";

export const UserReportShow = (props: any) => {
  return (
    <Show {...props}>
      <FileField {...props}>
        <div>
          <a href="http://localhost:8080/users/reports/" title="Presentation">Presentation</a>
        </div>
      </FileField>
    </Show>
  )
};

export const UserReportCreate = (props: any) => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceInput source="id" reference="users">
          <AutocompleteInput optionText="email" optionValue="id"/>
        </ReferenceInput>
        <ReportExtInput source="ext"/>
        <DateTimeInput source="start_timestamp" />
        <DateTimeInput source="end_timestamp"/>
      </SimpleForm>
    </Create>
  )
};

export default UserReportCreate;
