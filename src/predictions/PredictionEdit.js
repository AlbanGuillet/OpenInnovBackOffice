import { BooleanInput, Edit, ReferenceInput, SelectInput, SimpleForm, TextField, TextInput } from "react-admin";
import { Typography } from '@material-ui/core';

export const PredictionEdit = (props) => (
    <Edit title="Modification d'une prédiction" {...props}>
        <SimpleForm>
            <Typography variant="h6" gutterBottom>Modification d'une prédiction</Typography>
            <TextField source="id" label="ID"/>
            <TextInput source="path" label="Chemin"/>
            <BooleanInput source="pending" label="En attente"/>
            <BooleanInput source="validation" label="En validation"/>
            <ReferenceInput source="user_id" label="Utilisateur" reference="users">
                <SelectInput optionText="pseudo" />
            </ReferenceInput>

            <ReferenceInput source="actor_id" label="Acteur" reference="actors">
                <SelectInput optionText={actor => `${actor.first_name} ${actor.last_name}`} />
            </ReferenceInput>

        </SimpleForm>
    </Edit>
);