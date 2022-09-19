import img1 from "../assets/Twitter_Social_Icon_Rounded_Square_White.png";

export default function AboutIntro() {
    return (
        <main className="grid-main">
            <article className="about">
                <div className="about-section">
                    <h2 className="home-titel"><span>01.</span>About Me</h2>
                    <p className="home-tekst">Lorem Ipsum er ganske enkelt fyldtekst fra print- og typografiindustrien. Lorem Ipsum har været standard fyldtekst siden 1500-tallet, hvor en ukendt trykker sammensatte en tilfældig spalte for at trykke en bog til sammenligning af forskellige skrifttyper.
                    </p>
                </div>
                <div className="skills">
                    <ul className="skills-ul">
                        <li>Javascript ES6+</li>
                        <li>React</li>
                        <li>Figma</li>
                        <li>HTML and CSS</li>
                        <li>Wordpress</li>
                        <li>Photoshop</li>
                    </ul>
                </div>
            </article>
            <article className="skills-section">
                
                <div className="wrapper">
                    <div className="wrapper-img"></div>
                </div>
            </article>
        </main>
    )
};