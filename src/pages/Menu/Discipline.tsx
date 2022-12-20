import {
	ArrayInput,
	AutocompleteInput,
	ChipField,
	Create,
	Datagrid,
	List, ReferenceField,
	ReferenceInput,
	ReferenceManyField, SimpleFormIterator, SingleFieldList,
	TextField
} from 'react-admin';
import { Edit, SimpleForm, TextInput } from 'react-admin';
import {ListItem} from "@material-ui/core";
import {CreateCampusOption} from "./Campus";

export const AssessmentInput = (props: any) => (
  <ReferenceInput {...props} source="assessment" reference="classifiers/type_assessment" >
      <AutocompleteInput source="id" optionText="name" label='Assessment' />
  </ReferenceInput>
);

export const DisciplineTypeInput = (props: any) => (
  <ReferenceInput {...props} source="type" reference="classifiers/discipline_type" >
      <AutocompleteInput source="id" optionText="name" label='Discipline Type' />
  </ReferenceInput>
);


export const PanelTeacherTypedDiscipline = (props: any) => (
	<ListItem >
		<ReferenceManyField source="id" reference="teachers" target="typed_discipline_id">
			<Datagrid bulkActionButtons={false}>
				<ReferenceField source="user_id"
				                reference="users/role/teachers"
				                label={"Teacher"}
				                link={(record, reference) => `/users/${record.user_id}/show`}
				>
					<TextField source="email" />
				</ReferenceField>
			</Datagrid>
		</ReferenceManyField>
	
	</ListItem>
);

export const DisciplineList = () => (
  <List>
    <Datagrid rowClick="edit" expand={PanelTeacherTypedDiscipline}>
      <ReferenceManyField  source="id"
                     reference="typed_disciplines"
                     target="discipline_id"
      >
        <SingleFieldList linkType="show">
            <ChipField source="type"/>
        </SingleFieldList>
      </ReferenceManyField>
      <TextField source="title" />
      <ChipField source="assessment" />
    </Datagrid>
  </List>
);

export const DisciplineEdit = () => (
  <Edit>
    <SimpleForm>
      <TextInput source="title" />
      <AssessmentInput source="assessment" />
    </SimpleForm>
  </Edit>
);



export const DisciplineCreate = () => (
  <Create>
    <SimpleForm>
      <TextInput source="title" />
      <AssessmentInput source="assessment" />
	    <ArrayInput source="items">
          <SimpleFormIterator inline>
	            <ReferenceInput source="type" reference="classifiers/discipline_type" >
						      <AutocompleteInput source="id" optionText="name" label='Discipline Type' />
						  </ReferenceInput>
              <ReferenceInput source="campus_id" reference="campuses">
								<AutocompleteInput
									source="id"
									optionValue="id"
									optionText={(record: { id: any; }) => `${record.id}`}
									filterToQuery={(searchText: any) => ({ id: `${searchText}` })}
									create={<CreateCampusOption/>}
								/>
							</ReferenceInput>
	          <TextInput source="classroom_number" />
          </SimpleFormIterator>
      </ArrayInput>
    </SimpleForm>
  </Create>
);

