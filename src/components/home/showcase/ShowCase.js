import React from 'react';
import PropTypes from 'prop-types';
import ShowcaseSlider from './ShowcaseSlider';
import ShowCaseBanner from './ShowCaseBanner';
import useSWR from 'swr';
import { fetcher } from 'services/swr/fetcher';
import { BANNERS, SLIDERS } from 'services/endPoints';

const ShowCase = () => {
  const { data: sliders, isLoading: loadSlide } = useSWR(
    SLIDERS,
    fetcher
  );
  const { data: banners, isLoading: loadBanner } = useSWR(
    BANNERS,
    fetcher
  );

  return (
    <div className="grid grid-cols-3  gap-4 py-4 mx-4 my-8">
      <div className="col-span-2 rounded-xl overflow-hidden max-h-[31rem] h-full">
        {sliders?.length > 0 && <ShowcaseSlider sliders={sliders} />}
      </div>
      {banners?.length > 3 && (
        <div className="max-h-[31rem] gap-4 flex flex-col h-full">
          <ShowCaseBanner banners={banners} sectionNum="SECTION2" />
          <ShowCaseBanner banners={banners} sectionNum="SECTION3" />
        </div>
      )}
    </div>
  );
};

ShowCase.propTypes = {};

export default ShowCase;
