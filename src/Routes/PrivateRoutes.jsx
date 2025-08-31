import React, { Children } from 'react';
import useAuth from '../Hooks/useAuth';
import { Navigate } from 'react-router';

const PrivateRoutes = ({Children}) => {

  const {user, loading} =useAuth();

  if(loading){
    <span className="loading loading-spinner loading-xl"></span>
  }

  if(!user) {
    <Navigat to="/login"></Navigat>
  }

  return Children
};

export default PrivateRoutes;