import {
  Create,
  Datagrid,
  Edit,
  EditButton,
  List,
  SimpleForm,
  TextField,
  TextInput,
  DateTimeInput, DateField, ChipField, SimpleShowLayout, Show, FilterLiveSearch, UrlField
} from "react-admin";
import CompanySizeInput from "./CompanySizeInput";
import {dateParser} from "../../../components/MyDate/CustomDate";


export const CompanyShow = (props: any) => {

  return (
  <Show {...props}>
    <SimpleShowLayout>
      <TextField source="id"/>
      <TextField source="name"/>
      <ChipField source="sector"/>
      <ChipField source="size"/>
      <TextField source="city"/>
      <TextField source="address"/>
      <UrlField source="website"/>
      <DateField source="create_date" showTime={true}/>
    </SimpleShowLayout>
  </Show>
)};

export const CompanyList = (props: any) => {
  const companyFilters = [
    <FilterLiveSearch source="name" label={"Name"} />,
    <FilterLiveSearch source="sector" label={"Sector"} />,
    <CompanySizeInput {...props} source="size" label={"Size"} />,
    <FilterLiveSearch source="city" label={"City"} />,
    <FilterLiveSearch source="address" label={"Address"} />,
    <FilterLiveSearch source="website" label={"Website"} />,
    <DateTimeInput source="create_date" label={"Create date"} parse={dateParser} />,
  ];
  return (
  <List {...props} filters={companyFilters}>
    <Datagrid rowClick="show"  >
      <TextField source="id"/>
      <TextField source="name"/>
      <ChipField source="sector"/>
      <ChipField source="size"/>
      <TextField source="city"/>
      <TextField source="address"/>
      <UrlField source="website"/>
      <DateField source="create_date" showTime={true}/>
      <EditButton/>
    </Datagrid>
  </List>
)};

export const CompanyEdit = (props: any) => (
    <Edit {...props} redirect="list">
      <SimpleForm>
        <TextInput source="id" disabled/>
        <TextInput source="name" />
        <TextInput source="sector"/>
        <CompanySizeInput {...props} source="size"/>
        <TextInput source="city" />
        <TextInput source="address" />
        <TextInput source="website" />
      </SimpleForm>
    </Edit>
);

export const CompanyCreate = (props: any) => {
  return (
    <Create {...props} redirect="list">
      <SimpleForm>
        <TextInput source="name" />
        <TextInput source="sector"/>
        <CompanySizeInput {...props} source="size"/>
        <TextInput source="city" />
        <TextInput source="address" />
        <TextInput source="website" />
      </SimpleForm>
    </Create>
  );
}
