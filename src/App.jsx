import { useCallback, useEffect, useMemo, useReducer, useRef, useState } from 'react';
import './App.css';
import Header from './components/Header';

function App() {
//  ==========================================
// useReducer
   const initialState = {count : 0}
   const reducer = (state, action) =>{
     switch(action.type){
      case "increase" : {
        return { count : state.count + 1}
      }
      case "decrease" : {
        return { count : state.count - 1}
      }
      case "input" : {
        return { count : action.payload}
      }
      default : {
        return state
      }
     }
   }
   const [state, dispatch] = useReducer(reducer, initialState )


  //  =======================================
  // useCallBack
  const [conts, setConts] = useState(0);

  const newFn = useCallback((count)=> {
     
  },[conts]);

  //  ==========================================
  // useMemo

  const [number, setNumber] = useState(0);
  const [counter, setCounter] = useState(0);

  const  cubeNum = (num) => {
     console.log("calculation done");
     return Math.pow(num, 3)
  }

  const result = useMemo(()=> cubeNum(number), [number]);


  // ===========================================
  // useRef
 const [value, setValue] = useState(0);
 const counted = useRef(10);
 const inputRef = useRef();

 console.log(counted);

 useEffect(()=>{
  counted.current = counted.current + 1;
 });

 const btnClicked = () => {
  // console.log(inputRef)
  inputRef.current.style.background = "blue"
  inputRef.current.classList.toggle("active")
 }
 
  // ============================================
  // useEffect
  const [counts, setCounts] = useState(0);
  const [name, setName] = useState("Saad");

  useEffect(()=>{
     setTimeout(()=>{
      setCounts(prev => prev+1);
     },2000)
  },[counts, name])



  // =============================================
  // UseState
  const [color, setColor] = useState("Red");
  const [count, setCount] =  useState(0);

  const [car, setCar] = useState({
    brand : "Ferrari",
    model : "Roma",
    year : "2023",
    color : "red",
  });

  const changeColor = () => {
     setColor("Blue")
    console.log(color)
  };

  const changeDetails = () => {
    setCar((prev)=>{
      return {...prev, color: "blue", year : "2025"}
    })
  };

  const increaseCount = () => {
    setCount(prev=> prev + 1)
    setCount(prev=> prev + 1)
    setCount(prev=> prev + 1)
    setCount(prev=> prev + 1)

  }

  return (
    <>
      <div className="div">
        <h1>My favt clr is {color}</h1>
        <button onClick={changeColor}>Blue</button>
      </div>
      {/* 2nd */}
      <div className="div">
        <h1>My {car.brand}</h1>
        <h2>Is is a {car.color} {car.model} from {car.year}</h2>
        <button onClick={changeDetails}>Blue</button>
      </div>
      {/* 3rd */}
      <div className="div">
        <h1>Count : {count}</h1>
        <button onClick={increaseCount}>increase by 4</button>
      </div>


      {/* useEffect */}
       
       <div className="div">
        <h1>I have renderes {counts} times!</h1>
       </div>

       {/* useRef */}
       <button onClick={()=> {setValue(prev => prev-1)}}>-1</button>
       <h1>{value}</h1>
       <button onClick={()=> {setValue(prev => prev+1)}}>+1</button>
       <h1>Render count: {counted.current}</h1>

       <input type="text" ref={inputRef} />
       <button onClick={btnClicked}>Click here</button>

       {/* useMemo */}
       <input type="number" value={number} onChange={(e)=> {setNumber(e.target.value)}}/>
       <h1>Cube of the number : {result}</h1>
       <button onClick={()=> setCounter(counter+1)}>Counter++</button>
       <h1>Counter : {counter}</h1>

       {/* useCallBack */}
       <Header newFn={newFn}/>
       <h1>{conts}</h1>
       <button onClick={()=> setConts(prev=> prev+1)}>Click here</button>

       {/* useReducer same as a useState hook */}

       <h1>{state.count}</h1>
       <button onClick={()=> dispatch({type : "increase"})}>Increase</button>
       <button onClick={()=> dispatch({type : "decrease"})}>Descrease</button>
       <br />
       <input value={state.count} type="number" onChange={((e)=> dispatch({ type : "input", payload: Number(e.target.value)}))} />
      </>
  )
}

export default App
