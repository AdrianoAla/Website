import React from 'react';

import './facade.css'

import { useState } from 'react';

const IconSVG = () => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
        width="100" height="100"
        viewBox="0,0,256,256">
        <g fill="none" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style={{"mix-blend-mode": "normal"}}>
            <g transform="scale(2.56,2.56)">
                <path d="M50,12.5c-20.711,0 -37.5,16.789 -37.5,37.5c0,20.711 16.789,37.5 37.5,37.5c20.711,0 37.5,-16.789 37.5,-37.5c0,-20.711 -16.789,-37.5 -37.5,-37.5z" fill="#ffffff"></path>
                
                <g fill="#583993">
                    <path d="M39.7,68l30.6,-17l-30.6,-17z">
                    </path>
                </g>
            </g>
        </g>
        </svg>
    )
}




const createStyles = (width, height, thumbnail) => {
    return { 
        background: `
            linear-gradient(
                rgba(0, 0, 0, 0),
                rgba(0, 0, 0, 0)
            ),
            url(${thumbnail})
        `,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
    }
}


function GenericVideoFacade({
        videoURL,
        width,
        height,
        thumbnail,
        border,
        style,
    }) {
    
    const [loading, setLoading] = useState(false)
    const [show, setShow] = useState(false)
    
    return (
        <div 
            className={`facade-div ${border ? `facade-border` : ``}`}
            style={(style == null) ? (show ? createStyles(width, height, undefined) : createStyles(width, height, thumbnail)) : style}
            onClick={() => { setShow(true) }}
        >

            {/* Conditionally render iframe or play button */}

            {(loading || show) ? ( 
                    <iframe 
                        className="facade-iframe"
                        title='Video'
                        style={{
                            backgroundColor: '#000000',
                            borderRadius: '25px',
                        }}
                        src={videoURL} 
                        allowFullScreen
                        onLoad={() => { setLoading(false); setShow(true) }}
                    />
            ) : (
                <IconSVG/>
            )}
        </div>
)
    
}

export { GenericVideoFacade};