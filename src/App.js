import React from 'react';
// import React, { useReducer } from 'react';
import './App.css';
// import ClassCounter from './components/ClassCounter'
// import HookCounter from './components/HookCounter'
// import HookCounterTwo from './components/HookCounterTwo'
// import HookCounterThree from './components/HookCounterThree'
// import HookCounterFour from './components/HookCounterFour'
// import ClassCounterOne from './components/ClassCounterOne'
// import HookCounterOne from './components/HookCounterOne'
// import ClassMouse from './components/ClassMouse'
// import HookMouse from './components/HookMouse'
// import MouseContainer from './components/MouseContainer'
// import IntervalClassCounter from './components/IntervalClassCounter'
// import IntervalHookCounter from './components/IntervalHookCounter'
// import DataFetching from './components/DataFetching'
// import DataFetchingTwo from './components/DataFetchingTwo'
// import ComponentC from './components/ComponentC'
// import CounterOne from './components/CounterOne'
// import CounterTwo from './components/CounterTwo'
// import CounterThree from './components/CounterThree'
// import ComponentAA from './components/ComponentAA'
// import ComponentBB from './components/ComponentBB'
// import ComponentCC from './components/ComponentCC'
// import DataFetchingOneB from './components/DataFetchingOneB'
// import DataFetchingTwoB from './components/DataFetchingTwoB'
// import ParentComponent from './components/ParentComponent'
// import CounterH from './components/CounterH'
// import FocusInput from './components/FocusInput'
// import ClassTimer from './components/ClassTimer'
// import HookTimer from './components/HookTimer'
// import DocTitleOne from './components/DocTitleOne'
// import DocTitleTwo from './components/DocTitleTwo'
// import CounterBOne from './components/CounterBOne'
// import CounterBTwo from './components/CounterBTwo'
import UserForm from './components/UserForm'

// export const UserContext = React.createContext()
// export const ChannelContext = React.createContext()
// export const CountContext = React.createContext()

// const initialState = 0
// const reducer = (state, action) => {
//   switch (action) {
//     case 'increment':
//       return state + 1
//     case 'decrement':
//       return state - 1
//     case 'reset':
//       return initialState
//     default:
//       return state
//   }
// }

function App() {
  // const [count, dispatch] = useReducer(reducer, initialState)
  return (
    <div className="App">
    <UserForm />
    {/*
      <CounterBOne />
      <CounterBTwo />
      <DocTitleOne />
      <DocTitleTwo />
      <HookTimer />
      <ClassTimer />
      <FocusInput />
      <CounterH />
      <ParentComponent />
      <DataFetchingTwoB />
      <DataFetchingOneB />
      Count - {count}
      <CountContext.Provider value={{ countState: count, countDispatch: dispatch }}>
      <ComponentAA />
      <ComponentBB />
      <ComponentCC />
      </CountContext.Provider>
      <CounterThree />
      <CounterTwo />
      <CounterOne />
      <UserContext.Provider value={'Rodrigo'}>
      <ChannelContext.Provider value={'Codeevolution'}>
      <ComponentC />
      </ChannelContext.Provider>
      </UserContext.Provider>
      <DataFetchingTwo />
      <DataFetching />
      <IntervalHookCounter />
      <IntervalClassCounter />
      <MouseContainer />
      <HookMouse />
      <ClassMouse />
      <HookCounterOne />
      <ClassCounterOne />
      <HookCounterFour />
      <HookCounterThree />
      <HookCounterTwo />
      <HookCounter />
      <ClassCounter />
    */}
    </div>
  );
}

export default App;
