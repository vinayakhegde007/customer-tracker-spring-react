import './App.css';
import {BrowserRouter as Router, Route,Switch} from 'react-router-dom';

import FooterComponent from './components/FooterComponent';
import HeaderComponent from './components/HeaderComponent';
import ListCustomerComponent from './components/ListCustomerComponent';
import AddCustomerComponent from './components/AddCustomerComponent';

function App() {
  return (
    <div>

      <Router>
         <HeaderComponent/>
            <div className="container">
                <Switch>
                      <Route path="/" exact component={ListCustomerComponent}/>
                      <Route path="/customers" component={ListCustomerComponent}/>
                      <Route path="/addCustomer/:id" component={AddCustomerComponent}/>
                </Switch>
            </div>
        <FooterComponent/>
      </Router>

    </div>
  );
}

export default App;
