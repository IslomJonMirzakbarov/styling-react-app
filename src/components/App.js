import { createGlobalStyle, ThemeProvider } from "styled-components";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./pages/Login";
import Home from "./pages/Home";
import LightTheme from "../themes/light";
import DarkTheme from "../themes/dark";
import { useState } from "react";

const GlobalStyle = createGlobalStyle`
  body {
    background: ${({theme}) => theme.bodyBackgroundColor};
    min-height: 100vh;
    margin: 0;
    color: ${({theme}) => theme.bodyFontColor};
    font-family: 'Kaushan Script', cursive;
  }
`;

function App() {
  const [theme, setTheme] = useState(LightTheme);

  return (
    <ThemeProvider theme={{...theme, setTheme: () => {
      setTheme(theme.id === 'light' ? DarkTheme : LightTheme)
    }}}>
      <GlobalStyle />
      <Router>
        <Switch>
          <Route path="/login" component={Login} />
          <Route path="/" component={Home} />
        </Switch>
      </Router>
    </ThemeProvider>
  );
}

export default App;
