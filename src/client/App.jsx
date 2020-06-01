import React from 'react';
import { hot } from 'react-hot-loader';
import moment from 'moment'
class App extends React.Component {
        constructor(){
      super();

      console.log("constructor");

      // set the default value
      this.state = {
        counter:0,
        inputlist:"",
        todolist:[],
        todomoment:[]
      };
    }

    // our click method
    handleClick()
        {
            console.log(moment());
            if(this.state.inputlist.length>0 && this.state.inputlist.length<200)
            {
                        var currentValue = this.state.counter + 1;
                        console.log("clicking", currentValue);
                        // set the state of this component
                        this.setState( { counter: currentValue } );
                        var currentToDoArray = this.state.todolist;
                        currentToDoArray.push (this.state.inputlist);
                        console.log(currentToDoArray);
                        this.setState({todolist: currentToDoArray});
                        var currentToDoMomentArray = this.state.todomoment;
                        currentToDoMomentArray.push(moment().format());
                        console.log(currentToDoMomentArray);
                        this.setState({todomoment: currentToDoMomentArray});
                        console.log(this.state.todomoment);
                        var inputValue = "";
                        this.setState({inputlist:inputValue});
                        console.log(this.state.inputValue)
                    }
                    else if(this.state.inputlist.length<=0)
                    {
                        alert("Too short")
                    }
                    else if(this.state.inputlist.length>=200)
                    {
                        alert("Too Long")
                    }


        }

    changeHandler(event)
        {
            this.setState({inputlist:event.target.value});
            console.log("change", event.target.value);
        }


    deleteClick(event)
        {

            console.log("delete");
            console.log(event.target.id)
            var currentToDoArray = this.state.todolist;
            currentToDoArray.splice(event.target.id, 1);
            this.setState({todolist: currentToDoArray});

            var currentToDoTimeArray = this.state.todomoment;
            currentToDoTimeArray.splice(event.target.id, 1);
            this.setState({todomoment: currentToDoTimeArray});


        }

  render() {
    return (
      <div class = "col-12 ">

        <div className="item row">
        <div className = "col-6 border">
        <p>Input: {this.state.inputlist}</p>
        <input value={this.state.inputlist} onChange={(event)=>{this.changeHandler(event);}}></input>

        <p>Welcome. Creating a todo again</p>
        <button onClick={()=>{this.handleClick()}}>click me!</button>
        </div>
<div className="col-6 border">
        <p> To do List</p>
        <ol>
        {this.state.todolist.map((thingsToDo, index) =>
            <div>
            <div className = "row">
            <li>Things to do: {thingsToDo} <br/> Time created: {this.state.todomoment[index]}</li>

            <button id={index} onClick={(event)=>{this.deleteClick(event)}}>Remove item {index+1}</button>
            </div>
            </div>

            )}
        </ol>
        </div>
        </div>


      </div>
    );
  }
}

export default hot(module)(App);