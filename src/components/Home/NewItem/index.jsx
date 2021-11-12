import React from 'react';
import PropTypes from 'prop-types';
import styles from './NewItem.module.scss';

function NewItem(props) {
  const { onClick, src, alt, icon, time, description } = props;
  return (
    <div onClick={onClick} role="button" tabIndex={0} onKeyDown={null} className={styles.item}>
      <div className={styles.img}>
        <img src={src} alt={alt} />
      </div>
      {icon && (
        <span className={styles.icon}>
          <i className={icon} />
        </span>
      )}
      {time && <span className={styles.time}>{time}</span>}
      <div className={styles.description}>{description}</div>
    </div>
  );
}

NewItem.propTypes = {
  onClick: PropTypes.func,
  src: PropTypes.string,
  alt: PropTypes.string,
  icon: PropTypes.string,
  time: PropTypes.string,
  description: PropTypes.string.isRequired,
};

NewItem.defaultProps = {
  onClick: undefined,
  src: null,
  alt: null,
  icon: null,
  time: null,
};

export default NewItem;
