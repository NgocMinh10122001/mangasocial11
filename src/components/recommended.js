import React from "react";
import CardManga from "./cardManga";
import useFetch from "../hooks/useFetch";
import { useSelector } from "react-redux";

const Recommended = () => {
  const recommendedComics = useFetch(2);

  const firstFiveItem = recommendedComics.slice(0, 20);
  return (
    <div className="grid max-[435px]:grid-cols-3 md:grid-cols-7 2xl:grid-cols-10  gap-[20px] px-[60px] max-[435px]:px-4 max-[435px]:gap-4 max-[435px]:pb-4 pb-[60px]">
      {firstFiveItem.map((item, index) => (
        <CardManga
          key={index}
          poster={item?.image_poster_link_goc}
          title={item?.title_manga}
          chapter={item?.chapter_new}
          rate={item?.rate}
          update={item.time_release}
          path_segment={item?.path_segment_manga}
          chapterLink={item.url_chapter}
        />
      ))}
    </div>
  );
};

export default Recommended;
