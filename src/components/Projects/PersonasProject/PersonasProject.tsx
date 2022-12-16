import React, { useState } from 'react';
import { Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Box, Button, Image, Link, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Tab, TabList, TabPanel, TabPanels, Tabs } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { PortfolioPiece } from '../../PortfolioPiece'
import './PersonasProject.css'
import '../Modal.css'
import JoyUICard from '../../JoyUICard/JoyUICard';

export const PersonasProject = () => {
    const cardTitle= "Personas and Storyboarding @ CVS"
    const cardBlurb= "Creating personas and storyboarding with CVS's self-checkout kiosks."
    const cardImgSrc= "https://i.imgur.com/fc0GriQ.png"
    const cardTags = ["Interviews", "Physical"]
    const [isModalOpen, setIsModalOpen] = useState(false)
    return (
        <>
            <JoyUICard title={cardTitle} imgSrc={cardImgSrc} tags={cardTags} setIsModalOpen={setIsModalOpen} />
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
                    <Accordion defaultIndex={[0]} allowMultiple style={{marginTop: '10px', marginBottom: '15px'}}>
                        <AccordionItem style={{borderRadius: '10px', border: 0, marginBottom: '3px'}}>
                            <h2>
                            <AccordionButton style={{borderRadius: '10px', border: 0, backgroundColor: '#EEEEEE'}}>
                                <Box as="span" flex='1' textAlign='left' fontSize='lg'>      
                                    Q: Why did you choose to use the self-checkout machine instead of the cashier today?
                                </Box>
                                <AccordionIcon />
                            </AccordionButton>
                            </h2>
                            <AccordionPanel fontSize='lg' pb={4}>
                            <div className="answers" style={{marginLeft: '30px'}}>
                                <ul>
                                    <li>All three users cited speed as the primary reason for using the self-checkout kiosk.</li>
                                    <li>One user explained that they prefered not interacting with another human. They particularly liked that no one knew what they were purchasing.</li>                                
                                </ul>
                            </div>
                            </AccordionPanel>
                        </AccordionItem>
                        <AccordionItem fontSize='lg' style={{borderRadius: '10px', border: 0, marginBottom: '3px'}}>
                            <h2>
                            <AccordionButton style={{borderRadius: '10px', border: 0, backgroundColor: '#EEEEEE'}}>
                                <Box as="span" flex='1' textAlign='left' fontSize='lg'>
                                    Q: Do you always use the self-checkout machines? If so, what makes you keep coming back?
                                </Box>
                                <AccordionIcon />
                            </AccordionButton>
                            </h2>
                            <AccordionPanel pb={4}>
                                <div className="answers" style={{marginLeft: '30px'}}>
                                    <ul>
                                        <li>All three users said that they used the self-checkout machines most of the time.</li>
                                        <li>Users would only use the cashier if the self-checkout machines had a line.</li>                                
                                    </ul>
                                </div>
                            </AccordionPanel>
                        </AccordionItem>
                        <AccordionItem fontSize='lg' style={{borderRadius: '10px', border: 0, marginBottom: '3px'}}>
                            <h2>
                            <AccordionButton style={{borderRadius: '10px', border: 0, backgroundColor: '#EEEEEE'}}>
                                <Box as="span" flex='1' textAlign='left' fontSize='lg'>
                                    Q: Did you have any trouble navigating through the menus/steps?
                                </Box>
                                <AccordionIcon />
                            </AccordionButton>
                            </h2>
                            <AccordionPanel pb={4}>
                                <div className="answers" style={{marginLeft: '30px'}}>
                                    <ul>
                                        <li>One user stated that they were often confused as to which side was the loading and which side was the unloading counter.</li>
                                        <li>One stated that because they were visually impaired, they appreciated the green light that signalled that the machine was available.</li>                                
                                    </ul>
                                </div>
                            </AccordionPanel>
                        </AccordionItem>
                        <AccordionItem fontSize='lg' style={{borderRadius: '10px', border: 0, marginBottom: '3px'}}>
                            <h2>
                            <AccordionButton style={{borderRadius: '10px', border: 0, backgroundColor: '#EEEEEE'}}>
                                <Box as="span" flex='1' textAlign='left' fontSize='lg'>
                                    Q: Can you describe to me the steps you progressed through to complete your purchase today?
                                </Box>
                                <AccordionIcon />
                            </AccordionButton>
                            </h2>
                            <AccordionPanel pb={4}>
                                <div className="answers" style={{marginLeft: '30px'}}>
                                    <ul>
                                        <li>This question was to investigate what sort of mental model the user has after having used the machine.</li>
                                        <li>All users followed the following steps:
                                            <ol style={{marginLeft: '20px'}}>
                                                <li>Place items on lefthand side.</li>
                                                <li>Start scanning items.</li>
                                                <li>Scan CVS card.</li>
                                                <li>Touch screen to pay.</li>
                                                <li>Pay with credit card.</li>
                                            </ol>
                                        </li>    
                                        <li>One individual accidentally placed their items on the right-hand side causing confusion at first.</li>                    
                                    </ul>
                                </div>
                            </AccordionPanel>
                        </AccordionItem>
                        <AccordionItem fontSize='lg' style={{borderRadius: '10px', border: 0, marginBottom: '3px'}}>
                            <h2>
                            <AccordionButton style={{borderRadius: '10px', border: 0, backgroundColor: '#EEEEEE'}}>
                                <Box as="span" flex='1' textAlign='left' fontSize='lg'>
                                    Q: Did you have any items that you didn’t know how to scan?
                                </Box>
                                <AccordionIcon />
                            </AccordionButton>
                            </h2>
                            <AccordionPanel pb={4}>
                                <div className="answers" style={{marginLeft: '30px'}}>
                                    <ul>
                                        <li>All individuals were able to scan all their items.</li>                  
                                    </ul>
                                </div>
                            </AccordionPanel>
                        </AccordionItem>
                        <AccordionItem fontSize='lg' style={{borderRadius: '10px', border: 0, marginBottom: '3px'}}>
                            <h2>
                            <AccordionButton style={{borderRadius: '10px', border: 0, backgroundColor: '#EEEEEE'}}>
                                <Box as="span" flex='1' textAlign='left' fontSize='lg'>
                                    Q: Were there any hiccups or confusions during the process of using this machine?
                                </Box>
                                <AccordionIcon />
                            </AccordionButton>
                            </h2>
                            <AccordionPanel pb={4}>
                                <div className="answers" style={{marginLeft: '30px'}}>
                                    <ul>
                                        <li>One person was visually impaired and so they would have liked more visually stunning menu items on the screen.</li>                  
                                        <li>One user wished that there were more physical labels indicating places such as “bagging area” or “enter coupons”.</li>
                                        <li>All users mentioned that the scale in the bagging area can be finnicky and sometimes not register a bagged product.</li>
                                        <li>Users were all confused as to when/how to scan coupons. There is no clear button or actionable nudge for users to know how to use their coupons.</li>
                                    </ul>
                                </div>
                            </AccordionPanel>
                        </AccordionItem>
                    </Accordion>
                    <div className="heading">
                        Part 4: Personas
                    </div>
                    <div className="subheading">
                        Visiting Vlad
                    </div>
                    <Image src="https://cs1300-uiux-portfolio.web.app/vlad.png" width="50%" marginLeft="auto" marginRight="auto"/>
                    <div className="text-body">
                        <div style={{marginTop: '5px', fontWeight: 500}}>
                        Visiting Vlad is from out of town and is here to grab some snacks to continue his road trip.
                        </div>
                        <div style={{marginTop: '5px'}}>
                        While using CVS’ self-checkout machine Vlad was confused as to where to the bagging area was. He is used to having the bagging area on the right side – CVS stores vary in machine design, and this was a key inconsistency that he felt was awkward as a user.
                        </div>
                        <div style={{marginTop: '5px'}}>
                        Vlad represents the portion of users who are not Brown students and therefore might not frequent this CVS store frequently. Furthermore, he also represents users who don’t go to CVS often and therefore is part of the demographic that would benefit from more physical signage on the interface.
                        </div>
                    </div>
                    <div className="subheading">
                        Student Sarah
                    </div>
                    <Image src="https://cs1300-uiux-portfolio.web.app/sarah.png" width='50%' marginLeft="auto" marginRight="auto"/>
                    <div className="text-body">
                        <div style={{marginTop: '5px', fontWeight: 500}}>
                        Student Sarah is a Junior at Brown University studying Computer Science and is comfortable with technology.
                        </div>
                        <div style={{marginTop: '5px'}}>
                        She lives in Mo-Champ and therefore frequents this specific CVS store often. Sarah is a power user of CVS and therefore wants to check out as fast as possible. She also wants to know ahead of time as she is scanning items if she could potentially save money on them.                        </div>
                        <div style={{marginTop: '5px'}}>
                        Sarah represents the large number of Brown Students who frequent this exact CVS store often. She also represents a user who uses coupons and her ExtraCare card often to save a buck.
                        </div>
                    </div>
                    <div className="heading">
                        Part 5: Storyboarding
                    </div>
                    <div className="subheading">
                        A storyboard for Visiting Vlad
                    </div>
                    <Image src="https://cs1300-uiux-portfolio.web.app/story.png" width='90%' marginLeft="auto" marginRight="auto" marginTop="10px"/>
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