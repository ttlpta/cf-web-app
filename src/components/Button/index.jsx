import clsx from 'clsx';
import React from 'react';
import PropTypes from 'prop-types';
import styles from './Button.module.scss';

const Button = React.memo((props) => {
  const { title, type, className, titleClassName, iconClassName, children, ...rest } = props;
  return (
    /* eslint-disable react/button-has-type */
    <button type={type || 'button'} {...rest} className={clsx(styles.btn, className)}>
      {children || (
        <>
          <span className={clsx(styles.icon, titleClassName)} />
          <span className={clsx(styles.title, iconClassName)}>{title}</span>
        </>
      )}
    </button>
  );
});

Button.propTypes = {
  title: PropTypes.string,
  type: PropTypes.oneOf(['button', 'reset', 'submit']),
  className: PropTypes.string,
  titleClassName: PropTypes.string,
  iconClassName: PropTypes.string,
  onClick: PropTypes.func,
};

Button.defaultProps = {
  title: null,
  type: 'button',
  className: null,
  titleClassName: null,
  iconClassName: null,
  onClick: undefined,
};

Button.displayName = 'Button';

export default Button;
