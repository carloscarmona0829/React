import React from "react";//Lo puse manualmente por si hay otras versiones que lo necesiten.
import {Component} from "react";

function EstadoHijo(props){
    return(
        <div>
            <h3>{props.contadorHijo}</h3>
        </div>
    );
}

export default class Estado extends Component{
    constructor(props){
        super(props);
        this.state = {
            contador: 0,
        };        

        //this.setState({contador:this.state.contador += 10});
        // setInterval(()=>{
        //     this.setState({
        //         contador:this.state.contador + 1
        //     });
        // },1000); 

    }
    render(){
        return (
            <div>
                <h2>El State</h2>
                <p>{this.state.contador}</p>
                <EstadoHijo contadorHijo= {this.state.contador} />
            </div>
        );
    }
}

