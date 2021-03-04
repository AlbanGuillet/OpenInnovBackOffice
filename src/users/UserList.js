import { Datagrid, DateField, DeleteButton, EditButton, EmailField, List, TextField } from "react-admin";

export const UserList = (props) => (
    <List {...props} title='Liste des utilisateurs'>
        <Datagrid>
            <TextField source="id" label="ID"/>
            <TextField source="pseudo"  label="Identifiant"/>
            <TextField source="full_name" label="Nome complet"/>
            <TextField source="address"  label="Adresse"/>
            <EmailField source="mail"  label="Email"/>
            <DateField source="birthdate"  label="Date de naissance"/>
            <EditButton label="Modifier"/>
            <DeleteButton label="Supprimer"/>
        </Datagrid>
    </List>
  );