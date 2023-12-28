import { useReducer } from "react"

const test = () => {
  const initstate = 0;
  function reducer(state,action){
    switch(action.type){
      case 'Increment' : return (state + 1) ;
      case 'Decrement' : 
      if(state <= 0){
        alert(`could decremnt state becuase its ${state}`)
      }
      else{ 
      return (state - 1) } ;

      default : return state
    }
    
  }
  const [state,dispatch] = useReducer(reducer,initstate)

  return (
    <div className='body w-full min-h-[50vh] h-fit mt-[3em] flex flex-col gap-3 p-3 bg-blue-800 text-white'>
      <h1>The State is {state}</h1>
      <button onClick={()=>{
        dispatch({type:'Increment'})
      }}>Increment</button>

       <button onClick={()=>{
        dispatch({type:'Decrement'})
      }}>Decrement</button>
  </div>
  )
}

export default test