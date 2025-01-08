import React from 'react'
import "./About.css"
import { useNavigate } from 'react-router-dom';
import hand from "../../assets/hand_icon.png"
import linkedin_logo from "../../assets/linkedin.png"
import rocket_img from "../../assets/rocket.png"
import home_img from "../../assets/home.png"

const About = () => {

  const navigate = useNavigate();

  const handleToHome = () => {
    navigate('/home');
  }


  return (
    <div className='about-contain'>      

        <div className="description">
          <h2><img src={hand} alt="Hand" className='hand-img' /> Hello, I am</h2>
          <h3>Nixon Batallas</h3>
          <h2>And I'm a <span>Fontend Developer</span></h2>
          <p>I have 3 years of experience creating modern and functional web interfaces. I specialize in HTML, CSS, JavaScript, React. <br />always focused on delivering the best user experience. I'm passionate about continuing to learn and improve my skills in <br />web development.</p>
        </div>

        <div className="social-icon">
          <a href="https://www.linkedin.com/in/nixon-batallas-b91353257/" target='blank'><img src={linkedin_logo} alt="Logo" /></a>
        </div>

        <div className="btn-back">
          <button onClick={handleToHome} className='home-btn'><img src={home_img} alt="Arrow"/>Go to Home</button>
        </div>     
        <img src={rocket_img} alt="Rocket" className='rocket' />        
    </div>
  )
};

export default About;