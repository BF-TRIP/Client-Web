const SvgBtnHomeVoice = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 139 139"
    {...props}
  >
    <g filter="url(#btn_home_voice_svg__a)">
      <circle cx={69.777} cy={69.27} r={49.171} fill="#1E1E1E" />
    </g>
    <path
      fill="#fff"
      d="M62.075 68.603v-10.67c0-2.121.864-4.157 2.402-5.658a8.3 8.3 0 0 1 5.8-2.343c2.175 0 4.261.843 5.8 2.343a7.9 7.9 0 0 1 2.402 5.659v10.67a7.9 7.9 0 0 1-2.402 5.658 8.3 8.3 0 0 1-5.8 2.344 8.3 8.3 0 0 1-5.8-2.344 7.9 7.9 0 0 1-2.402-5.659m21.872 0c0-.353-.144-.693-.4-.943a1.39 1.39 0 0 0-.967-.39c-.362 0-.71.14-.966.39-.257.25-.4.59-.4.943a10.54 10.54 0 0 1-3.204 7.545c-2.051 2-4.833 3.125-7.733 3.125s-5.682-1.124-7.733-3.125a10.54 10.54 0 0 1-3.203-7.545c0-.353-.145-.693-.4-.943a1.38 1.38 0 0 0-.968-.39c-.362 0-.71.14-.966.39s-.4.59-.4.943a13.17 13.17 0 0 0 3.536 8.943c2.273 2.451 5.396 3.993 8.767 4.328v5.401c0 .354.144.693.4.943.257.25.604.39.967.39.362 0 .71-.14.966-.39.257-.25.4-.59.4-.943v-5.401c3.371-.335 6.495-1.877 8.767-4.328a13.17 13.17 0 0 0 3.537-8.943"
    />
    <defs>
      <filter
        id="btn_home_voice_svg__a"
        width={138.342}
        height={138.342}
        x={0.606}
        y={0.099}
        colorInterpolationFilters="sRGB"
        filterUnits="userSpaceOnUse"
      >
        <feFlood floodOpacity={0} result="BackgroundImageFix" />
        <feColorMatrix
          in="SourceAlpha"
          result="hardAlpha"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
        />
        <feOffset />
        <feGaussianBlur stdDeviation={10} />
        <feComposite in2="hardAlpha" operator="out" />
        <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.2 0" />
        <feBlend in2="BackgroundImageFix" result="effect1_dropShadow_6_7590" />
        <feBlend
          in="SourceGraphic"
          in2="effect1_dropShadow_6_7590"
          result="shape"
        />
      </filter>
    </defs>
  </svg>
);
export default SvgBtnHomeVoice;
