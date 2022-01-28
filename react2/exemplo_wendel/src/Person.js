import React, {Component} from 'react';

class Person extends Component{ 
    constructor(props){
        super(props);

        this.state = {
            name: "Wendel",
            age: 33,
            genre: 'm',
        };
    }

    changePerson(){
        alert('teste!');
    }

    render(props){
        let artigo;
        if (this.state.genre =='m'){
            artigo = 'o';
        }else if(this.state.genre =='f'){
            artigo = 'a';
        }

        return(
            <div>
                <p>Eu sou {artigo} {this.state.name} e tenho {this.state.age} anos </p> n
                <button type='button' onAuxClick={this.changePerson}>Mudar Pessoa</button>
            </div>
        );
    }
}

export default Person;