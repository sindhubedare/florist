import React, { Component } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button, Table} from 'react-bootstrap';


export default class DeleteMessage extends Component{
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            review: "",
            reserve:[]
        }
        
    }