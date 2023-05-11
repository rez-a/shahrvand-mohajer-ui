import React from 'react';
import PropTypes from 'prop-types';
import ShowcaseSlider from './ShowcaseSlider';
import ShowCaseBanner from './ShowCaseBanner';
import useSWR from 'swr';
import { fetcher } from 'services/swr/fetcher';
import { BANNERS, SLIDERS } from 'services/endPoints';
import useObserved from 'hooks/useObserved';

const ShowCase = () => {
  const { ref, view } = useObserved();

  const { data: sliders } = useSWR(view && SLIDERS, fetcher);
  const { data: banners } = useSWR(view && BANNERS, fetcher);

  return (
    <div
      className="grid grid-cols-3  gap-4 py-4 mx-4 2xl:mx-0  items-start"
      ref={ref}
    >
      <div className=" col-span-3 lg:col-span-2 rounded-xl overflow-hidden max-h-[31rem] h-full">
        {!!sliders?.data ? (
          <ShowcaseSlider sliders={sliders?.data} />
        ) : (
          <div className="loading-bg w-full h-[31rem]"></div>
        )}
      </div>
      <div className=" col-span-3 lg:col-span-1  lg:max-h-[31rem] h-full gap-4 hidden sm:grid sm:grid-cols-2 lg:grid-cols-1">
        {!!banners?.data ? (
          <>
            <ShowCaseBanner
              banners={banners?.data}
              sectionNum="SECTION2"
            />
            <ShowCaseBanner
              banners={banners?.data}
              sectionNum="SECTION3"
            />
          </>
        ) : (
          <>
            <div className="loading-bg w-full h-full rounded-lg"></div>
            <div className="loading-bg w-full h-full rounded-lg"></div>
          </>
        )}
      </div>
    </div>
  );
};

ShowCase.propTypes = {};

export default ShowCase;
