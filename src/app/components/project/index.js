import React from 'react'
import MilestoneThumbnail from './milestones/thumbnail'

export default ({ params }) => (
  <div>
    <h1>Project: Kitchen Renovation</h1>
    <p>Project ID: {params.id}</p>
    <h2>Inspiration +</h2>
    <h2>Products +</h2>
    <h2>Tools +</h2>
    <h2>Milestones +</h2>
    <MilestoneThumbnail projectId={params.id}/>

  </div>
)
