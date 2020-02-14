import React from "react";
import styled from "styled-components";



class InputAndButtons extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
          Nome:'',
          Mensagem:'',
          clicar: true

      };
    };
    render() {
        return (
    
        <div className='InputButton'>
           <input type='text' onChange={this.state.nome}/>
           <input type='text' onChange={this.state.mensagem}/>
           <button onClick={this.state.addMessage}>Enviar</button> 
        </div>
        )
    }

};


onChangeaddInputNome = event => {
    this.setState({nome: event.target.value})
};

onChangeaddInputMensagem = event => {
    this.setState({mensagem: event.target.value})
};

aoClicar = event => {
    this.setState({clicar: event.target.value})
}

const addInputNome = () => {
     
};


const addInputMensagem = () =>{

};

const aoClicar =(event) => {
    if (clicar===true){
        return aoClicar
    }
};
export default InputsAndButtons