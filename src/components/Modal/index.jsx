import clsx from 'clsx';
import React from 'react';
import { FiX } from 'react-icons/fi';
import styles from './Modal.module.scss';

function Modal({ children, title, visible, onClose, filter }) {
  return (
    <div className={clsx(styles.wrapper, { [styles.visible]: visible, [styles.filter]: filter })}>
      {visible && <div className={styles.mask} />}
      <div className={styles.content}>
        <div className={styles.header}>
          <div className={styles.headerTitle}>{title}</div>
          <span role="button" tabIndex={0} onKeyDown={null} onClick={onClose} className={styles.close}>
            <FiX />
          </span>
        </div>
        <div className={styles.body}>{children}</div>
      </div>
    </div>
  );
}

export default Modal;
