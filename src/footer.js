import React from 'react';
import PropTypes from 'prop-types';

export const Footer = (params,props) => 
  
    (
      
	<div className="page-header">
		<address>{props.footerName}<br/>{params.userName}</address>
	</div>
        
    )
  
// Default Props value goes here
Footer.defaultProps = {
footerName:'Axios CopyRight goes here....'
}


// PropTypes goes here
Footer.propTypes = {
footerName:PropTypes.oneOfType([PropTypes.string, PropTypes.number])
}


