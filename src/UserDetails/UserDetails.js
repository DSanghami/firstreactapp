import { Component } from "react";
class UserDetails extends Component{

    constructor(){
        super();
        this.state={firstName:'Sanghami',lastName:'Dhanasekar'};
        this.updatefirstName = this.updatefirstName.bind(this);
        this.updatelastName = this.updatelastName.bind(this);
    }
    updatefirstName(event){
        console.log(event.target.value); /* target:whatever textfield we are implementing this function */
        //store the value od the firstname textbox
        this.setState({firstName: event.target.value});
    }
    updatelastName(event){
        console.log(event.target.value);
        this.setState({lastName: event.target.value});

    }
    // This class must implement a function called render
    render(){
        return(
            <div className="formClass">
                <center>
                <label>First Name</label><input type="text" name="firstName" value={this.state.firstName} onChange={this.updatefirstName}></input><br />
                <label>Last Name</label><input type="text" name="lastName" onChange={this.updatelastName}></input><br />
                <input type="submit" value="save" />
                <b>your full details Mrs.</b>&nbsp;&nbsp;

<label>{this.state.firstName}</label>

<label>{this.state.lastName}</label>

                </center>
            </div>
        )
    }
}

export default UserDetails;