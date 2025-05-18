import { request_get_sumlrl } from '@/app/api/requests';
import {  useQuery } from '@tanstack/react-query';

export const useGetSumLrl = () => {
const { status,data,error,isFetching } = useQuery({
  queryKey: ['sum-lrl'],
  queryFn: () => request_get_sumlrl(),
});
return { status,data,error,isFetching};
};