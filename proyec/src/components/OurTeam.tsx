import React from "react";

import jairo from "../img/jairo.jpg";
import rafa from "../img/rafa.jpg";
import octa from "../img/octa.jpg";
import dani from "../img/dani.jpg";

export default function OurTeam() {
  return (
    <>
      <section className="wrapper bg-gradient-primary">
        <div className="container py-14 pt-md-16 pb-md-18">
          <div className="position-relative mt-8 mt-lg-n23 mt-xl-n25">
            <div className="row text-center">
              <div className="col-lg-8 col-xl-7 col-xxl-6 mx-auto">
                <h2 className="fs-16 text-uppercase text-muted mb-3" id="equipo">
                  NUESTRO EQUIPO
                </h2>
                <h3 className="display-4 mb-10 px-md-13 px-lg-4 px-xl-0">
                  Piensa único y sé innovador.
                </h3>
              </div>
            </div>
            <div className="position-relative">
              <div
                className="shape bg-dot blue rellax w-16 h-17"
                data-rellax-speed="1"
                style={{
                  bottom: "0.5rem",
                  right: "-1.7rem",
                  zIndex: 0,
                  transform: "translate3d(0px, 724px, 0px)",
                }}
              ></div>
              <div
                className="shape rounded-circle bg-line red rellax w-16 h-16"
                data-rellax-speed="1"
                style={{
                  top: "0.5rem",
                  left: "-1.7rem",
                  zIndex: 0,
                  transform: "translate3d(0px, 578px, 0px)",
                }}
              ></div>
              <div className="row grid-view gy-6 gy-xl-0">
                <div className="col-md-6 col-xl-3">
                  <div className="card shadow-lg">
                    <div className="card-body">
                      <img
                        className="rounded-circle w-15 mb-4"
                        src={jairo}
                        srcSet="./assets/img/avatars/te1@2x.jpg 2x"
                        alt=""
                      />
                      <h4 className="mb-1">Jairo Esteban Martinez Portillo</h4>
                      <div className="meta mb-2">Fortnite casual player</div>
                      <p className="mb-2">
                        Pues... sabia que quedaba poca gente, así que nomas hice
                        muchos cubitos hacia la zona.
                      </p>
                      <nav className="nav social mb-0">
                        <a href="#">
                          <i className="uil uil-twitter"></i>
                        </a>
                        <a href="#">
                          <i className="uil uil-facebook-f"></i>
                        </a>
                        <a href="#">
                          <i className="uil uil-dribbble"></i>
                        </a>
                      </nav>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 col-xl-3">
                  <div className="card shadow-lg">
                    <div className="card-body">
                      <img
                        className="rounded-circle w-15 mb-4"
                        src={rafa}
                        srcSet="./assets/img/avatars/te2@2x.jpg 2x"
                        alt=""
                      />
                      <h4 className="mb-1">Rafael Antonio Lopez Garcia</h4>
                      <div className="meta mb-2">Full Stack Developer</div>
                      <p className="mb-2">
                        Fermentum massa justo sit amet risus morbi leo.
                      </p>
                      <nav className="nav social mb-0">
                        <a href="#">
                          <i className="uil uil-twitter"></i>
                        </a>
                        <a href="#">
                          <i className="uil uil-facebook-f"></i>
                        </a>
                        <a href="#">
                          <i className="uil uil-dribbble"></i>
                        </a>
                      </nav>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 col-xl-3">
                  <div className="card shadow-lg">
                    <div className="card-body">
                      <img
                        className="rounded-circle w-15 mb-4"
                        src={octa}
                        srcSet="./assets/img/avatars/te3@2x.jpg 2x"
                        alt=""
                      />
                      <h4 className="mb-1">Octavio Agustin Celaya Ojeda</h4>
                      <div className="meta mb-2">Full Stack Developer</div>
                      <p className="mb-2">
                        Fermentum massa justo sit amet risus morbi leo.
                      </p>
                      <nav className="nav social mb-0">
                        <a href="#">
                          <i className="uil uil-twitter"></i>
                        </a>
                        <a href="#">
                          <i className="uil uil-facebook-f"></i>
                        </a>
                        <a href="#">
                          <i className="uil uil-dribbble"></i>
                        </a>
                      </nav>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 col-xl-3">
                  <div className="card shadow-lg">
                    <div className="card-body">
                      <img
                        className="rounded-circle w-15 mb-4"
                        src={dani}
                        srcSet="./assets/img/avatars/te4@2x.jpg 2x"
                        alt=""
                      />
                      <h4 className="mb-1">Carlo Daniel Valdez Martinez</h4>
                      <div className="meta mb-2">Full Stack Developer</div>
                      <p className="mb-2">
                        Fermentum massa justo sit amet risus morbi leo.
                      </p>
                      <nav className="nav social mb-0">
                        <a href="#">
                          <i className="uil uil-twitter"></i>
                        </a>
                        <a href="#">
                          <i className="uil uil-facebook-f"></i>
                        </a>
                        <a href="#">
                          <i className="uil uil-dribbble"></i>
                        </a>
                      </nav>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
