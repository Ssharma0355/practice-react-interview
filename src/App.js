import logo from './logo.svg';
import './App.css';
import SideBar from './component/SideBar';
import Counter from './component/Counter';
import AlertPop from './component/AlertPop';
import FruitList from './component/FruitList';
import Search from './component/Search';
import AddForm from './component/AddForm';
function App() {
  const name ="Sachin";
  return (
    <div className="App">
      <h1>Sachin</h1>
      <SideBar name={name} />
      <Counter />
      <AlertPop />
      <FruitList />
      <Search />
      <AddForm />
   
    </div>
  );
}

export default App;
