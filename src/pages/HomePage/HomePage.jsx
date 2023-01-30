import './HomePage.css';
import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

// Import Images & Icons
import logoIcon from '../../assets/icons/Logo-Website.png';
import facebookIcon from '../../assets/icons/Facebook_Icon.png';
import instagramIcon from '../../assets/icons/Instagram_Icon.png';
import githubIcon from '../../assets/icons/Github-Icon.png';
import linkedinIcon from '../../assets/icons/Linkedin-Icon.png';
import emailIcon from '../../assets/icons/Mail_Icon.png';
import telegramIcon from '../../assets/icons/Telegram_Icon.png';
import whatsappIcon from '../../assets/icons/Whatsapp_Icon.png';
import waveElement from '../../assets/icons/Wave-Element.png';
import reactIcon from '../../assets/icons/icons8-react-160.png';
import figmaIcon from '../../assets/icons/icons8-figma-144.png';
import databaseIcon from '../../assets/icons/icons8-database-administrator-96.png';
import javascriptIcon from '../../assets/icons/icons8-javascript-144.png';
import mypersonalImage from '../../assets/images/Rizki_delaga_prasetya-removebg 2.png';
import Image1 from '../../assets/images/Project_Portal_Pahlawan_Indonesia.png';
import Image2 from '../../assets/images/Binar_Rent_Cars.png';
import Image4 from '../../assets/images/Program_Booking_Futsal.png';
import Image5 from '../../assets/images/deepak-kumar-BLs84TBt_BM-unsplash.jpg';
import Image6 from '../../assets/images/hal-gatewood-tZc3vjPCk-Q-unsplash.jpg';
import Image7 from '../../assets/images/sincerely-media-EtyBBUByPSQ-unsplash.jpg';
import Image8 from '../../assets/images/Kuliner_Jowo.png';
import Image9 from '../../assets/images/Program_Diagnose_it.png';

