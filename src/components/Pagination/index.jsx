import React from 'react';
import RCPagination from 'rc-pagination';
import { FiArrowLeft, FiArrowRight } from 'react-icons/fi';

export default function Pagination({ onChange, current, total, pageSize, disabled, ...rest }) {
  const itemRender = (curr, type, element) => {
    if (type === 'prev') {
      return (
        <span>
          <FiArrowLeft size={24} /> Back
        </span>
      );
    }
    if (type === 'next') {
      return (
        <span>
          Next <FiArrowRight size={24} />
        </span>
      );
    }
    return element;
  };

  return <RCPagination {...{ onChange, current, total, pageSize, disabled }} {...rest} itemRender={itemRender} />;
}
