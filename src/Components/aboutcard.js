import './aboutcard.css'

import React from 'react'

const aboutcard = () => {
  return (
    <div className='aboutcard'>
      <div className="card-container">
        <div className="card">
            <h2>~ Vision ~</h2>
            <span className='bar'></span>
            <p className='btc'>To become a multi-disciplined and learner-oriented university. To closely associate with and responsive to the industry. To create supportive and caring environment for staff and students. To improve R&D activities in areas of national priority.</p>
        </div>
        <div className="card">
            <h2>~ Mission ~</h2>
            <span className='bar'></span>
            <p className='btc'>The University shall undertake programmes and projects for development of human resources, both through formal and non-formal delivery systems, in areas of professional pursuits in all walks of human endeavours, with accent on relevance, value addition, societal needs and futuristic pilot projects.</p>
        </div>
        <div className="card">
            <h2>~ Quality Policy ~</h2>
            <span className='bar'></span>
            <p className='btc'>The University is for individuals who wish to advance in the workplace, and emerge as competent professionals and noble citizens. The University meets these needs by delivering applied and professional programmes, primarily at the graduate and higher level, that anticipate and respond to the changing world and global economy. We are committed to the highest level of quality, teaching excellence and applied research that pursues solutions to real world problems.</p>
        </div>
      </div>
    </div>
  )
}

export default aboutcard
