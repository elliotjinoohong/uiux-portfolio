import React from 'react';
import './Introduction.css'

interface IntroductionProps {
    title: string;
    blurb: string;
}

export const Introduction = (props: IntroductionProps) => {
    const { title, blurb } = props
    return (
        <div className="introduction-wrapper">
            <div className="introduction-title">
                {title}
            </div>
            <div className="introduction-blurb">
                {blurb}
            </div>
        </div>
    )
}