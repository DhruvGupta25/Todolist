import React from 'react';
import { connect } from 'react-redux';
import Task from './task';
const List =({task})=>{
    return(
      <div style = {{ 
          display: "flex", 
          flexDirection: "column",
          width: "30em",
          margin: "0 auto",
          height: "400px",
          overflowY: "auto",
          overflowX: 'hidden'
          }}>
          {
              task.map((task,id) => (
              <Task key={id} todo = {task} idx={id} />
              ))
          }
      </div>
    )
}

const mapStateToProps = state =>({
  task: state.task
})
export default connect(mapStateToProps)(List);