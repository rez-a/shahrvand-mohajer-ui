import React from 'react';
import PropTypes from 'prop-types';
import { BANNERS } from 'services/endPoints';
import { fetcher } from 'services/swr/fetcher';
import useSWR from 'swr';

const BannerItem = ({ sectionNum }) => {
  const { data: banners, isLoading } = useSWR(BANNERS, fetcher);
  const banner = banners?.find(
    (banner) => banner.Status === sectionNum
  );
  return (
    <div className="rounded-lg overflow-hidden max-h-44">
      {!!banner && <img src={banner.Image} alt="banner" />}
    </div>
  );
};

BannerItem.propTypes = {
  sectionNum: PropTypes.string,
};

export default BannerItem;
