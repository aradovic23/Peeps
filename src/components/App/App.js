import './App.scss';
import Header from '../Header/Header'
import '../../fetch'
import React, {useState, useEffect} from 'react'
import getData from '../../fetch';
import People from '../People/People'
import Footer from '../Footer/Footer'

function App() {

  const [data, setData] = useState ([])
  const [filtered, setFiltered] = useState ([])
  const [src, setSrc] = useState('');
  const [grid, setGrid] = useState(true);


  function gridChange (){
    setGrid(!grid)
  }


  function getRefresh (){
    getData().then(data => 
      setData(data)
    )
  }

    useEffect(()=>{
      getData().then(data => {
        setData(data);
        setFiltered(data)
      })
    },[])


  useEffect(() => {
    setFiltered(data.filter(e => (
      e.name.first.toLowerCase().includes(src.toLowerCase()) ||
      e.name.last.toLowerCase().includes(src.toLowerCase())
    )))
  }, [data, src])



 return (
    <div className="App">
      <Header refresh={getRefresh} grid={gridChange}/>
      <People grid={grid} data={filtered} inputVal={(arg) => setSrc(arg)}/>
      <Footer/>
    </div>
  );

 }
export default App;
