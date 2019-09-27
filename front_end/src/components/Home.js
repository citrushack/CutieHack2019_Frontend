import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import Hamburger from './Hamburger';
import { Collapse, Button, CardBody, Card } from 'reactstrap';
import { Icon } from 'antd';
import ScrollableAnchor from 'react-scrollable-anchor';
import { Row, Container, Col } from 'react-bootstrap';
import { connect } from 'react-redux';
import { Animated } from 'react-animated-css';
import { Pulse } from 'react-motions';
import AOS from 'aos';
import './css/Home.css';

const cutieIcon = require('./assets/cutieHome.png');
const cutieFooter = require('./assets/cutieFooter.png');
const acm = require('./assets/acm.png');
const ieee = require('./assets/ieee.png');

class Arrow extends Component {
  constructor(props, context) {
    super(props, context);
    AOS.init();
    this.state = {
      collapse: false
    };
  }

  toggle = () => {
    this.setState(state => ({ collapse: !state.collapse }));
  }

  render(){
    return(
      <div>
        <div className="flex">
          <div className="faqTitle">{this.props.title}</div>
          <Icon onClick={this.toggle} className="arrowIcon" type="down" />
        </div>
        <Collapse isOpen={this.state.collapse}>
          <Card className="cardStyling">
            <CardBody className="faqText">{this.props.body}</CardBody>
          </Card>
        </Collapse>
      </div>
    )
  }
}

class Home extends Component {

  constructor(props, context) {
    super(props, context);
    AOS.init({
        once: true,
    });
    this.state = {
      auth: false
    };
  }

  componentWillReceiveProps (){
    AOS.refresh();
  }

