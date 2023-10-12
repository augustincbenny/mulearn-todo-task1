import React, { useEffect, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";

type Props= {  
  children: React.ReactNode
}

export const ProtectedLanding: React.FC<Props> = (props) => {
  if (true) {
    return props.children;
  } else {
    return <Navigate to="/signin" replace />;
  }
};

export default {
    ProtectedLanding,
};