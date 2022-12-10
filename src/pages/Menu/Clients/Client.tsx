import {
  Datagrid, List,
  TextField,
  ChipField, ReferenceField, Show, SimpleShowLayout, AutocompleteInput, ReferenceInput
} from "react-admin";
import ClientTypeInput from "./ClientTypeInput";

export const ClientShow = (props: any) => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <ReferenceField source="id" reference="users/role/client_base">
          <TextField source="email"/>
        </ReferenceField>
        <ReferenceField source="company_id" reference="companies">
          <TextField source="name"/>
        </ReferenceField>
        <ChipField source="type"/>
      </SimpleShowLayout>
    </Show>
  )
};

export const filterToQueryUser = (searchText: any) => ({ email: `${searchText}` });
export const filterToQueryCompany = (searchText: any) => ({ name: `${searchText}` });

export const ClientList = (props: any) => {
  const clientFilters = [
    <ReferenceInput source="id" reference="users/role/client_base">
      <AutocompleteInput source="email" label={"Email"} filterToQuery={filterToQueryUser} />
    </ReferenceInput>,
    <ReferenceInput source="company_id" reference="companies">
      <AutocompleteInput source="name" label={"Name"} filterToQuery={filterToQueryCompany} />
    </ReferenceInput>,
    <ClientTypeInput {...props} source="type" label={"Client type"} />
  ];
  return (
    <List filters={clientFilters}>
      <Datagrid>
        <ReferenceField source="id" reference="users/role/client_base" link="show">
          <TextField source="email"/>
        </ReferenceField>
        <ReferenceField source="company_id" reference="companies">
          <TextField source="name"/>
        </ReferenceField>
        <ChipField source="type"/>
      </Datagrid>
    </List>
  )
};

