import React, { useContext } from 'react';
import { AuthContext } from '../Context/Context';
import { Navigate } from 'react-router';

const AlreadyLogInRoutes = ({children}) => {
    const {loading, user}= useContext(AuthContext);
//    if(loading){
//         return <p>Loading...................</p>
//     }
    if(user){
        return <Navigate to="/"></Navigate>
    }
    return children;
};

export default AlreadyLogInRoutes;