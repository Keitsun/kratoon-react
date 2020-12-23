import React from 'react';
import './Login.css';


class Login extends React.Component{
    constructor(props){
        super(props);
        this.state={}
    }

    render(){
        return(
            <div className="Login">
                <h1 className="h1">Login page</h1>
                <div>
                    <form className="form-container">
                        <div class="form-group">
                            <label for="formGroupExampleInput2" className="label">Email</label>
                            <input type="text" class="form-control" id="formGroupExampleInput2" placeholder="Email" />
                        </div>
                        <div class="form-group">
                            <label for="inputPassword5" className="label">Password</label>
                            <input type="password" id="inputPassword5" class="form-control" aria-describedby="passwordHelpBlock" />
                        </div>
    
                        <button type="submit" class="btn btn-warning btn-lg btn-block">Login</button>
                    </form>
                </div>
            </div>
        )
    }
}


export default Login;