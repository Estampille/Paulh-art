
import { BrowserRouter, Route, Switch} from 'react-router-dom';
import './App.module.css';
import Header from './components/Header';
import Home from "./pages/Home"
import Footer from "./components/Footer";

function App() {
  return (
    <BrowserRouter>
    <Header/>
    <div>
      <Switch >
        <Route exact path="/" component={Home} />
      </Switch>
    </div>
    <Footer />
    </BrowserRouter>
  );
}

export default App;
