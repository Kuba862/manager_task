import React, { useContext } from 'react';
import { GlobalCtx } from '../Context/GlobalCtx';
import LoadingSpinner from '../components/LoadingSpinner/LoadingSpinner';


export const PublicRoute = ({ children }) => {
    const { loading } = useContext(GlobalCtx);

    if (loading) {
        return <LoadingSpinner />
    }

    return <>{children}</>

}