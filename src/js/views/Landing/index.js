import React from "react"; // eslint-disable-line no-unused-vars
import { hot } from "react-hot-loader";

//import Vortex from "../../components/Vortex";
import ParticleBackdrop from "../../components/ParticleBackdrop";
import MadLib from "../../components/MadLib";

// No need for lifecycle events at the moment for the App container, so it may be a stateless function. State will be managed by Redux.
const landing = () => {
    return (
        <div>
            <ParticleBackdrop CssClass="landing-zone-backdrop" CanvasColor="#26485B" MaxParticleCount={800} MaxParticleSize={3} NoTrails={true} />
            <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
                <div style={{ zIndex: 1, marginTop: "10%", paddingBottom: "4rem" }}>
                    <span className="landing-zone-logo"></span>
                </div>
                <div style={{ zIndex: 1, position: "relative", top: "10%" }}>
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
            </div>
        </div>
    );
};

export default hot(module)(landing);
/*
            <Vortex CanvasDiameter={400} CanvasColor="rgba(0,0,0,0.1)" MaxParticleCount={50} ParticleSize={40}>
                <div className="centerContent" style={{ backgroundColor: "grey", borderRadius: 380, width: 380, height: 380, position: "relative", top: 390, left: 10, overflow: "hidden" }}>
                    <img src="https://www.somepets.com/wp-content/uploads/2013/01/What-a-Funny-Little-Kitten-1.jpg" />
                </div>
            </Vortex>
            <Vortex CanvasDiameter={400} CanvasColor="rgba(0,0,0,0.1)" MaxParticleCount={50} ParticleSize={2}>
                <div className="centerContent" style={{ backgroundColor: "grey", borderRadius: 380, width: 380, height: 380, position: "relative", top: 390, left: 10, overflow: "hidden" }}>
                    <img src="https://media.giphy.com/media/zhJR6HbK4fthC/giphy.gif" />
                </div>
            </Vortex>
            <Vortex CanvasDiameter={400} CanvasColor="rgba(0,0,0,0.1)" MaxParticleCount={200} ParticleSize={2} NoTrails={true}>
                <div className="centerContent" style={{ backgroundColor: "grey", borderRadius: 380, width: 380, height: 380, position: "relative", top: 390, left: 10, overflow: "hidden" }}>
                    <img src="https://media.giphy.com/media/zhJR6HbK4fthC/giphy.gif" />
                </div>
            </Vortex>
*/