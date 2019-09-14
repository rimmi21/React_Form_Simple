import React from 'react';

class Form extends React.Component{

    state={
        
        interests: "",
        firstName: "", //Attributes of form 
        lastName: "",
        username: "",
        email: "",
        password: ""
    };

    change = e =>{
        this.props.onChange({[e.target.name] : e.target.value});
        this.setState({
            [e.target.name]:e.target.value

        });
    };
    onSubmit = e => {
        
        e.preventDefault();
        //console.log(this.state);
        //this.props.onSubmit(this.state);
        this.setState({
            interests: "",
            firstName: "", 
        lastName: "",
        username: "",
        email: "",
        password: ""
        });
        this.props.onChange({
            interests: "",
            firstName: "", 
        lastName: "",
        username: "",
        email: "",
        password: ""
        });     
    };

    render(){
        return (
            <form>
                
                <br />
                <input  
                name="firstName"
                placeholder="First Name here" 
                value={this.state.firstName} 
                onChange={ e=>this.change(e)}  
                />
                <br /><br />
                <input 
                name="lastName"
                placeholder="Last name here"
                value={this.state.lastName}
                onChange={ e=>this.change(e)} />
                
                <br /><br />
                <input name="interests"
                placeholder="Write about your Interests here . . . " 
                value={this.state.interests}
                onChange={e=>this.change(e)} />
                <br /> <br />
                <input 
                name="username"
                placeholder="User Name"
                value={this.state.username}
                onChange={ e=>this.change(e)} />
                <br /> <br />
                <input 
                name="email"
                placeholder="E-mail"
                value={this.state.email}
                onChange={ e=>this.change(e)} />
                <br /><br />
                <input 
                name="password"
                type="password"
                placeholder="Password"
                value={this.state.password}
                onChange={ e=>this.change(e)} />
                <br /><br />
            <button  onClick={e => this.onSubmit(e) }> Submit </button> 
            </form>
        );
    }
}
export default Form;