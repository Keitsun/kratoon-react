import React from 'react';
import './Body.css';
import thumbnail from '../headercover.jpg' ;
import Manga from '../Manga/Manga';




class Body extends React.Component{
    constructor(props){
        super(props);
        this.state={}
    }

    render(){
        return(
            <div className="body">
                <img src={thumbnail} className="Thumbnail" alt="cover" />
                <h1>Trending Now</h1>
                <div className="Mangacontainer">
                    <Manga />
                    <Manga />
                    <Manga />
                    <Manga />
                </div>
                <h1>New Uploads</h1>
                <div className="Mangacontainer">
                    <Manga />
                    <Manga />
                    <Manga />
                    <Manga />
                </div>
               
                <h1>Latest Mangas</h1>
                <div className="Mangacontainer">
                    <Manga />
                    <Manga />
                    <Manga />
                    <Manga />
                </div>
            </div>
        )
    }
}


export default Body;