import React from 'react';

import Photo from './Photo';
import Personality from './Personality';
import Info from './Info';
import Profile from './Profile';
import RankedSkills from './RankedSkills';
import Skills from './Skills';
import Languages from './Languages';
import Experience from './Experience';
import Certificates from './Certificates';
import Education from './Education';
import Hobbies from './Hobbies';
import SocialInfo from './SocialInfo';

import styles from './CV.css';

export default function () {
  return (
    <section className={styles.root} itemScope itemType="http://schema.org/Person">
      <section className={styles.aside}>
        <Photo className={styles.photo} />
        <Info />
        <SocialInfo />
        <Personality />
        <RankedSkills />
        <Skills />
        <Languages />
        <Certificates />
        <Education />
        <Hobbies />
      </section>
      <section className={styles.main}>
        <Profile />
        <Experience />
      </section>
    </section>
  );
}
