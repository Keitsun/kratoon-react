import React from 'react';
import './Header.css';


class Header extends React.Component{
    constructor(props){
        super(props);
        this.state={}
    }

    render(){
        return(
            <div className="header">
                <div className="nav">
                </div>
                <div className="logo">KRATOON</div>
            </div>
        )
    }
}


export default Header;