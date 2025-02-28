const SvgIcDetailBack = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 37 36"
    {...props}
  >
    <circle cx={18.679} cy={18} r={18} fill="#1E1E1E" />
    <g clipPath="url(#ic_detail_back_svg__a)">
      <path
        stroke="#fff"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="m21.679 25.5-7.5-7.5 7.5-7.5"
      />
    </g>
    <defs>
      <clipPath id="ic_detail_back_svg__a">
        <path fill="#fff" d="M6.679 6h24v24h-24z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgIcDetailBack;
