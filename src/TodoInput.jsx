import { useState } from "react";

function TodoInput({onSubmit}){

    const [inputVal,setInputValue]= useState('');

    function onFormSubmit(e){
        e.preventDefault();
        onSubmit?.(inputVal);
        setInputValue('');
    }
    return(
        <>

            <form onSubmit={onFormSubmit}>
                <input type="text" 
                placeholder="Add your todos here"
                onChange={(e)=>{setInputValue(e.target.value)}}
                value={inputVal}
                />
                <button>Add todo</button>
            </form>
            
        </>
    )
}

export default TodoInput;