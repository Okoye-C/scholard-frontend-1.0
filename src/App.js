import './App.css';
import {BrowserRouter as Router, Routes, Route, NavLink} from "react-router-dom";
import AppContext from "./context/AppContext";
import WelcomePage from './pages/WelcomePage';

function App() {
  return (
    <div className="App">
      <AppContext.Provider>
        <Router>
          <Routes>
            <Route path='/scholard-frontend-1.0'
              element={<WelcomePage></WelcomePage>}
            ></Route>
           
            <Route path={"/scholard-frontend-1.0/saved-chats"}
              element={<WelcomePage></WelcomePage>}
            ></Route>
           
            <Route path={"/scholard-frontend-1.0/tips-and-faetures"}
              element={<WelcomePage></WelcomePage>}
            ></Route>
           
            <Route path={"/scholard-frontend-1.0/all-projects"}
              element={<WelcomePage></WelcomePage>}
            ></Route>
           
            <Route path="/scholard-frontend-1.0/settings"
              element={<WelcomePage></WelcomePage>}
            ></Route>
           
          </Routes>
        </Router>
      </AppContext.Provider>
    </div>
  );
}

export default App;
