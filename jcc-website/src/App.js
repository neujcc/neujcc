import './App.css';
import JCCNavBar from './Components/NavBar/JCCNavBar.js'
import JCCNavBarv2 from './Components/NavBar/JCCNavBarv2.js'
import React, {Component} from 'react';
import Dinners from './Components/Pages/Dinners';
import GameNights from './Components/Pages/GameNights';
import Cooking from './Components/Pages/Cooking';
import Miscellaneous from './Components/Pages/Miscellaneous';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

class App extends Component{
  render() {
    return (    
      <div>
      <Switch>
        <Route exact path="/Dinners" component={Dinners} />
        <Route exact path="/Miscellaneous" component={Miscellaneous} />
        <Route exact path="/Cooking" component={Cooking} />
        <Route exact path="/GameNights" component={GameNights} />
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