function HomePage() {
  React.useEffect(() => {
    document.title = 'Blog Rizki Delaga Prasetya';
  }, []);

  return (
    <Fragment>
      {/* <!-- Navbar Section --> */}
      <div className="navbar-section">
        <div className="container d-flex">
          <a href="#" style={{ margin: '0px 10px' }}>
            <img src={logoIcon} height="50px" alt="icon" />
          </a>
          <div className="navbar-menu">
            <a href="#" className="disable-url-default">
              <div className="menu-item">Home</div>
            </a>
            <a href="#about-section" className="disable-url-default">
              <div className="menu-item">About</div>
            </a>
            <a href="#project-section" className="disable-url-default">
              <div className="menu-item">Project</div>
            </a>
            <a href="#contact-section" className="disable-url-default">
              <div className="menu-item">Contact</div>
            </a>
          </div>
        </div>
      </div>

      {/* <!-- Hero Section --> */}
      <div className="hero-section" id="about-section">
        <div className="container">
          <div className="row m-0">
            <div className="col-lg-6 d-flex justify-content-center align-item-center">
              <img
                src={mypersonalImage}
                height="100%"
                width="100%"
                style={{ objectFit: 'contain', maxHeight: '500px' }}
                alt="icon"
              />
            </div>
            <div className="col-lg-6 d-flex flex-column justify-content-center align-item-center">
              <h4 className="my-name">Hi! im Rizki Delaga Prasetya</h4>
              <h1 className="my-job">Frontend Javascrict</h1>
              <p>
                Mahasiswa tingkat akhir di Institut Teknologi Telkom Purwokerto jurusan Rekayasa Perangkat Lunak.
                Memiliki ketertarikan dibidang IT, Sport, dan Content Writer. Saya suka nonton film, baca buku, bermain
                game, ngoding, dan sesekali berolahraga.
              </p>
              <button className="red-button">About Me</button>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Wave element --> */}
      <img src={waveElement} width="100%" style={{ pointerEvents: 'none' }} alt="backdrop element" />

      {/* <!-- My Jobs Section --> */}
      <div className="whats-my-jobs-section">
        <div className="container">
          <h3 className="text-center mb-4">What im doing?</h3>
          <div className="row">
            <div className="col-lg-4 col-md-4 col-sm-12 px-4 mb-3">
              <div className="jobs-card">
                <img
                  src={Image5}
                  height="120px"
                  width="120px"
                  style={{ objectFit: 'cover', borderRadius: '100%' }}
                  alt="icon"
                />
                <h5 className="fw-bold mt-4">Frontend Developer</h5>
                <p>Mengembangkan halaman website dengan menggunakan library React JS</p>
              </div>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-12 px-4 mb-3">
              <div className="jobs-card">
                <img
                  src={Image6}
                  height="120px"
                  width="120px"
                  style={{ objectFit: 'cover', borderRadius: '100%' }}
                  alt="icon"
                />
                <h5 className="fw-bold mt-4">UI/UX Designer</h5>
                <p>Mendesain perangkat lunak menggunakan Figma.</p>
              </div>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-12 px-4 mb-3">
              <div className="jobs-card">
                <img
                  src={Image7}
                  height="120px"
                  width="120px"
                  style={{ objectFit: 'cover', borderRadius: '100%' }}
                  alt="icon"
                />
                <h5 className="fw-bold mt-4">Freelancer</h5>
                <p>Pekerja lepas dengan menawarkan layanan kepada client atau perusahaan</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <!-- My Project Section --> */}
      <div className="project-section" id="project-section" style={{ marginTop: '150px' }}>
        <div className="container">
          <div className="d-flex justify-content-between">
            <h3 className="mb-4">Featured Project</h3>
            <button className="red-button">View All</button>
          </div>
          <p>Proyek unggulan yang sudah saya kerjakan</p>
          <div className="row">
            <div className="col-lg-4 col-md-6 col-sm-12 mb-3">
              <Link to="/DaftarPahlawanIndonesia">
                <div className="project-card">
                  <div className="project-card-image">
                    <img src={Image1} width="100%" height="220px" style={{ objectFit: 'cover' }} alt="project" />
                  </div>
                  <div className="project-card-content">
                    <h4>Portal Pahlawan Indonesia</h4>
                    <p>Mengenang daftar para pahlawan nasional yang telah berjuang untuk negara Indonesia.</p>
                  </div>
                </div>
              </Link>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12 mb-3">
              <a href="https://challenge-7-eight.vercel.app/">
                <div className="project-card">
                  <div className="project-card-image">
                    <img src={Image2} width="100%" height="220px" style={{ objectFit: 'cover' }} alt="project" />
                  </div>
                  <div className="project-card-content">
                    <h4>Rent Cars</h4>
                    <p>Sewa & Rental Mobil Terbaik di kawasanmu!</p>
                  </div>
                </div>
              </a>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12 mb-3">
              <a href="https://github.com/RizkiDelaga/Aplikasi-Kuliner-Jowo">
                <div className="project-card">
                  <div className="project-card-image">
                    <img src={Image8} width="100%" height="220px" style={{ objectFit: 'cover' }} alt="project" />
                  </div>
                  <div className="project-card-content">
                    <h4>Aplikasi Kuliner-Jowo</h4>
                    <p>
                      Kuliner Jowo merupakan aplikasi resep masakan khas jawa yang dapat membantu pengguna dalam mencari
                      resep masakan secara mudah dan praktis.
                    </p>
                  </div>
                </div>
              </a>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12 mb-3">
              <a href="https://github.com/raihaniqbalpasya/19104030_Raihan_PermogramanGUI/tree/main/Tugas%20Besar">
                <div className="project-card">
                  <div className="project-card-image">
                    <img src={Image9} width="100%" height="220px" style={{ objectFit: 'cover' }} alt="project" />
                  </div>
                  <div className="project-card-content">
                    <h4>Program Diagnose.it</h4>
                    <p>
                      Diagnose.it membantu masyarakat dalam mendiagnosa penyakit ringan tanpa harus pergi ke rumah
                      sakit.
                    </p>
                  </div>
                </div>
              </a>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12 mb-3">
              <a href="https://github.com/RizkiDelaga/TugasBesarPBO-Kelompok5-SE03A">
                <div className="project-card">
                  <div className="project-card-image">
                    <img src={Image4} width="100%" height="220px" style={{ objectFit: 'cover' }} alt="project" />
                  </div>
                  <div className="project-card-content">
                    <h4>Program Booking Futsal</h4>
                    <p>Program pemesanan futsal secara digital.</p>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* <!-- My Skills Section --> */}
      <div className="skill-section" style={{ marginTop: '150px' }}>
        <div className="container">
          <div className="row m-0">
            <div
              className="col-lg-6 d-flex flex-column justify-content-center align-item-center"
              style={{ backgroundColor: 'white', borderRadius: '8px', border: '2px solid #eee' }}
            >
              <h3 className="fw-bold">Skills I learned</h3>
              <p className="mb-5">Kemampuan yang dapat saya kuasai</p>
              <h6>React Js</h6>
              <div className="progress mb-3">
                <div
                  className="progress-bar bg-danger"
                  role="progressbar"
                  style={{ width: '80%' }}
                  aria-valuenow="25"
                  aria-valuemin="0"
                  aria-valuemax="100"
                >
                  80%
                </div>
              </div>
              <h6>Database Managing</h6>
              <div className="progress mb-3">
                <div
                  className="progress-bar bg-danger"
                  role="progressbar"
                  style={{ width: '90%' }}
                  aria-valuenow="25"
                  aria-valuemin="0"
                  aria-valuemax="100"
                >
                  90%
                </div>
              </div>
              <h6>Express Js</h6>
              <div className="progress mb-3">
                <div
                  className="progress-bar bg-danger"
                  role="progressbar"
                  style={{ width: '70%' }}
                  aria-valuenow="25"
                  aria-valuemin="0"
                  aria-valuemax="100"
                >
                  70%
                </div>
              </div>
              <h6>Figma</h6>
              <div className="progress mb-3">
                <div
                  className="progress-bar bg-danger"
                  role="progressbar"
                  style={{ width: '70%' }}
                  aria-valuenow="25"
                  aria-valuemin="0"
                  aria-valuemax="100"
                >
                  70%
                </div>
              </div>
            </div>
            <div className="col-lg-6 py-3 d-flex flex-column justify-content-center align-item-center">
              <div className="row" style={{ height: '300px' }}>
                <div className="col-6 ps-5 mb-3">
                  <div className="skill-card">
                    <img src={reactIcon} height="100px" alt="project" />
                    <h6 style={{ fontWeight: 'bold', marginTop: '20px' }}>React Js</h6>
                  </div>
                </div>
                <div className="col-6 pe-5 mb-3" style={{ marginTop: '100px' }}>
                  <div className="skill-card">
                    <img src={databaseIcon} height="100px" alt="project" />
                    <h6 style={{ fontWeight: 'bold', marginTop: '20px' }}>Database Managing</h6>
                  </div>
                </div>
              </div>
              <div
                className="row"
                style={{ height: '300px', position: 'relative', top: '-75px', marginBottom: '-75px' }}
              >
                <div className="col-6 ps-5 mb-3">
                  <div className="skill-card">
                    <img src={javascriptIcon} height="100px" alt="project" />
                    <h6 style={{ fontWeight: 'bold', marginTop: '20px' }}>Express Js</h6>
                  </div>
                </div>
                <div className="col-6 pe-5 mb-3" style={{ marginTop: '100px' }}>
                  <div className="skill-card">
                    <img src={figmaIcon} height="100px" alt="project" />
                    <h6 style={{ fontWeight: 'bold', marginTop: '20px' }}>Figma</h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="backdrop"></div>

      {/* <!-- My Contact Section --> */}
      <div className="contact-section" id="contact-section">
        <div className="my-contact-card">
          <h3>Let’s work together with me</h3>
          <p>Mari bekerja dengan saya! Anda dapat melihat CV saya dan mengajukan tawaran pekerjaan kepada saya.</p>
          <button className="red-button">Download CV</button>

          <h5 style={{ paddingTop: '14px' }}>You can also contact me on:</h5>
          <div className="contact-icon">
            <a
              href="https://www.facebook.com/rizki.anonymous.DNX/"
              target="_blank"
              rel="noreferrer"
              style={{ margin: '0px 10px' }}
            >
              <img src={facebookIcon} className="contact-item" alt="icon" />
            </a>
            <a
              href="https://www.instagram.com/rizkidelagaprasetya/"
              target="_blank"
              rel="noreferrer"
              style={{ margin: '0px 10px' }}
            >
              <img src={instagramIcon} className="contact-item" alt="icon" />
            </a>
            <a href="https://wa.me/085848622580" target="_blank" rel="noreferrer" style={{ margin: '0px 10px' }}>
              <img src={whatsappIcon} className="contact-item" alt="icon" />
            </a>
            <a href="https://t.me/RizkiDelagaPrasetya" target="_blank" rel="noreferrer" style={{ margin: '0px 10px' }}>
              <img src={telegramIcon} className="contact-item" alt="icon" />
            </a>
            <a
              href="mailto: rizkidelagaprasetya@gmail.com"
              target="_blank"
              rel="noreferrer"
              style={{ margin: '0px 10px' }}
            >
              <img src={emailIcon} className="contact-item" alt="icon" />
            </a>
            <a
              href="https://www.linkedin.com/in/rizki-delaga-prasetya-8232a619b/"
              target="_blank"
              rel="noreferrer"
              style={{ margin: '0px 10px' }}
            >
              <img src={linkedinIcon} className="contact-item" alt="icon" />
            </a>
            <a href="https://github.com/RizkiDelaga" target="_blank" rel="noreferrer" style={{ margin: '0px 10px' }}>
              <img src={githubIcon} className="contact-item" alt="icon" />
            </a>
          </div>
        </div>
      </div>

      {/* <!-- Footer Section --> */}
      <div className="footer-section">
        <p className="m-0">
          Copyright © 2023
          <a href="https://github.com/RizkiDelaga" target="_blank" rel="noreferrer">
            Rizki Delaga Prasetya
          </a>
          . Make with Coffee.
        </p>
      </div>
    </Fragment>
  );
}

export default HomePage;
