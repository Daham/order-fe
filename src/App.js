import React, {lazy, Suspense} from 'react';
import {Navigate, Route, Routes} from "react-router";

import {theme} from "./theme/theme";

//MUI
import {ThemeProvider} from "@mui/material";

//Custom components (lazy loaded)
const Dashboard = lazy(() => import('./pages/Home'));


const App = () => {

  return (
      <ThemeProvider theme={theme}>
        <Suspense>
          <Routes>
            <Route
                exact
                path={"/"}
                element={<Navigate to={"/dashboard"}/>}
            />
            <Route
                exact
                path={'/dashboard'}
                element={<Dashboard/>}
            />
          </Routes>
        </Suspense>
      </ThemeProvider>
  );
};

export default App;