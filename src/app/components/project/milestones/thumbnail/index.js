import React from 'react'
import { Link } from 'react-router'

export default ({ projectId }) => (
  <div>
    <p>Milestone thumbnail</p>
    <Link to={`${projectId}/milestones/1`}>Go to milestone 1 details</Link>
  </div>
)
