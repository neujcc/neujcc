import './App.css';
import JCCNavBar from './Components/NavBar/JCCNavBar.js'
import JCCNavBarv2 from './Components/NavBar/JCCNavBarv2.js'
import React, {Component} from 'react';
import Sakura from './Images/sakura_background.jpg'
import Gallery from './Components/Pages/Gallery';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

class App extends Component{
  render() {
    return (    
      <div>
      <Switch>
        <Route exact path="/Gallery" component={Gallery} />
      </Switch>
      <body>
        <div className='background'>
          <JCCNavBarv2 />
          <h1 style={{margin: "0em"}}>JCC Website</h1>
          <p>
            dl;aksfjdsalkfjhaslfh dafjh;ldjsalkfjds l;dakfjs;lakdfj saf;kj da;lkfjdsal
            dlaksfjfasfjkadsjadfda
            dallldkjaf
          </p>
          <p>
            dakfjs
          </p>
          <p>
            damore
          </p>
          <h1>
            more
          </h1>
          <h1>
            more
          </h1>
          <h1>
            more
          </h1>
          <h1>
            more
          </h1>        <h1>
            more
          </h1>
          <h1>
            more
          </h1>        <h1>
            more
          </h1>
          <h1>
            more
          </h1>
        </div>

      </body>
      </div>
    )
  }
}

export default App;
