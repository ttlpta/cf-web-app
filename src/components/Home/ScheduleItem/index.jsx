import React from 'react';
import styles from './ScheduleItem.module.scss';

export default function ScheduleItem({ dateNumber, dateText, scheduleType, hour, name }) {
  return (
    <div className={styles.item}>
      <div className={styles.date}>
        <span className={styles.dateNumber}>{dateNumber || 4}</span>
        <span className={styles.dateText}>{dateText || '水'}</span>
      </div>
      <div className={styles.content}>
        <div className={styles.info}>
          <span className={styles.type}>{scheduleType || 'Event'}</span>
          <span className={styles.time}>{hour || '22:00'}~</span>
        </div>
        <span className={styles.badge}>NEW</span>
        <div className={styles.title}> {name || '「NEOLAND AUDITION」アシスタントMC'}</div>
      </div>
    </div>
  );
}
