import React from 'react';
import './Mangapage.css';
import thumbnail from '../Mysticmessenger.jpg' ;
import Mangadetail from '../Mangadetail/Mangadetail';
import axios from 'axios';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

  const api = axios.create({
      baseURL: `http://localhost:8000/api`
  })


class Mangapage extends React.Component{

    state = {
        mangas: []
    }
    constructor(props){
        super(props);
        this.getMangas();
    }

    getMangas = async ( ) => {
        let data = await api.get('/mangas').then(({ data }) => data)
        this.setState({ mangas: data})
    }

    createManga = async ( ) => {
       let res = await api.post('/categories/{categoryId}/mangas',{title:"lets too 3",desc:"description 2",cover_manga:"test",author:"furudate2",status:"complete",category_id:1,user_id:1})
        console.log(res)
        this.getMangas();
    }
    createCategory = async ( ) => {
        let res = await api.post('/categories/post',{categ_name:"kuroko no basket"})
         console.log(res)
         this.getMangas();
     }

    deleteManga = async (id) => {
        let data = await api.delete(`/mangas/${id}`)
        this.getMangas();
    }

    render(){
        return(
            <div className="Mangapage">
                
                <button onClick={this.createManga}>Create Manga</button>
                <button onClick={this.createCategory}>Create Category</button>
                <h1>Test Manga page</h1>
                <div className="cards-container row">
                    {this.state.mangas.map( manga => 
                        <div key={manga.id} class="card col-md-3 mr-1 mt-5 d-flex justify-content-between" style={{width: 18+'rem'}}>
                                <img src={manga.cover_manga} class="card-img-top" alt="..."/>
                                <div class="card-body">
                                    <h5 class="card-title">{manga.title}</h5>
                                    <p class="card-text">{manga.desc}.</p>
                                    <Link to={'/mangadetail/'+manga.id} class="btn btn-danger">Start Reading</Link>
                                    <button onClick={this.deleteManga}>Delete Manga</button>
                                </div>
                        </div>
                    )}
                </div>

                <Router>
                    <Switch>
                        
                    </Switch>
                </Router>
            </div>
        )
    }
}


export default Mangapage;