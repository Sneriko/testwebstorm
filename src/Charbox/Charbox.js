import React from 'react'
import './Charbox.css'


const charbox = ( props ) => {
	return (
		<div className={'box'} onClick={props.click}>
			{props.letter}
		</div>
	)
};

export default charbox