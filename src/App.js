import React from 'react';
import './App.css';
import { Header } from "./Header";
import './Base.css';
import { Basket } from './Basket';
import {HomePage} from './HomePage';
import {SpecificProduct} from './SpecificProduct';
import {
  BrowserRouter,
  Switch,
  Route,
} from "react-router-dom";
import imagePath1 from './image/one.jpg';
import imagePath2 from './image/two.jpg';
import imagePath3 from './image/three.jpg';

class App extends React.Component {
  constructor(props) {
    super(props);
    const initialPurchases = JSON.parse(localStorage.getItem("purchases"));
    this.state = {
      products: [
        {
          id: 1,
          name: "Jordan 1",
          cost: 8000,
          image: imagePath1,
          description: "Amet eu enim aute reprehenderit dolor ullamco veniam consequat fugiat velit aliqua." 
        },
        { 
          id: 2,
          name: "Jordan 2",
          cost: 10000,
          image: imagePath2, 
          description: "LoremDeserunt magna irure aliquip reprehenderit labore culpa proident incididunt consectetur nisi magna sit."
        },
        {
          id: 3,
          name: "Jordan 3",
          cost: 12000,
          image: imagePath3, 
          description: "LoremEsse ea dolor eiusmod consequat aliqua irure voluptate proident commodo."
        },
      ],
      purchases: initialPurchases,
      sum: initialPurchases.reduce((accumulator, currentValue) => accumulator += Number(currentValue.cost), 0),
    }
  }
  
  buy(id) {
    const products = this.state.products;
    const purchases = this.state.purchases;
    const newPurchases = [...purchases, products.find((product) => {return product.id === id})];
    let sum = newPurchases.reduce((accumulator, currentValue) => accumulator += Number(currentValue.cost), 0);    
    localStorage.removeItem("purchases");
    localStorage.setItem("purchases", JSON.stringify(newPurchases));
    this.setState({
      purchases: newPurchases,
      sum: sum,
    })
  }
  
  removeBoots(id) {
    const products = this.state.products;
    const purchases = this.state.purchases;
    let newSum = this.state.sum;
    let newPurchases;
    newPurchases = purchases.filter((item) => {return item.id !== id})
    newSum = newPurchases.reduce((accumulator, currentValue) => accumulator + currentValue.cost, 0)
    localStorage.removeItem("purchases");
    localStorage.setItem("purchases", JSON.stringify(newPurchases));
    this.setState({
      purchases: newPurchases,
      sum: newSum,
    })
  }

  render() {
    return (
      <BrowserRouter>
        <div className="app">
          <Header />
          <div className="Content">
            <Switch>
              <Route exact path="/">
                <HomePage products={this.state.products} buy={(id) => this.buy(id)}/>
              </Route>
              <Route path="/product/:id">
                <SpecificProduct products={this.state.products} buy={(id) => this.buy(id)} />
              </Route>
            </Switch>
            <div>
              <Basket 
                items={this.state.products} 
                purchases={this.state.purchases} 
                sum={this.state.sum} 
                removeBoots={(id) =>{
                  this.removeBoots(id);
                }} 
              />
            </div>  
          </div>
        </div>
      </BrowserRouter>
    )
  }
}


export default App;





