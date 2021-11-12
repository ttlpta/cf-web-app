import clsx from 'clsx';
import React from 'react';
import PropTypes from 'prop-types';
import { FiChevronRight } from 'react-icons/fi';
import styles from './Breadcrumb.module.scss';

const Breadcrumb = ({ className, children }) => <div className={clsx(styles.wrapper, className)}>{children}</div>;

const Item = ({ className, children }) => (
  <div className={clsx(styles.item, className)}>
    <span className={styles.link}>{children}</span>
    <FiChevronRight className={styles.separator} />
  </div>
);

Breadcrumb.propTypes = {
  className: PropTypes.string,
};

Breadcrumb.defaultProps = {
  className: null,
};

Item.propTypes = {
  className: PropTypes.string,
};

Item.defaultProps = {
  className: null,
};

Breadcrumb.Item = Item;

export default Breadcrumb;
