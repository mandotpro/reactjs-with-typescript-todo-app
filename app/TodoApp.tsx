import * as React from "react";
import {Component} from "react";
import {Props} from "react";

export class TodoApp extends Component<{}, {}> {
    public state: {};
    
    constructor(props : {}) {
        super(props);
        this.state = {};
    }

    render() {
        return <h1>Hello world!</h1>
    }
}