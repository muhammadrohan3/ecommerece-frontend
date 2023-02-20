import React from 'react';
import store from './store/store';
import { Provider } from 'react-redux'
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom'
import Nav from './components/Nav';
import Footer from './components/Footer';
import Home from './components/Home';
import './index.css';
import NotFound from './components/NotFound';
import ProductPage from './components/ProductPage';


function App() {
  return (
    <Provider store={store}>
      <div className="w-full flex flex-col min-h-screen justify-between">
        <Nav/>
          <Router>
            <Routes>
                <Route exact path = "/" element = {<Home/>} />
                <Route exact path = "/product" element = {<ProductPage/>} />
                <Route path="/*" element = {<NotFound/>} />
            </Routes>
          </Router>
        <Footer/>
      </div>
    </Provider>
  );
}

export default App;
