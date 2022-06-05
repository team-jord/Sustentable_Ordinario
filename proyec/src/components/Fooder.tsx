import React from "react";

export default function Fooder() {
  return (
    <>
      <footer className="bg-navy text-inverse">
        <div className="container pt-15 pt-md-5 pb-5 pb-md-5">
          <div className="d-lg-flex flex-row align-items-lg-center">
            <h3 className="display-4 mb-6 mb-lg-0 pe-lg-20 pe-xl-22 pe-xxl-25 text-white">
              Únase a nuestra comunidad utilizando nuestros servicios y cuide su
              salud.
            </h3>
            <a
              href="#"
              className="btn btn-primary rounded-pill mb-0 text-nowrap"
            >
              Unirme ahora
            </a>
          </div>
          <hr className="mt-11 mb-12" />
          <div className="row gy-6 gy-lg-0">
            <div className="col-md-4 col-lg-3">
              <div className="widget">
                <img
                  className="mb-4"
                  src="https://sandbox.elemisthemes.com/assets/img/logo-dark.png"
                  alt=""
                />
                <p className="mb-4">
                  © 2022 Empower. <br className="d-none d-lg-block" />
                  Este en un producto de software4all.
                </p>
                {/* <nav className="nav social social-white">
                  <a href="#">
                    <i className="uil uil-twitter"></i>
                  </a>
                  <a href="#">
                    <i className="uil uil-facebook-f"></i>
                  </a>
                  <a href="#">
                    <i className="uil uil-dribbble"></i>
                  </a>
                  <a href="#">
                    <i className="uil uil-instagram"></i>
                  </a>
                  <a href="#">
                    <i className="uil uil-youtube"></i>
                  </a>
                </nav> */}
              </div>
            </div>
            <div className="col-md-4 col-lg-3">
              <div className="widget">
                <h4 className="widget-title text-white mb-3">Contacto</h4>
                <a href="mailto:#">empower@gmail.com</a>
                <br /> +(52) 951 123 65 89
              </div>
            </div>
            <div className="col-md-4 col-lg-3">
              <div className="widget">
                <h4 className="widget-title text-white mb-3">Empower</h4>
                <ul className="list-unstyled  mb-0">
                  <li>
                    <a href="#">Visión</a>
                  </li>
                  <li>
                    <a href="#que_hacemos">¿Qué hacemos?</a>
                  </li>
                  <li>
                    <a href="#que_buscamos">¿Qué buscamos?</a>
                  </li>
                  <li>
                    <a href="#objetivos">Objetivos</a>
                  </li>
                  <li>
                    <a href="#equipo">Equipo</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-12 col-lg-3">
              <div className="widget">
                <h4 className="widget-title text-white mb-3">
                  Nuestro boletín
                </h4>
                <p className="mb-5">
                  Suscríbete a nuestra boletín para recibir nuestras novedades
                </p>
                <div className="newsletter-wrapper">
                  <div id="mc_embed_signup2">
                    <form
                      //   method="post"
                      id="mc-embedded-subscribe-form2"
                      name="mc-embedded-subscribe-form"
                      className="validate dark-fields"
                      target="_blank"
                      noValidate
                    >
                      <div id="mc_embed_signup_scroll2">
                        <div className="mc-field-group input-group form-floating">
                          <input
                            type="email"
                            value=""
                            name="EMAIL"
                            className="required email form-control"
                            placeholder="Email Address"
                            id="mce-EMAIL2"
                          />
                          <label htmlFor="mce-EMAIL2">Correo</label>
                          <input
                            type="submit"
                            value="Ir"
                            name="subscribe"
                            id="mc-embedded-subscribe2"
                            className="btn btn-primary "
                          />
                        </div>
                        <div id="mce-responses2" className="clear">
                          <div
                            className="response"
                            id="mce-error-response2"
                            style={{ display: "none" }}
                          ></div>
                          <div
                            className="response"
                            id="mce-success-response2"
                            style={{ display: "none" }}
                          ></div>
                        </div>
                        <div
                          style={{ position: "absolute", left: "-5000px;" }}
                          aria-hidden="true"
                        >
                          
                        </div>
                        <div className="clear"></div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
