import React from 'react';
import './Footer.css';


class Footer extends React.Component{
    constructor(props){
        super(props);
        this.state={}
    }

    render(){
        return(
            <div className="footer">
                <div className="nav">
                    <li><a href="#">روابط الموقع</a></li>
                    <li><a href="#">اتصل بنا</a></li>
                </div>
                <div className="logo">KRATOON</div>
            </div>
        )
    }
}


export default Footer;