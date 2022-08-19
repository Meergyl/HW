import React, { useCallback, useReducer } from 'react'

const formReducer=(state,action)=>{
    if(action.type==='ADD_EMAIL'){
        return{
            value:action.emailValue,
            isvalid:action.emailValue.includes("@")
        }
    }
    if(action.type==="PASTE"){
        alert()
        return state
        
    }
}

const TodoForm=()=> {
    const[email,dispatch]=useReducer(formReducer,{
        value:"",
        isvalid:false,
        cuttedValue:""
    })
    const emailChangeHandler=(event)=>{
        const emailValue=event.target.value;
        dispatch({type:'ADD_EMAIL',emailValue})
        console.log(email)

    }

    const cutHandler=(event)=>{
       
        dispatch({type:"SAVE_CUT",cutValue:email.value})
        dispatch({type:"CUT"})
    }
    const pasteHandler=(event)=>{
        dispatch({type:"PASTE"})
    }
  return (
    <>
    <input type="email" onChange={ emailChangeHandler}
    onCut={cutHandler}
    OnPaste={pasteHandler}></input>
    <div>{email.value}</div>
    </>
    
  )
}

export default TodoForm