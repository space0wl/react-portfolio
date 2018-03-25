import React from "react"; // eslint-disable-line no-unused-vars
import { hot } from "react-hot-loader";
import { Link } from "react-router-dom";

//import Vortex from "../../components/Vortex";
import ParticleBackdrop from "../../components/ParticleBackdrop";
import MadLib from "../../components/MadLib";

// No need for lifecycle events at the moment for the App container, so it may be a stateless function. State will be managed by Redux.
const landing = () => {
    return (
        <div>
            <ParticleBackdrop CssClass="landing-zone-backdrop" CanvasColor="#26485B" MaxParticleCount={800} MaxParticleSize={3} NoTrails={true} />
            <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-evenly", alignItems: "center", height: "100vh" }}>
                <div style={{ zIndex: 1 }}>
                    <span className="landing-zone-logo"></span>
                </div>
                <div style={{ zIndex: 1 }}>
                    <span className="rift-demi">Hey stranger! My name is Marc Brannan.</span>
                    <br />
                    <MadLib LeftComponent="I like to" Modifier="with" Libs={[{
                        action: "Code",
                        nouns: ["C#", "JavaScript", "TypeScript", "Swift"]
                    },
                    {
                        action: "Build",
                        nouns: ["ReactJS", ".NET Core", "Sass", "WebPack"]
                    },
                    {
                        action: "Tinker",
                        nouns: ["Motorcycles", "FDM Printing", "Things That Fly", "Electronics"]
                    },
                    {
                        action: "Design",
                        nouns: ["Illustrator", "Photoshop", "XD", "Unity"]
                    }]} />
                </div>
                <Link className="fontawesome-chevron-down" style={{zIndex: 1, fontSize: "2rem", color:"#FFF", textDecoration:"none"}} to="/Skills" />
            </div>
        </div>
    );
};

export default hot(module)(landing);