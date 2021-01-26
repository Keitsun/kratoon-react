import React from 'react';
import './Mangadetail.css';
import thumbnail from '../Mysticmessenger.jpg' ;

const Mangadetail = () => {
        return(
            <div className="mangadetail">
                <div className="manga-detail">
                        <div className="img-container">
                            <img src={thumbnail} class="card-img" alt="..." />
                        </div>
                        <div className="info-container">
                            <h3 className="info-detail">Manga title</h3>
                            <p className="info-detail">Description</p>
                            <p className="info-detail">author</p>
                            <p className="info-detail">status</p>
                        </div>
                </div>

                <div className="chapiter-detail">
                    <table class="table">
                        <thead>
                            <tr className="tr">
                            <th scope="col">Chapters</th>
                            <th scope="col">Title</th>
                            <th scope="col">Translator</th>
                            <th scope="col">Date</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="tr">
                            <th scope="row">1</th>
                            <td>Naruto</td>
                            <td>the penguin</td>
                            <td>Saturday</td>
                            </tr>
                            <tr className="tr">
                            <th scope="row">2</th>
                            <td>One Piece</td>
                            <td>the crocodile</td>
                            <td>Sunday</td>
                            </tr>
                            <tr className="tr">
                            <th scope="row">3</th>
                            <td>Shingeki No Kyojin</td>
                            <td>the Bird</td>
                            <td>Monday</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        )
}


export default Mangadetail;