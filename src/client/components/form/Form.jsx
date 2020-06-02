import React from 'react';

class Form extends React.Component {
        constructor(){
      super();



      // set the default value
      this.state = {
             toDoList:"",
      };
    }

    // our click method
    changeHandler(event)
        {
            this.setState({toDoList:event.target.value});
            //console.log(this.props)
            this.props.callBackFromForm(event);
            //console.log("change", event.target.value);
        }

        handleClick(event)
        {

            this.props.clickFormButton(event);
            //refer to the input box with ref inputBox
            this.setState({toDoList:""});
            //this.refs.inputBox.value = "";

        }

  render() {


    return (
    <div className = "row">
      <div className = "col-12 ">

        <div>"Test Form</div>
        <p>Input: {this.state.toDoList}</p>
        <input value={this.state.toDoList} ref="inputBox" onChange={(event)=>{this.changeHandler(event);}}></input>

        <button onClick={()=>{this.handleClick(event)}}>click me to add stuff!</button>

        <p>Welcome. Creating a todo again</p>


      </div>
    </div>
    );
  }
}

export default Form;