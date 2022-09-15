import React from "react";
import Frases from "./Frases";

//criando os botões que serão manipulados pelo state
function CliqueButton(props) {
    return <button onClick={props.onClick}>Clique Aqui!</button>
}

function VolteButton(props) {
    return <button onClick={props.onClick}>Clique de novo!</button>
}

//uso do state
class CliqueControl extends React.Component {
    constructor(props) {
        super(props);
        this.state = {clique: this.props.clique};

        //Tratar os eventos com o método bind
        this.tratarClickClique = this.tratarClickClique.bind(this);
        this.tratarClickVolte = this.tratarClickVolte.bind(this);
    }
    tratarClickClique() {
        this.setState ({clique: true})
    }
    tratarClickVolte() {
        this.setState ({clique: false})
    }

    //renderizando os botões 
    render () {
        const clique = this.state.clique;
        let button;

        if(clique) {
            button = <VolteButton onClick={this.tratarClickVolte} />
        } else {
            button = <CliqueButton onClick={this.tratarClickClique} />
        }

        //retornando em tela as frases e os botões
        return (
            <div>
                <Frases clique={clique} />
                {button}
            </div>
        )
    }
}

export default CliqueControl;