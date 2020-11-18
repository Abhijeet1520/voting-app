import {React} from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import {HomePage, ErrorPage, ContactPage} from "components/pages";
import { WebsiteContextProvider } from "context/WebsiteContext";
import {createGlobalStyle} from "styled-components";

const GlobalStyle = createGlobalStyle`
    body{
      scroll-behavior: smooth;
    }
`;

const App = () => {
  return (
    <WebsiteContextProvider>
      <GlobalStyle/>
      <Router>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/contact" component={ContactPage} />
          <Route component={ErrorPage} />
        </Switch>
      </Router>
    </WebsiteContextProvider>
  );
};

export default App;
