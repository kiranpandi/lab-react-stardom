import React, { Component } from 'react'
import Heading from './Heading'
import Table from './Table'
import prostars from '../resources/prostars.json';


export default class Content extends Component {
    render() {
        
        return (
            <>
                <div>
                    <Heading />
                </div>
                <div>
                    <Table />
                </div>
            </>


        )
    }
}