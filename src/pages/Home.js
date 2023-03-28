import Banner from 'components/home/Banner';
import BestSelling from 'components/home/BestSelling';
import ShowCase from 'components/home/showcase/ShowCase';
import React from 'react';
import OurSuggestion from 'components/home/OurSuggestion';
import AmazingOffer from 'components/home/AmazingOffer';
import BannerItem from 'components/shared/BannerItem';
import CategoriesSection from 'components/home/categoriesSection/CategoriesSection';

import banner1 from 'assets/images/banners/banner1.jpg';
import banner2 from 'assets/images/banners/banner2.jpg';
import banner3 from 'assets/images/banners/banner3.jpg';
import banner4 from 'assets/images/banners/banner4.jpg';
import banner5 from 'assets/images/banners/banner5.jpg';
import banner6 from 'assets/images/banners/banner6.jpg';
import banner7 from 'assets/images/banners/banner7.jpg';
import BiggestDiscount from 'components/home/BiggestDiscount';
import PopularBrands from 'components/home/PopularBrands';
import slugConverter from 'utilities/slugConverter';

const Home = () => {
  return (
    <main className="2xl:container">
      <ShowCase />
      <BestSelling />
      <Banner className="grid-cols-2">
        <BannerItem>
          <img src={banner1} alt="banner" />
        </BannerItem>
        <BannerItem>
          <img src={banner2} alt="banner" />
        </BannerItem>
      </Banner>
      <AmazingOffer />
      <Banner className="grid-cols-4">
        <BannerItem>
          <img src={banner3} alt="banner" />
        </BannerItem>
        <BannerItem>
          <img src={banner4} alt="banner" />
        </BannerItem>
        <BannerItem>
          <img src={banner5} alt="banner" />
        </BannerItem>
        <BannerItem>
          <img src={banner6} alt="banner" />
        </BannerItem>
      </Banner>
      <OurSuggestion />
      <Banner>
        <BannerItem>
          <img src={banner7} alt="banner" />
        </BannerItem>
      </Banner>
      <CategoriesSection />
      <BiggestDiscount />
      <PopularBrands />
    </main>
  );
};

export default Home;
