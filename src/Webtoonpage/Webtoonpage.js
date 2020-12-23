import React from 'react';
import './Webtoonpage.css';
import thumbnail from '../Mysticmessenger.jpg' ;


class Webtoonpage extends React.Component{
    constructor(props){
        super(props);
        this.state={}
    }

    render(){
        return(
            <div className="Webtoonpage">
                <h1 className="h1">Test Webtoon page</h1>
                <div className="cards-container row">
                    <div class="card col-md-3 mr-1 mt-5 d-flex justify-content-between" style={{width: 18+'rem'}}>
                        <img src={thumbnail} class="card-img-top" alt="..."/>
                        <div class="card-body">
                            <h5 class="card-title">Webtoon title</h5>
                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href="#" class="btn btn-danger">Start Reading</a>
                        </div>
                    </div>
                    <div class="card col-md-3 mr-1 mt-5 d-flex justify-content-between" style={{width: 18+'rem'}}>
                        <img src={thumbnail} class="card-img-top" alt="..."/>
                        <div class="card-body">
                            <h5 class="card-title">Webtoon title</h5>
                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href="#" class="btn btn-danger">Start Reading</a>
                        </div>
                    </div>
                    <div class="card col-md-3 mr-1 mt-5 d-flex justify-content-between" style={{width: 18+'rem'}}>
                        <img src={thumbnail} class="card-img-top" alt="..."/>
                        <div class="card-body">
                            <h5 class="card-title">Webtoon title</h5>
                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href="#" class="btn btn-danger">Start Reading</a>
                        </div>
                    </div>
                    <div class="card col-md-3 mr-1 mt-5 d-flex justify-content-between" style={{width: 18+'rem'}}>
                        <img src={thumbnail} class="card-img-top" alt="..."/>
                        <div class="card-body">
                            <h5 class="card-title">Webtoon title</h5>
                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href="#" class="btn btn-danger">Start Reading</a>
                        </div>
                    </div>
                </div>
                {/* <div className="cards-container">
                    <div class="card" style={{width: 18+'rem'}}>
                        <img src={thumbnail} class="card-img-top" alt="..."/>
                        <div class="card-body">
                            <h5 class="card-title">Webtoon title</h5>
                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href="#" class="btn btn-danger">Start Reading</a>
                        </div>
                    </div>
                    <div class="card" style={{width: 18+'rem'}}>
                        <img src={thumbnail} class="card-img-top" alt="..."/>
                        <div class="card-body">
                            <h5 class="card-title">Webtoon title</h5>
                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href="#" class="btn btn-danger">Start Reading</a>
                        </div>
                    </div>
                    <div class="card" style={{width: 18+'rem'}}>
                        <img src={thumbnail} class="card-img-top" alt="..."/>
                        <div class="card-body">
                            <h5 class="card-title">Webtoon title</h5>
                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href="#" class="btn btn-danger">Start Reading</a>
                        </div>
                    </div>
                </div> */}
                
            </div>
        )
    }
}


export default Webtoonpage;