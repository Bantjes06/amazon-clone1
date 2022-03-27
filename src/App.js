import "./App.css";
import { Redirect, Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import Products from "./components/Products";
import Header from "./components/layout/Header";
import Productdetails from "./components/Productdetails";
import Login from "./components/Login";
import NotFound from "./components/NotFound";
import { useEffect, useState } from "react";
import AuthContext from "./context/authContext";

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  useEffect(() => {
    const userInfo = localStorage.getItem('isLoggedIn')

    if (userInfo === "1") {
      setIsLoggedIn(true)
    }
  }, [])

  const loginHandler = (email, password) => {
    localStorage.setItem('isLoggedIn', '1')
    setIsLoggedIn(true);
  };

  const logoutHandler = () => {
    localStorage.removeItem('isLoggedIn')
    setIsLoggedIn(false);
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn: isLoggedIn }}>
      <Header onLogout={logoutHandler} />
      <main>
        <Switch>
          <Route path="/" exact>
            <Redirect to="/home" />
          </Route>
          <Route path="/home" exact>
            <Home />
          </Route>
          <Route path="/products" exact>
            <Products />
          </Route>
          <Route path="/products/:id">
            <Productdetails />
          </Route>
          <Route path='/login'>
            <Login onLogin={loginHandler} />
          </Route>
          <Route path='*'>
            <NotFound />
          </Route>
        </Switch>
      </main>
    </AuthContext.Provider>
  );
};

export default App;
