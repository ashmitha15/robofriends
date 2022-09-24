import React from 'react';

const Searchbox = ({searchValueChange}) => {
	return(
		   <div className= 'box-shadow '>
             <input className= 'bg-lightest-blue b--dark-blue pa2 ba1 ma2' type= 'search' placeholder = 'search robots' onChange = {searchValueChange} />

           </div>		
		);
}

export default Searchbox;