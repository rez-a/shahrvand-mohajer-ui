import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import PropType from 'prop-types';
const ModalLayout = ({ isShow, setShow, children }) => {
  const handleCloseModal = (e) => {
    e.stopPropagation();
    if (e.target.id === 'modal') setShow();
  };
  // useEffect(() => {
  //   if (isShow) {
  //     const scrollbarWidth =
  //       window.innerWidth - document.documentElement.clientWidth;
  //     document.body.style.paddingRight = `${scrollbarWidth}px`;
  //     document.body.classList.add(
  //       'fixed',
  //       'inset-x-0',
  //       'overflow-hidden'
  //     );
  //   } else {
  //     document.body.style.paddingRight = null;
  //     document.body.classList.remove(
  //       'fixed',
  //       'inset-x-0',
  //       'overflow-hidden'
  //     );
  //   }
  // }, [isShow]);
  if (isShow) {
    return ReactDOM.createPortal(
      <div
        onClick={handleCloseModal}
        class="fixed flex items-center justify-center top-0 left-0 right-0 z-40 w-full  overflow-x-hidden overflow-y-auto inset-0 h-full bg-black/10 backdrop-blur-sm"
      >
        <div
          id="modal"
          class="relative w-full h-full z-50 flex justify-center items-center p-4"
        >
          {children}
        </div>
      </div>,
      document.getElementById('modal-root')
    );
  }
  return <></>;
};

ModalLayout.propType = {
  isShow: PropType.bool.isRequired,
  setShow: PropType.func.isRequired,
  children: PropType.element.isRequired,
};
export default ModalLayout;
