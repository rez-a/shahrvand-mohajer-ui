import React, { useContext, useRef } from 'react';
import { AccordionItemsStore } from './AccordionItem';
import PropTypes from 'prop-types';

const ContentAccordionItem = ({
  children,
  defaultClassName = '',
  openClassName = '',
  closeClaseName = '',
}) => {
  const itemRef = useRef();
  const { isOpen } = useContext(AccordionItemsStore);
  return (
    <div
      ref={itemRef}
      className={` accordion-content ${defaultClassName} ${
        isOpen ? `show ${openClassName}` : closeClaseName
      }`}
      style={isOpen ? { height: itemRef?.current?.scrollHeight } : {}}
    >
      {children}
    </div>
  );
};

ContentAccordionItem.propTypes = {
  defaultClassName: PropTypes.string,
  openClassName: PropTypes.string,
  closeClaseName: PropTypes.string,
};

export default ContentAccordionItem;
