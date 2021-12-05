import './App.css';
import Form from './components/form';
import List from './components/list';
import { connect } from 'react-redux'
import { deleteAll, persistTask } from './redux/action/addTask.actions';
import { useEffect } from 'react';

const App =({deleteAll, persistTask})=> {
  useEffect(()=>{
     persistTask()
  },[persistTask]);
  return (
    <div className="App">
      <h1> Todo List</h1>
      <Form/>
      <List/>
      <div>
        <button 
        className="delete" 
        onClick={deleteAll}
        >
          Delete All
        </button>
      </div>
    </div>
  );
}
const mapDispatchToProps = dispatch =>({
  deleteAll : () => dispatch(deleteAll()),
  persistTask : () => dispatch(persistTask())

})
export default connect(null,mapDispatchToProps)(App);
