import React from 'react'
import './AnswerItem.css'

const AnsweItem = props => {
    // console.log(props)
    const cls = ['AnswerItem'];

    if (props.state) {
        // В props.state лежит succes или error *
        cls.push(props.state)
    }

    return (
        <li
            className={cls.join(' ')}
            onClick={() => props.onAnswerClick(props.answer.id)}
        >
            {props.answer.text}
        </li>
    )
}

export default AnsweItem
