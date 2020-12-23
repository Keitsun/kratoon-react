import React from 'react';
import './Uploadstime.css';


class Uploadstime extends React.Component{
    constructor(props){
        super(props);
        this.state={}
    }

    render(){
        return(
            <div className="Uploadstime">
                <h1 className="h1">Test Uploadstime page</h1>
                <table class="table">
                    <thead>
                        <tr>
                        <th scope="col">#</th>
                        <th scope="col">Title</th>
                        <th scope="col">Chapter</th>
                        <th scope="col">Date</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                        <th scope="row">1</th>
                        <td>Naruto</td>
                        <td>75</td>
                        <td>Saturday</td>
                        </tr>
                        <tr>
                        <th scope="row">2</th>
                        <td>One Piece</td>
                        <td>980</td>
                        <td>Sunday</td>
                        </tr>
                        <tr>
                        <th scope="row">3</th>
                        <td>Shingeki No Kyojin</td>
                        <td>the Bird</td>
                        <td>Monday</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        )
    }
}


export default Uploadstime;