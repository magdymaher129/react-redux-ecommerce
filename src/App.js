import "./App.css";
import { BrowserRouter ,Route,Switch} from 'react-router-dom';
import Home from "./pages/Home";
import About from "./pages/About";
import Contacts from "./pages/Contacts";
import Product from "./component/Product";
import Cart from './component/cart/Cart'
function App() {
  return (


<BrowserRouter>
     
 <Switch>
   <Route  exact path="/" component={Home} />
   <Route  exact path="/about" component={About} />
   <Route exact path="/contacts" component={Contacts} />
   <Route  exact path="/products/:id" component={Product} />
   <Route exact path="/cart" component={Cart} />
 </Switch>
      
</BrowserRouter>

  );
}

export default App;
