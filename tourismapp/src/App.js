import './App.css';
import Home from './Pages/Home/Home';
import New from './Pages/new/new';
import 'bootstrap/dist/css/bootstrap.min.css'



//import AppFooter from './components/AppFooter';
import AppHeader from './components/AppHeader';
import SideMenu from './components/SideMenu';
import List from './Pages/list/list';
//import PageContent from './components/PageContent';
//import SideMenu from './components/SideMenu';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Modifier from './Pages/modifier/modifier';
import Login from './login/login';



function App() {
  return (
    <div className='App'>
      <div className="d-flex align-items-center justify-content-center">
      
    </div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login/>}></Route>
          <Route path="/home">
            <Route index element={<Home />} />
            <Route path="posts">
              <Route index element={<List />} />
              <Route
                path="new"
                element={<New />}
              />
              <Route
                path="modifier/:id"
                element={< Modifier />}
              />
            </Route>
          
          </Route>
        </Routes>
      </BrowserRouter>


    </div>
  );
}

export default App;
