import './App.scss';
import Header from '../Header/Header'
import '../../fetch'
import React, {useState, useEffect} from 'react'
import getData from '../../fetch';
import People from '../People/People'



function App() {

  const [data, setData] = useState ([])
 



  useEffect(()=>{
    getData().then(data => setData(data))
  },[])

  
  


  return (
    <div className="App">
      <Header/>
      <People data={data} />
    </div>
  );
}

export default App;
