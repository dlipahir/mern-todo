import {Provider} from 'react-redux'
import store from './store/store';
import Home from './components/home.component';
import Show from './components/showitems.component';
import './App.css'
function App() {
  return (
    <div className="App">
      <h1 className='heading'>Todo APP</h1>
      <Provider store={store}>
      <Home/>
      <Show/>
      </Provider>
    </div>
  );
}

export default App;
