import React from 'react';
import { connect } from 'react-redux';
import { deleteTask, editTask } from '../redux/action/addTask.actions';
const Task = ({todo, idx, deleteTask, editTask, selected, text}) => {
    return(
        <div style={{display: "flex", flexDirection: "row", justifyContent: "space-between", border: '1px solid #ffffffa6', padding: "5px"}}>
        <div className="task">{selected === idx ? text : todo}</div>
          <div >
          <i style={{cursor:'pointer'}}  className="icon-pencil" onClick= { ()=> editTask(idx)}></i>
          <i style={{cursor:'pointer', marginLeft: '10px'}}  className="icon-trash" onClick= { ()=> deleteTask(idx)}></i>
          </div>
        </div>
    );
}
const mapStateToProps = state =>({
  text: state.text,
  selected: state.selected
})
const mapDispatchToProps = dispatch =>({
  deleteTask: key => dispatch(deleteTask(key)),
  editTask: key => dispatch(editTask(key))
})

export default connect(mapStateToProps,mapDispatchToProps)(Task);