import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import spinner from './spinner.gif'

const Spinner = (props) => {
  return (
    <Fragment>
      <img src={spinner} alt="loading.." style = {{width: '200px', margin: 'auto', display: 'block'}}/>
    </Fragment>
  )
}

export default Spinner
