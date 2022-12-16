import React, { useState } from 'react';
import { Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Box, Button, Image, Link, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Tab, TabList, TabPanel, TabPanels, Tabs } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import './MidpointProject.css'
import '../Modal.css'
import JoyUICard from '../../JoyUICard/JoyUICard';

export const MidpointProject = () => {
    const cardTitle= "Midpoint | See what the world thinks"
    const cardImgSrc= "https://i.imgur.com/KJtmcXg.png"
    const tags: string[] = ["Fullstack", "Fun"]
    const [isModalOpen, setIsModalOpen] = useState(false)
    return (
        <>
            <JoyUICard title={cardTitle} imgSrc={cardImgSrc} tags={tags} setIsModalOpen={setIsModalOpen}/>
            <Modal isOpen={isModalOpen} onClose={() => {setIsModalOpen(false)}} size="6xl">
                <ModalOverlay/>
                <ModalContent backgroundColor="#FBF5F3" color="#000022">
                <ModalHeader style={{fontSize: "2.3rem"}} className="modal-header">Redesigning RITTA Club Website</ModalHeader>
                <ModalCloseButton/>
                <ModalBody style={{paddingLeft: '50px', paddingRight: '50px', paddingBottom: '20px'}}>
                    <div className="heading" style={{marginTop: '5px'}}>
                        Part 1: Context
                    </div>
                    <div className="text-body">
                        <div>
                            Have you ever wanted to know what others think? Even about the most bizaare topics? Well, 
                            <Link href="https://midpoint-b4a3c.web.app/home" isExternal style={{marginLeft: '4px', marginRight: '5px'}}>
                                Midpoint <ExternalLinkIcon mx='2px' />
                            </Link>
                            is created for you. Midpoint is a social experiment project whereby users can scroll through an instagram-like feed and answer polls that other users have created. 
                            After answering, you can see how your answer differs from the average Midpoint user.
                            Wanna know what others think about a topic? Well, you can easily create your own poll and others will share their opinion.
                        </div>
                        <div style={{marginTop: '15px'}}>
                            I have designed Midpoint with accessibility in mind. High contrast colors, large UX elements and clear text all work together to make a visually appealing and yet accessible UIUX experience.
                        </div>
                    </div>
                    <div className="heading">
                        Part 2: The Homepage
                    </div>
                    <Image src="https://i.imgur.com/KJtmcXg.png" marginTop="5px" marginLeft="auto" marginRight="auto" borderRadius="10px"/>
                    <div className="text-body">
                        <div>
                            The homepage is organized with a gallery of cards, whereby each card represents a poll. Each poll card is randomly colored such that it is visually stunning and easily distinguishable from the next.
                            The colors selected have a high contrast with the dark background, making them easy to identify and interact with.
                            The text of each card is in uppercase to make text even more legible. 
                        </div>
                        <div style={{display:'flex', marginTop: '10px'}}>
                            <Image src="https://i.imgur.com/3s1pgDr.png" marginTop="5px" marginLeft="auto" marginRight="auto" borderRadius="10px" width="450px"/>
                            <div style={{marginTop: '15px', marginLeft: '15px'}}>
                                <div>
                                    When a poll is answered, the poll changes state and the user is then able to see the metrics for that poll. This way, the user can compare their answers with others on Midpoint.
                                    <div style={{marginTop: '15px'}}>
                                    Users can also opt to dive into the statistics further as shown below:
                                    </div>
                                </div>
                                <Image src="https://i.imgur.com/gHomPDg.png" marginTop="5px" marginLeft="auto" marginRight="auto" borderRadius="10px" width="100%"/>
                            </div>
                        </div>
                    </div>
                    <div className="heading">
                        Part 3: Created Polls Page
                    </div>
                    <Tabs variant='soft-rounded' colorScheme='green' style={{marginTop: '15px'}} >
                        <TabList>
                            <Tab>History</Tab>
                            <Tab>Created Polls</Tab>
                        </TabList>
                        <TabPanels>
                            <TabPanel fontSize="1.2rem" fontWeight="400">
                                <Image src="https://i.imgur.com/UztS55M.png" height="600px" width="100%" fit="cover"/>
                                <div className="text-box" style={{marginTop: '15px'}}>
                                    This page represents the list of polls that you have answered in the past. 
                                    This way, you can always refer back to the polls you've answered. Whether that be to share it with a friend, or check up on the statistics for curiosity sake.
                                    From here, the user can view more detailed statistics - just like before.
                                    Just like the homepage, this page was designed with accessibility in mind. Therefore cards have high contrast colors, text is highly legible and the UX layout has remaind the same throughout all pages.
                                </div>
                            </TabPanel>
                            <TabPanel fontSize="1.2rem" fontWeight="400">
                                <Image src="https://i.imgur.com/LhTPclg.png" width="100%" height="600px"/>
                                <div className="text-box" style={{marginTop: '15px'}}>
                                    This page represents the list of polls that you have created. This way, you can always refer back to the polls you've created and check up on the statistics for curiosity sake.
                                    From here, the user can view more detailed statistics - just like before.
                                    Just like the homepage, this page was designed with accessibility in mind. Therefore cards have high contrast colors, text is highly legible and the UX layout has remaind the same throughout all pages.
                                </div>
                            </TabPanel>
                        </TabPanels>
                    </Tabs>
                    <div className="heading">
                        Part 4: Lessons Learned
                    </div>
                    <div className="text-body">
                        I created this web app before I took UIUX. Here, I was just practicing the basics of what I thought made a website accessible. I learned that there are some compromises one must make between accessibility and aesthetic design. One example is the use of translucent elements that - while may be visually appealing, may not be the most accessible. 
                        Overall, I learned however, that accessibility can be used to not just benefit those who need accessibility features, but can benefit the user experience for all. 
                        UX elements are clearer, navigation is more intuitive and the design can still be as visually stunning as before. 
                    </div>
                    <hr style={{marginTop: '30px', marginBottom: '10px'}}></hr>
                    <Link href="https://midpoint-b4a3c.web.app/home" isExternal style={{marginLeft: '10px'}}>
                        Midpoint <ExternalLinkIcon mx='2px' />
                    </Link>
                </ModalBody>
                <ModalFooter/>
                </ModalContent>
            </Modal>
        </>
    )
}