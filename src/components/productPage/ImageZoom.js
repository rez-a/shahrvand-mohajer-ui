import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import ReactImageMagnify from 'react-image-magnify';
import product1 from 'assets/images/products/products1.jpg';

const ImageZoom = () => {
  return (
    <ReactImageMagnify
      enlargedImageContainerStyle={{
        left: 0,
        right: '100%',
        marginLeft: 0,
        marginRight: '10px',
        zIndex: '10',
        backgroundColor: '#fff',
      }}
      {...{
        smallImage: {
          alt: 'Wristwatch by Ted Baker London',
          isFluidWidth: true,
          src: product1,
        },
        largeImage: {
          src: product1,
          width: 400,
          height: 500,
        },
      }}
    />
  );
};

ImageZoom.propTypes = {};

export default ImageZoom;
