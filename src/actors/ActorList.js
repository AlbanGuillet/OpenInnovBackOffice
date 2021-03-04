import { Datagrid, DeleteButton, EditButton, List, NumberField, TextField } from "react-admin";

export const ActorList = (props) => (
    <List {...props} title='Liste des acteurs'>
        <Datagrid>
            <TextField source="id" label="ID"/>
            <TextField source="last_name"  label="Nom"/>
            <TextField source="first_name" label="Prénom"/>
            <TextField source="url_imdb"  label="URL IMDB"/>
            <NumberField source="code_ia"  label="Code IA"/>
            <EditButton label="Modifier"/>
            <DeleteButton label="Supprimer"/>
        </Datagrid>
    </List>
  );