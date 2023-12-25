import logo from './logo.svg';
import './App.css';
import AppTitle from './Components/AppTitle';
import TodoInputForm from './Components/TodoInputForm';
import Todo from './Components/Todo';
import Control from './Components/Control';
import Filter from './Components/Filter';

function App() {
  return (
    <div className="container w-50">
      <AppTitle />
      <TodoInputForm />
      <Todo />
      <Control />
      <Filter />
    </div>  
  );
}

export default App;
