import Banner from 'components/home/Banner';
import ShowCase from 'components/home/showcase/ShowCase';
import React from 'react';
import GridabledProducts from 'components/home/GridabledProducts';
import VipSlider from 'components/home/VipSlider';
import BannerItem from 'components/shared/BannerItem';
import Vendors from 'components/home/vendorsSection/Vendors';
import PopularBrands from 'components/home/PopularBrands';
import SlideProduct from 'components/shared/SlideProduct';

const Home = () => {
  return (
    <main className="2xl:container">
      <ShowCase />
      <Vendors />
      <VipSlider />
      <Banner className="grid-cols-2 max-h-96 mx-4">
        <BannerItem sectionNum="SECTION4" />
        <BannerItem sectionNum="SECTION5" />
      </Banner>
      <GridabledProducts title="نوشیدنی" section="SLIDER7" />
      <Banner className="grid-cols-3 max-h-96 mx-4">
        <BannerItem sectionNum="SECTION6" />
        <BannerItem sectionNum="SECTION7" />
        <BannerItem sectionNum="SECTION8" />
      </Banner>
      <SlideProduct
        title="فرآورده های منجمدی"
        section="SLIDER5"
        className="mx-4"
      />
      <Banner className="grid-cols-4 max-h-96 mx-4">
        <BannerItem sectionNum="SECTION2" />
        <BannerItem sectionNum="SECTION3" />
        <BannerItem sectionNum="SECTION4" />
        <BannerItem sectionNum="SECTION9" />
      </Banner>
      <GridabledProducts title="جدید ترین ها" section="SLIDER2" />
      <Banner className="grid-cols-1 max-h-96 mx-4">
        <BannerItem sectionNum="SECTION1" />
      </Banner>
      <SlideProduct
        title="لبنیات"
        section="SLIDER3"
        className="mx-4"
      />
      <Banner className="grid-cols-2 max-h-96 mx-4">
        <BannerItem sectionNum="SECTION2" />
        <BannerItem sectionNum="SECTION3" />
      </Banner>
      <GridabledProducts title="خرید عمده" section="SLIDER4" />
      <Banner className="grid-cols-3 max-h-96 mx-4">
        <BannerItem sectionNum="SECTION4" />
        <BannerItem sectionNum="SECTION5" />
        <BannerItem sectionNum="SECTION6" />
      </Banner>
      <SlideProduct
        title="غذاهای آماده"
        section="SLIDER8"
        className="mx-4"
      />
      <Banner className="grid-cols-4 max-h-96 mx-4">
        <BannerItem sectionNum="SECTION7" />
        <BannerItem sectionNum="SECTION8" />
        <BannerItem sectionNum="SECTION9" />
        <BannerItem sectionNum="SECTION2" />
      </Banner>
      <GridabledProducts title="پروتئینی" section="SLIDER9" />
      <Banner className="grid-cols-1 max-h-96 mx-4">
        <BannerItem sectionNum="SECTION1" />
      </Banner>
      <SlideProduct
        title="کالاهای پرتخفیف"
        section="SLIDER6"
        className="mx-4"
      />
      <PopularBrands />
    </main>
  );
};

export default Home;
