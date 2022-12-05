import logo from './logo.svg';
import './index.css';
import store from './store/store';
import {Provider} from 'react-redux'
import Test from './Test';
import Products from './components/Products';
function App() {
  return (
    <Provider store = {store}>
    <div className="App">
      <Test></Test>
      <Products></Products>
    </div>
    </Provider>
  );
}

export default App;
