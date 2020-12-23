import React from 'react';
import './Webtoon.css';
import thumbnail from '../Studygroupylab.jpg';


class Webtoon extends React.Component{
    constructor(props){
        super(props);
        this.state={}
    }

    render(){
        return(
            <div className="Webtoon">
                <img src={thumbnail} className="Thumbnail" alt="cover" />
            </div>
        )
    }
}


export default Webtoon;