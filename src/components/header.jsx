function Header (){
    return (
        <>
        <nav id="desktop-nav">
        <div className="logo">Takundanashe J Mutenje</div>
        <div>
            <ul className="nav-links">
                <li><a href="#about">About</a></li>
                <li><a href="#experience">Experience</a></li>
                <li><a href="#projects">Projects</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
    </div>
    </nav>
    <nav id="hamburger-nav">
      <div className="logo">Takundanashe J Mutenje</div>
      <div className="hamburger-menu">
        <div className="hamburger-icon" onclick="toggleMenu()">
          <span></span>
          <span></span>
          <span></span>
        </div>
        <div className="menu-links">
          <li><a href="#about" onclick="toggleMenu()">About</a></li>
          <li><a href="#experience" onclick="toggleMenu()">Experience</a></li>
          <li><a href="#projects" onclick="toggleMenu()">Projects</a></li>
          <li><a href="#contact" onclick="toggleMenu()">Contact</a></li>
        </div>
      </div>
    </nav>
        </>
    );
}

export default Header;