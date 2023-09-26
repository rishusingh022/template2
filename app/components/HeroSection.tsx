interface IPROPS {
  title: string;
  subtitle: string;
  title_highlight: string;
}
export default function HeroSection(props: IPROPS) {
  return (
    //
    <div className="bg-white mx-auto flex flex-col max-w-[1280px]">
      <div className="bg-[url('/hero_background.png')] bg-cover bg-no-repeat bg-center w-full min-h-[700px] rounded-[20px] flex justify-center items-center p-2">
        <div className="text-white flex flex-col justify-center items-center">
          <h1 className="text-5xl font-inter lg:text-6xl font-semibold leading-[60px] text-center tracking-[-2.5%]">
            {props.title}{" "}
          </h1>
          <h1 className="text-5xl lg:text-6xl font-inter font-extrabold leading-[60px] text-center tracking-[-2.5%] text-[#FCD34D]">
            {props.title_highlight}
          </h1>
          <p className="text-xl mt-6 text-center font-inter font-normal leading-[28px] max-w-[768px]">
            {props.subtitle}
          </p>
          <div className="flex flex-col md:flex-row justify-center items-center w-full mt-10 md:gap-0 gap-3">
            <input
              className="border focus:outline-none min-w-[330px] py-2 px-3 rounded-md text-black"
              type="text"
              placeholder="Enter your email"
            />
            <button className="bg-[#059669] font-inter min-w-[330px] md:min-w-[194px]  md:ml-2 px-10 py-2 text-white rounded-md">
              Get Started
            </button>
          </div>
        </div>
      </div>
      <div className="text-black py-8 mb-10 px-10 flex-col justify-center items-center">
        <div className="text-base font-inter font-semibold leading-[20px] mb-5 tracking-[2.5%] text-center first-letter text-[#6B7280] uppercase">
          Trusted by over 5 very average small businesses
        </div>
        <div className="flex flex-row flex-wrap justify-center">
          <div className="w-[220px] h-12 justify-center items-center">
            <svg
              width="105"
              height="48"
              viewBox="0 0 105 48"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M0 10L18 4V13.5L24 11.5V43L6 37V31.5L0 29.5V10ZM18 35.5L8 32.167V35.56L22 40.225V14.275L18 15.608V35.5Z"
                fill="#9CA3AF"
              />
              <path
                d="M42.9 31V20.451H39.39V17.058H50.876V20.45H47.346V31H42.9Z"
                fill="#9CA3AF"
              />
              <path
                d="M59.481 31.254C55.405 31.254 53.105 29.226 53.105 25.248V17.058H57.511V25.073C57.511 26.886 57.901 27.783 59.481 27.783C61.041 27.783 61.431 26.886 61.431 25.053V17.058H65.877V25.209C65.877 29.401 63.381 31.254 59.481 31.254Z"
                fill="#9CA3AF"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M68.965 31V17.058H74.523C78.54 17.058 80.256 18.852 80.256 21.835V21.913C80.256 24.819 78.326 26.457 74.718 26.457H73.372V31H68.965ZM74.288 23.493H73.372V20.353H74.308C75.458 20.353 76.063 20.783 76.063 21.855V21.933C76.063 22.966 75.458 23.493 74.288 23.493Z"
                fill="#9CA3AF"
              />
              <path
                d="M82.563 17.058V31H92.06V27.588H86.99V17.058H82.563Z"
                fill="#9CA3AF"
              />
              <path
                d="M94.562 31V17.058H104.468V20.451H98.969V22.421H103.337V25.521H98.969V27.607H104.78V31H94.562Z"
                fill="#9CA3AF"
              />
            </svg>
          </div>
          <div className="w-[220px] h-12 justify-center items-center">
            <svg
              width="139"
              height="48"
              viewBox="0 0 139 48"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_477_359)">
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M38.029 12.273C38.029 8.25617 34.8003 5.00027 30.8165 5C26.8327 5.00027 23.603 8.25617 23.603 12.273C23.5995 14.1603 24.3292 15.9752 25.638 17.335L23.788 20.144L17.84 10.955C17.7362 10.7948 17.5927 10.6641 17.4235 10.5757C17.2542 10.4873 17.065 10.4442 16.8742 10.4505C16.6834 10.4569 16.4974 10.5125 16.3345 10.6119C16.1715 10.7113 16.037 10.8512 15.944 11.018L5.59101 29.58H1.61101C0.998007 29.58 0.501007 30.08 0.501007 30.698C0.501007 31.316 0.998007 31.816 1.61001 31.816H38.406C38.4173 31.8162 38.4287 31.8162 38.44 31.816H43.052C43.665 31.816 44.162 31.316 44.162 30.698C44.162 30.08 43.665 29.58 43.052 29.58H39.072L33.258 19.118C34.6596 18.6046 35.8693 17.6724 36.7229 16.4478C37.5764 15.2232 38.0324 13.7657 38.029 12.273ZM29.895 29.58L25.107 22.183L29.072 16.162L36.529 29.58H29.895ZM16.98 13.72L27.247 29.58H8.13501L16.98 13.72ZM34.9174 15.3861C35.5899 14.4878 35.952 13.3951 35.949 12.273C35.949 9.414 33.651 7.097 30.816 7.097C27.981 7.097 25.682 9.414 25.682 12.273C25.6797 13.4575 26.0835 14.6071 26.826 15.53L28.228 13.4C28.3328 13.2411 28.4767 13.1119 28.646 13.0249C28.8153 12.9379 29.0041 12.8959 29.1943 12.9032C29.3845 12.9104 29.5696 12.9666 29.7317 13.0662C29.8939 13.1658 30.0276 13.3056 30.12 13.472L32.221 17.253C33.2985 16.9397 34.2449 16.2845 34.9174 15.3861Z"
                  fill="#9CA3AF"
                />
                <path
                  d="M9.013 36.29C9.013 35.673 9.509 35.173 10.12 35.173H34.541C35.152 35.173 35.648 35.673 35.648 36.29C35.648 36.906 35.152 37.406 34.54 37.406H10.12C9.509 37.406 9.013 36.907 9.013 36.29Z"
                  fill="#9CA3AF"
                />
                <path
                  d="M17.523 41.882C17.523 41.264 18.02 40.763 18.633 40.763H26.028C26.641 40.763 27.138 41.264 27.138 41.882C27.138 42.5 26.641 43 26.029 43H18.633C18.02 43 17.523 42.499 17.523 41.882Z"
                  fill="#9CA3AF"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M120.527 21.871C119.545 20.621 118.074 19.948 116.18 19.948C113.196 19.948 110.131 22.476 110.131 26.734C110.131 30.992 113.196 33.52 116.18 33.52C118.074 33.52 119.545 32.86 120.527 31.597V32.655C120.527 35.1 119.055 36.584 116.385 36.584C114.791 36.584 113.278 36.061 111.957 35.251L110.921 37.683C112.297 38.672 114.436 39.208 116.385 39.208C120.745 39.208 123.388 36.667 123.388 32.531V20.291H120.527V21.871ZM113.06 26.734C113.06 24.509 114.504 22.654 116.915 22.654C119.218 22.654 120.772 24.427 120.772 26.734C120.772 29.042 119.218 30.814 116.915 30.814C114.504 30.814 113.06 28.947 113.06 26.734Z"
                  fill="#9CA3AF"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M104.841 21.885C103.942 20.717 102.593 19.948 100.74 19.948C97.09 19.948 94.214 22.846 94.214 26.871C94.214 30.896 97.089 33.795 100.74 33.795C102.594 33.795 103.942 33.04 104.841 31.872V33.452H107.689V20.292H104.841V21.885ZM97.143 26.871C97.143 24.564 98.629 22.654 101.081 22.654C103.438 22.654 105.019 24.467 105.019 26.871C105.019 29.275 103.438 31.089 101.081 31.089C98.629 31.089 97.143 29.179 97.143 26.871Z"
                  fill="#9CA3AF"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M138.5 26.858C138.487 22.751 135.98 19.948 132.328 19.948C128.486 19.948 125.829 22.751 125.829 26.872C125.829 31.048 128.595 33.796 132.505 33.796C134.481 33.796 136.279 33.316 137.873 31.942L136.456 29.894C135.38 30.759 133.99 31.282 132.682 31.282C130.829 31.282 129.181 30.292 128.799 27.929H138.446C138.473 27.6 138.5 27.229 138.5 26.858ZM128.813 25.745C129.113 23.822 130.243 22.503 132.273 22.503C134.086 22.503 135.271 23.698 135.584 25.745H128.813Z"
                  fill="#9CA3AF"
                />
                <path
                  d="M64.8325 27.9558L59.287 14.2191H54.559V33.4521H57.639V17.7771L63.21 31.5701H66.453L72.026 17.6261V33.4521H75.106V14.2191H70.377L64.8325 27.9558Z"
                  fill="#9CA3AF"
                />
                <path
                  d="M81.704 20.2921V33.4521H78.843V20.2921H81.704Z"
                  fill="#9CA3AF"
                />
                <path
                  d="M93.886 20.3191C93.8859 20.319 93.8861 20.3191 93.886 20.3191V20.3191Z"
                  fill="#9CA3AF"
                />
                <path
                  d="M91.692 19.9491C92.5639 19.9491 93.2321 20.0581 93.886 20.3191L93.204 23.1611C92.605 22.8451 91.733 22.6801 91.038 22.6801C89.226 22.6801 87.932 23.9721 87.932 26.2101V33.4501H85.084V20.2901H87.904V21.7751C88.762 20.5251 90.098 19.9491 91.692 19.9491Z"
                  fill="#9CA3AF"
                />
                <path
                  d="M80.259 13.7111C81.39 13.7111 82.276 14.6041 82.276 15.7441C82.276 16.8841 81.39 17.7501 80.259 17.7501C79.129 17.7501 78.269 16.8841 78.269 15.7441C78.269 14.6041 79.129 13.7111 80.259 13.7111Z"
                  fill="#9CA3AF"
                />
              </g>
              <defs>
                <clipPath id="clip0_477_359">
                  <rect
                    width="138"
                    height="48"
                    fill="white"
                    transform="translate(0.5)"
                  />
                </clipPath>
              </defs>
            </svg>
          </div>
          <div className="w-[220px] h-12 justify-center items-center">
            <svg
              width="128"
              height="48"
              viewBox="0 0 128 48"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_477_362)">
                <path
                  d="M3.81 28.903L18.56 13.087L15.249 10L0.5 25.816L3.81 28.903ZM6.292 39L21.04 23.184L17.73 20.097L2.982 35.913L6.292 39ZM37.553 20.784C37.1683 20.3029 36.6742 19.9207 36.112 19.669C35.518 19.393 34.946 19.255 34.394 19.255C34.11 19.255 33.822 19.28 33.53 19.33C33.237 19.38 32.974 19.477 32.74 19.619C32.506 19.761 32.31 19.945 32.15 20.17C31.992 20.396 31.913 20.684 31.913 21.035C31.913 21.335 31.975 21.587 32.101 21.787C32.226 21.987 32.41 22.163 32.652 22.314C32.894 22.464 33.182 22.602 33.517 22.727C33.851 22.853 34.227 22.982 34.645 23.116C35.247 23.316 35.874 23.538 36.525 23.78C37.1618 24.0141 37.7613 24.3391 38.305 24.745C38.84 25.146 39.283 25.644 39.634 26.237C39.984 26.83 40.16 27.57 40.16 28.456C40.16 29.475 39.972 30.356 39.596 31.1C39.2381 31.8221 38.7195 32.4526 38.08 32.943C37.4273 33.4364 36.6874 33.8022 35.899 34.021C35.0755 34.2553 34.2232 34.3731 33.367 34.371C32.097 34.371 30.868 34.151 29.682 33.708C28.495 33.265 27.509 32.634 26.723 31.815L29.531 28.957C29.966 29.492 30.538 29.939 31.248 30.298C31.958 30.658 32.665 30.838 33.367 30.838C33.684 30.838 33.993 30.804 34.294 30.737C34.595 30.67 34.858 30.561 35.084 30.411C35.309 30.261 35.489 30.06 35.623 29.809C35.757 29.559 35.823 29.258 35.823 28.907C35.823 28.573 35.74 28.288 35.573 28.054C35.3791 27.796 35.1361 27.5788 34.858 27.415C34.4942 27.1978 34.1075 27.0214 33.705 26.889C33.245 26.73 32.723 26.559 32.138 26.375C31.5698 26.1911 31.0131 25.9734 30.471 25.723C29.9387 25.4796 29.4481 25.1539 29.017 24.758C28.5829 24.3542 28.2335 23.8681 27.989 23.328C27.73 22.769 27.601 22.088 27.601 21.286C27.601 20.3 27.801 19.456 28.202 18.754C28.5911 18.0653 29.1313 17.4738 29.782 17.024C30.4521 16.5646 31.1993 16.2293 31.988 16.034C32.7989 15.8259 33.6328 15.7204 34.47 15.72C35.472 15.72 36.496 15.904 37.54 16.272C38.585 16.64 39.5 17.182 40.286 17.902L37.553 20.784ZM47.23 24.52V29.283C47.23 29.868 47.343 30.306 47.568 30.599C47.794 30.891 48.199 31.038 48.784 31.038C48.984 31.038 49.198 31.021 49.424 30.988C49.6175 30.9633 49.8069 30.9129 49.987 30.838L50.037 33.845C49.754 33.945 49.394 34.033 48.96 34.109C48.5293 34.1836 48.0931 34.2211 47.656 34.221C46.82 34.221 46.118 34.117 45.55 33.908C44.982 33.699 44.527 33.398 44.184 33.006C43.8343 32.6 43.5812 32.12 43.444 31.602C43.2874 31.0089 43.2117 30.3974 43.219 29.784V24.52H41.213V21.436H43.193V18.152H47.23V21.436H50.163V24.52H47.23ZM59.464 28.48H58.937C58.486 28.48 58.031 28.501 57.571 28.543C57.111 28.585 56.701 28.665 56.343 28.781C56.0109 28.882 55.7065 29.0579 55.453 29.295C55.219 29.521 55.102 29.818 55.102 30.185C55.102 30.419 55.156 30.62 55.265 30.787C55.373 30.954 55.511 31.087 55.678 31.188C55.845 31.288 56.038 31.359 56.255 31.401C56.472 31.443 56.681 31.464 56.882 31.464C57.717 31.464 58.356 31.234 58.799 30.774C59.242 30.314 59.464 29.692 59.464 28.907V28.481V28.48ZM51.918 23.14C52.6536 22.4381 53.5295 21.9 54.488 21.561C55.4483 21.2133 56.4617 21.0353 57.483 21.035C58.536 21.035 59.426 21.165 60.153 21.424C60.88 21.683 61.469 22.084 61.92 22.627C62.372 23.17 62.702 23.855 62.91 24.683C63.12 25.51 63.224 26.492 63.224 27.628V33.921H59.464V32.592H59.388C59.071 33.11 58.59 33.512 57.947 33.795C57.287 34.0824 56.5738 34.2276 55.854 34.221C55.3294 34.2183 54.8072 34.1511 54.299 34.021C53.7756 33.8921 53.2792 33.6714 52.833 33.369C52.3811 33.0581 52.0079 32.6462 51.743 32.166C51.458 31.664 51.316 31.046 51.316 30.311C51.316 29.408 51.563 28.681 52.056 28.13C52.549 27.578 53.184 27.152 53.961 26.851C54.738 26.551 55.603 26.35 56.556 26.25C57.508 26.15 58.436 26.099 59.338 26.099V25.899C59.338 25.28 59.121 24.825 58.687 24.532C58.252 24.24 57.717 24.093 57.082 24.093C56.497 24.093 55.933 24.219 55.39 24.47C54.8823 24.6972 54.4128 25.0014 53.998 25.372L51.918 23.141V23.14ZM70.606 24.52V29.283C70.606 29.868 70.718 30.306 70.944 30.599C71.169 30.891 71.574 31.038 72.16 31.038C72.36 31.038 72.573 31.021 72.799 30.988C73.025 30.954 73.213 30.904 73.363 30.838L73.413 33.845C73.129 33.945 72.77 34.033 72.335 34.109C71.9047 34.1836 71.4687 34.221 71.032 34.221C70.196 34.221 69.494 34.117 68.926 33.908C68.358 33.699 67.902 33.398 67.56 33.006C67.2102 32.6001 66.9571 32.12 66.82 31.602C66.6631 31.009 66.5871 30.3974 66.594 29.784V24.52H64.59V21.436H66.57V18.152H70.607V21.436H73.54V24.52H70.607H70.606ZM79.931 17.45C79.931 17.768 79.868 18.064 79.743 18.34C79.6233 18.6082 79.4532 18.8509 79.242 19.055C78.7889 19.4756 78.1932 19.7086 77.575 19.707C76.906 19.707 76.346 19.485 75.895 19.042C75.6781 18.8379 75.506 18.5911 75.3895 18.317C75.2729 18.043 75.2146 17.7478 75.218 17.45C75.218 17.15 75.277 16.861 75.394 16.585C75.511 16.31 75.678 16.071 75.895 15.871C76.112 15.671 76.363 15.507 76.647 15.382C76.931 15.257 77.24 15.194 77.575 15.194C77.892 15.194 78.197 15.252 78.49 15.369C78.782 15.486 79.033 15.645 79.242 15.846C79.451 16.046 79.618 16.285 79.743 16.56C79.869 16.836 79.931 17.133 79.931 17.45ZM75.52 33.92V21.437H79.631V33.922H75.52V33.92ZM90.793 25.472C90.5391 25.1559 90.212 24.9063 89.84 24.745C89.4555 24.5652 89.0365 24.4713 88.612 24.47C88.177 24.47 87.784 24.557 87.433 24.733C87.0882 24.9039 86.7814 25.1427 86.531 25.435C86.281 25.727 86.084 26.065 85.941 26.45C85.7977 26.8434 85.7259 27.2593 85.729 27.678C85.729 28.113 85.796 28.522 85.929 28.907C86.0569 29.2809 86.2574 29.6258 86.519 29.922C86.777 30.215 87.087 30.444 87.446 30.612C87.806 30.779 88.211 30.862 88.662 30.862C89.08 30.862 89.493 30.782 89.902 30.624C90.312 30.465 90.642 30.235 90.892 29.934L93.174 32.717C92.656 33.219 91.988 33.611 91.169 33.895C90.3298 34.1828 89.4481 34.3272 88.561 34.322C87.623 34.3296 86.6905 34.1767 85.804 33.87C84.9822 33.5875 84.227 33.1396 83.585 32.554C82.9512 31.9673 82.4473 31.2543 82.106 30.461C81.746 29.642 81.567 28.715 81.567 27.678C81.567 26.658 81.747 25.74 82.107 24.921C82.4481 24.1278 82.9515 23.4148 83.585 22.828C84.2284 22.2409 84.9829 21.7886 85.804 21.498C87.1093 21.0322 88.5137 20.9157 89.878 21.16C90.321 21.244 90.747 21.357 91.156 21.499C91.566 21.641 91.942 21.816 92.284 22.025C92.627 22.235 92.924 22.464 93.174 22.715L90.793 25.472ZM105.884 33.921L99.291 25.748H99.241V33.921H95.029V16.17H99.241V23.39H99.316L105.659 16.17H111.023L103.377 24.343L111.475 33.92H105.884V33.921ZM117.09 17.451C117.09 17.768 117.028 18.064 116.902 18.341C116.782 18.6089 116.612 18.8513 116.401 19.055C115.948 19.4752 115.352 19.7082 114.734 19.707C114.065 19.707 113.505 19.485 113.054 19.042C112.837 18.8379 112.665 18.591 112.549 18.317C112.432 18.043 112.374 17.7478 112.377 17.45C112.377 17.15 112.436 16.861 112.553 16.585C112.67 16.31 112.837 16.071 113.054 15.871C113.271 15.671 113.522 15.507 113.806 15.382C114.09 15.257 114.399 15.194 114.734 15.194C115.352 15.1928 115.948 15.4258 116.401 15.846C116.61 16.046 116.777 16.285 116.902 16.56C117.028 16.836 117.09 17.133 117.09 17.45V17.451ZM112.678 33.921V21.436H116.789V33.921H112.678ZM124.511 24.52V29.283C124.511 29.868 124.623 30.306 124.849 30.599C125.075 30.891 125.48 31.038 126.065 31.038C126.265 31.038 126.479 31.021 126.704 30.988C126.898 30.9635 127.088 30.9131 127.268 30.838L127.318 33.845C127.034 33.945 126.675 34.033 126.24 34.109C125.81 34.1836 125.374 34.2211 124.937 34.221C124.101 34.221 123.399 34.117 122.831 33.908C122.263 33.699 121.807 33.398 121.465 33.006C121.115 32.6 120.862 32.1199 120.725 31.602C120.569 31.0089 120.493 30.3974 120.5 29.784V24.52H118.494V21.436H120.475V18.152H124.511V21.436H127.444V24.52H124.511Z"
                  fill="#9CA3AF"
                />
              </g>
              <defs>
                <clipPath id="clip0_477_362">
                  <rect
                    width="127"
                    height="48"
                    fill="white"
                    transform="translate(0.5)"
                  />
                </clipPath>
              </defs>
            </svg>
          </div>
          <div className="w-[220px] h-12 justify-center items-center">
            <svg
              width="159"
              height="48"
              viewBox="0 0 159 48"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_477_365)">
                <path
                  d="M20.3344 37.3232C20.5947 37.5838 20.9477 37.7304 21.316 37.731C22.067 37.731 22.703 37.093 22.703 36.34V11.37C22.703 11.0017 22.5568 10.6484 22.2966 10.3878C22.0363 10.1272 21.6833 9.98051 21.315 9.97998C20.535 9.97998 19.928 10.617 19.928 11.37V36.341C19.928 36.7093 20.0742 37.0625 20.3344 37.3232Z"
                  fill="#9CA3AF"
                />
                <path
                  d="M8.883 25.247H15.533L15.534 25.246C15.9027 25.246 16.2562 25.0995 16.5169 24.8389C16.7776 24.5782 16.924 24.2246 16.924 23.856C16.924 23.4873 16.7776 23.1338 16.5169 22.8731C16.2562 22.6124 15.9027 22.466 15.534 22.466H8.884C8.103 22.466 7.496 23.074 7.496 23.857C7.496 24.2251 7.64204 24.5782 7.90206 24.8388C8.16209 25.0994 8.51487 25.2462 8.883 25.247Z"
                  fill="#9CA3AF"
                />
                <path
                  d="M27.098 25.247H33.776C34.528 25.247 35.135 24.638 35.135 23.856C35.135 23.4879 34.989 23.1348 34.7289 22.8742C34.4689 22.6136 34.1161 22.4668 33.748 22.466H27.098C26.317 22.466 25.71 23.074 25.71 23.857C25.71 24.2253 25.8562 24.5785 26.1164 24.8392C26.3767 25.0998 26.7297 25.2465 27.098 25.247Z"
                  fill="#9CA3AF"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M0.5 23.856C0.5 35.356 9.838 44.712 21.316 44.712C32.794 44.712 42.132 35.356 42.132 23.856C42.132 12.356 32.794 3 21.316 3C9.838 3 0.5 12.356 0.5 23.856ZM3.276 23.856C3.276 13.891 11.371 5.781 21.316 5.781C31.262 5.781 39.356 13.891 39.356 23.856C39.356 33.821 31.262 41.931 21.316 41.931C11.371 41.931 3.276 33.821 3.276 23.856Z"
                  fill="#9CA3AF"
                />
                <path
                  d="M55.923 15.687V18.178H59.97V32.053H62.804V18.178H66.88V15.687H55.923Z"
                  fill="#9CA3AF"
                />
                <path
                  d="M72.691 22.639C73.1369 22.6382 73.582 22.677 74.021 22.755V20.235L74.0019 20.2331C73.7192 20.2047 73.4335 20.176 73.01 20.176C71.477 20.176 70.32 21.191 69.8 22.176H69.742V20.554H67.111V32.024H69.801V26.231C69.801 23.827 70.87 22.639 72.691 22.639Z"
                  fill="#9CA3AF"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M86.916 32.024V20.553H84.314V22.117H84.256C83.562 21.219 82.405 20.206 80.497 20.206C77.375 20.206 74.802 22.639 74.802 26.289C74.802 30.402 77.722 32.459 80.295 32.459C82.203 32.459 83.447 31.561 84.227 30.576H84.285V32.024H86.916ZM84.4 26.346C84.4 28.548 82.752 30.084 80.989 30.084C78.618 30.084 77.519 28.2 77.519 26.289C77.519 24.406 78.647 22.494 81.018 22.494C82.897 22.494 84.4 24.029 84.4 26.346Z"
                  fill="#9CA3AF"
                />
                <path
                  d="M92.67 20.553H90.01L90.009 32.053H92.698V25.97C92.698 23.74 93.854 22.552 95.531 22.552C97.064 22.552 97.988 23.594 97.988 25.564V32.024H100.678V25.42C100.678 21.741 98.596 20.177 96.225 20.177C94.953 20.177 93.623 20.698 92.727 22.002H92.67V20.553Z"
                  fill="#9CA3AF"
                />
                <path
                  d="M107.269 22.118C108.05 22.118 108.686 22.668 108.802 23.508L111.23 23.507C110.941 21.625 109.64 20.177 107.182 20.177C104.754 20.177 103.279 21.567 103.279 23.45C103.279 25.246 104.378 26.318 106.518 27.013C108.426 27.65 108.917 28.201 108.917 29.069C108.917 29.852 108.339 30.489 107.327 30.489C106.142 30.489 105.563 29.765 105.448 28.809H102.961C103.164 30.952 104.523 32.459 107.269 32.459C109.9 32.459 111.49 30.981 111.49 28.867C111.49 27.245 110.623 25.97 108.165 25.188C106.171 24.522 105.824 24.029 105.824 23.334C105.824 22.697 106.344 22.118 107.269 22.118Z"
                  fill="#9CA3AF"
                />
                <path
                  d="M116.81 15.281H113.832V18.004H116.81V15.281Z"
                  fill="#9CA3AF"
                />
                <path
                  d="M116.665 20.553H113.977V32.053H116.665V20.553Z"
                  fill="#9CA3AF"
                />
                <path
                  d="M123.43 22.118C124.211 22.118 124.847 22.668 124.963 23.508L127.391 23.507C127.102 21.625 125.801 20.177 123.344 20.177C120.915 20.177 119.441 21.567 119.441 23.45C119.441 25.246 120.539 26.318 122.679 27.013C124.587 27.65 125.078 28.201 125.078 29.069C125.078 29.852 124.5 30.489 123.488 30.489C122.303 30.489 121.725 29.765 121.609 28.809H119.123C119.325 30.952 120.684 32.459 123.43 32.459C126.061 32.459 127.651 30.981 127.651 28.867C127.651 27.245 126.784 25.97 124.327 25.188C122.332 24.522 121.985 24.029 121.985 23.334C121.985 22.697 122.505 22.118 123.43 22.118Z"
                  fill="#9CA3AF"
                />
                <path
                  d="M130.253 20.553H128.808V22.813H130.253V28.085C130.253 30.431 131.005 32.169 133.867 32.169C134.532 32.169 135.284 32.082 135.891 31.908V29.736C135.486 29.852 134.966 29.939 134.503 29.939C133.405 29.939 132.913 29.504 132.913 27.94V22.813H135.804V20.553H132.942V16.875H130.253V20.553Z"
                  fill="#9CA3AF"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M149.248 26.289C149.248 22.813 146.704 20.177 143.119 20.177C139.65 20.177 136.99 22.726 136.99 26.289C136.99 29.765 139.621 32.459 143.119 32.459C146.675 32.459 149.248 29.678 149.248 26.289ZM146.53 26.289C146.53 28.432 145.143 30.054 143.119 30.054C141.269 30.054 139.707 28.49 139.707 26.289C139.707 24.145 141.066 22.552 143.119 22.552C145.229 22.552 146.53 24.261 146.53 26.289Z"
                  fill="#9CA3AF"
                />
                <path
                  d="M154.28 26.231C154.28 23.827 155.349 22.639 157.171 22.639C157.617 22.6382 158.062 22.677 158.501 22.755V20.235L158.48 20.2329C158.197 20.2045 157.912 20.176 157.489 20.176C155.956 20.176 154.8 21.191 154.28 22.176H154.222V20.554H151.591V32.024H154.28V26.231Z"
                  fill="#9CA3AF"
                />
              </g>
              <defs>
                <clipPath id="clip0_477_365">
                  <rect
                    width="158"
                    height="48"
                    fill="white"
                    transform="translate(0.5)"
                  />
                </clipPath>
              </defs>
            </svg>
          </div>
          <div className="w-[220px] h-12 justify-center items-center">
            <svg
              width="190"
              height="48"
              viewBox="0 0 190 48"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M39.2457 16.0646L46.8417 20.4503C46.623 18.6471 45.7452 16.9417 44.3094 15.7147H48.3748C47.0248 13.9172 44.875 12.7545 42.4545 12.7545C42.2396 12.7545 42.0266 12.7637 41.8165 12.7816L47.3351 9.59585C45.2672 8.71428 42.8235 8.78209 40.7267 9.99273C39.7014 10.5845 38.8718 11.3847 38.2599 12.3087C37.648 11.3847 36.8174 10.5845 35.7921 9.99273C33.6953 8.78209 31.2526 8.71428 29.1847 9.59585L34.7023 12.7816C34.4932 12.7637 34.2802 12.7545 34.0663 12.7545C31.6448 12.7545 29.495 13.9172 28.145 15.7147H32.2094C30.7746 16.9417 29.8968 18.6471 29.6781 20.4505L37.2722 16.0658V36.436H32.3385V21.1934L27.2433 24.1352L27.7191 20.213C27.8243 19.3454 28.0503 18.4949 28.3904 17.6883H25.3091L4.5 22.8906L4.97863 24.8051L8.657 23.8855V36.436H4.71007V38.4095H48.1261V36.436H39.2457V16.0646ZM28.3916 26.5688V36.436H22.4712V26.5688H28.3916ZM15.5641 30.5157C16.654 30.5157 17.5376 29.6322 17.5376 28.5423C17.5376 27.4524 16.654 26.5688 15.5641 26.5688C14.4742 26.5688 13.5907 27.4524 13.5907 28.5423C13.5907 29.6322 14.4742 30.5157 15.5641 30.5157Z"
                fill="#9CA3AF"
              />
              <path
                d="M63.7666 35.6415H67.4846L70.5868 24.7006L73.7128 35.6415H77.4308L82.0723 19.0645H78.6385L75.4652 31.3551L71.984 19.0645H69.1896L65.7321 31.3551L62.5588 19.0645H59.125L63.7666 35.6415Z"
                fill="#9CA3AF"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M88.0508 35.973C91.532 35.973 94.3264 33.2497 94.3264 29.7211C94.3264 26.1926 91.532 23.4692 88.0508 23.4692C84.5696 23.4692 81.7989 26.1926 81.7989 29.7211C81.7989 33.2497 84.5696 35.973 88.0508 35.973ZM88.0508 32.9892C86.251 32.9892 84.8538 31.6393 84.8538 29.7211C84.8538 27.8029 86.251 26.4531 88.0508 26.4531C89.8743 26.4531 91.2715 27.8029 91.2715 29.7211C91.2715 31.6393 89.8743 32.9892 88.0508 32.9892Z"
                fill="#9CA3AF"
              />
              <path
                d="M99.5304 23.8006V25.8373C100.146 24.2269 101.638 23.5638 103.13 23.5638V26.974C101.543 26.7845 99.5304 27.495 99.5304 29.9815V35.6414H96.4755V23.8006H99.5304Z"
                fill="#9CA3AF"
              />
              <path
                d="M115.834 35.6415L110.932 29.6501L115.692 23.8007H112.045L107.972 29.0107V19.0645H104.917V35.6415H107.972V30.2658L112.282 35.6415H115.834Z"
                fill="#9CA3AF"
              />
              <path
                d="M122.996 35.9733C125.317 35.9733 127.33 34.7418 128.348 32.8947L125.696 31.3791C125.222 32.35 124.204 32.942 122.972 32.942C121.149 32.942 119.799 31.5922 119.799 29.7214C119.799 27.8268 121.149 26.477 122.972 26.477C124.18 26.477 125.198 27.0927 125.672 28.0637L128.301 26.5244C127.33 24.7009 125.317 23.4694 122.996 23.4694C119.396 23.4694 116.744 26.1928 116.744 29.7214C116.744 33.2499 119.396 35.9733 122.996 35.9733Z"
                fill="#9CA3AF"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M138.778 25.1982V23.801H141.833V35.6417H138.778V34.2445C137.925 35.3102 136.646 35.9733 134.918 35.9733C131.768 35.9733 129.163 33.2499 129.163 29.7214C129.163 26.1928 131.768 23.4694 134.918 23.4694C136.646 23.4694 137.925 24.1325 138.778 25.1982ZM132.218 29.7214C132.218 31.7106 133.615 33.0604 135.486 33.0604C137.381 33.0604 138.778 31.7106 138.778 29.7214C138.778 27.7321 137.381 26.3823 135.486 26.3823C133.615 26.3823 132.218 27.7321 132.218 29.7214Z"
                fill="#9CA3AF"
              />
              <path
                d="M151.376 26.7375V23.801H148.7V20.4856L145.645 21.4092V23.801H143.585V26.7375H145.645V31.6632C145.645 34.8602 147.089 36.1154 151.376 35.6417V32.871C149.623 32.9657 148.7 32.942 148.7 31.6632V26.7375H151.376Z"
                fill="#9CA3AF"
              />
              <path
                d="M156.94 20.5093C156.94 21.5276 156.087 22.3801 155.045 22.3801C154.027 22.3801 153.174 21.5276 153.174 20.5093C153.174 19.491 154.027 18.6147 155.045 18.6147C156.087 18.6147 156.94 19.491 156.94 20.5093Z"
                fill="#9CA3AF"
              />
              <path
                d="M156.585 35.6417H153.53V23.801H156.585V35.6417Z"
                fill="#9CA3AF"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M165.017 35.9733C168.498 35.9733 171.292 33.2499 171.292 29.7214C171.292 26.1928 168.498 23.4694 165.017 23.4694C161.536 23.4694 158.765 26.1928 158.765 29.7214C158.765 33.2499 161.536 35.9733 165.017 35.9733ZM165.017 32.9894C163.217 32.9894 161.82 31.6396 161.82 29.7214C161.82 27.8032 163.217 26.4533 165.017 26.4533C166.84 26.4533 168.237 27.8032 168.237 29.7214C168.237 31.6396 166.84 32.9894 165.017 32.9894Z"
                fill="#9CA3AF"
              />
              <path
                d="M176.496 25.1272C177.207 24.0615 178.438 23.4694 180.025 23.4694C182.535 23.4694 184.501 25.2219 184.501 28.3715V35.6417H181.446V28.7504C181.446 27.1401 180.475 26.3112 179.101 26.3112C177.609 26.3112 176.496 27.1874 176.496 29.2477V35.6417H173.441V23.801H176.496V25.1272Z"
                fill="#9CA3AF"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}
