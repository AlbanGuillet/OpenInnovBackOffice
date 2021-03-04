import { BooleanField, Datagrid, DeleteButton, EditButton, FunctionField, List, ReferenceField, TextField } from "react-admin";

export const PredictionList = (props) => (
    <List {...props} title='Liste des prédictions'>
        <Datagrid>
            <TextField source="id" label="ID"/>
            <TextField source="path"  label="Chemin"/>
            <BooleanField source="pending" label="En attente"/>
            <BooleanField source="validation" label="En validation"/>
            <ReferenceField source="user_id" label="Utilisateur" reference="users" link="show">
                <TextField source="pseudo"/>
            </ReferenceField>
            <ReferenceField source="actor_id" label="Acteur" reference="actors" link="show">
                <FunctionField render={actor => `${actor.first_name} ${actor.last_name}`} />
            </ReferenceField>

            <EditButton label="Modifier"/>
            <DeleteButton label="Supprimer"/>


        </Datagrid>
    </List>
  );