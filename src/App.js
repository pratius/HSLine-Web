
import NestedRoute from "utility/NestedRoute";
import routeConfig from "config/RouteConfig"
import {
  Router,
  Switch,

} from "react-router-dom";
import "./App.css"
import { CssBaseline, ThemeProvider } from "@mui/material";
import MUITheme from "config/themes"

function App() {

  return (
    <ThemeProvider theme={MUITheme}>
      {/* <CssBaseline enableColorScheme /> */}

      <Switch>
        {routeConfig.map((route, i) => (
          <NestedRoute key={i} {...route} />
        ))}
      </Switch>
    </ThemeProvider>
  );
}

export default App;
