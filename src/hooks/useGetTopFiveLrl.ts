import { request_get_topfivelrl } from '@/app/api/requests';
import {  useQuery } from '@tanstack/react-query';

export const useGetTopFiveLrl = () => {
const { status,data,error,isFetching } = useQuery({
  queryKey: ['top-five-lrl'],
  queryFn: () => request_get_topfivelrl(),
});
return { status,data,error,isFetching};
};