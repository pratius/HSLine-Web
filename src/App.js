
import NestedRoute from "utility/NestedRoute";
import routeConfig from "config/RouteConfig"
import {
  Router,
  Switch,

} from "react-router-dom";
import "./App.css"
import { CssBaseline, ThemeProvider } from "@mui/material";
import MUITheme from "config/themes"
import { ConfigProvider as AntConfigProvider } from "antd";
import { IntlProvider } from "react-intl";

function App() {

  return (
    <IntlProvider locale="en" defaultLocale="en">
      <ThemeProvider theme={MUITheme}>
        {/* <CssBaseline enableColorScheme /> */}
        <AntConfigProvider
          theme={{
            token: {
              colorPrimary: "#000000",
              fontFamily: ["Source Sans Pro", "Open Sans"].join(",")
            }
          }}
        >
          <Switch>
            {routeConfig.map((route, i) => (
              <NestedRoute key={i} {...route} />
            ))}
          </Switch>
        </AntConfigProvider>
      </ThemeProvider>
    </IntlProvider>
  );
}

export default App;
