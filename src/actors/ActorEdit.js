import { Edit, NumberInput, required, SimpleForm, TextField, TextInput } from "react-admin";
import { Typography } from '@material-ui/core';

export const ActorEdit = (props) => (
    <Edit title="Modification d'un acteur" {...props}>
        <SimpleForm>
            <Typography variant="h6" gutterBottom>Modification d'un acteur</Typography>
            <TextField source="id" label="ID"/>
            <TextInput source="last_name"  label="Nom" validate={[required()]}/>
            <TextInput source="first_name" label="Prénom" validate={[required()]}/>
            <TextInput source="url_imdb"  label="URL IMDB"/>
            <NumberInput source="code_ia"  label="Code IA" validate={[required()]}/>
        </SimpleForm>
    </Edit>
);