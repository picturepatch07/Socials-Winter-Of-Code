import { React, Component } from "react";
import Particles from "react-particles-js";
import { Snow } from "./snow";
import "./css/home.scss";
import {
  registerItems,
  timelineItems,
  prizeItems,
  GoldSponsors,
  SilverSponsors,
  PSponsors,
  PlatformPartners,
  Sponsors,
  CommunityPartners,
  FAQs,
  TestimonialData,
  SpeakerData,
  EventData,
  PrizeData,
} from "./js/homeData";
import Aos from "aos";
import "aos/dist/aos.css";

import "react-responsive-carousel/lib/styles/carousel.min.css";
import Carousel from "react-elastic-carousel";
import Devfoliobutton from "./Devfoliobutton";

import CountUp from "react-countup";
import dummyImage from "../components/img/dummy-image.webp";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      width: window.innerWidth,
      height: window.innerHeight,
      page: "home",
    };
  }

  handleResize = (e) => {
    this.setState({ width: window.innerWidth, height: window.innerHeight });
  };

  componentDidMount() {
    window.addEventListener("resize", this.handleResize);
    Aos.init({
      duration: 500,
    });
  }

  componentWillUnmount() {
    window.addEventListener("resize", this.handleResize);
  }
  carouselBreakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2 },
    { width: 768, itemsToShow: 3 },
    { width: 1200, itemsToShow: 4, itemsToScroll: 1 },
  ];

  render() {
    const { items } = this.state;
    const itemsToShow = window.innerWidth <= 425 ? 1 : 2;
    return (
      <>
        <span hidden="true" id="page-name">
          Home
        </span>
        {/* Header */}

        <header className="header">
          <div className="snow">
            <Particles params={Snow} />
          </div>
          <div className="main-header-content">
            <h1>Social Winter of Code</h1>
            <div className="header-logo">
              <a href="./index.html">
                <img src="./img/logo-2.png" />
              </a>
            </div>
          </div>
        </header>
        {/* body */}

        <a name="about"></a>
        <section className="body-content about-swoc" id="about">
          <div className="about-content col-lg-7">
            <h3>
              About <span>SWOC</span>
            </h3>
            <p>
              Social Winter of Code is an open-source program envisioned by the
              Social. It aims to bring students into the world of open source
              development and see the power of unified problem-solving in real
              time. The projects that we will host have been carefully
              hand-picked to invigorate creative thinking and encourage
              collaboration among all participants.
            </p>
            <p>
              The students will be guided by experienced mentors throughout
              their journey. They will learn the skills essential in the world
              of programming, all the while developing a deep appreciation for
              the world of open-source.
            </p>

            <p>
              The students will be also guided by organizing some Workshops and
              sessions on various topics like Web & App development,
              Frontend/Backend, Web3, Blockchain, Artificial Intelligence,
              Machine Learning, Personal Branding
            </p>
          </div>
          <div className="about-vector">
            {/* <img src="./img/about.png" /> */}
            <img src="./img/cat.gif" />
          </div>
        </section>

        <section>
          <div className="past-numbers">
            <div className="number-card">
              <h2 className="number-title">Total Projects</h2>
              <div className="countup">
                <CountUp start={1} end={200} duration={10} />
              </div>
            </div>
            <div className="number-card">
              <h2 className="number-title">Total Participants</h2>
              <div className="countup">
                <CountUp start={1} end={12000} duration={10} />
              </div>
            </div>
            <div className="number-card">
              <h2 className="number-title">Total Mentors</h2>
              <div className="countup">
                <CountUp start={1} end={2000} duration={10} />
              </div>
            </div>
          </div>
        </section>

        <section className="cards-bg-sec to-apply">
          <div className="apply-sec body-content">
            <h3 className="card__card__title">Registration</h3>
            <div className="row">
              {registerItems.map((item, index) => {
                return (
                  <div className="col-md-4 card-cover">
                    <div className="h-100 to-apply-card card__card__body">
                      <h5 className="card-title">{item.cardTitle}</h5>
                      <p className="card-text">{item.cardText}</p>
                      <div className="btn-apply">
                        {/* {item.cardTitle.toLowerCase() == "participant" ? (
                          <Devfoliobutton />
                        ) : (
                          <a
                            href={item.applyLink}
                            target="_blank"
                            // className={
                            //   item.applyStatus.toLowerCase() == "register"
                            //     ? ""
                            //     : "disabled"
                            // }
                            // disabled={item.applyStatus.toLowerCase() != "register" ? "disabled" : ""}
                            //readonly
                          >
                            {item.applyStatus}
                          </a>
                        )} */}

                        {item.cardTitle.toLowerCase() == "p" ? (
                          <Devfoliobutton />
                        ) : (
                          <a href={item.applyLink} target="_blank">
                            {item.applyStatus}
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* <section className="event-together">
                    <div className="body-content">
                        <h3>This time we are together</h3>
                        <div className="together-logos">
                            <div className="logo-swoc">
                                <img src={"/img/logo-1-copy.png"} />
                            </div>
                            <span>+</span>
                            <div className="logo-cwoc">
                                <img src={"/img/logos/CatsInTech.png"} />
                            </div>
                        </div>
                    </div>
                </section> */}

        {/* timeline */}
        <section className="timeline">
          <a name="timeline"></a>
          <div className="timeline-head">
            <h3 className="card__card__title">Program Timeline</h3>
          </div>
          <ul>
            {timelineItems.map((item, index) => {
              return (
                <li>
                  <time>{item.timelineDate}</time>
                  <div className="card__card__body timeline-item">
                    <span className="time-responsive">{item.timelineDate}</span>
                    {item.timelineText}
                  </div>
                </li>
              );
            })}
          </ul>
        </section>

        <section className="overview-section">
          <div className="body-content overview-container">
            <div className="overview-vector">
              <img src="./img/overview.svg" />
            </div>
            <div className="overview-content">
              <h3>Overview</h3>
              <p>
                Social Winter Of Code is the 2 month long open source program by
                Social India , with the aim to introduce more and more people to
                the world of Open source. In this program all the selected
                participants will get a chance to work on various exciting
                projects under the guidance of experienced Mentors.
              </p>
              <p>
                Participants can select the project based on their interest and
                tech stack, and can communicate with mentors and project admin
                to know the project better during the Community bonding Period .
              </p>
              <p>
                We also organise some Sessions & Workshops on various topics to
                help participants learn and know about various domains like Web
                & App development Frontend/Backend, Web3, Blockchain, Artificial
                Intelligence, Machine Learning, Personal Branding, Resume
                Making, Project Making etc..
              </p>
            </div>
          </div>
        </section>

        <section className="prizes cards-bg-sec">
          <div className="">
            <h3 className="card__card__title body-content">
              Prizes And Rewards
            </h3>
            <div className="prize-container">
              {PrizeData.map((prize, index) => (
                <div
                  key={index}
                  className="prize-cards"
                  data-aos="fade-up"
                  data-aos-delay={index * 100}
                >
                  <div className="prize-image-wrapper">
                    <img
                      src={prize.image}
                      alt={prize.name}
                      className="prize-image"
                      onError={(e) => {
                        e.target.src = dummyImage;
                      }}
                    />
                  </div>
                  <div className="prize-details">
                    <h3 className="prize-name">{prize.title}</h3>
                    <p className="prize-desc">{prize.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            {/* <div className="carousel-container">
              <Carousel breakPoints={this.carouselBreakPoints}>
                {prizeItems.map((item, index) => {
                  return (
                    <div className="prize-card card__card__body">
                      <div className="prize-card-img">
                        <img src={item.prizeVector} />
                      </div>
                      <div className="prize-card-text">
                        <h3 className="card-title">
                          {item.prizeTitle}
                          {item.provider && (
                            <>
                              <br />
                              <span class="provider">{item.provider}</span>
                            </>
                          )}
                        </h3>
                        <ul>
                          {item.prizeDescription.split("|").map((el) => {
                            return (
                              <li>
                                <p className="card-text">{el}</p>
                              </li>
                            );
                          })}
                        </ul>
                        {item.more && (
                          <a
                            target="_blank"
                            href={item.prizeLink}
                            className="learn-more"
                          >
                            {item.more}
                          </a>
                        )}
                      </div>
                    </div>
                  );
                })}
              </Carousel>
            </div> */}
          </div>
        </section>

        {/* <section className="prizes cards-bg-sec">
                    <div className="">
                        <h3 className="card__card__title body-content">Prizes And Rewards</h3>
                        <div className="carousel-container">
                            <Carousel breakPoints={this.carouselBreakPoints}>
                                {prizeItems.map((item, index) => {
                                    return (
                                        <div className="prize-card card__card__body">
                                            <div className="prize-card-img">
                                                <img src={item.prizeVector} />
                                            </div>
                                            <div className="prize-card-text">
                                                <h3 className="card-title">{item.prizeTitle}</h3>
                                                <p className="card-text">{item.prizeDescription}</p>
                                            </div>
                                        </div>
                                    )
                                })}
                            </Carousel>
                        </div>
                    </div>

                    <div className="about-vector">
                        <img src={"/img/trophy2-min.jpg"} />
                    </div>
                </section> */}

        {/* <section className="sponsors-section">
          <a name="sponsors"></a>
          <div className="body-content powered-conatiner">
                        <h3 className="">Powered by</h3>
                        <img src={"/img/logos/Devfolio_Logo.svg"} />
                    </div>
          <div className="body-content sponsors-conatiner">
            <h3 className="sponsors-title">Our Sponsors</h3>
            <br />
            <div className="community">
              <div className="row">
                <div className="col-md-12">
                  <h3>Sponsors</h3>
                  <br />
                  <div className="community">
                    <div
                      className="row row-img grid"
                      style={{ "justify-content": "center" }}
                    >
                      {PSponsors.map((item, index) => {
                        return (
                          <div className="col-md-4 col-sm-6 img-div">
                            <a href={item.sponsorLink} target="_blank">
                              <img
                                className="sponsor-img"
                                src={item.sponsorImg}
                              />
                            </a>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
                <div className="col-md-12">
                  <h3>Gold Sponsors</h3>
                  <br />
                  <div className="community">
                    <div
                      className="row row-img grid"
                      style={{ "justify-content": "center" }}
                    >
                      {GoldSponsors.map((item, index) => {
                        return (
                          <div className="col-md-4 col-sm-6 img-div">
                            <a href={item.sponsorLink} target="_blank">
                              <img
                                className="sponsor-img"
                                src={item.sponsorImg}
                              />
                            </a>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>

                <div className="col-md-12">
                  <h3>Silver Sponsors</h3>
                  <br />
                  <div className="community">
                    <div
                      className="row row-img grid"
                      style={{ "justify-content": "center" }}
                    >
                      {SilverSponsors.map((item, index) => {
                        return (
                          <div className="col-md-4 col-sm-6 img-div">
                            <a href={item.sponsorLink} target="_blank">
                              <img
                                className="sponsor-img"
                                src={item.sponsorImg}
                              />
                            </a>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>

                <div className="col-md-6">
                                    <h3>Platform Partners</h3>
                                    <br />
                                    <div className="community">
                                        <div className="row row-img grid">
                                            {PlatformPartners.map((item, index) => {
                                            return (
                                                <div className="col-12 img-div">
                                                    <a href={item.sponsorLink} target="_blank">
                                                        <img className="sponsor-img" src={item.sponsorImg} />
                                                    </a>
                                                </div>                                                
                                            )
                                            })}
                                        </div>
                                    </div>
                                </div>
              </div>

              <h3>Sponsors</h3>
              <div className="row row-img grid mb-4">
                {Sponsors.map((item, index) => {
                  return (
                    <div className="col-md-3 col-sm-6 img-div" key={index}>
                      <a href={item.sponsorLink} target="_blank">
                        <img
                          className="sponsor-img"
                          src={item.sponsorImg}
                          alt={`Sponsor ${index}`}
                        />
                      </a>
                    </div>
                  );
                })}
              </div>

              <h3>Community Partners</h3>
              <div className="row row-img grid mb-4">
                {CommunityPartners.map((item, index) => {
                  return (
                    <div className="col-md-3 col-sm-6 img-div">
                      <a href={item.sponsorLink} target="_blank">
                        <img
                          className="sponsor-img"
                          src={item.sponsorImg}
                          alt={`Sponsor ${index}`}
                        />
                      </a>
                    </div>
                  );
                })}
              </div>

              <div
                className="btn-container p-4"
                style={{ "text-align": "center" }}
              >
                <br />
                <a
                  href="https://drive.google.com/file/d/1MTdrzl0jZ8YiWXWytSJ_LCUmY15nyNmH/view?usp=sharing"
                  target="_blank"
                  className="btn btn-info btn-lg"
                >
                  Sponsor Us
                </a>
              </div>
            </div>
          </div>
        </section> */}

        {/* <section className="speaker-section">
          <h1>Speakers</h1>
          <Carousel
            breakPoints={[
              { width: 1, itemsToShow: 1 },
              { width: 768, itemsToShow: 2 },
              { width: 1024, itemsToShow: 3 },
            ]}
            itemsToShow={3}
            enableAutoPlay={true}
            autoPlaySpeed={5000}
            pagination={false}
          >
            {SpeakerData.map((speaker, index) => (
              <div
                className="speaker-card"
                key={index}
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div className="speaker-image-wrapper">
                  <img
                    className="speaker-img"
                    src={speaker.image}
                    alt={`Speaker ${index}`}
                  />
                </div>
                <h4 className="speaker-name">{speaker.name}</h4>
                <div className="speaker-social-links">
                  <a
                    href={speaker.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FontAwesomeIcon icon={faLinkedin} />
                  </a>
                </div>
              </div>
            ))}
          </Carousel>
        </section> */}

        <section className="event-section">
          <h1>Events</h1>
          <Carousel
            breakPoints={[
              { width: 1, itemsToShow: 1 },
              { width: 768, itemsToShow: 2 },
              { width: 1024, itemsToShow: 3 },
            ]}
            itemsToShow={3}
            enableAutoPlay={true}
            autoPlaySpeed={5000}
            pagination={false}
          >
            {EventData.map((event, index) => (
              <div
                className="event-card"
                key={index}
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div className="event-image-wrapper">
                  <img
                    className="event-img"
                    src={event.image}
                    alt={`Speaker ${index}`}
                  />
                </div>
                <h4 className="event-name">{event.name}</h4>
                <p className="event-desc">{event.desc}</p>
                <a
                  href={event.registerLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="register-button"
                >
                  Register
                </a>
              </div>
            ))}
          </Carousel>
        </section>

        <section className="testimonials-section">
          <div className="testimonials-container">
            <h2>What Our Participants Say</h2>
            <Carousel
              itemsToShow={1}
              enableAutoPlay={true}
              autoPlaySpeed={5000}
              pagination={false} // Hide default pagination dots
            >
              {TestimonialData.map((testimonial) => (
                <div className="testimonial" key={testimonial.id}>
                  <p className="testimonial-text">{testimonial.text}</p>
                  <div className="testimonial-author">
                    <span className="testimonial-name">{testimonial.name}</span>
                    <span className="testimonial-role">{testimonial.role}</span>
                  </div>
                </div>
              ))}
            </Carousel>
          </div>
        </section>

        <section className="faqs">
          <h3 className="faq-title">FAQs</h3>

          <div className="body-content">
            {FAQs.map((item, index) => {
              return (
                <div className="faq-item">
                  <input
                    type="checkbox"
                    id={item.questionId}
                    name="q"
                    className="question-input"
                  />
                  <label for={item.questionId} className="question">
                    <div className="plus">+</div>
                    {item.questionText}
                  </label>
                  <div className="answers">{item.answerText}</div>
                </div>
              );
            })}
          </div>
        </section>
      </>
    );
  }
}

export default Home;
