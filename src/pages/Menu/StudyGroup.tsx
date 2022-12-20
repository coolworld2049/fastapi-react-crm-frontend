import {
  AutocompleteInput,
  ChipField,
  Create,
  Datagrid,
  List,
  ReferenceArrayInput,
  ReferenceField,
  ReferenceManyField,
  ReferenceOneField, SelectArrayInput, SingleFieldList,
  TextField
} from 'react-admin';
import { Edit, ReferenceInput, SimpleForm } from 'react-admin';
import {ListItem, } from "@material-ui/core";
import React from "react";
import {StudyGroupCipherOption} from "./SgcOption";

export const PanelStudyGroupTypedDisciplineCampus = (props: any) => (
  <Datagrid bulkActionButtons={false}>
    <ReferenceField label="Detailed Discipline" source="discipline_id" reference="disciplines"
                    link={(record, reference) => `/typed_disciplines/${record.id}/show`}>
      <TextField source="title"/>
    </ReferenceField>
    <ChipField source="type"/>
    <TextField source="classroom_number"/>
    <TextField source="campus_id"/>
  </Datagrid>
);


export const PanelStudyGroupStudent = (props: any) => (
  <ReferenceManyField  source="study_group_cipher_id"
                     reference="students"
                     target="study_group_cipher_id">
    <Datagrid bulkActionButtons={false} >
      <ReferenceField source="id"
                      reference="users/role/students"
                      link={(record, reference) => `/users/${record.id}/show`}
                      label="Students"
      >
        <TextField source="email" />
        <ReferenceOneField reference="users/role/students" target="id">
          <ChipField source="role" />
        </ReferenceOneField>
      </ReferenceField>
    </Datagrid>
    <ListItem >
      <ReferenceManyField source="study_group_cipher_id"
                        reference="study_group_disciplines"
                        target="study_group_cipher_id"
    >
      <ListItem>
        <SingleFieldList linkType="show">
            <ChipField source="title" />
        </SingleFieldList>
      </ListItem>
    </ReferenceManyField>
    </ListItem>
    
  </ReferenceManyField>
);

export const StudyGroupList = () => (
    <List>
        <Datagrid rowClick="edit" expand={PanelStudyGroupStudent} expandSingle>
            <ReferenceField source="id" reference="study_group_disciplines">
              <TextField source="study_group_cipher_id" />
            </ReferenceField>
        </Datagrid>
    </List>
);


export const StudyGroupEdit = () => (
    <Edit>
        <SimpleForm>
            <ReferenceInput source="study_group_cipher_id" reference="study_group_ciphers">
              <AutocompleteInput source="id" optionText="id" />
            </ReferenceInput>
            <ReferenceInput source="discipline_id" reference="disciplines">
              <AutocompleteInput source="id" optionText="title" />
            </ReferenceInput>
        </SimpleForm>
    </Edit>
);


export const StudyGroupCreate = () => {
  
  return (
    <Create>
      <SimpleForm>
        <ReferenceInput source="study_group_cipher_id" reference="study_group_ciphers">
          <AutocompleteInput
                source="id"
                optionValue="id"
                optionText={(record: { id: any; }) => `${record.id}`}
                filterToQuery={(searchText: any) => ({id: `${searchText}`})}
                create={<StudyGroupCipherOption/>}
              />
        </ReferenceInput>
        <ReferenceArrayInput source="discipline_id" reference="disciplines">
          <SelectArrayInput source="discipline_id" optionText="title" optionValue="id"/>
        </ReferenceArrayInput>
      </SimpleForm>
    </Create>
  )
};
