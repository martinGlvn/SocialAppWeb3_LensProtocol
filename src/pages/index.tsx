import FeedPost from "../components/FeedPost";
import { PublicationMainFocus, PublicationSortCriteria, useExplorePublicationsQuery } from "../graphql/generated";
import styles from "../styles/Home.module.css";

export default function Home() {

  const { isLoading, error, data } = useExplorePublicationsQuery(
    {
      request: {
        sortCriteria: PublicationSortCriteria.Latest,
      },
    },
    {
      refetchOnWindowFocus: false,
      refetchOnReconnect: false,
    }
  );

  console.log(data);

  if (error) {
    return <div className={styles.container}>Error...</div>;
  }

  if (isLoading) {
    return <div className={styles.container}>Loading...</div>;
  }

  return (
    <div className={styles.container}>
      <div className={styles.postsContainer}>
        {data?.explorePublications.items.map((publication) => (
          <FeedPost publication={publication} key={publication.id} />
        ))}
      </div>
    </div>
  );
}