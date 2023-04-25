import React, { createContext, useState } from 'react';
import AccordionItem from './AccordionItem';
import PropTypes from 'prop-types';

export const AccordionStore = createContext(null);
const AccordionLayout = ({ children, toggle }) => {
  const [collapsed, setCollapsed] = useState({ key: null });
  return (
    <AccordionStore.Provider
      value={{ collapsed, setCollapsed, toggle }}
      className="w-full"
    >
      {children?.length > 1 ? (
        children?.map((child, index) => (
          <AccordionItem index={index} {...child?.props}>
            {child?.props?.children}
          </AccordionItem>
        ))
      ) : (
        <AccordionItem index={1} {...children?.props}>
          {children?.props?.children}
        </AccordionItem>
      )}
    </AccordionStore.Provider>
  );
};

AccordionLayout.propTypes = {
  children: PropTypes.any,
  toggle: PropTypes.bool,
};

export default AccordionLayout;
