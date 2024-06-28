import React from "react";
import CardManga from "./cardManga";
import useFetch from "../hooks/useFetch";
import { useSelector } from "react-redux";

const Top15Comics = () => {
  const top15Comics = useFetch(4);

  const top15Item = top15Comics.slice(0, 15);
  return (
    <div className="grid max-[435px]:grid-cols-3 md:grid-cols-7 2xl:grid-cols-10  gap-[20px] px-[60px] max-[435px]:px-4 max-[435px]:gap-4 max-[435px]:pb-4 pb-[60px]">
      {top15Item.map((item, index) => (
        <CardManga
          key={index}
          poster={item?.image_poster_link_goc}
          title={item?.title_manga}
          rate={item?.rate}
          chapter={item?.chapter_new}
          update={item.time_release}
          path_segment={item?.path_segment_manga}
          chapterLink={item.url_chapter}
        />
      ))}
    </div>
  );
};

export default Top15Comics;
