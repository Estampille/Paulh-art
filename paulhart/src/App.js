
import { BrowserRouter, Route, Switch} from 'react-router-dom';
import './App.module.css';
import Header from './components/Header';
import Home from "./pages/Home"
import Footer from "./components/Footer";
import Exhibition from "./pages/exhibition";
import Shop from './pages/Shop';
import Experiences from './pages/Experiences';

function App() {
  return (
    <BrowserRouter>
    <Header/>
    <div>
      <Switch >
        <Route exact path="/" component={Home} />
        <Route exact path="/expo" component={Exhibition} />
        <Route exact path="/Artisannat" component={Shop} />
        <Route exact path="/Expériences" component={Experiences} />
      </Switch>
    </div>
    <Footer />
    </BrowserRouter>
  );
}

export default App;
