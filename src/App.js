import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Header from './Pages/Shared/Header/Header';
import Footer from './Pages/Shared/Footer/Footer';
import Home from './Pages/Home/Home';
import Notfound from './Pages/Notfound/Notfound';
import More from './Pages/More/More';
import Login from './Pages/Login/Login';
import AuthProvider from './Context/AuthProvider';
import PrivateRoute from './Pages/PrivateRoute/PrivateRoute';
import Contact from './Pages/Contact/Contact';
import Registration from './Pages/Registration/Registration';
import Detail from './Pages/Detail/Detail/Detail';
import Doctor from './Pages/Doctor/Doctor';

function App() {
  return (
    <div className="App" style={{backgroundImage:`url(./images/bg.jpg)`,backgroundRepeat:"no-repeat",backgroundSize:"cover"}}>
      <AuthProvider>
      <BrowserRouter>
        <Header></Header>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/Home">
            <Home></Home>
          </Route>
          <PrivateRoute path="/More">
            <More></More>
          </PrivateRoute>
          <Route path="/Contact">
            <Contact></Contact>
          </Route> 
          <Route path="/Doctor">
            <Doctor></Doctor>
          </Route>
          <Route path="/Detail/:Id">
            <Detail></Detail>
          </Route>
          <Route path="/Login">
            <Login></Login>
          </Route>
          <Route path="/Registration">
            <Registration></Registration>
          </Route>
          <Route path="*">
            <Notfound></Notfound>
          </Route>
        </Switch>
        <Footer></Footer>
      </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
