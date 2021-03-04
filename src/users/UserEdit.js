import { DateInput, Edit, email, PasswordInput, required, SimpleForm, TextField, TextInput } from "react-admin";
import { Typography } from '@material-ui/core';

export const UserEdit = (props) => (
    <Edit title="Modification d'un utilisateur" {...props}>
        <SimpleForm>
            <Typography variant="h6" gutterBottom>Modification d'un utilisateur</Typography>
            <TextField source="id" label="ID"/>
            <TextInput source="pseudo"  label="Identifiant" validate={[required()]}/>
            <TextInput source="full_name"  label="Nom complet" validate={[required()]}/>
            <TextInput source="address" label="Adresse"/>
            <TextInput source="mail"  label="Email" type="email" validate={[email(), required()]}/>
            <DateInput source="birthdate"  label="Date de naissance" validate={[required()]}/>
            <PasswordInput source="password"  label="Mot de passe" validate={[required()]}/>
        </SimpleForm>
    </Edit>
);