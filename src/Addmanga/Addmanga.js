import React from 'react';
import './Addmanga.css';
import axios from 'axios';


class Addmanga extends React.Component{
    constructor(props){
        super(props);
        this.state={
            manga_title : '',
            manga_description : '',
            manga_cover : '',
            manga_author : '',
            manga_status : '',
            manga_category : ''
        }
    }


    changeHandler = e => {
        this.setState({[e.target.name]: e.target.value})
    }
    

    submitHandler = async (e) => {
        e.preventDefault()
        console.log(this.state)
        axios.post('localhost:8000/api/categories/:{id}/mangas', this.state)
        .then(response => {
            console.log(response)
        })
        .catch(error => {
            console.log(error)
        })

    }

    render(){
        const {title, description, cover, author, status, category} = this.state
        return(
            <div className="addmanga">
               <h1 className="h1">test add manga</h1>
               <form className="form-container" onSubmit={this.submitHandler}>
                    <div class="form-group">
                        <label className="label" for="formGroupExampleInput">Manga Title</label>
                        <input type="text" class="form-control" name="manga_title" value={title} onChange={this.changeHandler} placeholder="put title" />
                    </div>
                    <div class="form-group">
                        <label className="label" for="formGroupExampleInput2">Manga Desctiption</label>
                        <input type="text" class="form-control" name="manga_description" value={description} onChange={this.changeHandler} placeholder="put description" />
                    </div>
                    <div class="form-group">
                        <label className="label" for="formGroupExampleInput2">Manga Image</label>
                        <div class="custom-file">
                            <input type="file" class="custom-file-input" name="manga_cover" value={cover} onChange={this.changeHandler} />
                            <label class="custom-file-label" for="customFile">Choose file</label>
                        </div>
                    </div>
                    <div class="form-group">
                        <label className="label" for="formGroupExampleInput2">Manga Author</label>
                        <input type="text" class="form-control" name="manga_author" value={author} onChange={this.changeHandler} placeholder="put author" />
                    </div>
                    <div class="form-group">
                        <label className="label" for="formGroupExampleInput2">Manga Status</label>
                        <input type="text" class="form-control" name="manga_status" value={status} onChange={this.changeHandler} placeholder="put status" />
                    </div>
                    <div class="form-group">
                        <label className="label" for="formGroupExampleInput2">Manga Category</label>
                        <select class="custom-select" name="manga_category" value={category} onChange={this.changeHandler}>
                            <option selected>Open this select category</option>
                            <option value="1">One piece</option>
                            <option value="2">Detective Conan</option>
                            <option value="3">Naruto</option>
                        </select>
                    </div>
                    <button type="submit" class="btn btn-warning btn-lg btn-block">Add Manga</button>
                </form>
            </div>
        )
    }
}


export default Addmanga;