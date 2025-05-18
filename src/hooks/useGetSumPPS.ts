import { request_get_sumpps } from '@/app/api/requests';
import {  useQuery } from '@tanstack/react-query';

export const useGetSumPPS = () => {
const { status,data,error,isFetching } = useQuery({
  queryKey: ['sum-pps'],
  queryFn: () => request_get_sumpps(),
});
return { status,data,error,isFetching};
};