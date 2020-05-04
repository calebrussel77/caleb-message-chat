import React,{Suspense} from 'react';
import {Switch, Route, Redirect} from 'react-router-dom';
import './assets/css/index.css';
import './assets/css/tailwind.css';
import Spinner from "./UI/Spinner/Spinner";

const Welcome = React.lazy(() =>{
    return import ('./containers/Welcome/Welcome')
});

const Layout = React.lazy(() => {
    return import ('./hoc/Layout/Layout')
});

const Register = React.lazy(() => {
    return import ('./containers/Register/Register')
});

const Login = React.lazy(()  => {
    return import  ('./containers/Login/Login')
});

const Chat = React.lazy(() => {
    return import ('./containers/Chat/Chat');
});

const App = () => {
  let routes = (
    <Switch>
      <Route path="/" exact component={Welcome} />
      <Route path="/register" exact component={Register} />
      <Route path="/login" exact component={Login} />
      <Route path="/chat" exact component={Chat} />
      <Redirect to="/" />
    </Switch>
  );
  return (
          <Suspense fallback={<Spinner/>}>
            <Layout>
                 {routes}
             </Layout>
          </Suspense>
  );
};

export default App;