  render(){
    return(
      <div>
        <Animated animationIn="fadeIn" isVisible={true}>
          <div className="heroStyling">
            <Navbar />
            <Hamburger />
              <div className="mainHeaderContainer">
                  <h1 className="mainTitle">CUTIE HACK</h1>
                  <div data-aos="fade-right" data-aos-delay="300" className="mainUnderline"></div>
                <h2 className="mainSubTitle">NOVEMBER 9, 2019</h2>
                <Button className="mobileApply">hello</Button>
              </div>
          </div>
        </Animated>
        <ScrollableAnchor id={'section2'}>
          <div className="section2">
            <div className="s1">
              <img data-aos="fade-up" className="section2img" src={cutieIcon}></img>
            </div>
            <div className="s2">
              <h1 data-aos="fade-up" className="sec2Title"><div className="about">ABOUT</div><div className="cutieHackHeader"> CUTIE HACK</div></h1>
              <p data-aos="fade-up" className="sec2Text">Cutie Hack is a beginner-friendly, 12-hour hackathon. Hosted at UC Riverside, Cutie Hack is designed to help new hackers get used to the time crunch of a hackathon environment. <br></br> <br></br>Cutie Hack invites collegiate students to UC Riverside to collaborate and innovate. Throughout the 12 hours, participants work in teams on a project, attend workshops to learn about new technologies, and network with industry partners.</p>
            </div>
          </div>
        </ScrollableAnchor>
        <ScrollableAnchor id={'section3'}>
          <div className="section3">
            <div style={{width: '100%', textAlign: 'center'}}>
              <h1 className="sec3Title">FAQs</h1>
            </div>
            <Container fluid className="noPadding">
              <Row className="noMarginFAQ">
                <Col className="noPadding">
                  <div className="faqBubble" >
                    <div>
                      <Arrow title={'What is a hackathon'} body={"A hackathon is a place where you and hundreds of other people learn, build, and create new technologies over the course of one weekend! Hackathons let you try learning a new skill, commit to that crazy idea you've never had time for, or make new friendships and strengthen old ones."} />
                    </div>
                    <div className="secondaryFaq">
                      <Arrow title={'Who can attend?'} body={'We welcome all undergraduate UCR students! We do, however, encourage novice and first time hackers for this event.'} />
                    </div>
                    <div className="secondaryFaq">
                      <Arrow title={'Is there free food?'} body={'Yes! Meals, refreshments, and snacks will be provided throughout the event'} />
                    </div>
                    <div className="secondaryFaq">
                      <Arrow title={'Do I need a team?'} body={'Teams are not required, but are recommended. Teams are capped at 4 members and you will have an opportunity to form teams at the start of the event as well.'} />
                    </div>

                  </div>
                </Col>
                <Col className="noPadding">
                  <div className="faq2Bubble">
                    <div>
                      <Arrow title={'Is Cutie Hack free?'} body={'Absolutely! There is no cost to attend, but do bring your own hacking devices!'} />
                    </div>
                    <div className="secondaryFaq">
                      <Arrow title={'What should I bring?'} body={'Student IDs are required. Consider brining a hacking machine, headphones, and a pillow. Feel free to bring your own parts as well but note that soldering is not allowed at CutieHack.'} />
                    </div>
                    <div className="secondaryFaq">
                      <Arrow title={'What if I still have a question?'} body={'Email us at citrushack@gmail.com. We love answering questions'} />
                    </div>
                    <div className="secondaryFaq">
                      <Arrow title={'What if I do not know how to code'} body={"CutieHack is a beginner friendly hackathon and is open to all skill levels. During the event take the time to checkout workshops and collaborate with others"} />
                    </div>
                  </div>
                </Col>
              </Row>
            </Container>
          </div>
        </ScrollableAnchor>
        <div className="stats">
          <div id = "justForStats">
            <div className="statsContainer">
              <span data-aos="fade-down" data-aos-duration="200" className="statsHeader">12</span>
              <br></br>
              <span className="statsSubHeader" style={{paddingLeft:'10px'}}>HOURS</span>
            </div>
            <div className="statsContainer">
              <span data-aos="fade-down" data-aos-duration="200" data-aos-delay="200" className="statsHeader">300</span>
              <br></br>
              <span className="statsSubHeader">HACKERS</span>
            </div>
            <div className="statsContainer">
              <span data-aos="fade-down" data-aos-duration="200" data-aos-delay="400" className="statsHeader">75</span>
              <br></br>
              <span className="statsSubHeader">PROJECTS</span>
            </div>
          </div>
        </div>
        <ScrollableAnchor id={'section4'}>
          <div className="section4">
            <div style={{width: '100%', textAlign: 'center'}}>
              <h1 className="sec4Title">ORGANIZERS</h1>
              <Container style={{marginTop: '60px'}}fluid className="noPadding">
                <Row className="noMarginSponsor">
                  <Col className="noPaddingSponsor">
                    <a href="https://acmucr.org/">
                      <img className="acm" src={acm}></img>
                    </a>
                  </Col>
                  <Col className="noPaddingSponsor">
                    <a href="https://ieee.ee.ucr.edu/">
                      <img className="ieee" src={ieee}></img>
                    </a>
                  </Col>
                </Row>
              </Container>
            </div>
            <img className="homeFooter" src={cutieFooter}></img>
          </div>
        </ScrollableAnchor>
        <ScrollableAnchor id={'section5'}>
          <div className="footer">
            <div className="footerWrap">
              <div style={{margin: 'auto'}}>
                <a href="https://www.facebook.com/cutiehack/"><Icon className="footerIcon" type="facebook" /></a>
                <a href="https://mail.google.com/mail/u/0/?view=cm&fs=1&tf=1&source=mailto&to=citrushack@gmail.com'"><Icon className="footerIcon" type="mail" /></a>
                <a href="https://twitter.com/citrushack"><Icon className="footerIcon" type="twitter-square" theme="filled" /></a>
                <a href="https://www.instagram.com/citrushack_ucr/"><Icon className="footerIcon" type="instagram" /></a>
              </div>
            </div>
            <div style={{textAlign: 'center'}}>
              <p className="footerText">Made with ♥ in Riverside, CA</p>
            </div>
            <div style={{paddingBottom: '0.5%', textAlign: 'center'}}>
              <p className="footerText">© 2019 Cutie Hack</p>
            </div>
          </div>
        </ScrollableAnchor>
      </div>
    )
  }
}

export default Home;
