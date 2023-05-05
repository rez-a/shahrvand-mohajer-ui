import React from 'react';
import TitleIcon from 'components/shared/TitleIcon';
import 'react-range-slider-input/dist/style.css';
import { CATEGORIES } from 'services/endPoints';
import { fetcher } from 'services/swr/fetcher';
import useSWR from 'swr';
import CategoryCard from 'components/CategoryCard/CategoryCard';
import LoaderCategoryCard from 'components/CategoryCard/LoaderCategoryCard';
import BannerItem from 'components/shared/BannerItem';
import Banner from 'components/home/Banner';
import Vendors from 'components/home/vendorsSection/Vendors';
import useObserved from 'hooks/useObserved';

const Categories = (props) => {
  const { ref, view } = useObserved();
  const { data: categories, isLoading: categoriesLoading } = useSWR(
    view && CATEGORIES,
    fetcher
  );
  return (
    <main>
      <div>
        <h2 className="flex items-center mb-4 mx-4">
          <TitleIcon />
          <span className="mr-1 text-zinc-500 font-bold">
            دسته بندی ها
          </span>
        </h2>
        <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:lg:grid-cols-4 gap-4 mx-4"
          ref={ref}
        >
          {!!categories?.data
            ? categories?.data?.map((category) => (
                <CategoryCard {...category} />
              ))
            : [...Array(15)].map((_, index) => (
                <LoaderCategoryCard key={index} />
              ))}
        </div>
        <Banner className="grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          <BannerItem sectionNum="SECTION6" />
          <BannerItem sectionNum="SECTION7" />
          <BannerItem
            className="sm:col-span-2 lg:col-span-1"
            sectionNum="SECTION8"
          />
        </Banner>
        <Vendors />
      </div>
    </main>
  );
};

Categories.propTypes = {};

export default Categories;
