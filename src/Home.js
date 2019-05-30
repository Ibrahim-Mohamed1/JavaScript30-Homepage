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
                <div className="project1" style={{ cursor: "pointer", backgroundSize: "cover", backgroundRepeat: "no-repeat"}}>
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
                <div className="project2" style={{ cursor: "pointer", backgroundSize: "cover", backgroundRepeat: "no-repeat"}}>
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
                <div className="project3" style={{ cursor: "pointer", backgroundSize: "cover", backgroundRepeat: "no-repeat"}}>
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
                <div className="project4" style={{ cursor: "pointer", backgroundSize: "cover", backgroundRepeat: "no-repeat"}}>
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
                <div className="project5" style={{ cursor: "pointer", backgroundSize: "cover", backgroundRepeat: "no-repeat"}}>
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
                <div className="project6" style={{ cursor: "pointer", backgroundSize: "cover", backgroundRepeat: "no-repeat"}}>
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
                <div className="project7" style={{ cursor: "pointer", backgroundSize: "cover", backgroundRepeat: "no-repeat"}}>
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
                <div className="project8" style={{ cursor: "pointer", backgroundSize: "cover", backgroundRepeat: "no-repeat"}}>
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
                <div className="project9" style={{ cursor: "pointer", backgroundSize: "cover", backgroundRepeat: "no-repeat"}}>
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
                <div className="project10" style={{ cursor: "pointer", backgroundSize: "cover", backgroundRepeat: "no-repeat"}}>
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
                <div className="project11" style={{ cursor: "pointer", backgroundSize: "cover", backgroundRepeat: "no-repeat"}}>
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
                <div className="project12" style={{ cursor: "pointer", backgroundSize: "cover", backgroundRepeat: "no-repeat"}}>
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
                <div className="project13" style={{ cursor: "pointer", backgroundSize: "cover", backgroundRepeat: "no-repeat"}}>
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
                <div className="project14" style={{ cursor: "pointer", backgroundSize: "cover", backgroundRepeat: "no-repeat"}}>
                    <div className='middle1'>
                        <a href="http://app14-javascript30.surge.sh/">
                            <div className='projectInfo' style={{ marginTop: "-1.5em" }}>
                                <h2 className="nav" style={{ marginTop: 0, color: "cyan", padding: "2%" }}>
                                    14. JS References VS Copy
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
                <div className="project15" style={{ cursor: "pointer", backgroundSize: "cover", backgroundRepeat: "no-repeat"}}>
                    <div className='middle'>
                        <a href="/">
                            <div className='projectInfo' style={{ marginTop: "-1.5em" }}>
                                <h2 className="nav" style={{ marginTop: 0, color: "cyan", padding: "2%" }}>
                                    15. Local Storage
                                </h2>
                                <h4 style={{ padding: 5 }}>
                                    Simple app to help users practice their Tic Tac Toe skills.
                                </h4>
                                <p style={{ color: "lime", padding: 5 }}>
                                    JavaScript, React, JSX, Axios, HTML, & CSS.
                                </p>
                                <p style={{ margin: 0, marginRight: 5 }}>
                                    Made: 05/28/2019
                                </p>
                            </div>
                        </a>
                    </div>
                </div>
                <div className="project16" style={{ cursor: "pointer", backgroundSize: "cover", backgroundRepeat: "no-repeat"}}>
                    <div className='middle'>
                        <a href="/">
                            <div className='projectInfo' style={{ marginTop: "-1.5em" }}>
                                <h2 className="nav" style={{ marginTop: 0, color: "cyan", padding: "2%" }}>16. Coming Soon...</h2>
                                {/* <h4 style={{ padding: 5 }}>
                                    Simple app to help users find things to do if they're bored.
                                </h4>
                                <p style={{ color: "lime", padding: 5 }}>JavaScript, React, JSX, Axios, Bored API, HTML, & CSS.</p>
                                <p style={{ margin: 0, marginRight: 5 }}>Made: 05/29/2019</p> */}
                            </div>
                        </a>
                    </div>
                </div>
                <div className="project17" style={{ cursor: "pointer", backgroundSize: "cover", backgroundRepeat: "no-repeat"}}>
                    <div className='middle'>
                        <a href="/">
                            <div className='projectInfo' style={{ marginTop: "-1.5em" }}>
                                <h2 className="nav" style={{ marginTop: 0, color: "cyan", padding: "2%" }}>17. Coming Soon...</h2>
                                {/* <h4 style={{ padding: 5 }}>
                                    Simple food recipe app to help users find and attempt to make new foods.
                                </h4>
                                <p style={{ color: "lime", padding: 5 }}>JavaScript, React, JSX, Axios, Recipe Puppy API, HTML, & CSS.</p>
                                <p style={{ margin: 0, marginRight: 5 }}>Made: 05/30/2019</p> */}
                            </div>
                        </a>
                    </div>
                </div>
                <div className="project18" style={{ cursor: "pointer", backgroundSize: "cover", backgroundRepeat: "no-repeat"}}>
                    <div className='middle'>
                        <a href="/">
                            <div className='projectInfo' style={{ marginTop: "-1.5em" }}>
                                <h2 className="nav" style={{ marginTop: 0, color: "cyan", padding: "2%" }}>18. Coming Soon...</h2>
                                {/* <h4 style={{ padding: 5 }}>
                                    Simple jokes app to help users smile by reading some great programmer/funny jokes.
                                </h4>
                                <p style={{ color: "lime", padding: 5 }}>JavaScript, React, JSX, Axios, Jokes API, HTML, & CSS.</p>
                                <p style={{ margin: 0, marginRight: 5 }}>Made: 05/1/2019</p> */}
                            </div>
                        </a>
                    </div>
                </div>
                <div className="project19" style={{ cursor: "pointer", backgroundSize: "cover", backgroundRepeat: "no-repeat"}}>
                    <div className='middle'>
                        <a href="/">
                            <div className='projectInfo' style={{ marginTop: "-1.5em" }}>
                                <h2 className="nav" style={{ marginTop: 0, color: "cyan", padding: "2%" }}>19. Coming Soon...</h2>
                                {/* <h4 style={{ padding: 5 }}>
                                    Simple fake id app that users can engage with.
                                </h4>
                                <p style={{ color: "lime", padding: 5 }}>JavaScript, React, JSX, Axios, UI Names API, HTML, & CSS.</p>
                                <p style={{ margin: 0, marginRight: 5 }}>Made: 05/2/2019</p> */}
                            </div>
                        </a>
                    </div>
                </div>
                <div className="project20" style={{ cursor: "pointer", backgroundSize: "cover", backgroundRepeat: "no-repeat"}}>
                    <div className='middle'>
                        <a href="/">
                            <div className='projectInfo' style={{ marginTop: "-1.5em" }}>
                                <h2 className="nav" style={{ marginTop: 0, color: "cyan", padding: "2%" }}>20. Coming Soon...</h2>
                                {/* <h4 style={{ padding: 5 }}>
                                    Simple app to help users quickly figure out their ip address.
                                </h4>
                                <p style={{ color: "lime", padding: 5 }}>JavaScript, React, JSX, Axios, Ipify API, HTML, & CSS.</p>
                                <p style={{ margin: 0, marginRight: 5 }}>Made: 05/3/2019</p> */}
                            </div>
                        </a>
                    </div>
                </div>
                <div className="project21" style={{ cursor: "pointer", backgroundSize: "cover", backgroundRepeat: "no-repeat"}}>
                    <div className='middle'>
                        <a href="/">
                            <div className='projectInfo' style={{ marginTop: "-1.5em" }}>
                                <h2 className="nav" style={{ marginTop: 0, color: "cyan", padding: "2%" }}>21. Coming Soon...</h2>
                                {/* <h4 style={{ padding: 5 }}>
                                    Simple app that helps users find company logos to implement into their projects
                                </h4>
                                <p style={{ color: "lime", padding: 5 }}>JavaScript, React, JSX, Axios, Clearbit Logo API, HTML, & CSS.</p>
                                <p style={{ margin: 0, marginRight: 5 }}>Made: 05/4/2019</p> */}
                            </div>
                        </a>
                    </div>
                </div>
                <div className="project22" style={{ cursor: "pointer", backgroundSize: "cover", backgroundRepeat: "no-repeat"}}>
                    <div className='middle'>
                        <a href="/">
                            <div className='projectInfo' style={{ marginTop: "-1.5em" }}>
                                <h2 className="nav" style={{ marginTop: 0, color: "cyan", padding: "2%" }}>22. Coming Soon...</h2>
                                {/* <h4 style={{ padding: 5 }}>
                                    Simple app that helps users practice previous jeopardy questions to become the next Jeopardy winner.
                                </h4>
                                <p style={{ color: "lime", padding: 5 }}>JavaScript, React, JSX, Axios, JService API, HTML, & CSS.</p>
                                <p style={{ margin: 0, marginRight: 5 }}>Made: 05/5/2019</p> */}
                            </div>
                        </a>
                    </div>
                </div>
                <div className="project23" style={{ cursor: "pointer", backgroundSize: "cover", backgroundRepeat: "no-repeat"}}>
                    <div className='middle'>
                        <a href="/">
                            <div className='projectInfo' style={{ marginTop: "-1.5em" }}>
                                <h2 className="nav" style={{ marginTop: 0, color: "cyan", padding: "2%" }}>23. Coming Soon...</h2>
                                {/* <h4 style={{ padding: 5 }}>
                                    Simple app to amuse users with quotes by Kanye West.
                                </h4>
                                <p style={{ color: "lime", padding: 5 }}>JavaScript, React, JSX, Axios, Kanye API, HTML, & CSS.</p>
                                <p style={{ margin: 0, marginRight: 5 }}>Made: 05/6/2019</p> */}
                            </div>
                        </a>
                    </div>
                </div>
                <div className="project24" style={{ cursor: "pointer", backgroundSize: "cover", backgroundRepeat: "no-repeat"}}>
                    <div className='middle'>
                        <a href="/">
                            <div className='projectInfo' style={{ marginTop: "-1.5em" }}>
                                <h2 className="nav" style={{ marginTop: 0, color: "cyan", padding: "2%" }}>24. Coming Soon...</h2>
                                {/* <h4 style={{ padding: 5 }}>
                                    Simple lyric app to help users practice singing along to their favorite songs.
                                </h4>
                                <p style={{ color: "lime", padding: 5 }}>JavaScript, React, JSX, Axios, Lyric API, HTML, & CSS.</p>
                                <p style={{ margin: 0, marginRight: 5 }}>Made: 05/7/2019</p> */}
                            </div>
                        </a>
                    </div>
                </div>
                <div className="project25" style={{ cursor: "pointer", backgroundSize: "cover", backgroundRepeat: "no-repeat"}}>
                    <div className='middle'>
                        <a href="/">
                            <div className='projectInfo' style={{ marginTop: "-1.5em" }}>
                                <h2 className="nav" style={{ marginTop: 0, color: "cyan", padding: "2%" }}>25. Coming Soon...</h2>
                                {/* <h4 style={{ padding: 5 }}>
                                    Simple app that checks the availability of a users desired domain.
                                </h4>
                                <p style={{ color: "lime", padding: 5 }}>JavaScript, React, JSX, Axios, Domain API, HTML, & CSS.</p>
                                <p style={{ margin: 0, marginRight: 5 }}>Made: 05/8/2019</p> */}
                            </div>
                        </a>
                    </div>
                </div>
                <div className="project26" style={{ cursor: "pointer", backgroundSize: "cover", backgroundRepeat: "no-repeat"}}>
                    <div className='middle'>
                        <a href="/">
                            <div className='projectInfo' style={{ marginTop: "-1.5em" }}>
                                <h2 className="nav" style={{ marginTop: 0, color: "cyan", padding: "2%" }}>26. Coming Soon...</h2>
                                {/* <h4 style={{ padding: 5 }}>
                                    Simple app to help users understand the slang of todays teens.
                                </h4>
                                <p style={{ color: "lime", padding: 5 }}>JavaScript, React, JSX, Axios, Urban Dictionary API, HTML, & CSS.</p>
                                <p style={{ margin: 0, marginRight: 5 }}>Made: 05/9/2019</p> */}
                            </div>
                        </a>
                    </div>
                </div>
                <div className="project27" style={{ cursor: "pointer", backgroundSize: "cover", backgroundRepeat: "no-repeat"}}>
                    <div className='middle'>
                        <a href="/">
                            <div className='projectInfo' style={{ marginTop: "-1.5em" }}>
                                <h2 className="nav" style={{ marginTop: 0, color: "cyan", padding: "2%" }}>27. Coming Soon...</h2>
                                {/* <h4 style={{ padding: 5 }}>
                                    Simple app that checks the probability of a user and their crushes compatibility.
                                </h4>
                                <p style={{ color: "lime", padding: 5 }}>JavaScript, React, JSX, Axios, Love Calculator API, HTML, & CSS.</p>
                                <p style={{ margin: 0, marginRight: 5 }}>Made: 05/10/2019</p> */}
                            </div>
                        </a>
                    </div>
                </div>
                <div className="project28" style={{ cursor: "pointer", backgroundSize: "cover", backgroundRepeat: "no-repeat"}}>
                    <div className='middle'>
                        <a href="/">
                            <div className='projectInfo' style={{ marginTop: "-1.5em" }}>
                                <h2 className="nav" style={{ marginTop: 0, color: "cyan", padding: "2%" }}>28. Coming Soon...</h2>
                                {/* <h4 style={{ padding: 5 }}>
                                    Simple app to help users find search and find desired content on a replica of Google.
                                </h4>
                                <p style={{ color: "lime", padding: 5 }}>JavaScript, React, JSX, Axios, FAROO Web Search API, HTML, & CSS.</p>
                                <p style={{ margin: 0, marginRight: 5 }}>Made: 05/11/2019</p> */}
                            </div>
                        </a>
                    </div>
                </div>
                <div className="project29" style={{ cursor: "pointer", backgroundSize: "cover", backgroundRepeat: "no-repeat"}}>
                    <div className='middle'>
                        <a href="/">
                            <div className='projectInfo' style={{ marginTop: "-1.5em" }}>
                                <h2 className="nav" style={{ marginTop: 0, color: "cyan", padding: "2%" }}>29. Coming Soon...</h2>
                                {/* <h4 style={{ padding: 5 }}>
                                </h4>
                                <p style={{ color: "lime", padding: 5 }}></p>
                                <p style={{ margin: 0, marginRight: 5 }}>Made: 05/11/2019</p> */}
                            </div>
                        </a>
                    </div>
                </div>
                <div className="project30" style={{ cursor: "pointer", backgroundSize: "cover", backgroundRepeat: "no-repeat"}}>
                    <div className='middle'>
                        <a href="/">
                            <div className='projectInfo' style={{ marginTop: "-1.5em" }}>
                                <h2 className="nav" style={{ marginTop: 0, color: "cyan", padding: "2%" }}>30. Coming Soon...</h2>
                                {/* <h4 style={{ padding: 5 }}>
                                </h4>
                                <p style={{ color: "lime", padding: 5 }}></p>
                                <p style={{ margin: 0, marginRight: 5 }}>Made: 05/11/2019</p>  */}
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Home;