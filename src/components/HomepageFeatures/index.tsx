import React, { useState } from 'react';
import clsx from 'clsx';
import "../../css/custom.css"
import ArrowUp from "@site/static/img/ArrowUpRight-pink.svg"
import Styles from "./styles.module.css"
import FAQ from './Faq';
import { FooterComponent } from './Footer';

type DevGuideItems = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: JSX.Element;
  PinkSvg?: React.ComponentType<React.ComponentProps<'svg'>>;
  Link?: string;
};

type SdkListItems = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  PinkSvg?: React.ComponentType<React.ComponentProps<'svg'>>;
  Link?: string;
}

const SdkList: SdkListItems[] = [
  {
    title: 'SDK Starter Kit',
    Svg: require('@site/static/img/arrowupright.svg').default,
    PinkSvg: require('@site/static/img/ArrowUpRight-pink.svg').default,
  },
  {
    title: 'REST API',
    Svg: require('@site/static/img/arrowupright.svg').default,
    PinkSvg: require('@site/static/img/ArrowUpRight-pink.svg').default,
  },
  {
    title: 'React Native',
    Svg: require('@site/static/img/arrowupright.svg').default,
    PinkSvg: require('@site/static/img/ArrowUpRight-pink.svg').default,
  },
  {
    title: 'Socket',
    Svg: require('@site/static/img/arrowupright.svg').default,
    PinkSvg: require('@site/static/img/ArrowUpRight-pink.svg').default,
  },
  {
    title: 'UIWeb',
    Svg: require('@site/static/img/arrowupright.svg').default,
    PinkSvg: require('@site/static/img/ArrowUpRight-pink.svg').default,
  },
  {
    title: 'UI Embed',
    Svg: require('@site/static/img/arrowupright.svg').default,
    PinkSvg: require('@site/static/img/ArrowUpRight-pink.svg').default,
  }
]

const DevGuide: DevGuideItems[] = [
  {
    title: 'Notifications',
    Svg: require('@site/static/img/notification.svg').default,
    PinkSvg: require('@site/static/img/notification-pink.svg').default,
    Link: '/docs/CONCEPTS/push-notifications-for-web3/',
    description: (
      <>
        Explore different ways of sending and receiving notifications and more.
      </>
    ),
  },
  {
    title: 'Push Chat',
    Svg: require('@site/static/img/message.svg').default,
    PinkSvg: require('@site/static/img/message-pink.svg').default,
    Link: '/docs/CONCEPTS/push-chat-for-web3',
    description: (
      <>
        Learn about the details of Push Chat and how to easily integrate it.
      </>
    ),
  },
  {
    title: 'Push Video Calls',
    Svg: require('@site/static/img/video.svg').default,
    PinkSvg: require('@site/static/img/video-pink.svg').default,

    description: (
      <>
        Learn about the details of Push Video Calls and how to easily integrate it.
      </>
    ),
  },
  {
    title: 'SDK Quick Start',
    Svg: require('@site/static/img/lightning.svg').default,
    PinkSvg: require('@site/static/img/lightning-pink.svg').default,
    description: (
      <>
        A super quick guide to get you started with Push SDK.
      </>
    ),
  },
  {
    title: 'Examples',
    Svg: require('@site/static/img/star.svg').default,
    PinkSvg: require('@site/static/img/star-pink.svg').default,

    description: (
      <>
        Examples to showcase the power of Push Protocol’s communication stack.
      </>
    ),
  },
  {
    title: 'Showrunners',
    Svg: require('@site/static/img/receive-notifs.svg').default,
    PinkSvg: require('@site/static/img/receive-notifs-pink.svg').default,

    description: (
      <>
        Showrunners Framework and how to boost your web3 communications.
      </>
    ),
  },
];

function GuideList({ title, Svg, description, PinkSvg, Link }: DevGuideItems) {
  const [isHovered, setIsHovered] = useState<boolean>(false);

  const handleMouseEnter = () => {
    if (!isHovered) {
      setIsHovered(true);
    }
  }
  const handleMouseLeave = () => {
    if (isHovered) {
      setIsHovered(false);
    }
  }

  return (
    <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} className={`developer_guides_list ${isHovered ? 'border-pink' : ''}`}>
      <a href={Link}>
        <div className='inner-card'>
          <div className='card-details'>
            {isHovered ? (
              <div><PinkSvg className={Styles.featureSvg} /></div>
            ) : (
              <div><Svg className={Styles.featureSvg} /></div>
            )
            }
            <p className="notification_header">{title}</p>
            <p className="guide_info">{description}</p>
          </div>
        </div>
      </a>
    </div>
  );
}

function PushSdk({ title, Svg, PinkSvg }: SdkListItems) {

  const [isHovered, setIsHovered] = useState<boolean>(false);

  const handleMouseEnter = () => {
    if (!isHovered) {
      setIsHovered(true);
    }
  }
  const handleMouseLeave = () => {
    if (isHovered) {
      setIsHovered(false);
    }
  }

  return (
    <div onMouseOver={handleMouseEnter} onMouseLeave={handleMouseLeave} className={`sdk-container ${isHovered ? 'border-pink' : 'gray-border'}`}>
      <div className='sdk-container-inner'>
        <div className='sdk-title'>
          {title}
        </div>
        <div className='sdk-icon'>
          {
            isHovered ? (
              <PinkSvg />
            ) : (
              <Svg />
            )
          }
        </div>
      </div>
    </div>
  )
}

export default function HomepageFeatures({ PinkSvg }): JSX.Element {
  return (
    <section>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
        <div style={{ display: "flex", flexDirection: "column", maxWidth: "98%", alignItems: "flex-start" }}>
          <div className="hero_home">
            Developer Guides
          </div>
          <div className="container">
            <div className="guide_list">
              {DevGuide.map((props, idx) => (
                <GuideList key={idx} {...props} />
              ))}
            </div>
          </div>
        </div>
      </div>
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
        <div style={{ display: "flex", flexDirection: "column", maxWidth: "98%", alignItems: "flex-start" }}>
          <div className="hero_home">
            Push SDK
          </div>
          <div className="container">
            <div className="guide_list">
              {SdkList.map((props, idx) => (
                <PushSdk key={idx} {...props} />
              ))}
            </div>
          </div>
        </div>
      </div>
      <div style={{ flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
        <div style={{ display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between", maxWidth: "72%", margin: "auto", marginTop: "70px", marginBottom: "50px" }}>
          <span className="hero_home_Faq_header">
            Frequently Asked Questions
          </span>
          <div className='hero_home_faq'>
            <p>
              Explore Faqs
            </p>
            <ArrowUp className='arrowUp-icon' />
          </div>
        </div>
        <FAQ />
        <FooterComponent />
      </div>
    </section >
  );
}
