import React from 'react'

export default function TodoDelete() {
    const [text, setText] = "" // article 
    // 안녕하세요. 블록딜로 장외처분했습니다.
    // token1: 안녕하세요. "type": "normal"
    // token2: 블록딜 "type": "tooltip"
    // token3: 로 "type": "normal"
    // token4: 장외처분"type": "tooltip"
    // token5: 했습니다."type": "normal"
    const [tooltip, setTooltip] = [{
        start: 7,
        end: 9,
        desc: "블록딜 설명"
    },
    {
        start: 12,
        end: 15,
        desc: "장외처분 설명"
    }
    ]
    // const [changedText, setChangedText] = ""

    const renderText = () => {
        // token으로 나누기 start앞까지 토큰으로 자르고
        [{
            'text': "내용",
            "type": "normal"

        },
        // start~end까지 토큰으로 자르고
        {
            "text": "블록딜",
            "type": "tooltip"
        }]
        // end~그 다음 토큰까지 자르고

    }
    // text에서 t


    return (
        <div>TodoDelete copy</div>
    )
}



rfac