import { useGetCreationByIdQuery } from '@/redux/api/creationApi';

type CseGetCreationByIdArgs = {
  id: number;
  stop?: boolean;
};

export default function useGetCreationById({
  id,
  stop,
}: CseGetCreationByIdArgs) {
  const { data, error } = useGetCreationByIdQuery(id, {
    skip: stop,
    refetchOnMountOrArgChange: true,
  });

  return { creation: data, error };
}
