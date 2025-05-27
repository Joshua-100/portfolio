function About (){
    return(
        <>
                <section id="about">
      <p className="section__text__p1">Get To Know More</p>
      <h1 className="title">About Me</h1>
      <div className="section-container">
        <div className="section__pic-container">
          <img
            src="./assets/about-pic.png"
            alt="Profile picture"
            className="about-pic"
          />
        </div>
        <div className="about-details-container">
          <div className="about-containers">
            <div className="details-container">
              <img
                src="./assets/experience.png"
                alt="Experience icon"
                className="icon"
              />
              <h3>Experience</h3>
              <p>2+ years <br />Frontend Development</p>
            </div>
            <div className="details-container">
              <img
                src="./assets/education.png"
                alt="Education icon"
                className="icon"
              />
              <h3>Education</h3>
              <p>B.Sc. (Hons) in Computer Engineering<br />ICDL Certified</p>
            </div>
          </div>
          <div className="text-container">
            <p>
I'm currently an undergraduate student at the University of Zimbabwe, pursuing a Bachelor's Honours Degree in Computer Engineering. As I enter my third year, I'm preparing for industrial attachment, where I aim to gain hands-on experience in the tech industry and apply my skills in real-world environments.

With over two years of experience in frontend development, I’m passionate about using technology to solve real-world problems. I enjoy building clean, responsive, and user-friendly interfaces using tools like React, Bootstrap, and JavaScript. I'm always exploring new technologies, taking on creative projects, and striving to grow both technically and personally.
            </p>
          </div>
        </div>
      </div>
      <img
        src="./assets/arrow.png"
        alt="Arrow icon"
        className="icon arrow"
        onclick="location.href='./#experience'"
      />
    </section>
        </>
    )
}

export default About;