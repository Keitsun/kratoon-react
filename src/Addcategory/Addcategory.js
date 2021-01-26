import React from 'react';
import './Addcategory.css';
import axios from '../axios';



// const api = axios.create({
//     baseURL: `http://localhost:8000/api`
// })

class Addcategory extends React.Component{
    constructor(props){
        super(props);
        this.state={
            category_name : ''
        }
    }

    changeHandler = e => {
        this.setState({[e.target.name]: e.target.value})
    }
    

    submitHandler = async (e) => {
        e.preventDefault()
        console.log(this.state)
        axios.post('/categories/post', this.state)
        .then(response => {
            console.log(response)
        })
        .catch(error => {
            console.log(error)
        })

        // fetch("http://localhost:8000/api/categories/post", {
        //     method: "POST",
        //     mode: "cors",
        //     headers: {
        //         "Content-Type": "application/json"
        //     },
        //     body: JSON.stringify(this.state)
        // })
        // .then(response => {
        //     console.log("requette done")
        // })
        // .catch(error => {
        //     console.log("requtte erreur")
        // })
    }

     

    render(){
        const {category} = this.state
        return(
            <div className="addcategory">
               <h1 className="h1">test add manga</h1>
               <form className="form-container" onSubmit={this.submitHandler}>
                    <div class="form-group">
                        <label className="label" for="formGroupExampleInput">Category Title</label>
                        <input type="text" class="form-control" name="category_name" value={category} onChange={this.changeHandler} placeholder="Category title" />
                    </div>
                    <button type="submit" class="btn btn-warning btn-lg btn-block">Add Manga</button>
                </form>
            </div>
        )
    }
}


export default Addcategory;