export default function ZeroSection() {
    return (
        <section id ="zerosection" className="zero-section">
         <div className="zero-section-content-box">
         <div className="zero-section-content">
         <p className="section-title">Hey I'm Jeremy</p>
         <h1 className="zero-section-title">
            <span className="hero-section-title-color">
                Full Stack 
            </span>{""}
            <br />
            Developer
         </h1>
         <p className="hero-section-description">
            I am a full stack developer with a passion for creating beautiful and functional websites.
            <br />Creating websites that are both visually appealing and user-friendly is my goal.
            <br />I am always looking for new challenges and opportunities to learn and grow as a developer.

         </p>
         </div>
         <a href="#contact"><button className="btn btn-primary">Get In Touch</button></a>
         </div>
         <div className="zero-section-img">
            <img src="./img/hero.png" alt="Zero Section" />
         </div>
        </section>
    )
}