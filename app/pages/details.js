import React from 'react'

import Detailed from '../containers/detailed'

const Details = ({ params: { id } }) => {
  return (
    <Detailed id={id} />
  )
}

export default Details
