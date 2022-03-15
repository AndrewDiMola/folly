import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Folly is Fast',
    description: (
      <>
        The utilities contained in Folly are things we use heavily in production—
        this is code that runs on thousands of servers doing work on behalf of
        hundreds of millions of users every day.
      </>
    ),
  },
  {
    title: 'Folly is Easy to Use',
    description: (
      <>
        We make heavy use of modern C++, which has allowed us to retain a lot of
        programming convenience without spending much of our hardware resources on it.
      </>
    ),
  },
  {
    title: 'Folly is Complementary',
    description: (
      <>
        Folly complements existing high quality C++ libraries, such as Boost or
        the Standard Library.
      </>
    ),
  },
];

function Feature({title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center" />
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

function VideoContainer() {
  return (
    <div className="container text--center margin-bottom--xl">
      <div className="row">
        <div className="col">
          <h2>Learn More About Folly</h2>
          <div className="video-container">
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/Wr_IfOICYSs"
              title="Explain Like I'm 5: Folly"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          <VideoContainer />
        </div>
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
