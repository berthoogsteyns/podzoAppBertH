import * as React from 'react'
import './Footer.scss'

type Props = {}

export const Footer = (props) => {
  return (
    <div className='footer'>
      <p className='footer-awesomity'>
        Challenge by <span className=''>Awesomity Ltd</span>{' '}
      </p>
      <p className='footer-name'>
        Developed by <span className=''>Bert Hoogsteyns</span>{' '}
      </p>
    </div>
  )
}
