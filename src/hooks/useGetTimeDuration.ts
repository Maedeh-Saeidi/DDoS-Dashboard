import { request_get_timeduration } from '@/app/api/requests';
import {  useQuery } from '@tanstack/react-query';

export const useGetTimeDuration = () => {
const { status,data,error,isFetching } = useQuery({
  queryKey: ['time-duration'],
  queryFn: () => request_get_timeduration(),
});
return { status,data,error,isFetching};
};