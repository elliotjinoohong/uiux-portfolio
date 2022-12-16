import React from 'react';
import './Introduction.css'

interface IntroductionProps {
    title: string;
    blurb: string;
}

export const Introduction = (props: IntroductionProps) => {
    return (
        <div className="introduction-wrapper">
            {/* {CoolTitle()} */}
            {/* <div className="introduction-title">
                {title}
            </div> */}
            <div className="introduction-blurb">
                
                <div>
                    Welcome to my UIUX final portfolio!
                </div>
                <div style={{marginTop: '30px'}}>
                    I'm a UIUX designer passionate about creating functional and accessible digital experiences. I hold the view that accessibility does not need to be boring; nor does accessibility have to be hard! I hope to optimize the web for accessibility so that all users can express themselves creatively online.
                </div>
            </div>
        </div>
    )
}