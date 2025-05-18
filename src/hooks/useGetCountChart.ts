import { request_get_countChart } from '@/api/requests';
import {  useQuery } from '@tanstack/react-query';

export const useGetCountCharts = () => {
const { status,data,error,isFetching } = useQuery({
  queryKey: ['count-chart'],
  queryFn: () => request_get_countChart(),
});
return { status,data,error,isFetching};
};