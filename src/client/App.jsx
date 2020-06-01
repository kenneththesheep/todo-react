import React from 'react';
import { hot } from 'react-hot-loader';

class App extends React.Component {
        constructor(){
      super();

      console.log("constructor");

      // set the default value
      this.state = {
        counter:0,
        inputlist:"",
        todolist:[]
      };
    }

    // our click method
    handleClick()
        {

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
                        console.log(this.state.todolist);
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

  render() {
    return (
      <div>

        <div className="item">
        <p>Input: {this.state.inputlist}</p>
        <input value={this.state.inputlist} onChange={(event)=>{this.changeHandler(event);}}></input>
      </div>
        <p>Welcome. Creating a todo again</p>
        <button onClick={()=>{this.handleClick()}}>click me!</button>
        <ol>
        {this.state.todolist.map(thingsToDo=><li>{thingsToDo}</li>)}
        </ol>


      </div>
    );
  }
}

export default hot(module)(App);