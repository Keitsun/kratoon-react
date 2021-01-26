import React from 'react';
import './Header.css';
import Home from '../Body/Body';
import Mangapage from '../Mangapage/Mangapage';
import Uploadstime from '../Uploadstime/Uploadstime';
import Register from '../Register/Register';
import Login from '../Login/Login';
import Addmanga from '../Addmanga/Addmanga';
import Addcategory from '../Addcategory/Addcategory';
import Mangadetail from '../Mangadetail/Mangadetail';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";


class Header extends React.Component{
    constructor(props){
        super(props);
        this.state={}
    }

    render(){
        return(
            <div className="header">
                <div className="nav">
                <Router>
      <div>
    
          <ul className="nav-links">
            <li>
              <Link to="/addcategory">إضافة كاتيجوري</Link>
            </li>
            <li>
              <Link to="/addmanga">إضافة مانجا</Link>
            </li>
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
            
            <li>
              <Link to="/">الرئيسية</Link>
            </li>
            <div className="logo">KRATOON</div>
          </ul>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
            <Route path="/" exact>
                <Home />
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
            <Route path="/addmanga">
                <Addmanga />
            </Route>    
            <Route path="/addcategory">
                <Addcategory />
            </Route>     
            <Route path="/mangadetail/:id">
                <Mangadetail />
            </Route>
            <Route path="/test">
                <Mangadetail />
            </Route> 
        </Switch>
      </div>
</Router>
                </div>
                <div className="logo">KRATOON</div>
            </div>
        )
    }
}


export default Header;