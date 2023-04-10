
import './App.css';
import { useEffect, useState } from 'react';
import { Button, ButtonGroup } from '@chakra-ui/react';

function App() {

    const [data,setData] = useState([]);
    let [count,setcount] = useState(1)

    let get =async () => {
      let req = await fetch (`https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/getrestaurants?limit=10&page=${count}`)
      let  pal = await req.json();
      setData(pal.data)
    }
    useEffect(() => {
      get();
    },[count]);

    let pre = () => {
      if(count==1){
        setcount(count=1)
      }
      else{
        setcount(count-1)
      }
    }
    let next = () => {
      setcount(count+1)
    }
    return (
      <div>
      <div style={{display:'flex',flexWrap:'wrap'}}>
        {
         data.map((ele,i)=>{

          return(
           
            <div key={i}>
              <center>
              <div className='box'>
            <img src={ele.image}></img>
            <h1>id: {ele.id}</h1>
            <h2>name: {ele.name}</h2>
            <h2>rating: {ele.rating}</h2>
            <h2>type: {ele.type}</h2>
            <h2>number_of_votes: {ele.number_of_votes}</h2>
            <h2>price_starts:{ele.price_starts_from}</h2>
            

            </div>
            
            </center>
            
            </div>
            
          );
         })
        }
      </div>
      <center>
      <div >
      <Button colorScheme='blue' onClick={()=>pre()}>back</Button>
      <Button colorScheme='blue' onClick={()=>next()}>next</Button>
    </div>
    </center>
    </div>
      );
    }
   

export default App;
