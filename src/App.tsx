import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Home from "./pages/Home";
import Bookmark from "./pages/Bookmark";
import Profile from "./pages/Profile";
import DetailArticle from "./pages/DetailArticle";
import NewJourney from "./pages/NewJourney";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" Component={Index} />
          <Route path="/home" Component={Home} />
          <Route path="/bookmark" Component={Bookmark} />
          <Route path="/profile" Component={Profile} />
          <Route path="/detailArticle" Component={DetailArticle} />
          <Route path="/newJourney" Component={NewJourney} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
