import * as React from 'react'
import './Tutorial.scss'
import phone from '../../../assets/phone.png'
import one from '../../../assets/step1.png'
import two from '../../../assets/step2.png'
import three from '../../../assets/step3.png'

export const Tutorial = (props) => {
  return (
    <div className='t-container'>
      <div className='t-container-tutorial'>
        <h1 className='t-container-tutorial-header'>How it works</h1>
        <div className='t-container-tutorial-steps'>
          <div className='t-container-tutorial-steps-step'>
            <img src={one} />
            <h2>Step uno</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt .
            </p>
          </div>
          <div className='t-container-tutorial-steps-step'>
            <img src={two} />
            <h2>Step dos</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt .
            </p>
          </div>
          <div className='t-container-tutorial-steps-step'>
            <img src={three} />
            <h2>Step tres</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt .
            </p>
          </div>
        </div>
      </div>
      <div className='t-container-getapp'>
        <img src={phone} className='t-container-getapp-phone' />
        <div className='t-container-getapp-right'>
          <h2 className='t-container-getapp-right-header'>Get the app</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod.
          </p>
          <button value='submit' className='t-container-getapp-right-button'>
            submit
          </button>
        </div>
      </div>
    </div>
  )
}
