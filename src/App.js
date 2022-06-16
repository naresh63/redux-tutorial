import logo from './logo.svg';
import './App.css';
import { incNumber,decNumber } from './actions/action';

import { useSelector,useDispatch } from 'react-redux';

function App() {
 const mystate= useSelector((state)=>state.changeTheNumber);
const dispatch = useDispatch()
  return (
    <div className="App">
      <h1> result : {mystate}</h1>
     <button onClick={()=>dispatch(incNumber(2))}  >+ </button> <br/> 
     <button onClick={()=>dispatch(decNumber(1))} >- </button>
    </div>
  );
}
export default App;
