// import logo from './logo.svg';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { getTodo,addTodo } from './redux/todo.action';


function App() {
  const todos_Value = useSelector(store => store.todos);
  console.log(todos_Value)
  const dispatch = useDispatch()
  return (
    <div className="App">
      <div className='card'>
        <h1>todo list</h1>
        <button onClick={() => dispatch(getTodo())}>GET</button>
        <button onClick={() => dispatch(addTodo("abcd"))}>ADD</button>
      </div>
    </div>
  );
}

export default App;
