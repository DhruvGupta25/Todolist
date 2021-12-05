import React from 'react';
import { addTask, addText, editAddTask } from '../redux/action/addTask.actions';
import { connect } from 'react-redux';
class Form extends React.Component{

    handleChange = e => this.props.addText(e.target.value);
    handleSubmit = e =>{
        e.preventDefault();
        if(this.props.selected || this.props.selected === 0)
        this.props.editAddTask({
            value: this.props.text, 
            selected: this.props.selected
        });
        else this.props.addTask(this.props.text);
    };
    render(){
        return(
            <form onSubmit = {this.handleSubmit}>
               <input 
                 type="text" 
                 name="task" 
                 value={this.props.text}
                 placeholder="Enter a task..."
                 onChange = {this.handleChange}
                 required/>
            </form>
        );
    }
}
const mapStateToProps = state => ({
    text: state.text,
    selected: state.selected
})

const mapDispatchToProps = dispatch =>({
  addTask : task => dispatch(addTask(task)),
  addText : value => dispatch(addText(value)),
  editAddTask : obj => dispatch(editAddTask(obj))
})

export default connect(mapStateToProps, mapDispatchToProps)(Form);