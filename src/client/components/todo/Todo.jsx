import React from 'react';

class Todo extends React.Component {
        constructor(){
      super();



      // set the default value
      this.state = {

            todolist:[],
            todomoment:[]
      };
    }

    // our click method
    changeEditHandler(event)
        {
            console.log("I have tried to type")
            //console.log(event.target.id)

            //this.setState({toDoList:event.target.value});
            //console.log(this.props)
            this.props.callBackFromEditForm(event);
            //console.log("change", event.target.value);
        }

        deleteClick(event)
        {

            this.props.clickDeleteButton(event);
            //refer to the input box with ref inputBox
            //this.setState({toDoList:""});
            //this.refs.inputBox.value = "";

        }

  render() {
    console.log(this.props)
    let doArray = this.props.toDoArray;
    console.log(this.props.momentArray);
    let momentArray = this.props.momentArray
    this.state.toDoList = this.props.toDoArray;
    let john = this.state.toDoList;
    return (
    <div className = "row">
      <div className = "col-12 ">
              <p> To do List</p>
        <ol>
        {john.map((thingsToDo, index) =>
            <div>
            <div className = "row mb-3">


            <li><input id={index} value={thingsToDo} ref="inputBox" onChange={(event)=>{this.changeEditHandler(event);}}></input> <p>{momentArray[index]}</p></li>


            <button id={index} onClick={(event)=>{this.deleteClick(event)}}>Remove item {index+1}</button>

            </div>
            </div>

            )}
        </ol>


        <p>Welcome. Creating a todo again</p>


      </div>
    </div>
    );
  }
}

export default Todo;