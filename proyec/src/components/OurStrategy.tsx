import React from "react";

export default function OurStrategy() {
  return (
    <>
      <section className="wrapper bg-gradient-reverse-primary" id="que_buscamos">
        <div className="container py-16 py-md-10">
          <div className="row gx-lg-8 gx-xl-12 gy-10 mb-8 align-items-center">
            <div className="col-lg-7 order-lg-2">
              <figure>
                <img
                  className="w-auto"
                  src="https://www.anahuac.mx/mexico/sites/default/files/noticias/El-sistema-de-salud-mexicano.jpg"
                  alt=""
                />
              </figure>
            </div>
            <div className="col-lg-5">
              <h2 className="fs-16 text-uppercase text-muted mb-3">
                ¿Que buscamos?
              </h2>
              <h3 className="display-4 mb-5">
                ¿Sabias que el aumento de casos de diabetes, enfermedades
                cardiovasculares y cáncer es un problema serio?
              </h3>
              <p className="mb-7">
                Nuestra aplicación será una herramienta para informar y
                concientizar al usuario respecto a su estado físico, sugerencias
                y medidas de diagnóstico para un tratamiento oportuno lo cual le
                permitirá desarrollar una constante de autocuidado para su
                salud.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="wrapper bg-light angled upper-start lower-start" id="objetivos">
        <div className="container py-1 pt-md-5 pb-md-20">
          <div className="row gx-md-8 gx-xl-12 gy-10 mb-14 mb-md-18 align-items-center">
            <div className="col-lg-6 order-lg-2">
              <div className="card shadow-lg me-lg-6">
                <div className="card-body p-6">
                  <div className="d-flex flex-row">
                    <div>
                      <span className="icon btn btn-circle btn-lg btn-soft-primary disabled me-4">
                        <span className="number">01</span>
                      </span>
                    </div>
                    <div>
                      {/* <h4 className="mb-1">Collect Ideas</h4> */}
                      <p className="mb-0">
                        Informar al usuario de su estado de salud actual y
                        registrar antecedentes relevantes para el acto médico.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card shadow-lg ms-lg-13 mt-6">
                <div className="card-body p-6">
                  <div className="d-flex flex-row">
                    <div>
                      <span className="icon btn btn-circle btn-lg btn-soft-primary disabled me-4">
                        <span className="number">02</span>
                      </span>
                    </div>
                    <div>
                      {/* <h4 className="mb-1">Data Analysis</h4> */}
                      <p className="mb-0">
                        Sugerir al usuario hábitos y prácticas para mejorar su
                        estado de salud.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card shadow-lg ms-lg-13 mt-6">
                <div className="card-body p-6">
                  <div className="d-flex flex-row">
                    <div>
                      <span className="icon btn btn-circle btn-lg btn-soft-primary disabled me-4">
                        <span className="number">03</span>
                      </span>
                    </div>
                    <div>
                      {/* <h4 className="mb-1">Data Analysis</h4> */}
                      <p className="mb-0">
                        Relacionar un medio de comunicación entre usuarios y
                        proveedores de servicios de salud de interés para el
                        usuario.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card shadow-lg mx-lg-6 mt-6">
                <div className="card-body p-6">
                  <div className="d-flex flex-row">
                    <div>
                      <span className="icon btn btn-circle btn-lg btn-soft-primary disabled me-4">
                        <span className="number">04</span>
                      </span>
                    </div>
                    <div>
                      {/* <h4 className="mb-1">Finalize Product</h4> */}
                      <p className="mb-0">
                        Registrar antecedentes patológicos del paciente de
                        interés para el usuario y médico.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <h2 className="fs-16 text-uppercase text-muted mb-3">Nuestros</h2>
              <h5 className="display-6 mb-4">
                En empower tenemos un objetivo general y 4 especificos.
              </h5>
              <p>
                Desarrollar un Software/App capaz de registrar un historial de
                eventos médicos relevantes para empoderar al usuario a tomar el
                control de su salud teniendo evidencias bien cronometradas para
                mejorar el acto médico y la calidad de vida del paciente.
              </p>
              <a href="#" className="btn btn-primary rounded-pill mb-0">
                Leer mas
              </a>
            </div>
          </div>
          <div className="row gx-lg-8 gx-xl-12 gy-10 mb-lg-22 mb-xl-22 align-items-center">
            <div className="col-lg-7">
              <figure>
                <img
                  className="w-auto"
                  src="https://sandbox.elemisthemes.com/assets/img/illustrations/i5.png"
                  alt=""
                />
              </figure>
            </div>
            <div className="col-lg-5">
              <h2 className="fs-16 text-uppercase text-muted mb-3">
                ¿Quienes pueden ser usuarios de empower?
              </h2>
              <h3 className="display-4 mb-7">Criterios de Inclusión</h3>
              <div
                className="accordion accordion-wrapper"
                id="accordionExample"
              >
                <div className="card plain accordion-item">
                  <div
                    id="collapseOne"
                    className="accordion-collapse collapse show"
                    aria-labelledby="headingOne"
                    data-bs-parent="#accordionExample"
                  >
                    <div className="card-body">
                      <p>
                        Se incluirá a todos los usuarios que deseen utilizar la
                        aplicación, mediante la lectura y aceptación de la carta
                        de consentimiento informado y aviso de privacidad
                      </p>
                    </div>
                  </div>
                </div>
                <div className="card plain accordion-item">
                  <div className="card-header" id="headingTwo">
                    <button
                      className="collapsed"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseTwo"
                      aria-expanded="false"
                      aria-controls="collapseTwo"
                    >
                      {" "}
                      Criterios de exclusión{" "}
                    </button>
                  </div>
                  <div
                    id="collapseTwo"
                    className="accordion-collapse"
                    aria-labelledby="headingTwo"
                    data-bs-parent="#accordionExample"
                  >
                    <div className="card-body">
                      <p>Menores de 18 años</p>
                    </div>
                  </div>
                </div>
                <div className="card plain accordion-item">
                  <div className="card-header" id="headingTwo">
                    <button
                      className="collapsed"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseTwo"
                      aria-expanded="false"
                      aria-controls="collapseTwo"
                    >
                      {" "}
                      Criterios de eliminación{" "}
                    </button>
                  </div>
                  <div
                    id="collapseTwo"
                    className="accordion-collapse"
                    aria-labelledby="headingTwo"
                    data-bs-parent="#accordionExample"
                  >
                    <div className="card-body">
                      <p>Tener menos de 18 años de edad.</p>
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
