import React, {PropTypes} from 'react'

const Detailed = ({ issue }) => {
  console.log(issue)
  return (
    <div>
      <div>Title</div>
      {issue[0].title}
      <div>Body</div>
      {issue[0].body || 'Описание отсутствует'}
    </div>
  )
}

Detailed.propTypes = {
  issue: PropTypes.array.isRequired
}

export default Detailed
