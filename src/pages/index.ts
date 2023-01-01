import { PublicationSortCriteria, useExplorePublicationsQuery } from "../graphql/generated";


export default function Home() {

  const {data, isLoading, error} = useExplorePublicationsQuery(
    {
      endpoint: "https://api.lens.dev",
      fetchParams: {
        headers : {
          "Content-Type": "application/json",
        },
      },
    },
    {
      request: {
      sortCriteria : PublicationSortCriteria.TopCollected,
      },
    }
  );

  console.log({
    data,
    isLoading,
    error
  });



  
}