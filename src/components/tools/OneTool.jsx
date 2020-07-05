import React from 'react'
import { Link } from 'react-router-dom';

export default function OneTool(props) {

    const { title, text, path } = props.tool;

    return (
        <div>
            <p>{title}</p>
            <p>{text}</p>
            <Link to={path} >Idi na {title}</Link>
        </div>
    )
}
