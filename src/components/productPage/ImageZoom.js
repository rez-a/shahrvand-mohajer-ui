import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import ReactImageMagnify from 'react-image-magnify';

const ImageZoom = ({ image, Name }) => {
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
          alt: { Name },
          isFluidWidth: true,
          src: image,
        },
        largeImage: {
          src: image,
          width: 400,
          height: 500,
        },
      }}
    />
  );
};

ImageZoom.propTypes = {
  image: PropTypes.string,
};

export default ImageZoom;
