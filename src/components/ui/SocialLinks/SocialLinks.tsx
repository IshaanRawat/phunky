import React, { useState } from "react";
import Modal from "./../Modal";

interface SocialLinksProps {}

const SocialLinks: React.FC<SocialLinksProps> = () => {
  const [discordLinksModalVisible, setDiscordLinksModalVisible] =
    useState<boolean>(false);

  const [twitterLinksModalVisible, setTwitterLinksModalVisible] =
    useState<boolean>(false);

  const toggleDiscordLinksModal = () => {
    setDiscordLinksModalVisible((s) => !s);
  };

  const toggleTwitterLinksModal = () => {
    setTwitterLinksModalVisible((s) => !s);
  };

  return (
    <>
      <div className="flex items-center mt-10">
        <button className="mr-6 w-8 h-8" onClick={toggleTwitterLinksModal}>
          <svg
            width="32"
            height="32"
            viewBox="0 0 32 32"
            className="max-w-full"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M29.3333 7.73333C28.3311 8.16813 27.2712 8.45555 26.1867 8.58667C27.3309 7.9031 28.1884 6.82771 28.6 5.56C27.5247 6.20009 26.3477 6.65106 25.12 6.89333C24.2994 6.00343 23.2066 5.41106 22.0131 5.20914C20.8195 5.00721 19.5927 5.20715 18.5251 5.77759C17.4574 6.34803 16.6092 7.25671 16.1137 8.36112C15.6181 9.46552 15.5031 10.7032 15.7867 11.88C13.6126 11.77 11.4859 11.2039 9.54487 10.2185C7.60383 9.23303 5.8918 7.85026 4.52 6.16C4.03885 7.00023 3.78603 7.95176 3.78667 8.92C3.78496 9.81918 4.00562 10.7048 4.42901 11.4981C4.85239 12.2914 5.46536 12.9676 6.21333 13.4667C5.34397 13.443 4.49318 13.2097 3.73333 12.7867V12.8533C3.73985 14.1132 4.18133 15.3321 4.98309 16.304C5.78485 17.2758 6.89768 17.9409 8.13333 18.1867C7.65768 18.3314 7.16383 18.4077 6.66667 18.4133C6.32252 18.4093 5.97923 18.3781 5.64 18.32C5.99188 19.4038 6.67283 20.3509 7.5881 21.0295C8.50337 21.7082 9.60744 22.0847 10.7467 22.1067C8.82294 23.6204 6.44785 24.4465 4 24.4533C3.55431 24.4548 3.10898 24.4281 2.66667 24.3733C5.16591 25.987 8.07842 26.8436 11.0533 26.84C13.1063 26.8613 15.1428 26.4734 17.0442 25.6988C18.9455 24.9242 20.6734 23.7785 22.1269 22.3287C23.5805 20.8788 24.7306 19.1539 25.5101 17.2545C26.2895 15.3552 26.6827 13.3196 26.6667 11.2667C26.6667 11.04 26.6667 10.8 26.6667 10.56C27.7129 9.77975 28.6153 8.82323 29.3333 7.73333V7.73333Z"
              fill="#62BDFF"
            />
          </svg>
        </button>

        <button className="mr-6 w-8 h-8" onClick={toggleDiscordLinksModal}>
          <svg
            width="32"
            height="32"
            className="max-w-full"
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M13.5177 14.1731H13.5176C13.1453 14.1731 12.7882 14.321 12.525 14.5843C12.2617 14.8476 12.1138 15.2047 12.1138 15.577C12.1138 15.9493 12.2617 16.3063 12.525 16.5696C12.7883 16.8329 13.1453 16.9808 13.5177 16.9808C13.89 16.9808 14.247 16.8329 14.5103 16.5696C14.7736 16.3063 14.9215 15.9493 14.9215 15.577C14.9215 15.2047 14.7736 14.8476 14.5104 14.5843C14.2471 14.321 13.8901 14.1731 13.5177 14.1731ZM18.5234 14.1731C18.2169 14.1471 17.9096 14.2143 17.6419 14.3659C17.3741 14.5174 17.1584 14.7463 17.0228 15.0225C16.8873 15.2987 16.8384 15.6094 16.8824 15.9139C16.9264 16.2184 17.0613 16.5026 17.2695 16.7291C17.4777 16.9557 17.7494 17.1141 18.0491 17.1836C18.3488 17.2532 18.6625 17.2306 18.9492 17.1189C19.2359 17.0072 19.4821 16.8115 19.6557 16.5575C19.8293 16.3035 19.9222 16.003 19.9222 15.6953C19.9304 15.5035 19.9007 15.3119 19.8348 15.1316C19.769 14.9513 19.6682 14.7857 19.5383 14.6443C19.4084 14.503 19.2519 14.3886 19.0778 14.3077C18.9036 14.2269 18.7153 14.1811 18.5234 14.1731ZM25.1885 2.66683H6.81152C6.4414 2.6677 6.07508 2.74147 5.73348 2.88393C5.39188 3.02638 5.08168 3.23473 4.8206 3.49708C4.55952 3.75942 4.35268 4.07063 4.21188 4.41292C4.07108 4.75521 3.99908 5.12188 4 5.492V24.0337C3.9991 24.4038 4.07111 24.7705 4.21191 25.1127C4.35272 25.455 4.55956 25.7662 4.82064 26.0286C5.08171 26.2909 5.39191 26.4992 5.7335 26.6417C6.0751 26.7841 6.44141 26.8579 6.81152 26.8588H22.3634L21.6366 24.3216L23.3919 25.9536L25.0514 27.4896L28 30.0954V5.492C28.0009 5.12188 27.9289 4.75521 27.7881 4.41292C27.6473 4.07063 27.4405 3.75942 27.1794 3.49708C26.9183 3.23473 26.6081 3.02638 26.2665 2.88393C25.9249 2.74147 25.5586 2.6677 25.1885 2.66683ZM19.8949 20.5776V20.5777C19.8949 20.5777 19.401 19.988 18.9896 19.4668C19.9837 19.2327 20.863 18.6547 21.472 17.8348C20.9786 18.1633 20.4495 18.4347 19.8949 18.6439C19.2569 18.9162 18.5896 19.1141 17.9063 19.2336C16.7317 19.4499 15.5272 19.4452 14.3543 19.22C13.6657 19.0852 12.9909 18.8878 12.3382 18.6303C11.9942 18.498 11.6597 18.3422 11.3371 18.164C11.2959 18.1365 11.2549 18.1228 11.2137 18.0954C11.1931 18.0851 11.1745 18.0712 11.1589 18.0543C10.9121 17.9172 10.7747 17.8211 10.7747 17.8211C11.3617 18.6237 12.2106 19.1961 13.1748 19.4394C12.7635 19.9606 12.256 20.5776 12.256 20.5776C11.4414 20.5996 10.6338 20.4209 9.90444 20.0574C9.17506 19.6939 8.54621 19.1567 8.07324 18.4931C8.11777 15.7128 8.793 12.9789 10.048 10.4976C11.1525 9.63021 12.499 9.12705 13.9017 9.05764L14.0387 9.22228C12.7191 9.54881 11.4876 10.1622 10.432 11.0188C10.432 11.0188 10.7338 10.8543 11.2411 10.6211C12.2269 10.1711 13.2777 9.8795 14.3544 9.75716C14.4312 9.74118 14.5093 9.73198 14.5877 9.72965C15.5066 9.60994 16.4367 9.60076 17.3578 9.70231C18.8065 9.86772 20.2089 10.3149 21.4858 11.0188C20.4837 10.2031 19.3198 9.60942 18.0712 9.27709L18.2631 9.05777C19.6658 9.12713 21.0123 9.63029 22.1167 10.4978C23.3719 12.979 24.0471 15.7129 24.0917 18.4931C23.6149 19.1562 22.9833 19.6927 22.2518 20.056C21.5204 20.4192 20.7113 20.5983 19.8949 20.5776Z"
              fill="#6563FF"
            />
          </svg>
        </button>
        <a
          className="mr-6 w-8 h-8"
          href="https://etherscan.io/address/0x8ce518fe6cffb769c547e567d7bdc3e59a633fe1"
          target="_blank"
          rel="noreferrer"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="293.775"
            height="293.667"
            className="max-w-full w-8 h-8"
            viewBox="0 0 293.775 293.667"
          >
            <g
              id="etherscan-logo-light-circle"
              transform="translate(-219.378 -213.333)"
            >
              <path
                id="Path_1"
                d="M280.433,353.152A12.45,12.45,0,0,1,292.941,340.7l20.737.068a12.467,12.467,0,0,1,12.467,12.467v78.414c2.336-.692,5.332-1.43,8.614-2.2a10.389,10.389,0,0,0,8.009-10.11V322.073a12.469,12.469,0,0,1,12.467-12.47h20.779a12.47,12.47,0,0,1,12.467,12.47v90.276s5.2-2.106,10.269-4.245a10.408,10.408,0,0,0,6.353-9.577V290.9a12.466,12.466,0,0,1,12.465-12.467h20.779A12.468,12.468,0,0,1,450.815,290.9v88.625c18.014-13.055,36.271-28.758,50.759-47.639a20.926,20.926,0,0,0,3.185-19.537,146.6,146.6,0,0,0-136.644-99.006c-81.439-1.094-148.744,65.385-148.736,146.834a146.371,146.371,0,0,0,19.5,73.45,18.56,18.56,0,0,0,17.707,9.173c3.931-.346,8.825-.835,14.643-1.518a10.383,10.383,0,0,0,9.209-10.306V353.152"
                transform="translate(0 0)"
                fill="#fff"
              />
              <path
                id="Path_2"
                d="M244.417,398.641A146.808,146.808,0,0,0,477.589,279.9c0-3.381-.157-6.724-.383-10.049-53.642,80-152.686,117.405-232.79,128.793"
                transform="translate(35.564 80.269)"
                fill="#bfcfda"
              />
            </g>
          </svg>
        </a>
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

      {discordLinksModalVisible && (
        <Modal title="Discord Links" close={toggleDiscordLinksModal}>
          <div className="flex flex-col p-4">
            <a
              className="p-2 pb-4 flex items-center"
              href="https://discord.gg/n87cH5Fk7m"
              target="_blank"
              rel="noreferrer"
            >
              <svg
                className="w-8 h-8"
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
              <span className="ml-4">NotLarvaLabs</span>
            </a>
            <a
              className="p-2 pt-4 flex items-center border-t border-gray-600"
              href="https://discord.gg/ckv3ZP4BVQ"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src="https://www.cryptophunks.com/logo192.png"
                className="w-8 h-8"
                alt=""
              />
              <span className="ml-4">CryptoPhunks</span>
            </a>
          </div>
        </Modal>
      )}

      {twitterLinksModalVisible && (
        <Modal title="Twitter Links" close={toggleTwitterLinksModal}>
          <div className="flex flex-col p-4">
            <a
              className="p-2 pb-4 flex items-center"
              href="https://www.twitter.com/Phunk_DAO"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src="https://house.cdn.zo.xyz/brand/phunk.jpg"
                className="w-8 h-8"
                alt=""
              />
              <span className="ml-4">PhunkDAO</span>
            </a>
            <a
              className="p-2 pt-4 flex items-center border-t border-gray-600"
              href="https://twitter.com/CryptoPhunksV2"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src="https://www.cryptophunks.com/logo192.png"
                className="w-8 h-8"
                alt=""
              />
              <span className="ml-4">CryptoPhunks</span>
            </a>
          </div>
        </Modal>
      )}
    </>
  );
};

export default SocialLinks;
