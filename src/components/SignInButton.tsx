import { useAddress, useNetworkMismatch, useNetwork,ConnectWallet, ChainId, MediaRenderer} from '@thirdweb-dev/react';
import React from 'react'
import useLensUser from "../lib/auth/useLensUser";
import useLogin from "../lib/auth/useLogin";


type Props = {}

export default function SignInButton({}: Props) {
    const address = useAddress();
    const isOnWrongNetwork = useNetworkMismatch(); 
    const [, switchNetwork] = useNetwork(); 
    const { isSignedInQuery, profileQuery } = useLensUser();
    const { mutate: requestLogin } = useLogin();

    // 1-
      if (!address) {
        return <ConnectWallet/>;
      }

    // 2-
    if (isOnWrongNetwork) {
      return (
        <button onClick={() => switchNetwork?.(ChainId.Polygon)}>
          Switch Network
        </button>
      );
    }

    // 3-
    if (profileQuery.isLoading) {
      return <div>Loading...</div>;
    }

    // 4-
    if (!profileQuery.data?.defaultProfile) {
      return <div>No Lens Profile.</div>;
    }

    // 5
    if (profileQuery.data?.defaultProfile) {
      return (
        <div>
          <MediaRenderer
            // @ts-ignore
            src={profileQuery?.data?.defaultProfile?.picture?.original?.url || ""}
            alt={profileQuery.data.defaultProfile.name || ""}
            style={{
              width: 48,
              height: 48,
              borderRadius: "50%",
            }}
          />
        </div>
      );
    }


}
