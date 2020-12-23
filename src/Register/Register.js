import React from 'react';
import './Register.css';


class Register extends React.Component{
    constructor(props){
        super(props);
        this.state={}
    }

    render(){
        return(
            <div className="Register">
                <h1 className="h1">Register page</h1>
                <div>
                    <form className="form-container">
                        <div class="form-group">
                            <label for="formGroupExampleInput" className="label">Name</label>
                            <input type="text" class="form-control" id="formGroupExampleInput" placeholder="Name" />
                        </div>
                        <div class="form-group">
                            <label for="formGroupExampleInput2" className="label">Email</label>
                            <input type="text" class="form-control" id="formGroupExampleInput2" placeholder="Email" />
                        </div>
                        <div class="form-group">
                            <label for="inputPassword5" className="label">Password</label>
                            <input type="password" id="inputPassword5" class="form-control" aria-describedby="passwordHelpBlock" />
                            <small id="passwordHelpBlock" class="form-text text-muted">
                            Your password must be 8-20 characters long, contain letters and numbers, and must not contain spaces, special characters, or emoji.
                            </small>
                        </div>
                        <div class="form-group">
                            <label for="inputPassword5" className="label">Confirm Password</label>
                            <input type="password" id="inputPassword5" class="form-control" aria-describedby="passwordHelpBlock" />
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