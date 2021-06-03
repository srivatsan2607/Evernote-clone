import './App.css';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'
import Home from './components/home/Home'
import Navbar from './components/layout/Navbar'
import Favourites from './components/notes/Favourites';
import NoteDetail from './components/notes/NoteDetail';
import EditForm from './components/notes/EditForm';
function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/fav" component={Favourites} />
        <Route exact path="/note/:note_id" component={NoteDetail} />
        <Route exact path="/note/edit/:note_id" component={EditForm} />
      </Switch>
    </Router>
  );
}

export default App;
