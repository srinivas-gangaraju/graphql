import { useQuery, gql } from "@apollo/client";
const GET_BIDS = gql`
query bids {
  bidByDiscounts(orderBy:id, orderDirection:asc){
    id
    amount
  }
}
`;
export const useBids = () => {
  const { error, loading, data } = useQuery(GET_BIDS);

  return {
    error,
    data,
    loading,
  };
};
