import React, { Component } from 'react'
import styled from 'styled-components'
import Task from './task'
import {Droppable} from 'react-beautiful-dnd' 

const Container = styled.div`
    margin: 8px;
    border: 2px solid lightgrey;
    border-radius: 2px;

`;
const Title = styled.h3`
    padding: 8px;
`;
const TaskList = styled.div`
    padding: 8px;
    height: 100px;
    overflow: auto;
`;

export default class column extends Component {
    render() {
        return (
            <Container>
                <Title>{this.props.column.title}</Title>
                <Droppable droppableId={this.props.column.id}>
                {(provided)=>(
                    <TaskList
                        {...provided.draggableProps}
                        ref={provided.innerRef}
                    >
                    {this.props.tasks.map((task,index) =>(
                        <Task key={task.id} task ={task} index={index} />
                    ))
                    }
                    {provided.placeholder}
                    </TaskList>
                )}
                </Droppable> 
            </Container>
            )
        
        
    }
}
