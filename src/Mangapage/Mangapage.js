import React from 'react';
import './Mangapage.css';
import thumbnail from '../Mysticmessenger.jpg' ;
import Mangadetail from '../Mangadetail/Mangadetail';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";


class Mangapage extends React.Component{
    constructor(props){
        super(props);
        this.state={}
    }

    render(){
        return(
            <div className="Mangapage">
                <Router>

                <h1>Test Manga page</h1>
                <div className="cards-container">
                    <div class="card" style={{width: 18+'rem'}}>
                        <img src={thumbnail} class="card-img-top" alt="..."/>
                        <div class="card-body">
                            <h5 class="card-title">Webtoon title</h5>
                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <Link to="/mangadetail" class="btn btn-danger">Start Reading</Link>
                        </div>
                    </div>
                    <div class="card" style={{width: 18+'rem'}}>
                        <img src={thumbnail} class="card-img-top" alt="..."/>
                        <div class="card-body">
                            <h5 class="card-title">Webtoon title</h5>
                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <Link to="/mangadetail" class="btn btn-danger">Start Reading</Link>
                        </div>
                    </div>
                    <div class="card" style={{width: 18+'rem'}}>
                        <img src={thumbnail} class="card-img-top" alt="..."/>
                        <div class="card-body">
                            <h5 class="card-title">Webtoon title</h5>
                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <Link to="/mangadetail" class="btn btn-danger">Start Reading</Link>
                        </div>
                    </div>
                </div>
                <div className="cards-container">
                    <div class="card" style={{width: 18+'rem'}}>
                        <img src={thumbnail} class="card-img-top" alt="..."/>
                        <div class="card-body">
                            <h5 class="card-title">Webtoon title</h5>
                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <Link to="/mangadetail" class="btn btn-danger">Start Reading</Link>
                        </div>
                    </div>
                    <div class="card" style={{width: 18+'rem'}}>
                        <img src={thumbnail} class="card-img-top" alt="..."/>
                        <div class="card-body">
                            <h5 class="card-title">Webtoon title</h5>
                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <Link to="/mangadetail" class="btn btn-danger">Start Reading</Link>
                        </div>
                    </div>
                    <div class="card" style={{width: 18+'rem'}}>
                        <img src={thumbnail} class="card-img-top" alt="..."/>
                        <div class="card-body">
                            <h5 class="card-title">Webtoon title</h5>
                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <Link to="/mangadetail" class="btn btn-danger">Start Reading</Link>
                        </div>
                    </div>
                </div>


                    <Switch>
                        <Route path="/mangadetail" exact>
                            <Mangadetail />
                        </Route>
                    </Switch>
                </Router>
            </div>
        )
    }
}


export default Mangapage;