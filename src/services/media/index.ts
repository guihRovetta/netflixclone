import {Item} from '@internal/server/mirage-js';
import {axiosInstance} from '@internal/config/axios';

const groupBy = (
  array: any[],
  key: string,
): Record<keyof Omit<Item, 'genres'>, Item[]> =>
  array?.reduce((result, currentItem) => {
    (result[currentItem[key]] = result[currentItem[key]] || []).push(
      currentItem,
    );

    return result;
  }, {});

const formatData = (array: ReturnType<typeof groupBy>) =>
  Object.entries(array)?.map(([key, value]) => ({
    title: key as keyof Item | string,
    data: value as Item[],
  }));

export const getWhatsNew = async ({
  nextPage = 1,
}: {
  nextPage: number;
}): Promise<{data: ReturnType<typeof formatData>; nextPage: number}> => {
  const {data} = await axiosInstance.get<{items: Item[]}>('/whats-new');

  const soon = data?.items?.filter(item => item?.group === 'soon');
  const trending = data?.items?.filter(item => item?.group === 'trending');
  const top10TvShows = data?.items?.filter(
    item => item?.group === 'top10TvShows',
  );
  const top10Movies = data?.items?.filter(
    item => item?.group === 'top10Movies',
  );

  return {
    data: [
      ...formatData(groupBy(soon, 'releaseDate')),
      {title: '', data: trending},
      {title: '', data: top10TvShows},
      {title: '', data: top10Movies},
    ],
    nextPage: nextPage + 1,
  };
};
