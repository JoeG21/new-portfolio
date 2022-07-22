import React from 'react'

function FooterInfo(props) {
    return (
        <div className='footer-data'>
            <label> {props.data.label} </label>
            <ul>
                {props.data.info.map(i => <li key={i.key}> {i} </li>)}
            </ul>
        </div>
    )
}

export default FooterInfo