import React from 'react';
import { hot } from 'react-hot-loader';
import moment from 'moment'
import Form from './components/form/Form'
import Todo from './components/todo/Todo'

let something = "Something";
class App extends React.Component {
        constructor(){
      super();

      console.log("constructor");

      // set the default value
      this.state = {
        counter:0,
        inputlist:"",
        todolist:[],
        todomoment:[],
        completedtask:[]
      };
    }

    // our click method
    handleClick()
        {

            console.log(moment());
            console.log(something)
            if(something.length>0 && something.length<200)
            {
                        var currentValue = this.state.counter + 1;
                        console.log("clicking", currentValue);
                        // set the state of this component
                        this.setState( { counter: currentValue } );
                        var currentToDoArray = this.state.todolist;
                        currentToDoArray.push (something);
                        console.log(currentToDoArray);
                        this.setState({todolist: currentToDoArray});
                        var currentToDoMomentArray = this.state.todomoment;
                        currentToDoMomentArray.push(moment().format());
                        console.log(currentToDoMomentArray);
                        this.setState({todomoment: currentToDoMomentArray});
                        console.log(this.state.todomoment);
                        something = "";

                    }
                    else if(something.length<=0)
                    {
                        alert("Too short")
                    }
                    else if(something.length>=200)
                    {
                        alert("Too Long")
                    }


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

        myCallBack(data)
        {
            console.log("Look over here heerer herhehrehrehrherf")
            console.log(data);
            something = data.toDoList;



        }

  render() {

    const changeHandler = event => {
    //console.log(`Target value ${event.target.value}`)
        this.setState({inputlist:event.target.value});

    };



        const handleClick = event => {
    console.log(`Target value ${event}`)
    if(event)
    {
        console.log(this.state.inputlist)
        console.log("Something really happened")

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
                        this.state.inputlist = "";

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
    };

//This is for editing the form
    const changeEditHandler=(event)=>{


           if(event)
    {
        console.log(this.state.inputlist)
        console.log("Something really happened")

        if(event.target.value.length>0 && event.target.value.length<200)
            {
                console.log("Now also here")
                console.log(typeof event.target.id)
                console.log(this.state.todolist)
                let edittedArray = this.state.todolist;

                edittedArray[event.target.id] = event.target.value;
                this.setState({todolist: edittedArray})
                let momentArray = this.state.todomoment;
                momentArray[event.target.id] = moment().format();
                this.setState({todomoment: momentArray});

            }
        else if(event.target.value.length<=0)
            {
                    alert("Too short")
            }
        else if(event.target.value.length>=200)
            {
                    alert("Too Long")
            }
    }

    }
    const handleDeleteClick = (Event)=>{
        console.log("Deleteing ")
        console.log(Event.target.id);
        let completedTask = this.state.completedtask;
        var currentToDoArray = this.state.todolist;
        completedTask.push(currentToDoArray.splice(Event.target.id, 1));
        this.setState({todolist: currentToDoArray});
        this.setState({completedtask: completedTask});
        var currentToDoTimeArray = this.state.todomoment;
        currentToDoTimeArray.splice(Event.target.id, 1);
        this.setState({todomoment: currentToDoTimeArray});
        console.log(completedTask)
    }






    return (
      <div class = "col-12 ">

        <div className="item row">
        <div className = "col-6 border">
        <p>Below is for the function to call back function</p>

        <Form
        callBackFromForm = {changeHandler.bind(this)}
        clickFormButton = {handleClick}
        />

        </div>






<div className="col-6 border">
        <Todo
            toDoArray = {this.state.todolist}
            momentArray = {this.state.todomoment}
            callBackFromEditForm = {changeEditHandler.bind(this)}
            clickDeleteButton = {handleDeleteClick}
        />

        </div>
        </div>


      </div>
    );
  }
}

export default hot(module)(App);