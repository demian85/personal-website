import React from 'react';
import PropTypes from 'prop-types';

import Section from './Section';

import styles from './Experience.css';
import { DateTime } from 'luxon';
import humanizeDuration from 'humanize-duration';

function Item(props) {
  const { company, from, to, position, children } = props;

  const fromDate = DateTime.fromFormat(from, 'yyyy-MM');
  const toDate = to ? DateTime.fromFormat(to, 'yyyy-MM') : null;
  const duration = fromDate
    .diff(toDate ?? DateTime.local())
    .negate()
    .toObject();
  const fromStr = fromDate.toFormat('LLL yyyy');
  const toStr = toDate ? toDate.toFormat('LLL yyyy') : '';

  return (
    <div className={styles.item}>
      <h3>{position}</h3>
      {company && <h4>{company}</h4>}
      <div className={styles.duration}>
        {fromStr} - {toStr}
        {toDate && (
          <span className={styles.date}>
            {humanizeDuration(duration.milliseconds, {
              units: ['y', 'mo'],
              round: true,
            })}
          </span>
        )}
      </div>
      <p>{children}</p>
    </div>
  );
}

Item.defaultProps = {
  company: '',
};

Item.propTypes = {
  from: PropTypes.string.isRequired,
  to: PropTypes.string,
  company: PropTypes.string,
  position: PropTypes.string.isRequired,
};

export default function Experience() {
  return (
    <Section
      icon="/images/ic_work_white_24px.svg"
      headerStyle="2"
      title="Experience"
      allowPageBreak
    >
      <Item from="2021-05" position="Freelance Software developer" />
      <Item
        from="2017-05"
        to="2021-05"
        company="Altoros"
        position="Full Stack Node.js Developer"
      >
        Participated in many IoT projects based on Xively / Google Cloud
        platform.
        <br />
        Technologies and languages used: Node.js, Typescript, React, Redux,
        PostgreSQL, Redis, MQTT protocol for device real-time communication.
        <br />
        Most of the applications were built based on serverless architectures
        hosted on AWS.
      </Item>
      <Item
        from="2016-11"
        to="2017-04"
        company="Team Capture"
        position="Full Stack Node.js Developer"
      >
        Created an Electron cross-platform application using WebRTC and cutting
        edge Web technologies for video/screen/audio real-time sharing.
      </Item>
      <Item
        from="2016-09"
        to="2016-10"
        company="AmberAds"
        position="Full Stack Node.js Developer"
      >
        Implemented various providers for a real-time bidding platform based on
        the OpenRTB latest specification.
        <br />
        Also carried out the transition to the latest LTS version of Node.js
        using ES6 cutting-edge features, while improving performance, code
        readability and modularity.
      </Item>
      <Item
        from="2013-01"
        to="2016-08"
        company="Avature"
        position="Frontend Engineer"
      >
        I worked on innovative features for the user interface of an enterprise
        recruiting Web application.
        <br />
        Using Javascript ES6 features, I proposed enhancements to the core UI
        framework.
        <br />
        Heavy use of TDD, UI & Unit testing.
        <br />
        Led a small team and developed a social network from scratch.
      </Item>
      <Item
        from="2010-09"
        to="2012-12"
        company="Nicestream"
        position="Node.js Engineer"
      >
        I was involved in the design and development of various Web applications
        using social APIs in order to monitor the popularity of brands and/or
        entities.
        <br />
        I worked with a small team as the development leader.
        <br />
        We used Twitter streaming API for real time data analysis, Node.js as
        the core technology, PerconaDB and NoSQL solutions like MongoDB & Redis
        to solve performance issues.
        <br />
        Heavy use of Javascript & Web APIs at the front-end for realtime
        statistics generation.
      </Item>
      <Item
        from="2009-01"
        to="2010-09"
        company="ZedPlan"
        position="Technical Leader"
      >
        I led a small team and crafted an online Bingo and a multisearch engine
        implementing more than 10 APIs for flight, hotel and holidays.
      </Item>
      <Item
        from="2007-02"
        to="2009-09"
        company="GFDD Group"
        position="Web Developer"
      >
        Web 2.0 development.
        <br />I also developed a small Java desktop application to control a
        remote music player.
      </Item>
      <Item
        from="2006-09"
        to="2006-12"
        company="Argentina.com"
        position="Web Developer"
      >
        I created a photo gallery from scratch, employing all the Web 2.0
        concepts and using GraphicsMagick server-side for image manipulation.
      </Item>
    </Section>
  );
}
