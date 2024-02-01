import React, { useState } from 'react'

export type TodoData = {
    id: string | number,
    text: string,
    color: string,
    order?: number
}


type Props = {
    data: TodoData,
    remove: ()=>void,
    update: (text:string)=>void,
}

export default function TodoItem({data, remove, update}: Props) {
  const [inputText, setInputText] = useState<string>("");
  const [showInput, setShowInput] = useState<Boolean>(false);
  return (
    <div style={{backgroundColor:data.color}} id={`${data.id}`}>
        <div>
            {showInput ? (
                <input type="text" value={inputText} onChange={(e)=>{
                    setInputText(e.target.value);
                }} />)
                : data.text}
        </div>
        <div>
            <button onClick={()=>{
                if (showInput){
                    update(inputText);
                    setShowInput(false);
                } else{
                    setShowInput(true);
                }
                
            }}>수정</button>
            <button onClick={()=>{
                remove()
            }}>삭제</button>
        </div>
    </div>
  )
}