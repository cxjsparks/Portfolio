import React from "react"
import { Link } from "react-router-dom";

const Home = () => {
    return (

    <div>
        <div>
            <h3 className="projects">Projects</h3>
        </div>
        <ul className="home">
            <p>In the software immersive class I attended, we were required to create projects for each unit. This portfolio was my first project.</p>
            <p>My second project required the use of APIs. As a big Marvel Cinematic Universe fan, I decided to use Marvel's APIs to show a limited selection of their comic book covers.</p>
            <a className="mcu" href="https://cxjsparks.github.io/Project2MCU/#/Comics/428" target="_blank" rel="noopener noreferrer">Marvel Comics</a>
            <br></br>
            <p>Up next was a group project, and we chose to create a Dungeons and Dragons type of Choose-Your-Own-Adventure game.</p>
            <a className="icbinp" href="https://icbinp.github.io/ICBINP-Client/" target="_blank" rel="noopener noreferrer">Pineapple Kingdom</a>
            <br></br>
            <p>For my final project, I decided to make a game of blackjack.</p>
            <a className="blackjack" href="https://cxjsparks.github.io/Blackjack/" target="_blank" rel="noopener noreferrer">Blackjack</a>
        </ul>


    </div>
        
    )
}

export default Home;
