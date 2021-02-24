import { useContext } from 'react';

import { ChallengesContext } from '../contexts/ChanllengesContext';
import styles from '../styles/components/ExpirienceBar.module.css';

export function ExpirienceBar() {
  const { currentExperience, experienceToNextLevel } = useContext(
    ChallengesContext
  );

  const percentToNextLevel =
    Math.round(currentExperience * 100) / experienceToNextLevel;

  return (
    <header className={styles.expirienceBar}>
      <span>0 xp</span>
      <div>
        <div style={{ width: `${percentToNextLevel}%` }} />

        {currentExperience > 0 && (
          <span
            className={styles.currentExperience}
            style={{ left: `${percentToNextLevel}%` }}
          >
            {currentExperience} px
          </span>
        )}
      </div>
      <span>{experienceToNextLevel} xp</span>
    </header>
  );
}
