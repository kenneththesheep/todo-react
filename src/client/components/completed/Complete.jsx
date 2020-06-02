import React from 'react';

class Complete extends React.Component {
        constructor(){
      super();



      // set the default value
      this.state = {

            completeTask:[]
      };
    }

    // our click method



  render() {
    console.log(this.props.finishArray)
    if(this.props.finishArray===undefined){
        this.state.completeTask = [];
    }
    else{
        this.state.completeTask = this.props.finishArray

    }
    let john=this.state.completeTask;
    return (
    <div className = "row">
      <div className = "col-12  border  ">
              <p> Completed Task</p>
        <ol>
        {john.map((thingsToDo, index) =>
            <div>
            <div className = "row mb-3">


            <li>{thingsToDo}</li>



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

export default Complete;