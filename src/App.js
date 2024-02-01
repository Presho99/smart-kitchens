
import './App.css';
import List from './components/List';
import Icons from './components/Icons';

function App() {
  return (
    <div className="App">
      <div className='left'>
        <div className='top'></div>
        <div className='middle'>
          <List/>
        </div>
        <div className='bottom'>
          <Icons/>
        </div>
      </div>
      <div className='right'></div>
      
     
    </div>
  );
}

export default App;
