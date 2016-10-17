import React from 'react'

export default ({ params }) => (
  <div>
    <p>Milestone details</p>
    <p>Project ID: {params.projectId}</p>
    <p>Milestone ID: {params.milestoneId}</p>
  </div>
)
