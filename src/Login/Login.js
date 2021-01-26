import React from 'react';
import './Login.css';
import axios from 'axios';

const api = axios.create({
    baseURL: `http://localhost:8000/api`
})

class Login extends React.Component{
    constructor(props){
        super(props);
        this.state={
            email : '',
            password : ''
        }
    }

    changeHandler = e => {
        this.setState({[e.target.name]: e.target.value})
    }

    submitHandler = async (e) => {
        e.preventDefault()
        console.log(this.state)
        let reg = await api.post('/login', this.state)
        .then(response => {
            console.log(response)
        })
        .catch(error => {
            console.log(error)
        })

    }

    render(){
        const {email, password} = this.state

        return(
            <div className="Login">
                <h1 className="h1">Login page</h1>
                <div>
                    <form className="form-container" onSubmit={this.submitHandler}>
                        <div class="form-group">
                            <label for="formGroupExampleInput2" className="label">Email</label>
                            <input type="text" class="form-control" name="email" value={email} onChange={this.changeHandler} placeholder="Email" />
                        </div>
                        <div class="form-group">
                            <label for="inputPassword5" className="label">Password</label>
                            <input type="password" name="password" value={password} onChange={this.changeHandler} class="form-control" aria-describedby="passwordHelpBlock" />
                        </div>
    
                        <button type="submit" class="btn btn-warning btn-lg btn-block">Login</button>
                    </form>
                </div>
            </div>
        )
    }
}


export default Login;