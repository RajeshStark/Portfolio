import React from 'react';
import "./Autotype.css";


const content = () => {
	const message = "Hi! i'm Rajesh Sangapogu";
	// let i =0 ;
	// for(i=0; i<message.length;i++){
	return (
		<div>
			<h1 className="typewriter">
				{message}
			</h1>
		</div>

	)

}



export default content;