import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faBars} from '@fortawesome/free-solid-svg-icons';
import {Link} from 'react-router-dom';
import Logo from '../../components/Logo/Logo';
import './BlogSection.css';

const MOBILE_WIDTH = 1200;

interface BlogGroupState {
  isMobile: boolean;
}

const isMobileWidth = () => window.innerWidth <= MOBILE_WIDTH;

const ITEMS = [
  {},
  {
    title: 'Using BPF to Transform SSH Sessions into Structured Events',
    description:
      `Teleport 4.2 introduced a new feature called Enhanced Session Recording that takes an unstructured SSH session and outputs a stream of structured events. It’s the next step in Teleport’s evolution that uses new technology (eBPF or now simply known as BPF) to close some gaps in Teleport’s audit abilities. Below you can see an illustration of this feature and if you keep reading, we’ll get into some of the technical details.`,
    img: '/blog/img1.jpg',
    url: 'https://findwork.dev/blog/advanced-usage-python-requests-timeouts-retries-hooks/',
  },
  {
    title: 'Iranian Hackers Have Been ‘Password-Spraying’ the US Grid',
    description:
      'In the wake of the US assassination of Iranian general Qasem Soleimani and the retaliatory missile strike that followed, Iran-watchers have warned that the country could deploy cyberattacks as well, perhaps even targeting US critical infrastructure like the electric grid. A new report lends some fresh details to the nature of that threat: By all appearances, Iranian hackers dont currently have the capability to start causing blackouts in the US. But they’ve been working to gain access to American electric utilities, long before tensions between the two countries came to a head.',
    img: '/blog/img2.jpg',
    url: 'Some URL',
  },
  {
    title: 'Ford CEO says the company "overestimated" self-driving cars',
    description:
      "Ford CEO Jim Hackett scaled back hopes about the company's plans for self-driving cars this week, admitting that the first vehicles will have limits. 'We overestimated the arrival of autonomous vehicles,' said Hackett, who once headed the company's autonomous vehicle division, at a Detroit Economic Club event on Tuesday. While Ford still plans on launching its self-driving car fleet in 2021, Hackett added that 'its applications will be narrow, what we call geo-fenced, because the problem is so complex'.",
    img: '/blog/img3.jpg',
    url: 'Some URL',
  },
  {
    title: 'Epistemic standards for “Why did it take so long to invent X?”',
    description:
      'In seeking to understand the history of progress, I keep running across intriguing cases of “ideas behind their time”—inventions that seem to have come along much later than they could have, such as the cotton gin or the bicycle. I’ve started collecting a list here, and will update that page with new analyses as I find them.',
    img: '/blog/img4.jpg',
    url: 'https://rootsofprogress.org/epistemic-standards-for-why-it-took-so-long',
  },
  {
    title: 'Advanced usage of Python requests - timeouts, retries, hooks',
    description:
      'The Python HTTP library requests is probably my favourite HTTP utility in all the languages I program in. Its simple, intuitive and ubiquitous in the Python community. Most of the programs that interface with HTTP use either requests or urllib3 from the standard library.',
    img: '/blog/img5.jpg',
    url: 'https://findwork.dev/blog/advanced-usage-python-requests-timeouts-retries-hooks/',
  }
];

export default class BlogGroup extends React.Component<any, BlogGroupState> {
  constructor(props: any) {
    super(props);
    this.state = {
      isMobile: isMobileWidth(),
    };
  }

  componentDidMount() {
    window.addEventListener('resize', this.resize.bind(this));
    this.resize();
  }

  resize() {
    this.setState({isMobile: isMobileWidth()});
  }

  render() {
    const {isMobile}: BlogGroupState = this.state;
    return (
      <div
        className={`blog-section-container-${isMobile ? 'mobile' : 'desktop'}`}
      >
        {ITEMS.map((item, index) => {
          const {url, title, description, img} = item;
          if (index === 0) {
            return (
              <div className="blog-section-first-item">News and Articles</div>
            );
          }
          return (
            <a className="blog-section-item-desktop" href={url}>
              <div>
                <img src={img} className="blog-section-item-img-desktop" />
              </div>
              <div className="blog-section-item-details">
                <div className="blog-section-item-title-desktop">
                  {title}
                </div>
                <div className="blog-section-item-description-desktop">
                  {description}
                </div>
              </div>
            </a>
          );
        })}
      </div>
    );
  }
}
