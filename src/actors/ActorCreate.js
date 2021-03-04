import { Create, NumberInput, required, SimpleForm, TextInput } from "react-admin";
import { Typography } from '@material-ui/core';

export const ActorCreate = (props) => (
    <Create title="Création d'un acteur" {...props}>
        <SimpleForm>
            <Typography variant="h6" gutterBottom>Création d'un acteur</Typography>
            <TextInput source="last_name"  label="Nom" validate={[required()]}/>
            <TextInput source="first_name" label="Prénom" validate={[required()]}/>
            <TextInput source="url_imdb"  label="URL IMDB"/>
            <NumberInput source="code_ia"  label="Code IA" validate={[required()]}/>
        </SimpleForm>
    </Create>
);