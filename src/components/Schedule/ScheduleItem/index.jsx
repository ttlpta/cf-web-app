import clsx from 'clsx';
import React from 'react';
import styles from './ScheduleItem.module.scss';

export default function ScheduleItem({
  className,
  icon,
  dateNumber,
  dateText,
  scheduleType,
  hour,
  name,
  showDate = true,
  inline = false,
}) {
  return (
    <div className={clsx(styles.item, className)}>
      <div className={styles.date}>
        {showDate && (
          <>
            <span className={styles.dateNumber}>{dateNumber || 4}</span>
            <span className={styles.dateText}>{dateText || '水'}</span>
          </>
        )}
      </div>
      <div className={clsx(styles.content, { [styles.inline]: inline })}>
        <div className={styles.info}>
          <span className={clsx(styles.type, { [styles.typeIcon]: icon })}>
            {icon && <i className={icon} />}
            {scheduleType || 'Event'}
          </span>
          <span className={styles.time}>{hour || '22:00'}~</span>
        </div>
        <span className={styles.badge}>NEW</span>
        <div className={styles.title}> {name || '「NEOLAND AUDITION」アシスタントMC'}</div>
      </div>
    </div>
  );
}
