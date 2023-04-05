import React, { createContext, useState } from 'react';
import PropTypes from 'prop-types';

export const AccordionItemsStore = createContext(null);
const AccordionItem = ({
  children,
  index,
  defaultClassName = '',
  openClassName = '',
  closeClaseName = '',
}) => {
  const [isOpen, setOpen] = useState(false);

  return (
    <AccordionItemsStore.Provider value={{ isOpen, setOpen, index }}>
      <div
        className={`${defaultClassName} ${
          isOpen ? openClassName : closeClaseName
        }`}
      >
        {children}
      </div>
    </AccordionItemsStore.Provider>
  );
};

AccordionItem.propTypes = {
  defaultClassName: PropTypes.string,
  openClassName: PropTypes.string,
  closeClaseName: PropTypes.string,
};

export default AccordionItem;
