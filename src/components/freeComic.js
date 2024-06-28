import React from "react";
import CardManga from "./cardManga";
import useFetch from "../hooks/useFetch";

const FreeComic = () => {
  const recommendedComics = useFetch(3);

  const firstFiveItem = recommendedComics.slice(0, 20);
  const extractNovelId = (url) => {
    const parts = url.split("/");
    return parts[parts.length - 1];
  };
  return (
    <div className="grid max-[435px]:grid-cols-3 md:grid-cols-7 2xl:grid-cols-10  gap-[20px] px-[60px] max-[435px]:px-4 max-[435px]:gap-4 max-[435px]:pb-4 pb-[60px]">
      {firstFiveItem.map((item, index) => (
        <CardManga
          key={index}
          poster={item?.image_poster_link_goc}
          title={item?.title_manga}
          rate={item?.rate}
          update={item.time_release}
          chapterLink={item.url_chapter}
          path_segment={extractNovelId(item.url_manga)}
        />
      ))}
    </div>
  );
};

export default FreeComic;
