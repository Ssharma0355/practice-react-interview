import logo from './logo.svg';
import './App.css';
import SideBar from './component/SideBar';
import Counter from './component/Counter';
import AlertPop from './component/AlertPop';
import FruitList from './component/FruitList';
import Search from './component/Search';
import AddForm from './component/AddForm';

import { BrowserRouter as Router, Route, Routes, Link, BrowserRouter } from "react-router-dom";
import FetchData from './component/FetchData';
function Home(){
  return <h1>Home Screen</h1>
}

function Dashboard(){
  return <h1>Dashboard Screen</h1>
}

function App() {
  const name ="Sachin";
  return (
    <div className="App">
      <Router>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<Dashboard />} />
        </Routes>
      </Router>
      <FetchData />
    </div>
  );
}

export default App;


   {
     /* <h1>Sachin</h1>
      <SideBar name={name} />
      <Counter />
      <AlertPop />
      <FruitList />
      <Search />
      <AddForm /> */
   }