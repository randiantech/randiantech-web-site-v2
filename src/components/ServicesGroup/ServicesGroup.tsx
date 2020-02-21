import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faBars} from '@fortawesome/free-solid-svg-icons';
import {Link} from 'react-router-dom';
import Logo from '../Logo/Logo';
import './ServicesGroup.css';

const MOBILE_WIDTH = 1200;

interface ServicesGroupState {
  isMobile: boolean;
}

const isMobileWidth = () => window.innerWidth <= MOBILE_WIDTH;

const ITEMS = [
  {
    img: '/technologies-groups/brain-chip.png',
    text: 'Staff Augmentation',
    link: '/services/staff-augmentation'
  },
  {
    img: '/technologies-groups/cash-molecule.png',
    text: 'Fixed Price Projects',
    link: '/services/fixed-price'
  },
  {
    img: '/technologies-groups/team-meeting.png',
    text: 'Managed Agile Teams',
    link: '/services/managed-agile-teams'
  },
  {
    img: '/technologies-groups/travel-user-pin.png',
    text: 'Field Agent Management',
    link: '/services/field-agent-management'
  },
  {
    img: '/technologies-groups/idea-strategy.png',
    text: 'Technical Mentoring',
    link: '/services/technical-mentoring'
  },
  {
    img: '/technologies-groups/school-teacher-maths.png',
    text: 'On Site Training',
    link: '/services/on-site-training'
  },
];

export default class ServicesGroup extends React.Component<
  any,
  ServicesGroupState
> {
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
    const {isMobile}: ServicesGroupState = this.state;
    return (
      <div className="services-group-wrapper">
      <div className={`services-group-container-${isMobile ? 'mobile' : 'desktop'}`}>
        <div className={`services-group-container-left-${isMobile ? 'mobile' : 'desktop'}`}>Our Services</div>
        <div className={`services-group-container-right-${isMobile ? 'mobile' : 'desktop'}`}>
          {ITEMS.map(item => (
            <Link to={`${item.link}`} key={item.text} className="services-group-item">
              <img className="services-group-item-img" src={item.img} />
              <div className="services-group-item-text">{item.text}</div>
            </Link>
          ))}
        </div>
      </div>
      </div>
    );
  }
}
