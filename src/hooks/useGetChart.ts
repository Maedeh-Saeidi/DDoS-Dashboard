import { request_get_chart } from '@/app/api/requests';
import {  useQuery } from '@tanstack/react-query';

export const useGetChart = () => {
const { status,data,error,isFetching } = useQuery({
  queryKey: ['chart'],
  queryFn: () => request_get_chart(),
});
return { status,data,error,isFetching};
};