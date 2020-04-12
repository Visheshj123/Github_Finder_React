import React, { useContext } from 'react'
import PropTypes from 'prop-types'
import alertContext from '../../context/alert/AlertContext'

const Alert = (props) => {
  const AlertContext = useContext(alertContext)


    if(AlertContext.alert !== null){
      return(  <div className={`alert alert-${AlertContext.alert.type}`}>
        <i className= "fas fa-info-circle"></i> {AlertContext.alert.msg}
        </div>)
      } else{
        return (null);
      }




}

export default Alert
