import React from 'react';
import TitleIcon from 'components/shared/TitleIcon';
import 'react-range-slider-input/dist/style.css';
import { SUBCATEGORIES } from 'services/endPoints';
import { fetcher } from 'services/swr/fetcher';
import useSWR from 'swr';
import LoaderCategoryCard from 'components/CategoryCard/LoaderCategoryCard';
import BannerItem from 'components/shared/BannerItem';
import Banner from 'components/home/Banner';
import SubCategoryCard from 'components/CategoryCard/SubCategoryCard';
import { useParams } from 'react-router-dom';
import ProductRelated from 'components/productPage/ProductRelated';
import Loading from 'components/shared/Loading';

const SubCategories = (props) => {
  const { mainErpCode } = useParams();

  const { data: subCategories, loading } = useSWR(
    `${SUBCATEGORIES}/${mainErpCode}`,
    fetcher
  );
  return (
    <>
      <main>
        <div>
          <h2 className="flex items-center mb-4 mx-4">
            <TitleIcon />
            <span className="mr-1 text-zinc-500 font-bold">
              زیر مجموعه ها
            </span>
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mx-4">
            {!!subCategories?.data && !loading ? (
              !!subCategories?.data.length ? (
                subCategories?.data?.map((subCategory) => (
                  <SubCategoryCard
                    {...subCategory}
                    mainErpCode={mainErpCode}
                  />
                ))
              ) : (
                <div className="bg-rose-50 text-rose-500 p-2 rounded  col-span-1 sm:col-span-2 lg:col-span-3 xl:col-span-4">
                  در این فروشگاه هیچ زیر مجموعه ای وجود ندارد
                </div>
              )
            ) : (
              [...Array(12)].map((_, index) => (
                <LoaderCategoryCard key={index} />
              ))
            )}
          </div>
          <Banner className="grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            <BannerItem sectionNum="SECTION6" />
            <BannerItem sectionNum="SECTION7" />
            <BannerItem
              className="sm:col-span-2 lg:col-span-1"
              sectionNum="SECTION8"
            />
          </Banner>
          <ProductRelated
            title="سایر محصولات فروشگاه"
            mainCategory={mainErpCode}
          />
        </div>
      </main>
    </>
  );
};

SubCategories.propTypes = {};

export default SubCategories;
