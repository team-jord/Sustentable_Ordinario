import React from "react";

export default function OurSolution() {
  return (
    <>
      <section className="wrapper bg-light">
        <div className="container">
          <div className="row gx-lg-8 gx-xl-12 gy-10 align-items-center">
            <div className="col-lg-7 order-lg-2">
              <figure>
                <img
                  className="w-auto"
                  src="https://sandbox.elemisthemes.com/assets/img/illustrations/i2.png"
                  alt=""
                />
              </figure>
            </div>
            <div className="col-lg-5">
              <h2 className="fs-16 text-uppercase text-muted mb-3">
                Nuestra solucion
              </h2>
              <h3 className="display-6 mb-5">
                Empower busca posicionarse como la herramienta #1 en prevención
                y cuidado de salud en México y a nivel mundial.
              </h3>
              <p className="mb-6">
                Para lograr esto, usamos las mejores tecnologias en el mercado
              </p>
              <div className="row gy-3">
                <div className="col-xl-6">
                  <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                    <li>
                      <span>
                        <i className="uil uil-check"></i>
                      </span>
                      <span>Para el fron se utilizo React y CSS.</span>
                    </li>
                    <li className="mt-3">
                      <span>
                        <i className="uil uil-check"></i>
                      </span>
                      <span>Para el back se utilizo JavaScript.</span>
                    </li>
                  </ul>
                </div>
                <div className="col-xl-6">
                  <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                    <li>
                      <span>
                        <i className="uil uil-check"></i>
                      </span>
                      <span>Usamos AWS, Heroku, Firebase.</span>
                    </li>
                    <li className="mt-3">
                      <span>
                        <i className="uil uil-check"></i>
                      </span>
                      <span>Se implemento el RFC 7519 junto con MongoDB.</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="wrapper bg-gradient-reverse-primary">
        <div className="container py-14 py-md-18">
          <div className="row gx-lg-8 gx-xl-12 gy-10 align-items-center">
            <div className="col-lg-7">
              <div className="row gx-md-5 gy-5">
                <div className="col-md-6 col-xl-5 align-self-end">
                  <div className="card shadow-lg">
                    <div className="card-body">
                      <blockquote className="icon mb-0">
                        <p>
                          “Cum sociis natoque penatibus et magnis dis parturient
                          montes.”
                        </p>
                        <div className="blockquote-details">
                          <div className="info p-0">
                            <h5 className="mb-1">Coriss Ambady</h5>
                            <p className="mb-0">Financial Analyst</p>
                          </div>
                        </div>
                      </blockquote>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 align-self-end">
                  <div className="card shadow-lg">
                    <div className="card-body">
                      <blockquote className="icon mb-0">
                        <p>
                          “Vivamus sagittis lacus vel augue laoreet rutrum
                          faucibus dolor auctor. Vestibulum id ligula porta
                          felis euismod.”
                        </p>
                        <div className="blockquote-details">
                          <div className="info p-0">
                            <h5 className="mb-1">Cory Zamora</h5>
                            <p className="mb-0">Marketing Specialist</p>
                          </div>
                        </div>
                      </blockquote>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 col-xl-5 offset-xl-1">
                  <div className="card shadow-lg">
                    <div className="card-body">
                      <blockquote className="icon mb-0">
                        <p>
                          “Donec id elit non porta gravida at eget metus. Duis
                          mollis est luctus commodo nisi erat.”
                        </p>
                        <div className="blockquote-details">
                          <div className="info p-0">
                            <h5 className="mb-1">Barclay Widerski</h5>
                            <p className="mb-0">Sales Specialist</p>
                          </div>
                        </div>
                      </blockquote>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 align-self-start">
                  <div className="card shadow-lg">
                    <div className="card-body">
                      <blockquote className="icon mb-0">
                        <p>
                          “Nisi erat porttitor ligula, eget lacinia odio sem nec
                          elit. Aenean eu leo pellentesque.”
                        </p>
                        <div className="blockquote-details">
                          <div className="info p-0">
                            <h5 className="mb-1">Jackie Sanders</h5>
                            <p className="mb-0">Investment Planner</p>
                          </div>
                        </div>
                      </blockquote>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-5">
              <h2 className="fs-16 text-uppercase text-muted mb-3 mt-lg-n6">
                Nuestra comunidad
              </h2>
              <h3 className="display-4 mb-5">
                No confíe en nuestra palabra. Vea lo que los clientes dicen
                sobre nosotros.
              </h3>
              <p>Octa rifate unas reseñas xd</p>
              <a href="#" className="btn btn-primary rounded-pill mt-3">
                All Testimonials
              </a>
            </div>
          </div>
        </div>
      </section>
      {/* <section className="wrapper bg-light angled upper-end lower-end">
        <div className="container py-14 pt-md-14 pb-md-18">
          <div className="row gy-6 mb-14 mb-md-18">
            <div className="col-lg-4">
              <h2 className="fs-16 text-uppercase text-muted mt-lg-18 mb-3">
                Our Pricing
              </h2>
              <h3 className="display-4 mb-3">
                We offer great and premium prices.
              </h3>
              <p>
                Enjoy a{" "}
                <a href="#" className="hover">
                  free 30-day trial
                </a>{" "}
                and experience the full service. No credit card required!
              </p>
              <a href="#" className="btn btn-primary rounded-pill mt-2">
                See All Prices
              </a>
            </div>
            <div className="col-lg-7 offset-lg-1 pricing-wrapper">
              <div className="pricing-switcher-wrapper switcher justify-content-start justify-content-lg-end">
                <p className="mb-0 pe-3">Monthly</p>
                <div className="pricing-switchers">
                  <div className="pricing-switcher pricing-switcher-active"></div>
                  <div className="pricing-switcher"></div>
                  <div className="switcher-button bg-primary"></div>
                </div>
                <p className="mb-0 ps-3">
                  Yearly <span className="text-red">(Save 30%)</span>
                </p>
              </div>
              <div className="row gy-6 position-relative mt-5">
                <div
                  className="shape bg-dot red rellax w-16 h-18"
                  data-rellax-speed="1"
                  style={{
                    bottom: "-0.5rem",
                    right: "-1.6rem",
                    transform: "translate3d(0px, 1188px, 0px)",
                  }}
                ></div>
                <div className="col-md-6">
                  <div className="pricing card shadow-lg">
                    <div className="card-body pb-12">
                      <div className="prices text-dark">
                        <div className="price price-show justify-content-start">
                          <span className="price-currency">$</span>
                          <span className="price-value">19</span>{" "}
                          <span className="price-duration">mo</span>
                        </div>
                        <div className="price price-hide price-hidden justify-content-start">
                          <span className="price-currency">$</span>
                          <span className="price-value">199</span>{" "}
                          <span className="price-duration">yr</span>
                        </div>
                      </div>
                      <h4 className="card-title mt-2">Premium Plan</h4>
                      <ul className="icon-list bullet-soft-primary mt-7 mb-8">
                        <li>
                          <i className="uil uil-check fs-21"></i>
                          <span>
                            <strong>5</strong> Projects{" "}
                          </span>
                        </li>
                        <li>
                          <i className="uil uil-check fs-21"></i>
                          <span>
                            <strong>100K</strong> API Access{" "}
                          </span>
                        </li>
                        <li>
                          <i className="uil uil-check fs-21"></i>
                          <span>
                            <strong>200MB</strong> Storage{" "}
                          </span>
                        </li>
                        <li>
                          <i className="uil uil-check fs-21"></i>
                          <span>
                            {" "}
                            Weekly <strong>Reports</strong>
                          </span>
                        </li>
                        <li>
                          <i className="uil uil-check fs-21"></i>
                          <span>
                            {" "}
                            7/24 <strong>Support</strong>
                          </span>
                        </li>
                      </ul>
                      <a href="#" className="btn btn-primary rounded-pill">
                        Choose Plan
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 popular">
                  <div className="pricing card shadow-lg">
                    <div className="card-body pb-12">
                      <div className="prices text-dark">
                        <div className="price price-show justify-content-start">
                          <span className="price-currency">$</span>
                          <span className="price-value">49</span>{" "}
                          <span className="price-duration">mo</span>
                        </div>
                        <div className="price price-hide price-hidden justify-content-start">
                          <span className="price-currency">$</span>
                          <span className="price-value">499</span>{" "}
                          <span className="price-duration">yr</span>
                        </div>
                      </div>
                      <h4 className="card-title mt-2">Corporate Plan</h4>
                      <ul className="icon-list bullet-soft-primary mt-7 mb-8">
                        <li>
                          <i className="uil uil-check fs-21"></i>
                          <span>
                            <strong>20</strong> Projects{" "}
                          </span>
                        </li>
                        <li>
                          <i className="uil uil-check fs-21"></i>
                          <span>
                            <strong>300K</strong> API Access{" "}
                          </span>
                        </li>
                        <li>
                          <i className="uil uil-check fs-21"></i>
                          <span>
                            <strong>500MB</strong> Storage{" "}
                          </span>
                        </li>
                        <li>
                          <i className="uil uil-check fs-21"></i>
                          <span>
                            {" "}
                            Weekly <strong>Reports</strong>
                          </span>
                        </li>
                        <li>
                          <i className="uil uil-check fs-21"></i>
                          <span>
                            {" "}
                            7/24 <strong>Support</strong>
                          </span>
                        </li>
                      </ul>
                      <a href="#" className="btn btn-primary rounded-pill">
                        Choose Plan
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row gx-lg-8 gx-xl-12 gy-10 mb-10 mb-md-14 align-items-center">
            <div className="col-lg-7">
              <figure>
                <img
                  className="w-auto"
                  src="./assets/img/illustrations/i5.png"
                  srcSet="./assets/img/illustrations/i5@2x.png 2x"
                  alt=""
                />
              </figure>
            </div>
            <div className="col-lg-5">
              <h2 className="fs-16 text-uppercase text-muted mb-3">
                Let’s Talk
              </h2>
              <h3 className="display-4 mb-3">
                Let's make something great together. We are trusted by over
                5000+ clients.
              </h3>
              <p>
                Aenean eu leo quam. Pellentesque ornare sem lacinia quam
                venenatis vestibulum. Maecenas faucibus mollis interdum. Fusce
                dapibus, tellus ac cursus commodo, tortor mauris condimentum
                nibh, ut fermentum massa justo sit amet risus.
              </p>
              <a href="#" className="btn btn-primary rounded-pill mt-2">
                Join Us
              </a>
            </div>
          </div>
          <div className="px-lg-5">
            <div className="row gx-0 gx-md-8 gx-xl-12 gy-8 align-items-center">
              <div className="col-4 col-md-2">
                <figure className="px-5 px-md-0 px-lg-2 px-xl-3 px-xxl-4">
                  <img src="./assets/img/brands/c1.png" alt="" />
                </figure>
              </div>
              <div className="col-4 col-md-2">
                <figure className="px-5 px-md-0 px-lg-2 px-xl-3 px-xxl-4">
                  <img src="./assets/img/brands/c2.png" alt="" />
                </figure>
              </div>
              <div className="col-4 col-md-2">
                <figure className="px-5 px-md-0 px-lg-2 px-xl-3 px-xxl-4">
                  <img src="./assets/img/brands/c3.png" alt="" />
                </figure>
              </div>
              <div className="col-4 col-md-2">
                <figure className="px-5 px-md-0 px-lg-2 px-xl-3 px-xxl-4">
                  <img src="./assets/img/brands/c4.png" alt="" />
                </figure>
              </div>
              <div className="col-4 col-md-2">
                <figure className="px-5 px-md-0 px-lg-2 px-xl-3 px-xxl-4">
                  <img src="./assets/img/brands/c5.png" alt="" />
                </figure>
              </div>
              <div className="col-4 col-md-2">
                <figure className="px-5 px-md-0 px-lg-2 px-xl-3 px-xxl-4">
                  <img src="./assets/img/brands/c6.png" alt="" />
                </figure>
              </div>
            </div>
          </div>
        </div>
      </section> */}
    </>
  );
}
