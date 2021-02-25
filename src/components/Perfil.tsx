import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChanllengesContext';
import styles from '../styles/components/Profile.module.css';

export function Profile() {
  const { level } = useContext(ChallengesContext);

  return (
    <div className={styles.profileContainer}>
      <img src="https://github.com/PabloMelo11.png" alt="Pablo Melo" />

      <div>
        <strong>Pablo Melo</strong>
        <p>
          <img src="icons/level.svg" alt="Level icon" />
          Level {level}
        </p>
      </div>
    </div>
  );
}
