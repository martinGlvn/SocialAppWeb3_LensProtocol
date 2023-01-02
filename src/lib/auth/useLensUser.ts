import { useQuery } from "@tanstack/react-query";
import { useAddress } from "@thirdweb-dev/react";
import { readAccessToken } from "./helpers";
import { useDefaultProfileQuery } from "../../graphql/generated";

export default function useLensUser() {
  
  const address = useAddress();

  const localStorageQuery = useQuery(
    ["lens-user", address],
    () => readAccessToken()
  );

  const profileQuery = useDefaultProfileQuery(
    {
      request: {
        ethereumAddress: address,
      },
    },
    {
      enabled: !!address,
    }
  );

  console.log(profileQuery.data?.defaultProfile);

  return {
    isSignedInQuery: localStorageQuery,
    profileQuery: profileQuery,
  };
  
}