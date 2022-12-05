import logo from './logo.svg';
import './App.css';
import store from './store/store';
import {Provider} from 'react-redux'
import Test from './Test';
function App() {
  return (
    <Provider store = {store}>
    <div className="App">
      <Test></Test>
    </div>
    </Provider>
  );
}

export default App;
