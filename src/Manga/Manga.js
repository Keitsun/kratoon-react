import React from 'react';
import './Manga.css';
import thumbnail from '../Mysticmessenger.jpg' ;


class Manga extends React.Component{
    constructor(props){
        super(props);
        this.state={}
    }

    render(){
        return(
            <div className="Manga">
                <img src={thumbnail} className="Thumbnail" alt="cover" />
            </div>
        )
    }
}


export default Manga;