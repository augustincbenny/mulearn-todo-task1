import React from "react";
import { Routes, Route } from "react-router-dom";
import Protected from "./utils/ProtectedRoutes";
import Siginin from "./Signin/Siginin";
import Landing from "./Landing/Landing";


const App: React.FC = () => {
  return (
    <ContextProvider>
      <Routes>
        <Route index element={<Siginin />} />
        <Route path="/signin" element={<Siginin />} />
        <Route
          path="/dashboard"
          element={
            <Protected.ProtectedLanding>
              <Landing/>
            </Protected.ProtectedLanding>
          }
        />
        <Route path="*" element={`Error 404`}/>
      </Routes>
    </ContextProvider>
  );
};

export default App;