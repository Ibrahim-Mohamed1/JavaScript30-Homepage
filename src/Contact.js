import React from 'react';
import logo from "./logo.png"
import { Link } from "react-router-dom"
import profile from "./profile.png"

const Home = () => {
    const styles = {
        parent:{
            display: "flex",
            flexDirection:"row",
            justifyContent:"space-between",
            padding: 10
        },
        logo:{
            width: 40,
            marginRight: "auto"
        },
        navMargin: {
            marginLeft: "5%",
            textDecoration: "none"
        },
        profilePic:{
            display:"block",
            margin: "auto",
            width: 300,
            marginTop: '6em',
            borderRadius: 20
        },
        connect:{
            color:"cyan",
            textAlign:"center",
            marginTop: "1.5em",
            padding:'1%'
        },
        email:{
            color:"white",
            textAlign:"center",
            marginTop: "1.5em",
            lineHeight: 1.3
        }
    }
    return (
        <>
            <div style={styles.parent}>
                <a style={{ marginRight: "auto" }} href="/"><img className="nav" style={styles.logo} src={logo} alt="" /></a>
                <h3 style={{ ...styles.navMargin, color: "#fbbc06" }}><Link className="link" style={{ textDecoration: "none" }} to="/">Home</Link></h3>
                <h3 style={styles.navMargin}><a className="link" target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none" }} href="http://ibrahim-mohamed-dev.surge.sh">Portfolio</a></h3>
                <h3 style={{ ...styles.navMargin, color: "#fbbc06" }}><Link className="link" style={{ textDecoration: "none" }} to="/skills">Skills</Link></h3>
                <h3 className='nav' style={{ ...styles.navMargin, marginRight: "3%" }}><Link className="link" style={{ textDecoration: "none", color: "cyan" }} to="/contact">Contact</Link></h3>
            </div>
            <img style={styles.profilePic} src={profile} alt=""/>
            <h1 className="nav connect" style={{...styles.connect, cursor:"default"}}>Let's connect :)</h1>
            <h3 style={styles.email}>
                Want to get in touch or have a 
                <br/>
                project idea to discuss? Email me 
                <br/>
                at <a style={{textDecoration: "none", color:"cyan"}} rel="noopener noreferrer" href="mailto:ibrahim.mohamed.dev@gmail.com">ibrahim.mohamed.dev@gmail.com</a>
                <br/>
                or message me on <a href="https://www.linkedin.com/in/ibrahim-mohamed-/" target="_blank" rel="noopener noreferrer"  style={{textDecoration: "none", color:"cyan"}}>LinkedIn</a>.
            </h3>
        </>
    );
};

export default Home;