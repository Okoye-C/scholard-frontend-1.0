import './App.css';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import AppContext from "./context/AppContext";
import WelcomePage from './pages/WelcomePage';
import AllProjectsPage from './pages/AllProjectsPage';
import TipsAndFeaturesPage from './pages/TipsAndFeaturesPage';
import SavedChatsPage from './pages/SavedChatsPage';
import SettingsPage from './pages/SettingsPage';

function App() {
  return (
    <div className="App">
      <AppContext.Provider>
        <Router>
          <Routes>
            <Route path='/scholard-frontend-1.0/welcome'
              element={<WelcomePage></WelcomePage>}
            ></Route>
           
            <Route path={"/scholard-frontend-1.0/saved-chats"}
              element={<SavedChatsPage></SavedChatsPage>}
            ></Route>
           
            <Route path={"/scholard-frontend-1.0/tips-and-faetures"}
              element={<TipsAndFeaturesPage></TipsAndFeaturesPage>}
            ></Route>
           
            <Route path={"/scholard-frontend-1.0/all-projects"}
              element={<AllProjectsPage></AllProjectsPage>}
            ></Route>
           
            <Route path="/scholard-frontend-1.0/settings"
              element={<SettingsPage></SettingsPage>}
            ></Route>
           
          </Routes>
        </Router>
      </AppContext.Provider>
    </div>
  );
}

export default App;
