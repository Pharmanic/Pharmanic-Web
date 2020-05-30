import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import {Container,Input,Button,Label,Form,FormGroup,Table} from 'reactstrap';
import { Link } from 'react-router-dom';

class Rdhs_Hospital_Login extends Component {

    constructor(props) {
        super(props);
        this.state = { 
            value: '',
           
            
         }
         this.addValue = this.addValue.bind(this);
         this.updateInput = this.updateInput.bind(this);
    }
    

    addValue(evt)
    {
      //const history=Rdhs_Hospital_Current_Stock();
      evt.preventDefault();
      if(this.state.value !=undefined)
      {
        alert('Your input value is: ' + this.state.value);
        var year=new Date().getDate();
        alert('year'+year);
        localStorage.setItem('reg_no',this.state.value);
        alert(localStorage.getItem('reg_no'));
  //push("/rhcstock");
        window.location.replace('/#/rhcstock');
       
      }
      
    }
    updateInput(evt){
        this.state={value: evt.target.value};   
      //  getBatches(this.state);
     }
    render() { 
        return (
            <form onSubmit={this.addValue}>
            <input type="text" onChange={this.updateInput} placeholder="Enter Hospital Registration Number"/><br/><br/>
            <Button type="submit" value="Enter" onClick={()=>this.addValue}> Enter</Button>
           
            
            </form>
          );
    }
}
 
export default Rdhs_Hospital_Login;