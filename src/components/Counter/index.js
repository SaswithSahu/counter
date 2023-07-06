import { Component } from "react";

import "./index.css"

class Counter extends Component{
    state = {count:100}

    componentDidMount(){
        setInterval(() =>{
            this.setState(preState =>({count:preState.count+6}))
        },1000)
    }
    render(){
        const{count} = this.state
        return(
            <div className="main-container">
                <div className="card">
                <h1>Counter</h1>
                <p>Count: <span>{count}</span></p>
                </div>
            </div>
        )
    }
}

export default Counter