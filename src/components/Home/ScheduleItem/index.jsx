import React from 'react';
import styles from './ScheduleItem.module.scss';

export default function ScheduleItem() {
  return (
    <div className={styles.item}>
      <div className={styles.date}>
        <span className={styles.dateNumber}>4</span>
        <span className={styles.dateText}>水</span>
      </div>
      <div className={styles.content}>
        <div className={styles.info}>
          <span className={styles.type}>EVENT</span>
          <span className={styles.time}>22:00~</span>
        </div>
        <span className={styles.badge}>NEW</span>
        <div className={styles.title}>「NEOLAND AUDITION」アシスタントMC</div>
      </div>
    </div>
  );
}
