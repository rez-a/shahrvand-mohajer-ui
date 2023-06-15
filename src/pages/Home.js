import Banner from 'components/home/Banner';
import ShowCase from 'components/home/showcase/ShowCase';
import React, { useState } from 'react';
import GridabledProducts from 'components/home/GridabledProducts';
import VipSlider from 'components/home/VipSlider';
import BannerItem from 'components/shared/BannerItem';
import PopularBrands from 'components/home/PopularBrands';
import SlideProduct from 'components/shared/SlideProduct';
import Categories from 'components/home/categoriesSection/Categoris';
import Vendors from 'components/home/VendorsSection/Vendors';
import { INSTANT_MESSAGINGS } from 'services/endPoints';
import { fetcher } from 'services/swr/fetcher';
import useSWR from 'swr';
import InitAlert from 'components/InitAlert';
import { useContext } from 'react';
import { ObservedMessageContext } from 'contexts/ObservedMessageProvider';

const Home = () => {
  const { data: message } = useSWR(INSTANT_MESSAGINGS, fetcher);

  const { observed, setObserved } = useContext(
    ObservedMessageContext
  );

  return (
    <main className="2xl:container">
      {!!message && !observed && (
        <InitAlert setObserved={setObserved} message={message} />
      )}
      <ShowCase />
      <Vendors />
      <Categories />
      <VipSlider />
      <Banner className="grid-cols-1 sm:grid-cols-2 max-h-96">
        <BannerItem sectionNum="SECTION4" />
        <BannerItem sectionNum="SECTION5" />
      </Banner>
      <GridabledProducts
        link={true}
        title="نوشیدنی"
        section="SLIDER7"
      />
      <Banner className="grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        <BannerItem sectionNum="SECTION6" />
        <BannerItem sectionNum="SECTION7" />
        <BannerItem
          sectionNum="SECTION8"
          className="sm:col-span-2 lg:col-span-1"
        />
      </Banner>
      <SlideProduct
        title="فرآورده های منجمدی"
        section="SLIDER5"
        className="mx-4 2xl:mx-0"
        linkTo={true}
        isPagination={true}
        viewCount={10}
      />
      <Banner className="grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
        <BannerItem sectionNum="SECTION2" />
        <BannerItem sectionNum="SECTION3" />
        <BannerItem sectionNum="SECTION4" />
        <BannerItem sectionNum="SECTION9" />
      </Banner>
      <GridabledProducts
        link={true}
        title="جدید ترین ها"
        section="SLIDER2"
      />
      <Banner className="grid-cols-1 max-h-96 ">
        <BannerItem sectionNum="SECTION1" />
      </Banner>
      <SlideProduct
        title="لبنیات"
        section="SLIDER3"
        className="mx-4 2xl:mx-0"
        linkTo={true}
        isPagination={true}
        viewCount={10}
      />
      <Banner className="grid-cols-1 sm:grid-cols-2 max-h-96">
        <BannerItem sectionNum="SECTION2" />
        <BannerItem sectionNum="SECTION3" />
      </Banner>
      <GridabledProducts
        link={true}
        title="خرید عمده"
        section="SLIDER4"
      />
      <Banner className="grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        <BannerItem sectionNum="SECTION4" />
        <BannerItem sectionNum="SECTION5" />
        <BannerItem
          sectionNum="SECTION6"
          className="sm:col-span-2 lg:col-span-1"
        />
      </Banner>
      <SlideProduct
        title="غذاهای آماده"
        section="SLIDER8"
        className="mx-4 2xl:mx-0"
        linkTo={true}
        isPagination={true}
        viewCount={10}
      />
      <Banner className="grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
        <BannerItem sectionNum="SECTION7" />
        <BannerItem sectionNum="SECTION8" />
        <BannerItem sectionNum="SECTION9" />
        <BannerItem sectionNum="SECTION2" />
      </Banner>
      <GridabledProducts
        link={true}
        title="پروتئینی"
        section="SLIDER9"
      />
      <Banner className="grid-cols-1 max-h-96">
        <BannerItem sectionNum="SECTION1" />
      </Banner>
      <SlideProduct
        title="کالاهای پرتخفیف"
        section="SLIDER6"
        className="mx-4 2xl:mx-0"
      />
      <PopularBrands />
    </main>
  );
};

export default Home;
