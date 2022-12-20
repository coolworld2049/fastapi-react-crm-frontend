import {
	AutocompleteInput, ChipField, Datagrid, List, ReferenceField, SimpleShowLayout, TextField
} from 'react-admin';
import { Edit, ReferenceInput, SimpleForm } from 'react-admin';


/*
export const PanelTeacherDiscipline = (props: any) => (
  <ReferenceManyField
    source="user_id"
    reference="typed_disciplines"
    target="user_id"
  >
    <Datagrid bulkActionButtons={false} >
      <ReferenceField source="discipline_id"
                      label={"Detailed Disciplines"}
                      reference="typed_disciplines"
                      link={(record, reference) => `/typed_disciplines/${record.discipline_id}/show`}
      >
        <ReferenceField source="discipline_id"
                      reference="disciplines"
                      link={(record, reference) => `/typed_disciplines/${record.id}/show`}
        >
          <TextField source="title" />
        </ReferenceField>
        <ChipField source="type" />
        <ChipField source="classroom_number" />
        <ChipField source="campus_id" />
      </ReferenceField>
    </Datagrid>
  </ReferenceManyField>
);
*/

export const TeacherList = () => (
	<List>
		<Datagrid rowClick="show"
		>
			<TextField source="id" />
			<ReferenceField source="user_id"
			                reference="users/role/teachers"
			                link={(record, reference) => `/users/${record.user_id}/show`}
			>
				<TextField source="email" />
				<ChipField source="role" />
			</ReferenceField>
			<ReferenceField source="typed_discipline_id" reference="disciplines">
				<TextField source="title" />
			</ReferenceField>
		</Datagrid>
	</List>
);


export const TeacherEdit = () => (
	<Edit>
		<SimpleShowLayout>
			<TextField source="id" label={"Teacher"} />
		</SimpleShowLayout>
		<SimpleForm>
			<ReferenceInput source="user_id" reference="users/role/teachers">
				<TextField source="email" />
			</ReferenceInput>
			<ReferenceInput source="typed_discipline_id" reference="disciplines">
				<AutocompleteInput source="title" optionText="title" optionValue="id"/>
			</ReferenceInput>
		</SimpleForm>
	</Edit>
);
