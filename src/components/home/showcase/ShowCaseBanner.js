import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import queryString from 'query-string';

const ShowCaseBanner = ({ banners, sectionNum }) => {
  const banner = banners.find(
    (banner) => banner.Status === sectionNum
  );
  return (
    <div className="rounded-xl overflow-hidden relative">
      <img src={banner.Image} alt="image-slider" />
      <Link
        to={`/products/${
          banner.LinkToMainGroup
        }?${queryString.stringify(
          {
            subcategory: [banner.LinkToSideGroup],
          },
          { arrayFormat: 'bracket' }
        )}`}
        className="absolute top-0 right-0 w-full h-full"
      />
    </div>
  );
};

ShowCaseBanner.propTypes = {
  banners: PropTypes.array,
  sectionNum: PropTypes.string,
};

export default ShowCaseBanner;
