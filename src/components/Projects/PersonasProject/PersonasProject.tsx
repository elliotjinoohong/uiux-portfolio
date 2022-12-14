import React, { useState } from 'react';
import { Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Box, Button, Image, Link, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Tab, TabList, TabPanel, TabPanels, Tabs } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { PortfolioPiece } from '../../PortfolioPiece'
import './PersonasProject.css'
import '../Modal.css'

export const PersonasProject = () => {
    const cardTitle= "Personas and Storyboarding @ CVS"
    const cardBlurb= "Creating personas and storyboarding with CVS's self-checkout kiosks."
    const cardImgSrc= "https://i.imgur.com/fc0GriQ.png"
    const [isModalOpen, setIsModalOpen] = useState(false)
    return (
        <>
            <PortfolioPiece title={cardTitle} blurb={cardBlurb} imgSrc={cardImgSrc} setIsModalOpen={setIsModalOpen}/>
            <Modal isOpen={isModalOpen} onClose={() => {setIsModalOpen(false)}} size="6xl">
                <ModalOverlay/>
                <ModalContent>
                <ModalHeader style={{fontSize: "2.3rem"}} className="modal-header">Personas and Storyboarding @ CVS</ModalHeader>
                <ModalCloseButton/>
                <ModalBody style={{paddingLeft: '50px', paddingRight: '50px', paddingBottom: '20px'}}>
                    <div className="heading" style={{marginTop: '5px'}}>
                        Part 1: Context
                    </div>
                    <div className="text-body">
                        CVS was one of the first companies to use self-checkout machines at a nation-wide scale. Since their initial investment in this interface, CVS now has more than 15,000 self-checkout machines nationwide. This then begs the question, with so many years of experience and thousands of daily purchases made through these machines, how has CVS optimized the accessibility of their self-checkout kiosks? This Personas & Storyboarding assignment will investigate and assess the accessible design of CVS’ self-checkout machines and conclude what lessons can be learned from CVS in this space.
                    </div>
                    <div className="heading">
                        Part 2: The Interface
                    </div>
                    <div style={{display: 'flex'}}>
                        <Image src="https://cs1300-uiux-portfolio.web.app/sketch.jpg" width="600px"/>
                        <div>
                            <div className="subheading" style={{marginLeft:'0', marginTop: '25px'}}>
                                Accessibility & design concerns
                            </div>
                            <div className="text-body" style={{marginLeft:'0', marginTop: '10px'}}>
                                CVS' self-checkout kiosks are made up of 16 components. While the bright light up top will help those who are deaf, there is no element to guide users to an available machine for those who are visually impaired.
                            </div>
                            <div className="text-body" style={{marginLeft:'0'}}>
                                The lack of indication as to which side of the kiosk is meant for loading and which is meant for unloading. This is inaccessible and relies on users to intuitively know that items should go from left to right.
                            </div>
                        </div>
                    </div>
                    <div className="heading">
                        Part 3: Recording Observations
                    </div>
                    <div className="subheading">
                        The interview
                    </div>
                    <div className="QA-box">
                        <div className="Q" style={{display: 'flex'}}>
                            <div style={{width: '70px', borderRight: 'solid'}}>
                                Q:
                            </div>
                            <div style={{marginLeft: '10px'}}>
                                Why did you choose to use the self-checkout machine instead of the cashier today?
                            </div>
                        </div>
                        <div className="A" style={{display: 'flex', justifyContent: 'left'}}>
                            <div style={{borderRight: '1px', width: '20px'}}>
                                A:
                            </div>
                            <div className="answers" style={{marginLeft: '30px'}}>
                                <ul>
                                    <li>All three users cited speed as the primary reason for using the self-checkout kiosk.</li>
                                    <li>One user explained that they prefered not interacting with another human. They particularly liked that no one knew what they were purchasing.</li>                                
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="text-body">
                        An observation of 3 randomly selected CVS customers who used the self-checkout kiosk was done to build an idea as to how the average person might interact with the interface. After this observation, each individual was interviewed with the following questions:
                        <ol>
                            <li className="list-1st-layer">Why did you choose to use the self-checkout machine instead of the cashier today?</li>
                            <li className="list-1st-layer">Do you always use the self-checkout machines? If so, what makes you keep coming back?</li>
                            <li className="list-1st-layer">Did you have any trouble navigating through the menus/steps?</li>
                            <li className="list-1st-layer">Can you describe to me the steps you progressed through to complete your purchase today? (This is to investigate what sort of mental model the user has after having used the machine).</li>
                            <li className="list-1st-layer">Did you have any items that you didn’t know how to scan?</li>
                            <li className="list-1st-layer">Were there any hiccups or confusions during the process of using this machine?</li>
                        </ol>
                    </div>
                    <div className="subheading">
                        Summarized Responses
                    </div>
                    <div className="text-body">
                        <ul>
                            <li className="list-1st-layer">hihihi</li>
                        </ul>
                    </div>
                    <hr style={{marginTop: '30px', marginBottom: '10px'}}></hr>
                    <Link href="https://cs1300-uiux-portfolio.web.app/" isExternal style={{marginLeft: '10px'}}>
                        More on Personas & Storyboarding <ExternalLinkIcon mx='2px' />
                    </Link>                 
                </ModalBody>
                <ModalFooter/>
                </ModalContent>
            </Modal>
        </>
    )
}