"use client";
// store svgs in an array and use them in the component
const svgs = [
  <svg
    key={0}
    width="36"
    height="46"
    viewBox="0 0 36 46"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M9.46094 45H26.382"
      stroke="white"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M7.49363 31.2511C5.47917 29.6847 3.84762 27.6804 2.72258 25.3901C1.59755 23.0997 1.00854 20.5833 1.00018 18.0316C0.957886 8.85189 8.33969 1.21626 17.5194 1.00475C21.0721 0.920538 24.5611 1.95699 27.4917 3.96713C30.4223 5.97727 32.6455 8.85905 33.8462 12.2038C35.047 15.5485 35.1642 19.1863 34.1812 22.6014C33.1982 26.0165 31.1651 29.0354 28.37 31.23C27.7526 31.7072 27.2524 32.3193 26.9078 33.0196C26.5631 33.7198 26.3833 34.4894 26.3818 35.2699V36.5389C26.3818 36.9877 26.2034 37.4181 25.8861 37.7354C25.5689 38.0528 25.1384 38.2311 24.6896 38.2311H11.1528C10.704 38.2311 10.2736 38.0528 9.95631 37.7354C9.63897 37.4181 9.46071 36.9877 9.46071 36.5389V35.2699C9.45541 34.4954 9.27584 33.732 8.93533 33.0362C8.5948 32.3406 8.10207 31.7304 7.49363 31.2511Z"
      stroke="white"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>,
  <svg
    key={1}
    width="42"
    height="42"
    viewBox="0 0 42 42"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M10.9091 25H2C1.44772 25 1 25.4477 1 26V40C1 40.5523 1.44772 41 2 41H10.9091C11.4614 41 11.9091 40.5523 11.9091 40V26C11.9091 25.4477 11.4614 25 10.9091 25Z"
      stroke="white"
      stroke-width="2"
    />
    <path
      d="M25.455 14.6665H16.5459C15.9936 14.6665 15.5459 15.1142 15.5459 15.6665V39.9998C15.5459 40.5521 15.9936 40.9998 16.5459 40.9998H25.455C26.0073 40.9998 26.455 40.5521 26.455 39.9998V15.6665C26.455 15.1142 26.0073 14.6665 25.455 14.6665Z"
      stroke="white"
      stroke-width="2"
    />
    <path
      d="M39.9999 1H31.0908C30.5385 1 30.0908 1.44772 30.0908 2V40C30.0908 40.5523 30.5385 41 31.0908 41H39.9999C40.5522 41 40.9999 40.5523 40.9999 40V2C40.9999 1.44772 40.5522 1 39.9999 1Z"
      stroke="white"
      stroke-width="2"
    />
  </svg>,

  <svg
    key={2}
    width="54"
    height="42"
    viewBox="0 0 54 42"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M27.0001 32.219C32.3882 32.219 36.7561 27.8511 36.7561 22.463C36.7561 17.0749 32.3882 12.707 27.0001 12.707C21.612 12.707 17.2441 17.0749 17.2441 22.463C17.2441 27.8511 21.612 32.219 27.0001 32.219Z"
      stroke="white"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M40.7559 16.6099C43.0284 16.606 45.2704 17.1333 47.303 18.1496C49.3356 19.1659 51.1026 20.6431 52.4631 22.4634"
      stroke="white"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M1.53711 22.4634C2.89758 20.6431 4.66458 19.1659 6.69719 18.1496C8.7298 17.1333 10.9717 16.606 13.2443 16.6099"
      stroke="white"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M12.9512 41.0003C14.2361 38.3688 16.2343 36.1511 18.7181 34.5999C21.2019 33.0486 24.0714 32.2261 26.9998 32.2261C29.9283 32.2261 32.7978 33.0486 35.2816 34.5999C37.7654 36.1511 39.7636 38.3688 41.0485 41.0003"
      stroke="white"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M13.2444 16.6096C11.763 16.6111 10.3118 16.191 9.06037 15.3983C7.80892 14.6057 6.80887 13.4733 6.17708 12.1335C5.5453 10.7936 5.30786 9.30164 5.49253 7.83185C5.67719 6.36206 6.27632 4.97518 7.21992 3.83325C8.16351 2.69131 9.4126 1.8415 10.8212 1.38309C12.2299 0.924693 13.7399 0.876633 15.1748 1.24453C16.6097 1.61243 17.9103 2.3811 18.9246 3.46072C19.9389 4.54034 20.6251 5.88632 20.9028 7.34139"
      stroke="white"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M33.0977 7.34139C33.3754 5.88632 34.0615 4.54034 35.0758 3.46072C36.0901 2.3811 37.3907 1.61243 38.8257 1.24453C40.2606 0.876633 41.7706 0.924693 43.1792 1.38309C44.5879 1.8415 45.837 2.69131 46.7806 3.83325C47.7241 4.97518 48.3233 6.36206 48.5079 7.83185C48.6926 9.30164 48.4552 10.7936 47.8234 12.1335C47.1916 13.4733 46.1916 14.6057 44.9401 15.3983C43.6886 16.191 42.2375 16.6111 40.7561 16.6096"
      stroke="white"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>,

  <svg
    key={3}
    width="42"
    height="42"
    viewBox="0 0 42 42"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M30.1663 16L17.9371 27.6666L11.833 21.8333"
      stroke="white"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M21 41C32.0457 41 41 32.0457 41 21C41 9.95433 32.0457 1 21 1C9.9543 1 1 9.95433 1 21C1 32.0457 9.9543 41 21 41Z"
      stroke="white"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>,
  <svg
    key={4}
    width="42"
    height="42"
    viewBox="0 0 42 42"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M21 41C32.0457 41 41 32.0457 41 21C41 9.95433 32.0457 1 21 1C9.9543 1 1 9.95433 1 21C1 32.0457 9.9543 41 21 41Z"
      stroke="white"
      stroke-width="2"
      stroke-miterlimit="10"
    />
    <path
      d="M1 21H41"
      stroke="white"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M21.0004 40.4586C25.6028 40.4586 29.3337 31.7468 29.3337 21.0003C29.3337 10.2538 25.6028 1.54199 21.0004 1.54199C16.398 1.54199 12.667 10.2538 12.667 21.0003C12.667 31.7468 16.398 40.4586 21.0004 40.4586Z"
      stroke="white"
      stroke-width="2"
      stroke-miterlimit="10"
    />
  </svg>,
  <svg
    key={5}
    width="42"
    height="42"
    viewBox="0 0 42 42"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M1.64453 40.9998V4.04736"
      stroke="white"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M1.64453 30.4423C15.7217 19.8845 26.2795 41.0002 40.3566 30.4423V4.04778C26.2795 14.6056 15.7217 -6.51005 1.64453 4.04778"
      stroke="white"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>,
];
export default function FeatureCard(props: any) {
  return (
    <div className="bg-[#059669] w-full mx-5 lg:mx-0 lg:max-w-[412px] min-h-[304px] rounded-[20px] px-6 py-12 flex flex-col items-center gap-8">
      <div>{svgs[props.cardNumber]}</div>
      <div className="flex flex-col gap-4">
        <div className="text-center text-white text-xl font-bold leading-[28px]">
          {props.title}
        </div>
        <div className="text-center text-white font-normal text-base leading-[24px]">
          {props.subtitle}
        </div>
      </div>
    </div>
  );
}
