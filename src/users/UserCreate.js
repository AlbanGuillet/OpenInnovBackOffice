import { Create, DateInput, email, PasswordInput, required, SimpleForm, TextInput } from "react-admin";
import { Typography } from '@material-ui/core';

export const UserCreate = (props) => (
    <Create title="Création d'un utilisateur" {...props}>
        <SimpleForm>
            <Typography variant="h6" gutterBottom>Création d'un utilisateur</Typography>
            <TextInput source="pseudo"  label="Identifiant" validate={[required()]}/>
            <TextInput source="full_name"  label="Nom complet" validate={[required()]}/>
            <TextInput source="address" label="Adresse"/>
            <TextInput source="mail"  label="Email" type="email" validate={[email(), required()]}/>
            <DateInput source="birthdate"  label="Date de naissance" validate={[required()]}/>
            <PasswordInput source="password"  label="Mot de passe" validate={[required()]}/>
        </SimpleForm>
    </Create>
);