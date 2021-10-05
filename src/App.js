import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter,Switch,Route } from 'react-router-dom';
import './App.css';
import About from './components/about/About';
import Contract from './components/contract/Contract';
import Header from './components/header/Header';
import Home from './components/home/Home';
import NoMatch from './components/nomatch/NoMatch';
import Services from './components/services/Services';
import Footer from './components/footer/Footer';
import Success from './components/success/Success';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header></Header>
      <Switch>
       
  
        <Route path='/home'>
          <Home></Home>
        </Route>

        

        <Route path='/services'>
          <Services></Services>
        </Route>

        <Route path='/about'>
          <About></About> 
        </Route>

        <Route path='/contract'>
          <Contract></Contract>
        </Route>

        {/* <Route path='/cart'>
          <Cart></Cart>
        </Route> */}

        <Route path='/success'>
          <Success></Success>
        </Route>

        <Route exact path='/'>
          <Home></Home>
        </Route>

        <Route path='*'>
          <NoMatch></NoMatch>
        </Route>

      </Switch>
      <Footer></Footer>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
