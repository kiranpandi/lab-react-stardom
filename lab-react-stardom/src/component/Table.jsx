import React, { Component } from 'react'
import prostar from '../resources/prostars.json';

export default class Table extends Component {

    constructor(){
        super();
        this.state = {
            prostars: [prostar[0],prostar[1],prostar[2],prostar[3],prostar[4]]
        }
    }

    renderProstars = () => {
        const data = this.state.prostars;
        const mapRow = data.map( prostar => (
            <tr key={prostar.id}>
                <td><img src={prostar.pictureUrl} /></td>
                <td>{prostar.name}</td>
                <td>{prostar.popularity}</td>
                <td><button className="delete-button">Delete</button></td>     
            </tr>
        ));
        return mapRow;
    }

    addRandomProstar = () => {
        let remainingProstar = prostar.slice(5,prostar.length);
        const random = Math.floor(Math.random() * remainingProstar.length);
        this.setState({prostars:[...this.state.prostars,remainingProstar[random]]});
    }

    sortName = () => {
        const prostars = this.state.prostars;
        prostars.sort( (a,b) => {
            let first = a.name.toLocaleLowerCase();
            let second = b.name.toLocaleLowerCase();

            if(first<second){
                return -1
            }
            else if(first>second){
                return 1
            }
            else{
                return 0
            }
        });
        this.setState({prostars:prostars});
    }

    sortPopularity = () => {
        const prostars = this.state.prostars;
        prostars.sort( (a,b) => {
            return b.popularity - a.popularity
        });
        this.setState({prostars:prostars});
    }

    render() {
      console.log('prostars',this.state.prostars)
    //   let remainingProstar = prostar.slice(5,prostar.length);
    //   console.log('remaining array',remainingProstar)
        return (
            <>
                <div className="table-content">
                    <div className="buttons">
                        <button className="add-button" onClick={this.addRandomProstar}>Add Random Prostar</button>
                        <button className="name-sort" onClick={this.sortName}>Sort By Name</button>
                        <button className="popularity-sort" onClick={this.sortPopularity}>Sort By Popularity</button>
                    </div>
                    <div className="table-container">
                        <table className="heading-row">
                            <thead>
                            <tr>
                                <th>Picture</th>
                                <th>Name</th>
                                <th>Popularity</th>
                                <th>Action</th>
                            </tr>
                            </thead>
                            <tbody>
                                {this.renderProstars()}
                            </tbody>
                        </table>
                    </div>

                </div>
            </>
        )
    }
}