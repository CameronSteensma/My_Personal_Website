import './App.css'
import './index.css'
import utesLogo from '/src/assets/utes-logo.png'
import jazzLogo from '/src/assets/jazz-logo.png'
import patriotsLogo from '/src/assets/patriots-logo.png'
import websiteProfileImage from '/src/assets/webSiteProfileImage.png'
import { Mail, Github, FileCode2, Info, FolderOpen, User } from "lucide-react";
import { Link } from "react-scroll";
import { Helmet } from 'react-helmet';


function App() {
  return (
    <div className="w-full flex flex-col">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      </head>

      {/* Meta + Favicon */}
      <Helmet>
        <title>Cameron Steensma | Software Engineer</title>
        <link rel="icon" type="image/x-icon" href='/favicon.ico' />
        <meta
          name="description"
          content="Portfolio of Cameron Steensma, Software Engineer specializing in .NET MAUI, React, and cloud systems."
        />
        <meta property="og:image" content={websiteProfileImage} />
      </Helmet>

      {/* Navbar */}
      <header className="navbar fixed top-0 left-0 w-full shadow bg-white py-4">
        <div className="navbar-container w-full flex justify-center items-center gap-6">
          <nav className="nav-links flex gap-4 text-gray-700 font-medium text-base">
            <Link to="about" smooth duration={600} offset={-80} className="nav-item flex items-center gap-2 cursor-pointer">
              <Info className="w-5 h-5" />
              <span>About</span>
            </Link>
            <Link to="projects" smooth duration={600} offset={-80} className="nav-item flex items-center gap-2 cursor-pointer">
              <FolderOpen className="w-5 h-5" />
              <span>Projects</span>
            </Link>
            <Link to="contact" smooth duration={600} offset={-80} className="nav-item flex items-center gap-2 cursor-pointer">
              <Mail className="w-5 h-5" />
              <span>Contact</span>
            </Link>
          </nav>
        </div>
      </header>

      {/* Banner */}
      <section id="banner" className="mt-20">
        <div className="w-full h-[500px] flex flex-col items-center justify-center animated-gradient">
          <h1 className="text-3xl font-bold text-white text-center typing-effect">
            Hi, I’m Cameron Lewis Steensma
          </h1>
          <p className="mt-4 text-base text-white">
            Software Engineer | Building Modern Web Apps & Scalable Systems
          </p>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="mt-20 mb-20">
        <div className="flex flex-col items-center gap-6">
          <img
            src={websiteProfileImage}
            alt="Profile"
            className="w-64 rounded-lg shadow hover-card"
          />
          <h2 className="text-lg font-bold flex items-center gap-2">
            <User className="w-6 h-6 text-blue-600" /> About Me
          </h2>
          <p className="text-base text-gray-700 max-w-[750px] text-center">
            I’m Cameron, a software engineer passionate about building modern web apps,
            data-driven solutions, and scalable systems. I graduated from the University of Utah in 2024
            with my Bachelors of Science in Computer Science along with a track in Software Development.
            I have more than 3 years of professional experience in software development and engineering with over 2 years being a QA engineer.
            I enjoy working with .NET MAUI, React, JavaScript, Python and cloud technologies to solve real-world problems.
            If I'm not coming up with creative solutions I'm likely playing guitar or enjoying the beautiful nature of Utah!
            <span className="font-bold"> Oh, and by the way, GO UTES!</span>
          </p>

          {/* Logos */}
          <div className="flex flex-wrap justify-center items-center gap-12 mt-8">
            <div className="flex items-center gap-2">
              <img src={utesLogo} alt="Utes" className="w-10 h-10" />
              <span className="text-base font-medium text-red-600">GO UTES!</span>
            </div>
            <div className="flex items-center gap-2">
              <img src={jazzLogo} alt="Jazz" className="w-10 h-10" />
              <span className="text-base font-medium text-purple-600">GO JAZZ!</span>
            </div>
            <div className="flex items-center gap-2">
              <img src={patriotsLogo} alt="Patriots" className="w-10 h-10" />
              <span className="text-base font-medium text-blue-600">GO PATRIOTS!</span>
            </div>
          </div>
        </div>
      </section>

      <div className="flex justify-center mt-16 mb-16 w-full">
        <div className="gradient-divider"></div>
      </div>
      
      {/* Projects Section */}
      <section id="projects" className="pt-40 pb-28 bg-gray-100">
        <div className="mx-auto px-6 flex flex-col gap-16" style={{ maxWidth: '1100px' }}>
          <h2 className="text-2xl font-bold text-center tracking-tight">My Projects</h2>
          <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-12">

            {/* Project Card */}
            <div className="bg-white rounded-lg shadow p-4 hover-card">
              <div>
                 <h3 className="text-xl md:text-2xl font-semibold text-gray-800 mb-3 flex items-center gap-2">
                  <FileCode2 className='w-5 h-5 text-blue-500' /> Finance Tracker
                </h3>
                <p className="text-gray-700 text-sm">
                  A full-stack personal finance tracker built with Django, React, and PostgreSQL.
                  Features category-based spending charts and reporting.
                </p>
              </div>
              {/* Tech Badges */}
              <div className="mt-6 flex flex-wrap gap-2">
                <span className="px-3 py-1 text-sm font-medium bg-blue-100 text-blue-700 rounded-full">Django</span>
                <span className="px-3 py-1 text-sm font-medium bg-yellow-100 text-yellow-700 rounded-full">React</span>
                <span className="px-3 py-1 text-sm font-medium bg-purple-100 text-purple-700 rounded-full">PostgreSQL</span>
              </div>
              <a href="https://github.com/CameronSteensma/Personal_Finance_Tracker.git"
                className="mt-6 inline-flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-semibold rounded-xl shadow-lg hover:from-blue-600 hover:to-indigo-700 transition-all duration-300">
                <Github className='w-5 h-5' /> View on GitHub
              </a>
            </div>

            {/* Project Card */}
            <div className="bg-white rounded-lg shadow p-4 hover-card">
              <div>
                <h3 className="text-xl md:text-2xl font-semibold text-gray-800 mb-3 flex items-center gap-2">
                  <FileCode2 className='w-5 h-5 text-purple-500' /> TO-DO App
                </h3>
                <p className="text-gray-700 mt-2 leading-relaxed">
                  To-do list full-stack application made with Node.js, Express, and MongoDB.
                  Includes Bootstrap styling and CRUD features.
                </p>
              </div>
              {/* Tech Badges */}
              <div className="mt-6 flex flex-wrap gap-2">
                <span className="px-3 py-1 text-sm font-medium bg-green-100 text-green-700 rounded-full">Node.js</span>
                <span className="px-3 py-1 text-sm font-medium bg-gray-100 text-gray-800 rounded-full">Express</span>
                <span className="px-3 py-1 text-sm font-medium bg-orange-100 text-orange-700 rounded-full">MongoDB</span>
                <span className="px-3 py-1 text-sm font-medium bg-pink-100 text-pink-700 rounded-full">Bootstrap</span>
              </div>
              <a href="https://github.com/CameronSteensma/Todo_App_NodeJS.git"
                className="mt-6 inline-flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-600 text-white font-semibold rounded-xl shadow-lg hover:from-purple-600 hover:to-pink-700 transition-all duration-300">
                <Github className='w-5 h-5' /> View on GitHub
              </a>
            </div>

            {/* Project Card */}
            <div className="bg-white rounded-lg shadow p-4 hover-card">
              <div>
                <h3 className="text-xl md:text-2xl font-semibold text-gray-800 mb-3 flex items-center gap-2">
                  <FileCode2 className='w-5 h-5 text-pink-500' /> LiveWallz App
                </h3>
                <p className="text-gray-700 mt-2 leading-relaxed">
                  An interactive live wallpaper Android app built with C++, OpenGL, Kotlin,
                  Jetpack Compose, and OAuth2.0 authentication.
                </p>
              </div>
              {/* Tech Badges */}
              <div className="mt-6 flex flex-wrap gap-2">
                <span className="px-3 py-1 text-sm font-medium bg-red-100 text-red-700 rounded-full">C++</span>
                <span className="px-3 py-1 text-sm font-medium bg-indigo-100 text-indigo-700 rounded-full">OpenGL</span>
                <span className="px-3 py-1 text-sm font-medium bg-yellow-100 text-yellow-700 rounded-full">Kotlin</span>
                <span className="px-3 py-1 text-sm font-medium bg-green-100 text-green-700 rounded-full">Jetpack Compose</span>
                <span className="px-3 py-1 text-sm font-medium bg-blue-100 text-blue-700 rounded-full">OAuth2.0</span>
              </div>
              <a href="https://github.com/CameronSteensma/LiveWallz.git"
                className="mt-6 inline-flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-pink-500 to-purple-600 text-white font-semibold rounded-xl shadow-lg hover:from-pink-600 hover:to-purple-700 transition-all duration-300">
                <Github className='w-5 h-5' /> View on GitHub
              </a>
            </div>
            <div className="bg-white rounded-lg shadow p-4 hover-card">
              <div>
                <h3 className="text-xl md:text-2xl font-semibold text-gray-800 mb-3 flex items-center gap-2">
                  <FileCode2 className='w-5 h-5 text-pink-500' /> LiveWallz Website
                </h3>
                <p className="text-gray-700 mt-2 leading-relaxed">
                  An interactive live wallpaper website built with React.
                </p>
              </div>
              {/* Tech Badges */}
              <div className="mt-6 flex flex-wrap gap-2">
                <span className="px-3 py-1 text-sm font-medium bg-red-100 text-red-700 rounded-full">React</span>
              </div>
              <a href="https://github.com/CameronSteensma/LiveWallz.git"
                className="mt-6 inline-flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-pink-500 to-purple-600 text-white font-semibold rounded-xl shadow-lg hover:from-pink-600 hover:to-purple-700 transition-all duration-300">
                <Github className='w-5 h-5' /> View on GitHub
              </a>
            </div>
          </div>
        </div>
      </section>

      <svg
        className="mt-20 w-full max-w-4xl h-2 my-16 mx-auto"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
      >
        <rect width="100%" height="10%" rx="2" className="fill-[url(#gradient)]" />
        <defs>
          <linearGradient id="gradient" x1="0" x2="1" y1="0" y2="0">
            <stop offset="0%" stopColor="#15aefaff" />
            <stop offset="50%" stopColor="#635858ff" />
            <stop offset="100%" stopColor="#ec4899" />
          </linearGradient>
        </defs>
      </svg>

      {/* Call To Action */}
      <section id="contact" className="py-40 bg-blue-600 text-white text-center">
        <div className="max-w-4xl mx-auto text-center px-6 flex flex-col items-center gap-12">
          <h2 className="text-2xl font-bold">Let’s Connect!</h2>
          <p className="text-white/90 text-lg md:text-xl max-w-prose">Interested in working together or learning more? Reach out below.</p>
          <a href="mailto:cameronsteensma@gmail.com" className="mt-4 inline-block px-6 py-3 bg-white text-blue-600 font-medium rounded-full shadow">
            <Mail className='w-5 h-5' /> Email Me
          </a>
        </div>

        <div className="flex justify-center items-center gap-6 mt-8 mb-12">
          <a
            href="https://github.com/CameronSteensma"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-500 via-indigo-600 to-purple-700 text-white font-semibold rounded-full shadow-lg hover:scale-105 hover:shadow-xl transition-transform transition-shadow duration-300"
          >
            <Github className="w-6 h-6" />Github
          </a>
          <a
            href="https://www.linkedin.com/in/cameron-steensma-406960176/"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-500 via-indigo-600 to-purple-700 text-white font-semibold rounded-full shadow-lg hover:scale-105 hover:shadow-xl transition-transform transition-shadow duration-300"
          >
            <User className="w-6 h-6" />LinkedIn
          </a>
          <a
            href="/CamResumeEngineer.pdf"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-500 via-indigo-600 to-purple-700 text-white font-semibold rounded-full shadow-lg hover:scale-105 hover:shadow-xl transition-transform transition-shadow duration-300"
          >
            <FileCode2 className="w-6 h-6" />Resume
          </a>
        </div>
      </section>

      {/* Footer */}
       <footer className="py-8 bg-gray-900 text-white text-center">
        <p className="text-sm">&copy; {new Date().getFullYear()} Cameron Steensma. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;