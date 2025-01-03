// components/LogoutIcon.js
import React from "react";
import Svg, { Path } from "react-native-svg";

export const LogoutIcon = (props: any) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      d="M10 22H5a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h5M17 16l4-4-4-4M21 12H9"
      stroke="#BDBDBD"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);
