import {useQuery} from '@tanstack/react-query';

import {getWhatsNew} from '@internal/services/media';

const mediaKeys = {
  'whats-new': ['whats-new'],
};

export const useGetWhatsNew = () => {
  return useQuery(mediaKeys['whats-new'], getWhatsNew);
};
