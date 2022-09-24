import React from 'react';

const Card = ({name,email,id}) => {
		
		return(
          <div className = 'tc bg-lightest-blue hover-bg-light-yellow dib br3 pa3 ma3 bw2 shadow-5 grow'>
            <img alt='robots' src={`https://robohash.org/ ${id} ?size=200x200`}/>
            <div>
             <h3> {name} </h3>
             <p> {email} </p>
            </div>
          </div>
		);
	}


export default Card;