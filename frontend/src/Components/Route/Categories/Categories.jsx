import React from "react";
import { useNavigate } from "react-router-dom";
import { categoriesData } from "../../../Static/data";
import styles from "../../../Styles/styles";

const Categories = () => {
  const navigate = useNavigate();

  return (
    <>
      <div
        className={`${styles.section} hidden sm:block text-xl font-medium text-rose-700 mt-[-15px]`}
      >
        <div className={`${styles.section}`} id="categories">
          <div className=" grid grid-cols-3 gap-[5px] md:grid-cols-3 md-gap-[10px] lg:grid-cols-6 lg:gap-[20px] xl:grid-cols-6 xl:gap-[30px]">
            {categoriesData &&
              categoriesData.map((i) => {
                const handleSubmit = (i) => {
                  navigate(`/products?category=${i.title}`);
                };
                return (
                  <div
                    className="w-[120px] h-[160px]  flex items-center justify-between cursor-pointer overflow-hidden flex-col "
                    key={i.id}
                    onClick={() => handleSubmit(i)}
                  >
                    <h5 className={`text-[14px] leading-[1.5]`}>{i.title}</h5>
                    <img
                      src={i.image_Url}
                      className="h-21 w-21 object-cover square-full mb-4"
                      alt=""
                    />
                  </div>
                );
              })}
          </div>
        </div>  
      </div>
    </>
  );
};

export default Categories;
