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
    title: key as keyof Item,
    data: value as Item[],
  }));

export const getWhatsNew = async ({
  nextPage = 1,
}: {
  nextPage: number;
}): Promise<{data: ReturnType<typeof formatData>; nextPage: number}> => {
  const {data} = await axiosInstance.get<{items: Item[]}>('/whats-new', {
    params: {nextPage},
  });

  return {
    data: formatData(groupBy(data?.items, 'releaseDate')),
    nextPage: nextPage + 1,
  };
};
