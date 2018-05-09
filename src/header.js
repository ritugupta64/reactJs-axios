import React from 'react';
import PropTypes from 'prop-types';

export const Header = props => 
  
    (
      
	<div className="page-header">
		<h1>{props.projectName}</h1>
	</div>
        
    )
  
// Default Props value goes here
Header.defaultProps = {
projectName:'Axios'
}


// PropTypes goes here
Header.propTypes = {
projectName:PropTypes.string
}


