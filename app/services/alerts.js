/* ==========================================================================
   Show Alert Messages
   ========================================================================== */
import React, { Component } from "react"
import Alert from 'react-bootstrap/lib/Alert'

export const alertMessage = (msg = '',type = '') => {
   if(msg.length > 0)
   	  return (  <Alert bsStyle={type}> {msg} </Alert> )
    else
      return ""	   
}
