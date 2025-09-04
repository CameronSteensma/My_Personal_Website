import './App.css'
import utesLogo from '/src/assets/utes-logo.png'
import jazzLogo from '/src/assets/jazz-logo.png'
import websiteProfileImage from '/src/assets/webSiteProfileImage.png'
import { Mail, Github, FileCode2, Info, FolderOpen, User } from "lucide-react";
import { Link } from "react-scroll";
import { Helmet } from 'react-helmet';


function App() {
  return (
    <div className="w-full flex flex-col">
      {/* Fixed Navbar */}
      <Helmet>
        <title>Cameron Steensma | Software Engineer</title>
        <link rel="icon" type="image/x-icon" href='/favicon.ico' />
      </Helmet>
      <header className="fixed top-0 left-0 w-full box-shadow">
        <div className="w-full flex justify-between items-center">
          {/* Optional logo or text can go here */}
          <nav className="flex space-x-12 text-gray-900 font-medium text-lg">
            <Link to="about" smooth={true} duration={600} offset={-80} className='flex items-center space-x-2 cursor-pointer'>
              <Info className='w-5 h-5' /><span>About</span></Link>
            <Link to="projects" smooth={true} duration={600} offset={-80} className='flex items-center space-x-2 cursor-pointer'>
              <FolderOpen className='w-5 h-5' /><span>Projects</span></Link>
            <Link to="contact" smooth={true} duration={600} offset={-80} className='flex items-center space-x-2 cursor-pointer'>
              <Mail className='w-5 h-5' /><span>Contact</span></Link>
          </nav>
        </div>
      </header>

      {/* Animated Banner */}
      <section id='banner'>
        <div className="w-screen h-[400px] flex flex-col items-center justify-center animated-gradient mt-20">
          <h1 className="text-5xl md:text-7xl font-extrabold bg-clip-text bg-gradient-to-r from-yellow-400 via-red-500 to-pink-600 drop-shadow-lg">
            Hi, I’m Cameron Lewis Steensma
          </h1>
          <p className="mt-4 text-xl md:text-2xl text-white/90">
            Software Engineer | Building Modern Web Apps & Scalable Systems
          </p>
        </div>
      </section>

      <div className="flex justify-center my-6">
        <div className="h-2 w-32 bg-blue-600 rounded-full shadow-lg"></div>
      </div>

      {/* About Section */}
      <section id="about" className="py-20 bg-white text-gray-800">
        <div className="max-w-3xl mx-auto px-6 flex flex-col items-center space-y-10 text-center">
          { /* Profile Image */}
          <div className="flex justify-center">
            <img
              src={websiteProfileImage}
              alt="Profile"
              className="w-64 h-auto rounded-3xl shadow-xl hover:scale-105 transition-transform duration-300"
            />
          </div>

          <div className="space-y-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold flex items-center justify-center gap-2">
              <User className="w-6 h-6 text-blue-600" /> About Me
            </h2>
            <p className="text-lg md:text-xl leading-relaxed text-gray-700 max-w-xl" style={{ maxWidth: '750px' }}>
              I’m Cameron, a software engineer passionate about building modern web apps,
              data-driven solutions, and scalable systems. I graduated from the University of Utah in 2024 with my Bachelors of Science in Computer Science.
              I enjoy working with .NET MAUI, React, JavaScript, Python and cloud technologies
              to solve real-world problems.
              If I'm not coming up with creative solutions I'm likely playing guitar or enjoying
              the beautiful nature of Utah!
              <span className="font-bold text-red-600"> Oh, and by the way, GO UTES!</span>
            </p>
            {/* Logos */}
            <div className="flex flex-wrap justify-center md:justify-start items-center gap-6">
              <div className="flex items-center space-x-2">
                <img src={utesLogo} alt="University of Utah Logo" className="w-10 h-10 object-contain" />
                <span className="text-lg font-semibold text-red-600">GO UTES!</span>
              </div>
              <div className="flex items-center space-x-2">
                <img src={jazzLogo} alt="Utah Jazz Logo" className="w-10 h-10 object-contain" />
                <span className="text-lg font-semibold text-purple-600">GO JAZZ!</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="flex flex-col min-h-[100px] items-center justify-center">
        <div className="h-2 w-32 bg-gradient-to-r from-yellow-400 via-red-500 to-pink-600 rounded-full shadow-lg flex-shrink-0"></div>
      </div>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-gray-100">
        <div className="mx-auto px-6 flex flex-col space-y-12" style={{ maxWidth: '1000px' }}>
          <h2 className="text-3xl md:text-4xl font-bold text-center">My Projects</h2>
          <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-12">
            {/* Project 1 */}
            <div className="bg-white/80 backdrop-blur-md border border-gray-200 rounded-3xl shadow-lg p-10 flex flex-col justify-between hover:shadow-2xl hover:scale-105 hover:border-blue-400 transition-transform transition-shadow duration-300">
              <h3 className="text-xl md:text-2xl font-semibold text-gray-800 mb-4">
                <FileCode2 className='w-5 h-5' /> Finance Tracker</h3>
              <p className="text-gray-700 mt-2 leading-relaxed max-w-prose">
                A full-stack personal finance tracker built with Django, React, and PostgreSQL.
                Features category-based spending charts and reporting.
              </p>
              <a href="https://github.com/CameronSteensma/Personal_Finance_Tracker.git"
                className="mt-6 inline-block px-6 py-3 bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-semibold rounded-xl shadow-lg hover:from-blue-600 hover:to-indigo-700 transition-all duration-300">
                <Github className='w-5 h-5' /> View on GitHub →
              </a>
            </div>

            {/* Project 2 */}
            <div className="bg-white/80 backdrop-blur-md border border-gray-200 rounded-3xl shadow-lg p-10 flex flex-col justify-between hover:shadow-2xl hover:scale-105 hover:border-purple-400 transition-transform transition-shadow duration-300">
              <h3 className="text-xl md:text-2xl font-semibold text-gray-800 mb-4">
                <FileCode2 className='w-5 h-5' /> TO-DO App</h3>
              <p className="text-gray-600 mt-2 leading-relaxed max-w-prose">
                To-do list full-stack application made from Node.js, JavaScript, and HTML.
                Services used include: Express Server, MongoDB Storage and persistence, Bootstrap for styling.
              </p>
              <a href="https://github.com/CameronSteensma/Todo_App_NodeJS.git"
                className="mt-6 inline-block px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-600 text-white font-semibold rounded-xl shadow-lg hover:from-purple-600 hover:to-pink-700 transition-all duration-300">
                <Github className='w-5 h-5' /> View on GitHub →
              </a>
            </div>
            <div className="bg-white/80 backdrop-blur-md border border-gray-200 rounded-3xl shadow-lg p-10 flex flex-col justify-between hover:shadow-2xl hover:scale-105 hover:border-purple-400 transition-transform transition-shadow duration-300">
              <h3 className="text-xl md:text-2xl font-semibold text-gray-800 mb-4">
                <FileCode2 className='w-5 h-5' /> LiveWallz App</h3>
              <p className="text-gray-600 mt-2 leading-relaxed max-w-prose">
                A highly interactive and configurable live wallpaper android application created with C++,
                OpenGL, Kotlin, MySQL and Jetpack Compose utilizing OAuth2.0 authentication.
              </p>
              <a href="https://github.com/CameronSteensma/LiveWallz.git"
                className="mt-6 inline-block px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-600 text-white font-semibold rounded-xl shadow-lg hover:from-purple-600 hover:to-pink-700 transition-all duration-300">
                <Github className='w-5 h-5' /> View on GitHub →
              </a>
            </div>
          </div>
        </div>
      </section>

      <div className="flex flex-col min-h-[100px] items-center justify-center">
        <div className="h-2 w-32 bg-gradient-to-r from-yellow-400 via-red-500 to-pink-600 rounded-full shadow-lg flex-shrink-0"></div>
      </div>

      {/* Call To Action */}
      <section id="contact" className="py-20 bg-gradient-to-r from-blue-700 to-purple-700 text-white">
        <div className="max-w-4xl mx-auto text-center px-6 flex flex-col items-center space-y-6">
          <h2 className="text-4xl md:text-5xl font-extrabold bg-clip-text bg-gradient-to-r from-yellow-400 via-red-500 to-pink-600">Let’s Connect</h2>
          <p className="text-white/90 text-lg md:text-xl max-w-prose">Interested in working together or learning more? Reach out below.</p>
          <a href="mailto:cameronsteensma@gmail.com" className="px-8 py-4 bg-white text-blue-600 font-semibold rounded-full shadow-lg shadow hover:bg-gray-100 hover:translate-y-1 hover:shadow-xl transition-transform transition-shadow duration-300">
            <Mail className='w-5 h-5' /> Email Me
          </a>
        </div>
      </section>

      <div className="flex justify-center space-x-6 mt-8 mb-12">
        <a
          href="https://github.com/CameronSteensma"
          target="_blank"
          rel="noreferrer"
          className="text-white hover:text-yellow-400 transition-colors"
        >
          <Github className="w-6 h-6" />
        </a>
        <a
          href="https://www.linkedin.com/in/cameron-steensma-406960176/"
          target="_blank"
          rel="noreferrer"
          className="text-white hover:text-blue-400 transition-colors"
        >
          <User className="w-6 h-6" />
        </a>
        <a
          href="/CamResumeEngineer.pdf"
          target="_blank"
          rel="noreferrer"
          className="text-white hover:text-green-400 transition-colors"
        >
          <FileCode2 className="w-6 h-6" />
        </a>
      </div>
    </div>
  );
}

export default App;