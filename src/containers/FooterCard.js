import React from 'react'

function FooterInfo(props) {
    return (
        <div className='footer-data'>
            <label> {props.data.label} </label>
            <ul>
                {/* {console.log(props.data.info)} */}
                {/* {props.data.info.map(i => <li key={props.data.info}> {i} </li>)} */}
                {/* {props.data.info.map(i => console.log(i))} */}
            </ul>
        </div>
    )
}

export default FooterInfo