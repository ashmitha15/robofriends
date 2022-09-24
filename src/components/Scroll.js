import React from 'react';

const Scroll = (props) => {
	return(
           <div style = {{ overflowY:'auto', width:'100%' , border:'1px solid black', height:'100%'}}>
             {props.children};
           </div>
		);
};


export default Scroll;