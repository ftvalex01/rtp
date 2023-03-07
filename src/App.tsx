import React, { useEffect, useState, useRef} from 'react';
import './App.css';
import Form from './components/Form';
import List from './components/List';
import { Sub } from './types';

const INITIAL_STATE = [
  {
    nick:'dapelu',
    subMonths:3,
    avatar:'https://i.pravatar.cc/150?u=dapelu',
    description: 'Dapelu hace de moderador a vecees'
  },
  {
    nick:'sergio_serrano',
    subMonths:7,
    avatar:'https://i.pravatar.cc/150?u=sergio_serrano',
  }
]


interface AppState {
  subs: Array<Sub>
  newSubsNumber:number
}

function App() {

//const [number , setNumber ] = useState<number>(5)
const [subs,setSubs] = useState<AppState["subs"]>([])
const [newSubsNumber,setNewSubsNumber] = useState<AppState["newSubsNumber"]>(0)
const divRef = useRef<HTMLDivElement>(null)


useEffect(() =>{
  setSubs(INITIAL_STATE)
},[])

const handleNewSub = (newSub:Sub):void =>{
  setSubs(subs => [...subs,newSub])
  setNewSubsNumber(newSubsNumber + 1)
}

  return (
    <div className="App" ref={divRef}>
      <h1>Alex Subs</h1>
      <List subs={subs}/>
      New Subs :{newSubsNumber}
      <Form onNewSub={handleNewSub}></Form>
    </div>
  );
}

export default App;
