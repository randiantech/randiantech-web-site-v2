import React from "react";
import { isMobileWidth } from "../../utils";
import { CONTACT_CAREERS_ITEMS } from "../../data";
import "./PositionsSection.css";
import ReactLoading from "react-loading";
import { SimpleButton } from "../../components/SimpleButton";

const itemErrorKey = (id: string) => `error${id.charAt(0).toUpperCase() + id.substring(1)}`;

export class PositionsSection extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    let initialState: any = {
      isLoading: false,
    };
    CONTACT_CAREERS_ITEMS.forEach((item) => {
      initialState[item.id] = item.initialValue;
      initialState[itemErrorKey(item.id)] = false;
    });
    this.state = {
      isMobile: isMobileWidth(),
      ...initialState,
    };
  }

  componentDidMount() {
    window.addEventListener("resize", this.resize.bind(this));
    this.resize();
  }

  resize() {
    this.setState({ isMobile: isMobileWidth() });
  }

  validateInput(item: any, value: any) {
    this.setState({
      [itemErrorKey(item.id)]: item.isValid && !item.isValid(value),
    });
  }

  validateAllInputs() {
    let errors = 0;
    CONTACT_CAREERS_ITEMS.forEach((item) => {
      const value = this.state[item.id];
      let itemIsInvalid = item.isValid && !item.isValid(value);
      if (itemIsInvalid && item.isRequired) ++errors;
      this.setState({
        [itemErrorKey(item.id)]: itemIsInvalid,
      });
    });
    return errors === 0;
  }

  submitMessage(e: any) {
    e.preventDefault();
    this.setState({ isLoading: true });
    if (this.validateAllInputs()) {
      fetch("http://192.241.136.96:3005/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(this.state),
      }).then(() => {
        this.setState({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          experience: "",
          isLoading: false,
        });
      });
    }
  }

  renderErrorLabel() {
    return (
      <div className="contact-us-section-item-label-error-container">
        <img src="./images/icons/alert-circle.png" className="contact-us-section-item-label-error" alt="error" />
        <span className="contact-us-section-item-label-error-label">Required</span>
      </div>
    );
  }

  renderSendButton() {
    return (
      <div className="contact-us-section-send-btn-container rt-std-left-padding">
        <SimpleButton text="Submit" onClick={(e) => this.submitMessage(e)} />
      </div>
    );
  }

  renderContactUsLabel() {
    const { isMobile } = this.state;
    return (
      <div
        className={`${
          isMobile
            ? " rt-std-top-padding rt-std-bottom-padding rt-glow-effect rt-linear-grad-bg"
            : " rt-rounded rt-std-right-padding"
        }`}
      >
        <div className="text-position">
          <h2>Frontend Developer</h2>
          <p>
            We’re looking for front-end developers who love to ship world-class user interfaces for websites and web
            apps, aren’t scared of experimenting with new tools and are able to communicate their progress and potential
            obstacles very clearly.
          </p>
          <h3>Requirements:</h3>
          <ul>
            <li>High degree of proficiency and understanding in HTML/CSS and Javascript</li>
            <li>At least 2 years of proven commercial experience in developing user interfaces using React.js</li>
            <li>Experience working with git in real projects</li>
            <li>High attention to detail</li>
            <li>Experience working in an kanban and scrum development process</li>
            <li>
              Written and spoken English at a level high-enough to be able to communicate smoothly with the rest of the
              team
            </li>
            <li>Experience in working with REST/GraphQL APIs</li>
            <li>Basic understanding of tools such as Sketch, Figma, InVision or Zeplin</li>
          </ul>

          <h3>Would be great to see:</h3>
          <ul>
            <li>Hands-on experience with tools like Gatsby and Next.js</li>
            <li>
              Ability to connect headless CMS systems such as Contentful, NetlifyCMS, Storyblok or Prismic with a
              JAMstack site
            </li>
            <li>Track records of remote work in your career history</li>
            <li>Experience with node.js</li>
            <li>Basic understanding of serverless architecture</li>
          </ul>
        </div>
      </div>
    );
  }

  renderFormItems() {
    const { isMobile } = this.state;
    return (
      <div
        className={
          isMobile
            ? "contact-us-section-container-form-wrapper-mobile"
            : "contact-us-section-container-form-wrapper-desktop"
        }
      >
        <div
          className={
            isMobile ? "contact-us-section-container-form-mobile" : "contact-us-section-container-form-desktop"
          }
        >
          {CONTACT_CAREERS_ITEMS.map((item) => {
            const isErrorInItem = this.state[itemErrorKey(item.id)] && item.isRequired;
            return (
              <div key={`randiantech-key-${item.label}`} className="contact-us-section-item rt-std-left-padding">
                <div className="contact-positions-item-label">
                  <div>{item.label}</div>
                  {isErrorInItem && this.renderErrorLabel()}
                </div>
                {item.style === "free-text" ? (
                  <textarea
                    className="contact-us-section-item-input-free-text"
                    name={`randiantech-${item.id}`}
                    onChange={(e) => {
                      this.setState({ [item.id]: e.target.value });
                      this.validateInput(item, e.target.value);
                    }}
                    onFocus={(e) => this.validateInput(item, e.target.value)}
                    value={this.state[item.id]}
                  />
                ) : (
                  <input
                    id={item.id}
                    className="contact-us-section-item-input"
                    type="text"
                    name={`randiantech-${item.id}`}
                    onChange={(e) => {
                      this.setState({ [item.id]: e.target.value });
                      this.validateInput(item, e.target.value);
                    }}
                    value={this.state[item.id]}
                    onFocus={(e) => this.validateInput(item, e.target.value)}
                  />
                )}
              </div>
            );
          })}
        </div>
        <div>{this.renderSendButton()}</div>
      </div>
    );
  }

  render() {
    const { isMobile, isLoading } = this.state;
    return (
      <div id="contact-us-section">
        {isLoading && (
          <div className="rts-page-loading">
            <ReactLoading type="spin" color="#ff4970" />
          </div>
        )}
        <div className={`${isMobile ? "contact-us-section-container-mobile" : "contact-us-section-container-desktop"}`}>
          {this.renderContactUsLabel()}
          {this.renderFormItems()}
        </div>
      </div>
    );
  }
}
