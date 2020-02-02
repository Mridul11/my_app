import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom' ;
import NavbarComponet from './components/Navbar' ;
import Home from './components/Home' ;
import  Liquidity  from './components/Liquidity' ;

import axios from 'axios' ;

class App extends React.Component {
    constructor(props){
        super(props);
            this.state = {
                resp: {}
            }   
    }

    componentDidMount(){
        axios.get("http://localhost:3003/data")
            .then(res => this.setState( { resp: { ...res.data.res } }))
        }

    render () {
        // console.log("chartData is ",  this.state.chartData)
        console.log("resp is ",  this.state.resp)
        return (
            <Router>
                <div>
                    <NavbarComponet />
                    <br />
                    <Route exact path="/">
                        <Home data={this.state.resp}/>
                    </Route>
                    <Route exact path="/liquidity">
                        <Liquidity chartData={ this.state.resp }/>
                    </Route>
                </div>
            </Router>            
        )
    }
}

export default App ; 
