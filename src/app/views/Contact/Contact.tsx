import * as React from 'react'
import { FaGooglePlusG } from 'react-icons/fa'
import { GrTwitter } from 'react-icons/gr'
import { GrSnapchat } from 'react-icons/gr'
import { FaLinkedinIn } from 'react-icons/fa'
import './Contact.scss'
import { useMediaQuery } from 'react-responsive'

type Props = {}

export const Contact = React.memo((props: Props) => {

  const isMobile = useMediaQuery({ maxDeviceWidth: 500 })

  return (
    <div className='c-container'>
      
      <div className='c-container-left'>
        <h1 className='c-container-left-header'>Contact us</h1>
        <div className='c-container-left-info'>
          <p>T: +250 788 000 000</p>
          <p>E: yveshonore14@gmail.com</p>
          <p>A: Kimihurura, Kigali</p>
        </div>
        <div className='c-container-left-social'>
          <a href='#'>
            <FaGooglePlusG />
          </a>
          <a href='#'>
            <GrTwitter />
          </a>
          <a href='#'>
            <GrSnapchat />
          </a>
          <a href='#'>
            <FaLinkedinIn />
          </a>
        </div>
      </div>

      <div className='c-container-divider'></div>

      {isMobile ? <hr className='c-container-horizontal'/> : ''}

      <div className='c-container-right'>
        <form className='c-container-right-form'>
          <input
            className='c-container-right-form-name'
            type='text'
            placeholder='Name'
          />
          <input
            className='c-container-right-form-email'
            type='text'
            placeholder='Email'
          />
          <textarea
            className='c-container-right-form-message'
            placeholder='Message'
          />
          <button className='c-container-right-form-button' type='submit'>
            Submit
          </button>
        </form>
      </div>
    </div>
  )
})
