import * as React from "react";
import { Admin, Resource } from 'react-admin';
import lb4Provider from 'react-admin-lb4';
import { ActorCreate } from "./actors/ActorCreate";
import { ActorEdit } from "./actors/ActorEdit";
import { ActorList } from "./actors/ActorList";
import { UserCreate } from "./users/UserCreate";
import { UserEdit } from "./users/UserEdit";
import { UserList } from "./users/UserList";
import ActorIcon from "@material-ui/icons/Star"
import PredictionIcon from '@material-ui/icons/RecordVoiceOver';
import UserIcon from '@material-ui/icons/People';
import authProvider from "./auth/AuthProvider";
import { PredictionList } from "./predictions/PredictionList";
import { PredictionEdit } from "./predictions/PredictionEdit";

const headers = () => {
    const { token } = JSON.parse(localStorage.getItem('auth'));
    console.log(token);
    return {Authorization: token};
}

const App = () => (
    <Admin authProvider={authProvider} dataProvider={lb4Provider(process.env.REACT_APP_API_URL, headers)}>
        <Resource name="actors" icon={ActorIcon} options={{ label: 'Acteurs' }} create={ActorCreate} list={ActorList} edit={ActorEdit} />
        <Resource name="predictions" icon={PredictionIcon} options={{ label: 'Prédictions' }} list={PredictionList} edit={PredictionEdit} />
        <Resource name="users" icon={UserIcon} options={{ label: 'Utilisateurs' }} create={UserCreate} list={UserList} edit={UserEdit} />
    </Admin>
);

export default App;
