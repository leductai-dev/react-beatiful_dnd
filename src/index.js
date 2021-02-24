import ReactDOM from 'react-dom';
import React, { Component } from 'react'
import initialData from './initial_data'
import Column from './column'
import { DragDropContext } from 'react-beautiful-dnd';
import styled from 'styled-components'


const Contain = styled.div`
    width: 400px;
    height: 600px;
    background-color: gray;
    padding: 10px;


`


class App extends Component {
  state = initialData

  onDragEnd = (result) =>{

  }
 
  render() {
    return (
      <Contain>
      <DragDropContext
    onDragEnd={this.onDragEnd}
    >
    {this.state.columnOrder.map(columnID =>{
      const column = this.state.columns[columnID]
      const tasks = column.taskID.map(taskID =>this.state.tasks[taskID])
      return <Column key={column.id} column={column} tasks={tasks} />
    }
    )}
    </DragDropContext>
    </Contain>

)}
}

ReactDOM.render(<App />,document.getElementById('root')
);
