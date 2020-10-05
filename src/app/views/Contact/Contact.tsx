import * as React from 'react'
import { FaGooglePlusG } from 'react-icons/fa'
import { GrTwitter } from 'react-icons/gr'
import { GrSnapchat } from 'react-icons/gr'
import { FaLinkedinIn } from 'react-icons/fa'
import './Contact.scss'

type Props = {}

export const Contact = React.memo((props: Props) => {
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

      <div className='c-container-rigth'>
        <form className='c-container-rigth-form'>
          <input
            className='c-container-rigth-form-name'
            type='text'
            placeholder='Name'
          />
          <input
            className='c-container-rigth-form-email'
            type='text'
            placeholder='Email'
          />
          <input
            className='c-container-rigth-form-message'
            type='text'
            placeholder='Message'
          />
          <button className='c-container-rigth-form-button' type='submit'>
            Submit
          </button>
        </form>
      </div>
    </div>
  )
})
