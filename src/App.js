import React ,{ Component } from "react";
import Form from "./Form.js";
import "./App.css";

class App extends Component{

  state = {
    fields : {}
  };

onChange = updatedValue => {
  this.setState({
    fields: {
      ...this.state.fields,
      ...updatedValue     }
  });
};

render() {
  return (
    <div className="App">
      <div>
        <p>
          <h1>Hi , Check this form !</h1>
        </p>
      </div>
    <Form onChange={ fields =>this.onChange(fields)} />
    <p>
      {JSON.stringify(this.state.fields, null, 2)}
    </p>
    <div>
      <p><h2>Thanks for stopping by.</h2></p>
    </div>
    </div>
          
    
  );
}
}

export default App;
