import React from 'react'
import './FirstPage.scss'

const FirstPage = () => {
    return (
        <div className="first-page">
            <div className="bg">
            </div>
            <div className="fp-left">
                <div className='text'>
                    <h1 className='fp-title1'>HIRE A MODEL OR</h1>
                    <h1 className='fp-title2'>BECOME ONE</h1>
                </div>
                <div className="row">
                    <div className="input1">
                        <div className="icon"></div>
                        <input type='text' placeholder='Female Models' />
                        <div className="icon-down"></div>
                    </div>
                    <div className="input2">
                        <div className="icon"></div>
                        <input type='text' placeholder='Find Location' />
                        <div className="icon-down"></div>
                    </div>
                    <button>
                        <p>Find Model</p>
                    </button>
                </div>
            </div>
            <div className="fp-right">
                
                <div className="first-image">
                </div>
                <div className="second-image">
                </div>
            </div>
        </div>
    )
}

export default FirstPage