import React from 'react';
import logo from "./logo.png"
import { Link } from "react-router-dom"

const Home = () => {
    const styles = {
        parent: {
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            padding: 10
        },
        logo: {
            width: 40,
            marginRight: "auto"
        },
        navMargin: {
            marginLeft: "5%",
            textDecoration: "none"
        },
    }
    return (
        <>
            <div style={styles.parent}>
                <a style={{ marginRight: "auto" }} href="/"><img className="nav" style={styles.logo} src={logo} alt="" /></a>
                <h3 className='nav' style={{ ...styles.navMargin }}><Link className="link" style={{ textDecoration: "none", color: "cyan" }} to="/">Home</Link></h3>
                <h3 style={styles.navMargin}><a className="link" target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none" }} href="http://ibrahim-mohamed-dev.surge.sh">Portfolio</a></h3>
                <h3 style={{ ...styles.navMargin, color: "#fbbc06" }}><Link className="link" style={{ textDecoration: "none" }} to="/skills">Skills</Link></h3>
                <h3 style={{ ...styles.navMargin, color: "#fbbc06", marginRight: "3%" }}><Link className="link" style={{ textDecoration: "none" }} to="/contact">Contact</Link></h3>
            </div>
            <br />
            <h1 style={{ textAlign: "center", color: "cyan" }}>JavaScript 30 Challenge</h1>
            <div className="projects">
                <div className="project1" style={{ cursor: "pointer", backgroundSize: "cover", backgroundRepeat: "no-repeat" }}>
                    <div className='middle1'>
                        <a href="http://app1-javascript30.surge.sh/">
                            <div className='projectInfo' style={{ marginTop: "-1em" }}>
                                <h2 className="nav" style={{ marginTop: 0, color: "cyan", padding: "2%" }}>
                                    1. JS Drum Kit
                                </h2>
                                <h4 style={{ padding: 5 }}>
                                    Fun keyboard drum kit users can use to make an awesome beat.
                                </h4>
                                <p style={{ color: "lime", padding: 5 }}>
                                    JavaScript, HTML, & CSS.
                                </p>
                                <p style={{ margin: 0, marginRight: 5 }}>
                                    Made: 05/15/2019
                                </p>
                            </div>
                        </a>
                    </div>
                </div>
                <div className="project2" style={{ cursor: "pointer", backgroundSize: "cover", backgroundRepeat: "no-repeat" }}>
                    <div className='middle1'>
                        <a href="http://app2-javascript30.surge.sh/">
                            <div className='projectInfo' style={{ marginTop: "-1.5em" }}>
                                <h2 className="nav" style={{ marginTop: 0, color: "cyan", padding: "2%" }}>
                                    2. JS + CSS Clock
                                </h2>
                                <h4 style={{ padding: 5 }}>
                                    Functional and simplistic analog clock.
                                </h4>
                                <p style={{ color: "lime", padding: 5 }}>
                                    JavaScript, HTML, & CSS.
                                </p>
                                <p style={{ margin: 0, marginRight: 5 }}>
                                    Made: 05/16/2019
                                </p>
                            </div>
                        </a>
                    </div>
                </div>
                <div className="project3" style={{ cursor: "pointer", backgroundSize: "cover", backgroundRepeat: "no-repeat" }}>
                    <div className='middle1'>
                        <a href="http://app3-javascript30.surge.sh/">
                            <div className='projectInfo' style={{ marginTop: "-1.5em" }}>
                                <h2 className="nav" style={{ marginTop: 0, color: "cyan", padding: "2%" }}>
                                    3. Scoped CSS Variables & JS
                                </h2>
                                <h4 style={{ padding: 5 }}>
                                    Simple app that enables a user to adjust styling settings on screen.
                                </h4>
                                <p style={{ color: "lime", padding: 5 }}>
                                    JavaScript, HTML, & CSS.
                                </p>
                                <p style={{ margin: 0, marginRight: 5 }}>
                                    Made: 05/17/2019
                                </p>
                            </div>
                        </a>
                    </div>
                </div>
                <div className="project4" style={{ cursor: "pointer", backgroundSize: "cover", backgroundRepeat: "no-repeat" }}>
                    <div className='middle1'>
                        <a href="http://app4-javascript30.surge.sh/">
                            <div className='projectInfo' style={{ marginTop: "-1.5em" }}>
                                <h2 className="nav" style={{ marginTop: 0, color: "cyan", padding: "2%" }}>
                                    4. Array Cardio
                                </h2>
                                <h4 style={{ padding: 5 }}>
                                    Practiced higher order functions such as filter, sort, map, and reduce.
                                </h4>
                                <p style={{ color: "lime", padding: 5 }}>
                                    JavaScript, HTML, & CSS.
                                </p>
                                <p style={{ margin: 0, marginRight: 5 }}>
                                    Made: 05/18/2019
                                </p>
                            </div>
                        </a>
                    </div>
                </div>
                <div className="project5" style={{ cursor: "pointer", backgroundSize: "cover", backgroundRepeat: "no-repeat" }}>
                    <div className='middle1'>
                        <a href="http://app5-javascript30.surge.sh/">
                            <div className='projectInfo' style={{ marginTop: "-1.5em" }}>
                                <h2 className="nav" style={{ marginTop: 0, color: "cyan", padding: "2%" }}>
                                    5. Flex Panels
                                </h2>
                                <h4 style={{ padding: 5 }}>
                                    Interactive opening/closing flex panel that display encouraging words.
                                </h4>
                                <p style={{ color: "lime", padding: 5 }}>
                                    JavaScript, HTML, & CSS.
                                </p>
                                <p style={{ margin: 0, marginRight: 5 }}>
                                    Made: 05/19/2019
                                </p>
                            </div>
                        </a>
                    </div>
                </div>
                <div className="project6" style={{ cursor: "pointer", backgroundSize: "cover", backgroundRepeat: "no-repeat" }}>
                    <div className='middle1'>
                        <a href="http://app6-javascript30.surge.sh/">
                            <div className='projectInfo' style={{ marginTop: "-1.5em" }}>
                                <h2 className="nav" style={{ marginTop: 0, color: "cyan", padding: "2%" }}>
                                    6. Type Ahead
                                </h2>
                                <h4 style={{ padding: 5 }}>
                                    Simple app that checks the population of any city in the United States.
                                </h4>
                                <p style={{ color: "lime", padding: 5 }}>
                                    JavaScript, HTML, & CSS.
                                </p>
                                <p style={{ margin: 0, marginRight: 5 }}>
                                    Made: 05/20/2019
                                </p>
                            </div>
                        </a>
                    </div>
                </div>
                <div className="project7" style={{ cursor: "pointer", backgroundSize: "cover", backgroundRepeat: "no-repeat" }}>
                    <div className='middle1'>
                        <a href="http://app7-javascript30.surge.sh/">
                            <div className='projectInfo' style={{ marginTop: "-1.5em" }}>
                                <h2 className="nav" style={{ marginTop: 0, color: "cyan", padding: "2%" }}>
                                    7. Array Cardio 2.0
                                </h2>
                                <h4 style={{ padding: 5 }}>
                                    Practiced higher order functions such as some, every, find, and find index.
                                </h4>
                                <p style={{ color: "lime", padding: 5 }}>
                                    JavaScript, HTML, & CSS.
                                </p>
                                <p style={{ margin: 0, marginRight: 5 }}>
                                    Made: 05/21/2019
                                </p>
                            </div>
                        </a>
                    </div>
                </div>
                <div className="project8" style={{ cursor: "pointer", backgroundSize: "cover", backgroundRepeat: "no-repeat" }}>
                    <div className='middle1'>
                        <a href="http://app8-javascript30.surge.sh/">
                            <div className='projectInfo' style={{ marginTop: "-1.5em" }}>
                                <h2 className="nav" style={{ marginTop: 0, color: "cyan", padding: "2%" }}>
                                    8. HTML5 Canvas
                                </h2>
                                <h4 style={{ padding: 5 }}>
                                    Simple canvas for users to draw anything they like. Current drawing color cycles between through the rainbow as the user draws.
                                </h4>
                                <p style={{ color: "lime", padding: 5 }}>
                                    JavaScript, HTML, & CSS.
                                </p>
                                <p style={{ margin: 0, marginRight: 5 }}>
                                    Made: 05/22/2019
                                </p>
                            </div>
                        </a>
                    </div>
                </div>
                <div className="project9" style={{ cursor: "pointer", backgroundSize: "cover", backgroundRepeat: "no-repeat" }}>
                    <div className='middle1'>
                        <a href="http://app9-javascript30.surge.sh/">
                            <div className='projectInfo' style={{ marginTop: "-1.5em" }}>
                                <h2 className="nav" style={{ marginTop: 0, color: "cyan", padding: "2%" }}>
                                    9. Console Tricks
                                </h2>
                                <h4 style={{ padding: 5 }}>
                                    Learned all the tips and tricks of operating the console to maximum efficiency.
                                </h4>
                                <p style={{ color: "lime", padding: 5 }}>
                                    JavaScript, HTML, & CSS.
                                </p>
                                <p style={{ margin: 0, marginRight: 5 }}>
                                    Made: 05/23/2019
                                </p>
                            </div>
                        </a>
                    </div>
                </div>
                <div className="project10" style={{ cursor: "pointer", backgroundSize: "cover", backgroundRepeat: "no-repeat" }}>
                    <div className='middle1'>
                        <a href="http://app10-javascript30.surge.sh/">
                            <div className='projectInfo' style={{ marginTop: "-1.5em" }}>
                                <h2 className="nav" style={{ marginTop: 0, color: "cyan", padding: "2%" }}>
                                    10. Inbox Checklist
                                </h2>
                                <h4 style={{ padding: 5 }}>
                                    Created a functionality to check off every items in between two different items in a list.
                                </h4>
                                <p style={{ color: "lime", padding: 5 }}>
                                    JavaScript, HTML, & CSS.
                                </p>
                                <p style={{ margin: 0, marginRight: 5 }}>
                                    Made: 05/24/2019
                                </p>
                            </div>
                        </a>
                    </div>
                </div>
                <div className="project11" style={{ cursor: "pointer", backgroundSize: "cover", backgroundRepeat: "no-repeat" }}>
                    <div className='middle1'>
                        <a href="http://app11-javascript30.surge.sh/">
                            <div className='projectInfo' style={{ marginTop: "-1.5em" }}>
                                <h2 className="nav" style={{ marginTop: 0, color: "cyan", padding: "2%" }}>
                                    11. Custom Video Player
                                </h2>
                                <h4 style={{ padding: 5 }}>
                                    Customized video player features such as; scrubber, playback, fast forward, volume, and speed.
                                </h4>
                                <p style={{ color: "lime", padding: 5 }}>
                                    JavaScript, HTML, & CSS.
                                </p>
                                <p style={{ margin: 0, marginRight: 5 }}>
                                    Made: 05/25/2019
                                </p>
                            </div>
                        </a>
                    </div>
                </div>
                <div className="project12" style={{ cursor: "pointer", backgroundSize: "cover", backgroundRepeat: "no-repeat" }}>
                    <div className='middle1'>
                        <a href="http://app12-javascript30.surge.sh/">
                            <div className='projectInfo' style={{ marginTop: "-1.5em" }}>
                                <h2 className="nav" style={{ marginTop: 0, color: "cyan", padding: "2%" }}>
                                    12. Key Detection
                                </h2>
                                <h4 style={{ padding: 5 }}>
                                    Simple app to detect the letter 'f' to which a random unicorn/rainbow sticker is attached to the browser page.
                                </h4>
                                <p style={{ color: "lime", padding: 5 }}>
                                    JavaScript, HTML, & CSS.
                                </p>
                                <p style={{ margin: 0, marginRight: 5 }}>
                                    Made: 05/26/2019
                                </p>
                            </div>
                        </a>
                    </div>
                </div>
                <div className="project13" style={{ cursor: "pointer", backgroundSize: "cover", backgroundRepeat: "no-repeat" }}>
                    <div className='middle1'>
                        <a href="http://app13-javascript30.surge.sh/">
                            <div className='projectInfo' style={{ marginTop: "-1.5em" }}>
                                <h2 className="nav" style={{ marginTop: 0, color: "cyan", padding: "2%" }}>
                                    13. Slide In On Scroll
                                </h2>
                                <h4 style={{ padding: 5 }}>
                                    Unique and interesting way for a user to experience reading on a website by having the images slide in on scroll.
                                </h4>
                                <p style={{ color: "lime", padding: 5 }}>
                                    JavaScript, HTML, & CSS.
                                </p>
                                <p style={{ margin: 0, marginRight: 5 }}>
                                    Made: 05/27/2019
                                </p>
                            </div>
                        </a>
                    </div>
                </div>
                <div className="project14" style={{ cursor: "pointer", backgroundSize: "cover", backgroundRepeat: "no-repeat" }}>
                    <div className='middle1'>
                        <a href="http://app14-javascript30.surge.sh/">
                            <div className='projectInfo' style={{ marginTop: "-1.5em" }}>
                                <h2 className="nav" style={{ marginTop: 0, color: "cyan", padding: "2%" }}>
                                    14. References VS Copy
                                </h2>
                                <h4 style={{ padding: 5 }}>
                                    Learned more about the differences between referencing and copying numbers, strings, booleans, arrays, and objects.
                                </h4>
                                <p style={{ color: "lime", padding: 5 }}>
                                    JavaScript, HTML, & CSS.
                                </p>
                                <p style={{ margin: 0, marginRight: 5 }}>
                                    Made: 05/28/2019
                                </p>
                            </div>
                        </a>
                    </div>
                </div>
                <div className="project15" style={{ cursor: "pointer", backgroundSize: "cover", backgroundRepeat: "no-repeat" }}>
                    <div className='middle1'>
                        <a href="http://app15-javascript30.surge.sh/">
                            <div className='projectInfo' style={{ marginTop: "-1.5em" }}>
                                <h2 className="nav" style={{ marginTop: 0, color: "cyan", padding: "2%" }}>
                                    15. Local Storage
                                </h2>
                                <h4 style={{ padding: 5 }}>
                                    Engaging web application where a user can make a list of items they'd like on their tapas. Checkmark turns into a taco when checked.
                                </h4>
                                <p style={{ color: "lime", padding: 5 }}>
                                    JavaScript, HTML, & CSS.
                                </p>
                                <p style={{ margin: 0, marginRight: 5 }}>
                                    Made: 05/29/2019
                                </p>
                            </div>
                        </a>
                    </div>
                </div>
                <div className="project16" style={{ cursor: "pointer", backgroundSize: "cover", backgroundRepeat: "no-repeat" }}>
                    <div className='middle1'>
                        <a href="http://app16-javascript30.surge.sh/">
                            <div className='projectInfo' style={{ marginTop: "-1.5em" }}>
                                <h2 className="nav" style={{ marginTop: 0, color: "cyan", padding: "2%" }}>
                                    16. Magic Mouse
                                </h2>
                                <h4 style={{ padding: 5 }}>
                                    Quadruple shadow affect on a single word on the center of the screen. Shadows are different colors and follow mouse movement.
                                </h4>
                                <p style={{ color: "lime", padding: 5 }}>
                                    JavaScript, HTML, & CSS.
                                </p>
                                <p style={{ margin: 0, marginRight: 5 }}>
                                    Made: 05/30/2019
                                </p>
                            </div>
                        </a>
                    </div>
                </div>
                <div className="project17" style={{ cursor: "pointer", backgroundSize: "cover", backgroundRepeat: "no-repeat" }}>
                    <div className='middle1'>
                        <a href="http://app17-javascript30.surge.sh/">
                            <div className='projectInfo' style={{ marginTop: "-1.5em" }}>
                                <h2 className="nav" style={{ marginTop: 0, color: "cyan", padding: "2%" }}>
                                    17. Sort Without Articles
                                </h2>
                                <h4 style={{ padding: 5 }}>
                                    Expanded understanding of sort by organizing a list of my favorite bands in alphabetical order without their articles affecting the order.
                                </h4>
                                <p style={{ color: "lime", padding: 5 }}>
                                    JavaScript, HTML, & CSS.
                                </p>
                                <p style={{ margin: 0, marginRight: 5 }}>
                                    Made: 05/31/2019
                                </p>
                            </div>
                        </a>
                    </div>
                </div>
                <div className="project18" style={{ cursor: "pointer", backgroundSize: "cover", backgroundRepeat: "no-repeat" }}>
                    <div className='middle1'>
                        <a href="http://app18-javascript30.surge.sh/">
                            <div className='projectInfo' style={{ marginTop: "-1.5em" }}>
                                <h2 className="nav" style={{ marginTop: 0, color: "cyan", padding: "2%" }}>
                                    18. Videos Total Time
                                </h2>
                                <h4 style={{ padding: 5 }}>
                                    Using the reduce method to find the total seconds, minutes, and hours of the videos.
                                </h4>
                                <p style={{ color: "lime", padding: 5 }}>
                                    JavaScript, HTML, & CSS.
                                </p>
                                <p style={{ margin: 0, marginRight: 5 }}>
                                    Made: 06/01/2019
                                </p>
                            </div>
                        </a>
                    </div>
                </div>
                <div className="project19" style={{ cursor: "pointer", backgroundSize: "cover", backgroundRepeat: "no-repeat" }}>
                    <div className='middle1'>
                        <a href="http://app19-javascript30.netlify.com/">
                            <div className='projectInfo' style={{ marginTop: "-1.5em" }}>
                                <h2 className="nav" style={{ marginTop: 0, color: "cyan", padding: "2%" }}>
                                    19. Photobooth
                                </h2>
                                <h4 style={{ padding: 5 }}>
                                    Recreated a photobooth with a crazy color effect added to images that users can also download.
                                </h4>
                                <p style={{ color: "lime", padding: 5 }}>
                                    JavaScript, HTML, & CSS.
                                </p>
                                <p style={{ margin: 0, marginRight: 5 }}>
                                    Made: 06/02/2019
                                </p>
                            </div>
                        </a>
                    </div>
                </div>
                <div className="project20" style={{ cursor: "pointer", backgroundSize: "cover", backgroundRepeat: "no-repeat" }}>
                    <div className='middle1'>
                        <a href="http://app20-javascript30.netlify.com/">
                            <div className='projectInfo' style={{ marginTop: "-1.5em" }}>
                                <h2 className="nav" style={{ marginTop: 0, color: "cyan", padding: "2%" }}>
                                    20. Voice Memos
                                </h2>
                                <h4 style={{ padding: 5 }}>
                                    Simple voice memo app for users to easily log important reminders and information.
                                </h4>
                                <p style={{ color: "lime", padding: 5 }}>
                                    JavaScript, HTML, & CSS.
                                </p>
                                <p style={{ margin: 0, marginRight: 5 }}>
                                    Made: 06/03/2019
                                </p>
                            </div>
                        </a>
                    </div>
                </div>
                <div className="project21" style={{ cursor: "pointer", backgroundSize: "cover", backgroundRepeat: "no-repeat" }}>
                    <div className='middle1'>
                        <a href="http://app21-javascript30.netlify.com/">
                            <div className='projectInfo' style={{ marginTop: "-1.5em" }}>
                                <h2 className="nav" style={{ marginTop: 0, color: "cyan", padding: "2%" }}>
                                    21. Compass
                                </h2>
                                <h4 style={{ padding: 5 }}>
                                    Awesome compass app for users to know their speed and the geographical direction they are facing.
                                </h4>
                                <p style={{ color: "lime", padding: 5 }}>
                                    JavaScript, HTML, & CSS.
                                </p>
                                <p style={{ margin: 0, marginRight: 5 }}>
                                    Made: 06/04/2019
                                </p>
                            </div>
                        </a>
                    </div>
                </div>
                <div className="project22" style={{ cursor: "pointer", backgroundSize: "cover", backgroundRepeat: "no-repeat" }}>
                    <div className='middle1'>
                        <a href="http://app22-javascript30.netlify.com/">
                            <div className='projectInfo' style={{ marginTop: "-1.5em" }}>
                                <h2 className="nav" style={{ marginTop: 0, color: "cyan", padding: "2%" }}>
                                    22. Follow Along Nav
                                </h2>
                                <h4 style={{ padding: 5 }}>
                                    Immersive follow along navigation to important words on the current page.
                                </h4>
                                <p style={{ color: "lime", padding: 5 }}>
                                    JavaScript, HTML, & CSS.
                                </p>
                                <p style={{ margin: 0, marginRight: 5 }}>
                                    Made: 06/05/2019
                                </p>
                            </div>
                        </a>
                    </div>
                </div>
                <div className="project23" style={{ cursor: "pointer", backgroundSize: "cover", backgroundRepeat: "no-repeat" }}>
                    <div className='middle1'>
                        <a href="http://app23-javascript30.netlify.com/">
                            <div className='projectInfo' style={{ marginTop: "-1.5em" }}>
                                <h2 className="nav" style={{ marginTop: 0, color: "cyan", padding: "2%" }}>
                                    23. Text To Speech
                                </h2>
                                <h4 style={{ padding: 5 }}>
                                    Innovative and simple way for users to have text read to them if they are tired or don't want to read.
                                </h4>
                                <p style={{ color: "lime", padding: 5 }}>
                                    JavaScript, HTML, & CSS.
                                </p>
                                <p style={{ margin: 0, marginRight: 5 }}>
                                    Made: 06/06/2019
                                </p>
                            </div>
                        </a>
                    </div>
                </div>
                <div className="project24" style={{ cursor: "pointer", backgroundSize: "cover", backgroundRepeat: "no-repeat" }}>
                    <div className='middle1'>
                        <a href="http://app24-javascript30.netlify.com/">
                            <div className='projectInfo' style={{ marginTop: "-1.5em" }}>
                                <h2 className="nav" style={{ marginTop: 0, color: "cyan", padding: "2%" }}>
                                    24. Sticky Nav
                                </h2>
                                <h4 style={{ padding: 5 }}>
                                    Creative sticky navigation to allow users to have access to all important tabs at anytime.
                                </h4>
                                <p style={{ color: "lime", padding: 5 }}>
                                    JavaScript, HTML, & CSS.
                                </p>
                                <p style={{ margin: 0, marginRight: 5 }}>
                                    Made: 06/07/2019
                                </p>
                            </div>
                        </a>
                    </div>
                </div>
                <div className="project25" style={{ cursor: "pointer", backgroundSize: "cover", backgroundRepeat: "no-repeat" }}>
                    <div className='middle1'>
                        <a href="http://app25-javascript30.netlify.com/">
                            <div className='projectInfo' style={{ marginTop: "-1.5em" }}>
                                <h2 className="nav" style={{ marginTop: 0, color: "cyan", padding: "2%" }}>
                                    25. JavaScript Capture
                                </h2>
                                <h4 style={{ padding: 5 }}>
                                    Perfected Javascript capture through capture and propagation.
                                </h4>
                                <p style={{ color: "lime", padding: 5 }}>
                                    JavaScript, HTML, & CSS.
                                </p>
                                <p style={{ margin: 0, marginRight: 5 }}>
                                    Made: 06/08/2019
                                </p>
                            </div>
                        </a>
                    </div>
                </div>
                <div className="project26" style={{ cursor: "pointer", backgroundSize: "cover", backgroundRepeat: "no-repeat" }}>
                    <div className='middle1'>
                        <a href="http://app26-javascript30.netlify.com/">
                            <div className='projectInfo' style={{ marginTop: "-1.5em" }}>
                                <h2 className="nav" style={{ marginTop: 0, color: "cyan", padding: "2%" }}>
                                    26. Drop Down Nav
                                </h2>
                                <h4 style={{ padding: 5 }}>
                                    Interactive drop down navigation for tabs that provide more information on the tab.
                                </h4>
                                <p style={{ color: "lime", padding: 5 }}>
                                    JavaScript, HTML, & CSS.
                                </p>
                                <p style={{ margin: 0, marginRight: 5 }}>
                                    Made: 06/09/2019
                                </p>
                            </div>
                        </a>
                    </div>
                </div>
                <div className="project27" style={{ cursor: "pointer", backgroundSize: "cover", backgroundRepeat: "no-repeat" }}>
                    <div className='middle1'>
                        <a href="http://app27-javascript30.netlify.com/">
                            <div className='projectInfo' style={{ marginTop: "-1.5em" }}>
                                <h2 className="nav" style={{ marginTop: 0, color: "cyan", padding: "2%" }}>
                                    27. Sliding Curtains
                                </h2>
                                <h4 style={{ padding: 5 }}>
                                    Playful sliding curtains that allow a user to scroll horizontally or grab and drag the curtains.
                                </h4>
                                <p style={{ color: "lime", padding: 5 }}>
                                    JavaScript, HTML, & CSS.
                                </p>
                                <p style={{ margin: 0, marginRight: 5 }}>
                                    Made: 06/10/2019
                                </p>
                            </div>
                        </a>
                    </div>
                </div>
                <div className="project28" style={{ cursor: "pointer", backgroundSize: "cover", backgroundRepeat: "no-repeat" }}>
                    <div className='middle1'>
                        <a href="http://app28-javascript30.netlify.com/">
                            <div className='projectInfo' style={{ marginTop: "-1.5em" }}>
                                <h2 className="nav" style={{ marginTop: 0, color: "cyan", padding: "2%" }}>
                                    28. Video Speed Scrubber
                                </h2>
                                <h4 style={{ padding: 5 }}>
                                    Fun video speed scrubber that allows a user to be the DJ of the videos play speed at anytime.
                                </h4>
                                <p style={{ color: "lime", padding: 5 }}>
                                    JavaScript, HTML, & CSS.
                                </p>
                                <p style={{ margin: 0, marginRight: 5 }}>
                                    Made: 06/11/2019
                                </p>
                            </div>
                        </a>
                    </div>
                </div>
                <div className="project29" style={{ cursor: "pointer", backgroundSize: "cover", backgroundRepeat: "no-repeat" }}>
                    <div className='middle1'>
                        <a href="http://app29-javascript30.netlify.com/">
                            <div className='projectInfo' style={{ marginTop: "-1.5em" }}>
                                <h2 className="nav" style={{ marginTop: 0, color: "cyan", padding: "2%" }}>
                                    29. Timer
                                </h2>
                                <h4 style={{ padding: 5 }}>
                                    Useful timer app that allows a user to set a time for a break of any length, user can see time remaining in tab title.
                                </h4>
                                <p style={{ color: "lime", padding: 5 }}>
                                    JavaScript, HTML, & CSS.
                                </p>
                                <p style={{ margin: 0, marginRight: 5 }}>
                                    Made: 06/12/2019
                                </p>
                            </div>
                        </a>
                    </div>
                </div>
                <div className="project30" style={{ cursor: "pointer", backgroundSize: "cover", backgroundRepeat: "no-repeat" }}>
                    <div className='middle1'>
                        <a href="http://app30-javascript30.netlify.com/">
                            <div className='projectInfo' style={{ marginTop: "-1.5em" }}>
                                <h2 className="nav" style={{ marginTop: 0, color: "cyan", padding: "2%" }}>
                                    30. Wack-A-Mole
                                </h2>
                                <h4 style={{ padding: 5 }}>
                                    Fun & immersive recreation of the classic game Wack-A-Mole!
                                </h4>
                                <p style={{ color: "lime", padding: 5 }}>
                                    JavaScript, HTML, & CSS.
                                </p>
                                <p style={{ margin: 0, marginRight: 5 }}>
                                    Made: 06/13/2019
                                </p> 
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Home;