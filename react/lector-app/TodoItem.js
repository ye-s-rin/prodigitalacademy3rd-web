import React, { useEffect, useState } from 'react'

export default function TodoItem({todo, remove, update}) {
    const [mode, setMode] = useState('normal')
    
    const [inputText, setInputText] = useState('');
    useEffect(()=>{
        setInputText(todo.title)
    }, [todo])
    
    return (
    <li 
        style={{backgroundColor: todo.color}}>
        <div>
            {mode==='update' ? <input value={inputText} type="text"  />:
             mode==='normal' ? todo.title :
             null
            }
            
        </div>
        
        <div onClick={(e)=>{
            // 삭제되는 코드
            remove()
        }} style={{cursor: 'pointer'}}>
            X
        </div>

        <div onClick={(e)=>{
            if (mode ==='normal'){
                setMode('update');
            } else{
                update();
                setMode('normal');
            }
            
        }}>
            수정
        </div>
    </li>
  )
}