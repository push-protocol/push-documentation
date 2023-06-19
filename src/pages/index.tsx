import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import WhiteArrow from "@site/static/img/white-arrow.svg"
import styles from './index.module.css';

import headerRipple from '../../static/img/ripple.png';

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <img src={headerRipple} className={styles.ripple} />

      <div className="container">
        <h1 className={styles.heroTitle}>{siteConfig.title}</h1>
        <p className={styles.heroSubTitle}>{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            style={{ color: "white" }}
            className="button button--secondary button--lg"
            to="/docs/intro">
            <div className='spacing-small'>
              Get Started
            </div>
            <WhiteArrow />

          </Link>
        </div>
      </div>

      <img src={headerRipple} className={styles.ripple} />
    </header>
  );
}

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
