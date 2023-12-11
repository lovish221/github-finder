import React, { useContext } from 'react';
import alertContext from '../../context/alert/AlertContext';

const Alert = () => {

  const alertCon = useContext(alertContext);

  const {alert} = alertCon;

  return (
    (alert !== null && <div className={`alert alert-${alert.type}`}>
        {` `}<i className='fas fa-info-circle' /> {` `} {alert.msg}
    </div>)
  );
}

export default Alert;