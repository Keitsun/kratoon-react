import './App.css';
import Header from './Header/Header';
import Home from './Body/Body';
import Webtoonpage from './Webtoonpage/Webtoonpage';
import Mangapage from './Mangapage/Mangapage';
import Uploadstime from './Uploadstime/Uploadstime';
import Register from './Register/Register';
import Login from './Login/Login';
// import './Header/Header';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      {/* <Header /> */}
      <Router>
      <div>
        <nav className="Header">
          <ul>
            <li>
              <Link to="/login">دخول</Link>
            </li>
            <li>
              <Link to="/register">تسجيل</Link>
            </li>
            <li>
              <Link to="/uploadstime">مواعيد الفصول</Link>
            </li>
            <li>
              <Link to="/mangas">مانجا</Link>
            </li>
            {/* <li>
              <Link to="/webtoons">ويبتون</Link>
            </li> */}
            <li>
              <Link to="/">الرئيسية</Link>
            </li>
            <div className="logo">KRATOON</div>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
            <Route path="/" exact>
                <Home />
            </Route>

            <Route path="/webtoons">
                <Webtoonpage />
            </Route>

            <Route path="/mangas">
                <Mangapage />
            </Route>
            <Route path="/uploadstime">
                <Uploadstime />
            </Route>
            <Route path="/register">
                <Register />
            </Route>  
            <Route path="/login">
                <Login />
            </Route>     
        </Switch>
      </div>
</Router>
      {/* <Home /> */}
    </div>
  );
}

export default App;
