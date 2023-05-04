import React from 'react';
import PropTypes from 'prop-types';
import { BANNERS } from 'services/endPoints';
import { fetcher } from 'services/swr/fetcher';
import useSWR from 'swr';
import LoaderBannerItem from './LoaderBannerItem';
import useObserved from 'hooks/useObserved';

const BannerItem = ({ sectionNum }) => {
  const { ref, view } = useObserved();

  const { data: banners } = useSWR(view && BANNERS, fetcher);
  const banner = banners?.data?.find(
    (banner) => banner.Status === sectionNum
  );

  return (
    <div className="rounded-lg overflow-hidden max-h-44" ref={ref}>
      {!!banners?.data ? (
        <img src={banner.Image} alt="banner" />
      ) : (
        <LoaderBannerItem />
      )}
    </div>
  );
};

BannerItem.propTypes = {
  sectionNum: PropTypes.string,
};

export default BannerItem;
