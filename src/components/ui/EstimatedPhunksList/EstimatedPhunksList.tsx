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
      <>
        <p className="mt-8 max-w-xl w-full text-center">
          You need a Phunk. Buy from the following links for earning and
          redeeming earned{" "}
          <span className="text-shifter font-semibold">$PHUNKY</span>.
        </p>
        <div className="flex items-center mt-8">
          <a
            className="mr-6 w-8 h-8"
            href="https://nftx.io/vault/0xb39185e33e8c28e0bb3dbbce24da5dea6379ae91/buy/"
            target="_blank"
            rel="noreferrer"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1400 1400">
              <defs>
                <linearGradient
                  id="a"
                  x1="958.46"
                  y1="277.79"
                  x2="460.73"
                  y2="775.52"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset=".09" stopColor="#ff6d41" />
                  <stop offset=".5" stopColor="#fa297f" />
                  <stop offset="1" stopColor="#fa297f" />
                </linearGradient>
                <linearGradient
                  id="b"
                  x1="820.59"
                  y1="147.54"
                  x2="320.81"
                  y2="647.31"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset="0" stopColor="#652cb4" />
                  <stop offset=".07" stopColor="#652cb4" stopOpacity=".82" />
                  <stop offset=".19" stopColor="#652cb4" stopOpacity=".53" />
                  <stop offset=".3" stopColor="#652cb4" stopOpacity=".3" />
                  <stop offset=".4" stopColor="#652cb4" stopOpacity=".14" />
                  <stop offset=".49" stopColor="#652cb4" stopOpacity=".04" />
                  <stop offset=".55" stopColor="#652cb4" stopOpacity="0" />
                </linearGradient>
              </defs>
              <path
                fill="url(#a)"
                d="M700 0L163.75 536.25 700 1050.04l536.25-513.79L700 0z"
              />
              <path
                d="M430.13 992.57c11.81-15.81 23-30.82 36.4-45.41-161.17 38.84-272.16 120.18-272.16 214.32 0 3.51.19 7 .49 10.46 15.81-6 32.49-13.18 50.21-21.89 106.46-52.3 148.22-108.18 185.06-157.48zM598 1165.6c32.23-43.13 60.06-80.37 138.73-119s125.17-37.91 179-37.08c36.06.57 74.95 1.16 122.39-9-57.85-31.08-132.23-54.59-216.3-67.2L700 1050l-85.15-81.58c-60.68 40.86-91.77 82.41-120 120.12-32.23 43.13-60.06 80.38-138.73 119-55.18 27.1-94.52 34.83-131.68 36.74 29.31 38.87 78.66 73 141.86 99.24 14.72-5.71 30.2-12.47 46.55-20.5C519.37 1270.78 561.13 1214.9 598 1165.6zm487.56-111.71c-61.54-1-131.28-2.07-237.75 50.24s-148.23 108.18-185.07 157.49c-32.23 43.12-60.06 80.37-138.74 119-3.56 1.75-7 3.4-10.48 5A945.94 945.94 0 00679.8 1400q18.44 0 36.51-.67c19.69-20.84 35-41.28 49.5-60.69 32.22-43.13 60.06-80.38 138.73-119s125.18-37.9 179-37.07c24.78.39 50.9.79 80.21-2.27a120.24 120.24 0 001.49-18.79c0-38.63-18.71-75.1-51.88-107.37-9.18.04-18.36-.14-27.8-.25zM874.43 1380c127.17-27.38 225.86-80.77 268.22-146.47-36.37 6.64-77.75 19.39-127 43.6C947 1310.88 905.3 1346.07 874.43 1380z"
                fill="#fff"
              />
              <path
                opacity=".5"
                fill="url(#b)"
                d="M700 536.25H163.75L700 0v536.25z"
              />
            </svg>
          </a>
          <a
            className="mr-6 w-8 h-8"
            href="https://rarible.com/collection/0xf07468ead8cf26c752c676e43c814fee9c8cf402/items"
            target="_blank"
            rel="noreferrer"
          >
            <svg
              width="40"
              height="40"
              viewBox="0 0 40 40"
              className="w-8 h-8"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect width="40" height="40" rx="8" fill="#FEDA03"></rect>
              <path
                d="M27.6007 19.8536C28.8607 19.5262 29.9817 18.5838 29.9817 16.6889C29.9817 13.5342 27.3031 12.8 23.8706 12.8H10.2V27.0064H15.9539V22.185H22.7793C23.8309 22.185 24.446 22.6016 24.446 23.6334V27.0064H30.2V23.4548C30.2 21.5203 29.1087 20.3 27.6007 19.8536ZM22.8785 18.3556H15.9539V16.9667H22.8785C23.6325 16.9667 24.0888 17.0659 24.0888 17.6612C24.0888 18.2564 23.6325 18.3556 22.8785 18.3556Z"
                fill="black"
              ></path>
            </svg>
          </a>
          <a
            className="mr-6 w-8 h-8"
            href="https://notlarvalabs.com/"
            target="_blank"
            rel="noreferrer"
          >
            <svg
              className="max-w-full max-h-full"
              width="298"
              height="189"
              preserveAspectRatio="xMidYMid meet"
              viewBox="0 0 298 189"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                <polygon
                  id="Rectangle"
                  fill="#ED1D24"
                  points="298 139 210 139 210 189 298 189"
                ></polygon>
                <polygon
                  id="Rectangle-Copy"
                  fill="#81C342"
                  points="140 139 0 139 0 189 140 189"
                ></polygon>
                <polygon
                  id="Rectangle-Copy-2"
                  fill="#F99D1C"
                  points="140 0 90 0 90 129 140 129"
                ></polygon>
                <polygon
                  id="Rectangle-Copy-3"
                  fill="#0284CA"
                  points="200 0 150 0 150 189 200 189"
                ></polygon>
              </g>
            </svg>
          </a>
          <a
            className="w-8 h-8"
            href="https://looksrare.org/collections/0xf07468eAd8cf26c752C676E43C814FEe9c8CF402#items"
            target="_blank"
            rel="noreferrer"
          >
            <svg
              width="96"
              height="96"
              viewBox="0 0 96 96"
              className="w-8 h-8"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="48" cy="48" r="48" fill="black" />
              <path
                d="M30.4342 34.9106C40.1355 25.2642 55.8644 25.2642 65.5658 34.9106L73.9459 43.2433L65.5658 51.576C55.8645 61.2225 40.1355 61.2225 30.4342 51.576L22.0541 43.2433L30.4342 34.9106Z"
                fill="black"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M16 43.2569L35.027 24.2168H60.9729L79.9999 43.2569L47.9999 75.2437L16 43.2569ZM62.7026 36.3245C54.6181 28.2046 41.3817 28.2046 33.2972 36.3246L26.3783 43.2436L33.2972 50.1625C41.3817 58.2824 54.6181 58.2824 62.7026 50.1625L69.6215 43.2436L62.7026 36.3245Z"
                fill="#0CE466"
              />
              <path
                d="M47.9999 49.2975C44.6577 49.2975 41.9459 46.5884 41.9459 43.2435C41.9459 39.8986 44.6577 37.1895 47.9999 37.1895C51.3421 37.1895 54.054 39.8986 54.054 43.2435C54.054 46.5884 51.3421 49.2975 47.9999 49.2975Z"
                fill="black"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M38.0541 43.2428C38.0541 48.738 42.5093 53.1887 48 53.1887C53.4907 53.1887 57.9459 48.738 57.9459 43.2428C57.9459 37.7476 53.4907 33.2969 48 33.2969C42.5093 33.2969 38.0541 37.7476 38.0541 43.2428ZM43.6757 43.2428C43.6757 45.632 45.6127 47.5671 48 47.5671C50.3872 47.5671 52.3243 45.632 52.3243 43.2428C52.3243 40.8536 50.3872 38.9185 48 38.9185C45.6127 38.9185 43.6757 40.8536 43.6757 43.2428Z"
                fill="white"
              />
            </svg>
          </a>
        </div>
      </>
    )
  ) : (
    <p className="mt-8 max-w-xl w-full text-center">
      Connect your wallet and check for all the claimable Phunks.
    </p>
  );
};

export default EstimatedPhunksList;
