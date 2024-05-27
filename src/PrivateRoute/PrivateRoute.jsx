import React from 'react';
import useAuth from '../hooks/useAuth';

const PrivateRoute = ({children}) => {
    const {user}=useAuth();
    return (
        <div>
            
        </div>
    );
};

export default PrivateRoute;