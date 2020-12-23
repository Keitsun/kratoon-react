import React from 'react';
import './Mangadetail.css';
import thumbnail from '../Mysticmessenger.jpg' ;


class Mangadetail extends React.Component{
    constructor(props){
        super(props);
        this.state={}
    }

    render(){
        return(
            <div className="mangadetail">
               <div className="img-container">
                   <img src="" alt="" />
               </div>
               <div className="detail-container">
                    <h1>Title</h1>
                    <h2>description</h2>
                    <h3>author</h3>
                    <h3>status</h3>
               </div>
            </div>
        )
    }
}


export default Mangadetail;