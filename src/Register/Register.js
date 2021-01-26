import React from 'react';
import './Register.css';
import axios from 'axios';

const api = axios.create({
    baseURL: `http://localhost:8000/api`
})


class Register extends React.Component{
    constructor(props){
        super(props);
        this.state={
            username : '',
            email : '',
            password : '',
            password_confirmation : '',
            role_id : 2
        }
    }


    changeHandler = e => {
        this.setState({[e.target.name]: e.target.value})
    }

    submitHandler = async (e) => {
        e.preventDefault()
        console.log(this.state)
        let reg = await api.post('/register', this.state)
        .then(response => {
            console.log(response)
        })
        .catch(error => {
            console.log(error)
        })

    }

    render(){
        const {username, email, password, password_confirmation} = this.state
        return(
            <div className="Register">
                <h1 className="h1">Register page</h1>
                <div>
                    <form className="form-container" onSubmit={this.submitHandler}>
                        <div class="form-group">
                            <label for="formGroupExampleInput" className="label">Name</label>
                            <input type="text" class="form-control" name="username" placeholder="Name" value={username} onChange={this.changeHandler} />
                        </div>
                        <div class="form-group">
                            <label for="formGroupExampleInput2" className="label">Email</label>
                            <input type="text" class="form-control" name="email" placeholder="Email" value={email} onChange={this.changeHandler} />
                        </div>
                        <div class="form-group">
                            <label for="inputPassword5" className="label">Password</label>
                            <input type="password" name="password" class="form-control" aria-describedby="passwordHelpBlock" value={password} onChange={this.changeHandler} />
                            <small id="passwordHelpBlock" class="form-text text-muted">
                            Your password must be 8-20 characters long, contain letters and numbers, and must not contain spaces, special characters, or emoji.
                            </small>
                        </div>
                        <div class="form-group">
                            <label for="inputPassword5" className="label">Confirm Password</label>
                            <input type="password" name="password_confirmation" class="form-control" aria-describedby="passwordHelpBlock" value={password_confirmation} onChange={this.changeHandler} />
                            <small id="passwordHelpBlock" class="form-text text-muted">
                            Your password must be 8-20 characters long, contain letters and numbers, and must not contain spaces, special characters, or emoji.
                            </small>
                        </div>
                        <button type="submit" class="btn btn-warning btn-lg btn-block">Register</button>
                    </form>
                </div>
            </div>
        )
    }
}


export default Register;