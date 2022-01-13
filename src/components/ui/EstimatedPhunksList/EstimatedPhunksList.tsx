import React from "react";
import usePhunky from "../../../context/phunky";
import useMetaMask from "../../../hooks/useMetaMask";
import PhunkCard from "../PhunkCard";
import { TRANSACTION_URL } from "./../../../data/constants.json";

interface EstimatedPhunksListProps {}

const EstimatedPhunksList: React.FC<EstimatedPhunksListProps> = () => {
  const { isConnected } = useMetaMask();
  const {
    loadingEstimate,
    claimablePhunkies,
    claimTransationHash,
    totalPhunky,
  } = usePhunky();

  return isConnected ? (
    loadingEstimate ? (
      <p className="mt-8 max-w-xl w-full text-center">
        Fetching your Phunks ...
      </p>
    ) : claimablePhunkies.length > 0 ? (
      claimTransationHash !== "" ? (
        <div className="flex flex-col items-center mt-8 justify-center">
          <p>Claim requested successfully.</p>
          <a
            className="underline font-semibold underline-offset-4 mt-2"
            href={`${TRANSACTION_URL}${claimTransationHash}`}
            target="_blank"
            rel="noreferrer"
          >
            View Claim Transaction
          </a>
        </div>
      ) : (
        <table className="min-w-full divide-y divide-gray-200 mt-8">
          <thead>
            <tr>
              <th scope="col" className="px-6 py-3 text-center">
                Phunk
              </th>
              <th scope="col" className="px-6 py-3 text-center">
                Claimable $PHUNKY
              </th>
            </tr>
          </thead>
          <tbody>
            {claimablePhunkies.map((claimablePhunky) => (
              <tr key={claimablePhunky.phunkId}>
                <td className="px-6 py-3 text-center">
                  <PhunkCard tokenId={claimablePhunky.phunkId} />
                </td>
                <td className="px-6 py-3 text-center">
                  {claimablePhunky.claimablePhunkies.toFixed(4)}
                </td>
              </tr>
            ))}
          </tbody>
          <tfoot>
            <tr>
              <td className="px-6 py-3 text-center font-semibold">
                Total Claimable
              </td>
              <td className="px-6 py-3 text-center font-semibold">
                {totalPhunky.toFixed(4)} $PHUNKY
              </td>
            </tr>
          </tfoot>
        </table>
      )
    ) : (
      <p className="mt-8 max-w-xl w-full text-center">
        You need a Phunk. Buy from{" "}
        <a
          className="font-bold"
          href="https://www.Notlarvalabs.com"
          target="_blank"
          rel="noreferrer"
        >
          Notlarvalabs.com
        </a>{" "}
        or NFTX Vault for earning and redeeming earned{" "}
        <span className="text-shifter font-semibold">$PHUNKY</span>.
      </p>
    )
  ) : (
    <p className="mt-8 max-w-xl w-full text-center">
      Connect your wallet and check for all the claimable Phunks.
    </p>
  );
};

export default EstimatedPhunksList;
