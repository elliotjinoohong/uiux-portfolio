import React from 'react';
import './PortfolioPiece.css'
import { Image } from '@chakra-ui/react'

export interface PortfolioPieceProps {
    title: string;
    blurb: string;
    imgSrc: string;
    setIsModalOpen: (x: boolean) => void;
}

export const PortfolioPiece = (props: PortfolioPieceProps) => {
    const { title, blurb, imgSrc, setIsModalOpen} = props
    return (
        <div className="portfolio-piece-wrapper" onClick={(e) => {setIsModalOpen(true)}}>
            <div className="image-wrapper">
                <Image src={imgSrc} alt={title + ": " + blurb} borderRadius='20px 0px 0px 20px' fit='cover' width="360px" height="300px" />
            </div>
            <div className="text-wrapper">
                <div className="portfolio-piece-title">
                    {title}
                </div>
                <div className="portfolio-piece-blurb">
                    {blurb}
                </div>
            </div>
        </div>
    )
}