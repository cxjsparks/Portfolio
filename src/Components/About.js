import React from "react"
import { Link } from "react-router-dom"


const About = () => {
    return (
        <div>
            <div className="about">
                <h3 className="chloe">Chloe Jager</h3>
                <p>Welcome! I'm glad you stopped by. I'm a backend developer who enjoys making things work for both the frontend developers and those who use the final product.</p>
                <p>I'm a former law firm receptionist with a background in client management. I know what you're thinking. How can a receptionist be in client mangement?</p>
                <p>The clients of the firm weren't the only ones to whom I attended. Everyone I assisted was my client, whether they worked for the firm or not, adn I wanted to do the best for all of them.</p>
                <p>After many comfortable years at the firm, I decided it was time to make myself uncomfortable. How best to do that? Jump into tech!</p>
                <p>It's been challenging, probably the hardest thing I've ever done career-wise. I cried and laughed, and most importantly, I found a great community of which to be a part.</p>
            </div>

            <ul>
                <a href="https://www.linkedin.com/in/chloe-jager/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                <br></br>
                <a href="https://github.com/cxjsparks" target="_blank" rel="noopener noreferrer">GitHub</a>
                <br></br>
                <a href="mailto:cxjmeister@gmail.com">Contact Me</a>
            </ul>


        </div>
    )  
     
}

export default About;