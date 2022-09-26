import {useInfiniteQuery} from '@tanstack/react-query';

import {getWhatsNew} from '@internal/services/media';

const mediaKeys = {
  'whats-new': ['whats-new'],
};

export const useGetWhatsNew = ({
  nextPage,
}: Parameters<typeof getWhatsNew>[0]) => {
  return useInfiniteQuery(
    mediaKeys['whats-new'],
    () => getWhatsNew({nextPage}),
    {
      getNextPageParam: lastPage => lastPage?.nextPage,
    },
  );
};
