import React from 'react'

const validation = ( props ) => {
	return (
		props.textLength > 5 ?
			<p>Text long enough</p> :
			<p>text too short</p>
	)
};

export default validation