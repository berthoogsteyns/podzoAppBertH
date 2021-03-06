import * as React from 'react'
import './Footer.scss'

type Props = {}

export const Footer = (props) => {
  return (
    <div className='footer'>
      <div className='footer-left'>
        <p className='footer-left-awesomity'>
          Challenge by <span className=''>Awesomity Ltd</span>{' '}
        </p>
      </div>
      <div className='footer-right'>
        <p className='footer-right-name'>
          Developed by <span className=''>Bert Hoogsteyns</span>{' '}
        </p>
      </div>
    </div>
  )
}
