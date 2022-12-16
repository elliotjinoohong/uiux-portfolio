/* eslint-disable */
import React, { useState } from 'react';
import { Box, Card, CardBody, CardHeader, Heading, Image, Link, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Stack, StackDivider } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import './IterativeProject.css'
import '../Modal.css'
import JoyUICard from '../../JoyUICard/JoyUICard';

export const IterativeProject = () => {
    const cardTitle= "Reimagining Kopa"
    const cardImgSrc= "https://i.imgur.com/tsZt01j.png"
    const tags: string[] = ["Figma", "Redesign"]
    const [isModalOpen, setIsModalOpen] = useState(false)
    return (
        <>
            <JoyUICard title={cardTitle} imgSrc={cardImgSrc} tags={tags} setIsModalOpen={setIsModalOpen}/>
            <Modal isOpen={isModalOpen} onClose={() => {setIsModalOpen(false)}} size="6xl">
                <ModalOverlay/>
                <ModalContent backgroundColor='#F4F2EC'>
                <ModalHeader style={{fontSize: "2.3rem"}} className="modal-header">Reimagine Kopa Rentals</ModalHeader>
                <ModalCloseButton/>
                <ModalBody style={{paddingLeft: '50px', paddingRight: '50px', paddingBottom: '20px'}}>
                    <div className="heading" style={{marginTop: '5px'}}>
                        Part 1: Context
                    </div>
                    <div className="text-body">
                        <div style={{marginBottom: '10px'}}>
                        <Link href="https://www.kopa.co/" isExternal style={{marginRight: '3px'}}>
                            Kopa <ExternalLinkIcon mx='2px' />
                        </Link> 
                        is the marketplace for monthly rentals and compatible housemates, and the company’s mission is to enable people to browse rentals, find roommates, and book and pay for spaces in a one-stop-shop. Currently the start-up is still in operation, and this is a imagined redesign of their web application. 
                        </div>
                        <div>
                            I've put accessibility front and center. With so many real estate related websites, they all follow the same cookie cutter approach. With this Kopa redesign, I wanted to reimagine what these real estate webpages can look like. Combining elements of Netflix, Google Maps and Youtube with the foundations of real estate web apps, we are left with an intuitive, engaging and easily accessible interface.
                        </div>
                    </div>
                    <div className="heading">
                        Part 2: Low Fidelity Sketches
                    </div>
                    <div className="text-body">
                        To start our design process, we had a brainstorm session - each one of the group member independently drew their idea for the pages on a blank canvas. Here is what we got:
                    </div>
                    <div className="image">
                        <Image marginLeft="10px" src='https://uiux-portfolio-5e6f2.web.app/iterative/signup.png' alt='redesign wireframe' fit="cover" />
                    </div>
                    <div className="image">
                        <Image marginLeft="10px" src='https://uiux-portfolio-5e6f2.web.app/iterative/browserental.png' alt='redesign wireframe' fit="cover" />
                    </div>
                    <div className="image">
                        <Image marginLeft="10px" src='https://uiux-portfolio-5e6f2.web.app/iterative/findroommate.png' alt='redesign wireframe' fit="cover" />
                        <div className="image-caption">A series of hand-drawn sketches for Kopa redesign</div>
                    </div>
                    <div className="heading">
                        Part 3: Finalized Low-fi Wireframe
                    </div>
                    <div className="text-body">
                        After the initial individual sketching, we put our sketches together and brainstormed the best layout. We made our low-fi sketches into wireframes to guide our high-fidelity design process.
                    </div>
                    <div className="image">
                        <Image src='https://uiux-portfolio-5e6f2.web.app/iterative/lowfifinalized.png' alt='redesign wireframe' fit="cover" />
                    </div>
                    <div className="heading">
                        Part 4: Interactive Hi-fi Mockup: Iteration 1
                    </div>
                    <div className="text-body">
                        Below is the first iteration of our high-fidelity Figma mockup. We created the 3 main screens of Kopa: (renter) signup, browsing rentals, and finding roommates.
                    </div>
                    <div className="image">
                        <iframe title="figma" style={{ border: "1px solid rgba(0, 0, 0, 0.1)" }} width="100%" height="450"
                            src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2FIj4khB3jnSR3dyKooob8Ew%2FIterative-Design-Hi-Fi%3Fnode-id%3D0%253A1%26t%3DYtRypmPyag1hTobZ-1"
                            allowFullScreen />
                    </div>
                    <div className="heading">
                        Part 5: Critique Session with Industry Expert
                    </div>
                    <div className="text-body">
                            During our critique session, we presented the first iteration of our hi-fi mockups (see above). We had the opportunity to receive feedback on from not only fellow peers but also an industry expert, Gifford Cheung, who is a Sr. UX Researcher @Nintendo (and ex-classmate of Jeff!). Below, we highlighted some of the feedback we received from peers and Gifford.
                        </div>
                        <div className="subheading">
                            General Feedback
                        </div>
                        <div className="text-body">
                            Reviewers generally liked our UI (e.g. color palette) and design hierarchy for the 3 pages (sign-up, browse rentals, find roommates). Particularly, they thought the layouts of the sign-up and find roommates pages were fun and innovative.
                        </div>
                        <div className="subheading">
                            Find Roommates Page Feedback
                        </div>
                        <div className="feedback-cards-wrapper">
                            <Card className="feedback-card" style={{border: 'dashed 2px #264433'}}>
                                <CardHeader>
                                    <Heading size='md'>Feedback 1</Heading>
                                </CardHeader>
                                <CardBody paddingTop={0}>
                                    <Stack divider={<StackDivider />} spacing='4'>
                                        <Box >
                                            <Heading size='xs' >
                                                Suggestion
                                            </Heading>
                                            The page is a bit overwhelming without any guidance; clarification about its structure/algorithm would be helpful.
                                        </Box>
                                        <Box>
                                            <Heading size='xs' >
                                                What we changed
                                            </Heading>
                                            Added welcome text briefly explaining our matching algorithm and categories. This also added some white space for improved hierarchy.
                                        </Box>
                                    </Stack>
                                </CardBody>
                            </Card>
                            <Card className="feedback-card" style={{border: 'dashed 2px #264433'}}>
                                <CardHeader>
                                    <Heading size='md'>Feedback 2</Heading>
                                </CardHeader>
                                <CardBody paddingTop={0}>
                                    <Stack divider={<StackDivider />} spacing='4'>
                                        <Box >
                                            <Heading size='xs'>
                                                Suggestion
                                            </Heading>
                                            At first, it is unclear that users can scroll horizontally in addition to the traditional vertical scroll.											</Box>
                                        <Box>
                                            <Heading size='xs' >
                                                What we changed
                                            </Heading>
                                            Added arrows on the right end of each category to indicate the ability to scroll horizontally.											</Box>
                                    </Stack>
                                </CardBody>
                            </Card>
                        </div>
                        <div className="subheading" style={{ marginTop: 20 }}>
                            Browse Rentals Page Feedback
                        </div>

                        <div className="feedback-cards-wrapper">
                            <Card className="feedback-card" style={{border: 'dashed 2px #264433'}}>
                                <CardHeader>
                                    <Heading size='md'>Feedback 1</Heading>
                                </CardHeader>
                                <CardBody paddingTop={0}>
                                    <Stack divider={<StackDivider />} spacing='4'>
                                        <Box >
                                            <Heading size='xs' >
                                                Suggestion
                                            </Heading>
                                            Reviewers thought our ‘Bookmarked’ box at the bottom right was an important component but wasn’t prominent enough.
                                        </Box>
                                        <Box>
                                            <Heading size='xs' >
                                                What we changed
                                            </Heading>
                                            Made the ‘Bookmarked’ box larger, expandible/collapsible, and added a dark header section that pops out from the map more. We also added a shortcut to bookmarked items in the header, so it is accessible at all times.											</Box>
                                    </Stack>
                                </CardBody>
                            </Card>
                            <Card className="feedback-card" style={{border: 'dashed 2px #264433'}}>
                                <CardHeader>
                                    <Heading size='md'>Feedback 2</Heading>
                                </CardHeader>
                                <CardBody paddingTop={0}>
                                    <Stack divider={<StackDivider />} spacing='4'>
                                        <Box >
                                            <Heading size='xs' >
                                                Suggestion
                                            </Heading>
                                            Reviewers thought it'd be helpful to provide information about what kinds of information they can enter into the search bar.
                                        </Box>
                                        <Box>
                                            <Heading size='xs' >
                                                What we changed
                                            </Heading>
                                            Added placeholder text to indicate possible entries for the area search.
                                        </Box>
                                    </Stack>
                                </CardBody>
                            </Card>
                        </div>
                        <div className="heading">
                            Part 6: Annotated Changes After Critique
                        </div>
                        <div className="text-body">
                            After hearing the thoughts of Gifford and our peers during the critique session, we made changes to our high-fidelity mock up to incorporate the great suggestions reviewers made. Here is an annotated version of our high-fidelity mock up.
                        </div>
                        <div className="subheading" style={{ marginTop: 20 }}>
                            Browse Rentals Page
                        </div>
                        <div className="image">
                            <Image src='https://uiux-portfolio-5e6f2.web.app/iterative/rentalannotated.png' alt='redesign wireframe' fit="cover" />
                        </div>
                        <div className="subheading" style={{ marginTop: 20 }}>
                            Find Roommates Page
                        </div>
                        <div className="image">
                            <Image src='https://uiux-portfolio-5e6f2.web.app/iterative/roommateannotated.png' alt='redesign wireframe' fit="cover" />
                        </div>
                        <div className="heading">
                            Part 7: User Testing
                        </div>
                        <div className="text-body">
                            We gave users the following scenario, which we thought would encapsulate Kopa’s typical persona and user motivation:
                        </div>
                        <div className="text-body">
                            <ul>
                                <li className="list-1st-layer">Imagine you are a college student who has an internship in NYC this upcoming summer.</li>
                                <li className="list-1st-layer">You want to compare short-term rentals within your price range.</li>
                                <li className="list-1st-layer">You also want to find quiet, outdoorsy roommates you can share your lease with.</li>
                                <li className="list-1st-layer">The page is not responsive at all, user cannot effectively interact with the page on mobile devices.</li>
                            </ul>
                        </div>
                        <div className="text-body">
                            We also made sure to let users know that this is not an actual website but an interactive mockup made on prototyping software, so not all button functions are built out.
                        </div>
                        <div className="subheading">
                            Tasks & Results
                        </div>
                        <div className="text-body">
                            We gave users 3 tasks, which we thought would encapsulate the 3 key functionalities and screens of our website. Each task was assessed according to the following 2 metrics, “Success” (Yes or No) and “Difficulty” (Very difficult to Very easy, with a 5-point rating scale)
                        </div>
                        <div className="text-body">
                            <b>Task 1: Sign up as a renter. (Sign Up Page)</b>
                        </div>
                        <div className="text-body">
                            Users liked that they could indicate important preferences in the signup page, and saw that this would help inform Kopa’s roommate matching algorithm. This was in line with our expectations and even surprised us that they wouldn’t prefer more questions asking about their preferences and living habits.
                        </div>
                        <div className="text-body">
                            <b>Task 2: Find 2 rentals within a price range of $500-2,500/month. (Browse Rentals Page)</b>
                        </div>
                        <div className="text-body">
                            Despite our disclaimer that buttons are not fully built-out, users complained that they couldn’t fully use the ‘Price’ dropdown and ‘Sort’ buttons. This resulted in one of the users stating that they couldn’t complete the task assigned. Perhaps, we should have done a clearer job explaining what could be done or built out those specific functions in our prototype better.
                        </div>
                        <div className="text-body">
                            <b>Task 3: Find roommates that are quiet and like the outdoors. (Find Roommates Page)</b>
                        </div>
                        <div className="text-body">
                            Feedback was overall positive; users thought it was easy to browse contact cards and complete their task of finding roommates with specific interests and habits.
                        </div>
                        <div className="text-body">
                            One user noted that the writing was a bit small. This is a valid accessibility issue we would address if/when building out the actual website.
                        </div>
                        <div className="heading">
                            Part 8: Final Words
                        </div>
                        <div className="text-body">
                            Overall, we really enjoyed having to work together to iteratively design a website around a startup idea. Since we all had summer internships in cities outside of Providence, we definitely resonated with the pain point Kopa's concept of combining short-term rentals with finding roommates addresses and hope the founders might find our designs helpful.
                        </div>
                    <hr style={{marginTop: '30px', marginBottom: '10px'}}></hr>
                    <Link href="https://www.figma.com/file/Ij4khB3jnSR3dyKooob8Ew/Iterative-Design-Hi-Fi?node-id=0%3A1&t=wbuZBSB4QBPNZUvC-1" isExternal style={{marginLeft: '10px'}}>
                        Figma <ExternalLinkIcon mx='2px' />
                    </Link>
                </ModalBody>
                <ModalFooter/>
                </ModalContent>
            </Modal>
        </>
    )
}