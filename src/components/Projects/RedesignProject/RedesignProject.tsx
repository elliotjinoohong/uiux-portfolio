import React, { useState } from 'react';
import { Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Box, Button, Image, Link, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Tab, TabList, TabPanel, TabPanels, Tabs } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { PortfolioPiece } from '../../PortfolioPiece'
import './RedesignProject.css'
import '../Modal.css'
import JoyUICard from '../../JoyUICard/JoyUICard';

export const RedesignProject = () => {
    const cardTitle= "Redesign RITTA Club Website"
    const cardBlurb= "Redesigning Rhode Island's largest table tennis club's website"
    const cardImgSrc= "https://i.imgur.com/8OYXLB6.png"
    const tags: string[] = []
    const [isModalOpen, setIsModalOpen] = useState(false)
    return (
        <>
            <PortfolioPiece title={cardTitle} blurb={cardBlurb} imgSrc={cardImgSrc} setIsModalOpen={setIsModalOpen}/>
            <JoyUICard title={cardTitle} imgSrc={cardImgSrc} tags={tags} setIsModalOpen={setIsModalOpen}/>
            <Modal isOpen={isModalOpen} onClose={() => {setIsModalOpen(false)}} size="6xl">
                <ModalOverlay/>
                <ModalContent>
                <ModalHeader style={{fontSize: "2.3rem"}} className="modal-header">Redesign RITTA Club Website</ModalHeader>
                <ModalCloseButton/>
                <ModalBody style={{paddingLeft: '50px', paddingRight: '50px', paddingBottom: '20px'}}>
                    <div className="heading" style={{marginTop: '5px'}}>
                        Part 1: Context
                    </div>
                    <div className="text-body">
                        Table tennis is a niche sport here on the east coast. In Rhode Island, it’s an underserved sport with only a handful of clubs and facilities for players to practice and play. Rhode Island Table Tennis Association (RITTA) is the largest table tennis club in Rhode Island and serves more than 50 active members. Since it is run by community members, their website is outdated, haphazard and does not follow key accessibility design principles. My goal here was to serve the table tennis community here in Rhode Island by streamlining their website and making it more accessible. 
                    </div>
                    <Tabs variant='soft-rounded' colorScheme='green' style={{marginTop: '15px'}}>
                        <TabList>
                            <Tab>Previous Website</Tab>
                            <Tab>Redesigned Website</Tab>
                        </TabList>
                        <TabPanels>
                            <TabPanel>
                                <iframe src="https://st4022.wixsite.com/ritta" title="Previous RITTA Website" width="100%" height="600px"></iframe>
                            </TabPanel>
                            <TabPanel>
                                <iframe src="https://responsive-redesign.web.app" title="Redesigned RITTA Website" width="100%" height="600px"></iframe>
                            </TabPanel>
                        </TabPanels>
                    </Tabs>
                    <div className="heading">
                        Part 2: Finding Problems
                    </div>
                    <div className="subheading">
                        Jakob Nielsen's 10 general principles
                    </div>
                    <div className="text-body">
                        An analysis using Jakob Nielsen’s 10 general principles for interaction design was conducted.
                        <ol>
                            <li className="list-1st-layer">Visibility of system status:</li>
                                <ul className="list-2nd-layer">
                                    <li>There is no indication that this is the home page.</li>
                                </ul>
                            <li className="list-1st-layer">Error prevention:</li>
                                <ul>
                                    <li className="list-2nd-layer">RITTA has a cash only policy but there is no mention of this on their website. Customers could arrive with no cash prepared and be turned away.</li>
                                </ul>
                            <li className="list-1st-layer">Consistency & Standards:</li>
                                <ul>
                                    <li className="list-2nd-layer">The ‘Schedule Coaching’ and ‘Groups and Parties’ icons seem to be clickable when they in fact are not.</li>
                                    <li className="list-2nd-layer">Due to duplication of information, open hours in the header and in the ‘Current Hours’ section contradict one another.</li>
                                </ul>
                            <li className="list-1st-layer">Aesthetic and minimalist design:</li>
                                <ul>
                                    <li className="list-2nd-layer">There is some duplication of information in the ‘Common Answers’ and ‘Current Hours’ sections.</li>
                                    <li className="list-2nd-layer">Other duplicate information is the location noted in the header but then also linked in the navigation bar. Having two methods of viewing the location of the club makes the user confused as to which source of information is correct.</li>
                                </ul>
                            <li className="list-1st-layer">Memorability:</li>
                                <ul>
                                    <li className="list-2nd-layer">Important text is very small and unstructured. Therefore, not memorable.</li>
                                </ul>
                            <li className="list-1st-layer">Responsiveness:</li>
                                <ul>
                                    <li className="list-2nd-layer">The entire website is not responsive for mobile viewing at all.</li>
                                </ul>
                        </ol>
                    </div>
                    <div className="subheading">
                        Accessibility
                    </div>
                    <div className="text-body">
                        The Chrome WebAIM WAVE plugin was used to identify three accessibility issues with the previous website.
                        <ul className="list-1st-layer">
                            <li>Low contrast text: A majority of text was flagged as low contrast throughout the website. I disagree with Wave’s criticism of low contrast for this website as I believe that most text contrasts the dark background. With that said, there is blue text in the header that could be made lighter to contrast the dark background.</li>
                            <li>Lack of or trivial alt tags: I 100% agree with the lack of or questionable alt descriptions for assets throughout the website. Alt tags here are either non-existent or are trivially labeled such as “image” or “label”.</li>
                            <li>Lack of H1 header: The lack of a H1 header for this website should be an easy fix.</li> 
                        </ul>
                    </div>
                    <div className="heading">
                        Part 3: The Redesign Process
                    </div>
                    <div className="subheading">
                        Solutions identified in low-fi prototyping
                    </div>
                    <Accordion allowToggle style={{marginTop: '10px', marginBottom: '15px'}}>
                        <AccordionItem style={{borderRadius: '30px', border: 0}}>
                            <AccordionButton style={{borderRadius: '30px', border: 0, backgroundColor: '#C6F6D5', color: '#276749'}}>
                                <Box as="span" flex='1' textAlign='left'>
                                <div style={{fontWeight: '600'}}>Low-Fi Prototypes</div>
                                </Box>
                                <AccordionIcon />
                            </AccordionButton>
                            <AccordionPanel pb={4}>
                                <Tabs variant='soft-rounded' colorScheme='green' style={{marginTop: '15px'}}>
                                    <TabList>
                                        <Tab>Desktop</Tab>
                                        <Tab>Mobile</Tab>
                                        <Tab>Tablet</Tab>
                                    </TabList>
                                    <TabPanels>
                                        <TabPanel>
                                            <Image src='https://i.imgur.com/NYmKdn2.png'/>
                                        </TabPanel>
                                        <TabPanel>
                                            <Image src='https://i.imgur.com/02YSYJo.png'/>
                                        </TabPanel>
                                        <TabPanel>
                                            <Image src='https://i.imgur.com/0Pptfex.png'/>
                                        </TabPanel>
                                    </TabPanels>
                                </Tabs>
                            </AccordionPanel>
                        </AccordionItem>
                    </Accordion>
                    <div className="subheading">
                        Solution implemented
                    </div>
                    <div className="text-body">
                        Ultimately, the redesigned website kept the previous website’s font and color scheme to ensure that it kept the heart of the club’s theme. And yet, I drastically restructured the website and redesigned components to ensure that the website was both highly accessible but also easy to use. Similar information was grouped together in sections, components are clearly designed to be either clickable or not clickable and the website is easily accessible from top to bottom. 
                    </div>
                    <div className="heading">
                        Part 4: Lessons Learned
                    </div>
                    <div className="subheading">
                        Accessibility for the owner
                    </div>
                    <div className="text-body">
                        When redesigning this website, I talked to members of the club and realized that other than the college students that come semi-regularly, no board members at the club knew HTML. Therefore, to ensure that non-tech savvy people would be able to maintain the website, I made it a priority to keep the code simple. Parts that may need to be changed can easily be changed by replacing images, or labelled sections throughout the code. I thought that keeping the website simple to make it maintainable took precedence as most visitors to the website will not care how flashy or engaging the website is and instead will just want the most up to date information. What I learned from making this project is that while the website must be accessible, the code must also be accessible for the end owner. If the user cannot maintain the product themselves, then your product has failed. 
                    </div>
                    <hr style={{marginTop: '30px', marginBottom: '10px'}}></hr>
                    <Link href="https://st4022.wixsite.com/ritta" isExternal style={{marginLeft: '10px'}}>
                        Previous Website <ExternalLinkIcon mx='2px' />
                    </Link>
                    <Link href="https://responsive-redesign.web.app" isExternal style={{marginLeft: '30px'}}>
                        Redesigned Website <ExternalLinkIcon mx='2px' />
                    </Link>
                    <Link href="https://www.figma.com/file/ZBappfw7k2ylJDEdt65CLD/RITTA-Redesign?node-id=0%3A1" isExternal style={{marginLeft: '30px'}}>
                        Figma <ExternalLinkIcon mx='2px' />
                    </Link>                    
                </ModalBody>
                <ModalFooter/>
                </ModalContent>
            </Modal>
        </>
    )
}