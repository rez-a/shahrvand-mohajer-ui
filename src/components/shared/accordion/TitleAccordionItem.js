import React, { useContext, useEffect } from "react";
import { AccordionItemsStore } from "./AccordionItem";
import { AccordionStore } from "./AccordionLayout";
import PropTypes from "prop-types";

const TitleAccordionItem = ({
  children,
  defaultClassName = "",
  openClassName = "",
  closeClaseName = "",
}) => {
  const { collapsed, setCollapsed, toggle } = useContext(AccordionStore);
  const { isOpen, setOpen, index } = useContext(AccordionItemsStore);

  useEffect(() => {
    index === collapsed.key ? setOpen(!isOpen) : setOpen(false);
  }, [collapsed]);

  const collapseHandler = () => {
    toggle ? setCollapsed({ key: index }) : setOpen(!isOpen);
  };
  return (
    <div
      onClick={collapseHandler}
      className={`w-full cursor-pointer ${defaultClassName} ${
        isOpen ? openClassName : closeClaseName
      }`}
    >
      {children}
    </div>
  );
};

TitleAccordionItem.propTypes = {
  children: PropTypes.element.isRequired,
  defaultClassName: PropTypes.string,
  openClassName: PropTypes.string,
  closeClaseName: PropTypes.string,
};

export default TitleAccordionItem;
