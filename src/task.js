import React, { Component } from 'react'
import styled from 'styled-components'
import { Draggable } from 'react-beautiful-dnd';

const Container = styled.div`
    border: 1px solid lightgrey;
    padding: 10px;
    margin-bottom: 10px;
    background-color: blue;
`;

export default class task extends Component {
    
    render() {
        return(
            <Draggable draggableId={this.props.task.id} index={this.props.index}>
                {(provided) =>(
                <Container
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    ref={provided.innerRef}
                >
                    {this.props.task.content}
                </Container>
                )}
            </Draggable>
        ) 
    }
}
