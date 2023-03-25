import { IConsProps } from "module/common/type";
import * as React from "react";

function SvgOpen(props: React.SVGProps<SVGSVGElement> & IConsProps) {
  const { width = 24, height = 24, fill = "#C5C7CD" } = props;
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M4 18C3.71667 18 3.47933 17.904 3.288 17.712C3.096 17.5207 3 17.2833 3 17C3 16.7167 3.096 16.4793 3.288 16.288C3.47933 16.096 3.71667 16 4 16H15C15.2833 16 15.521 16.096 15.713 16.288C15.9043 16.4793 16 16.7167 16 17C16 17.2833 15.9043 17.5207 15.713 17.712C15.521 17.904 15.2833 18 15 18H4ZM4 13C3.71667 13 3.47933 12.904 3.288 12.712C3.096 12.5207 3 12.2833 3 12C3 11.7167 3.096 11.479 3.288 11.287C3.47933 11.0957 3.71667 11 4 11H12C12.2833 11 12.521 11.0957 12.713 11.287C12.9043 11.479 13 11.7167 13 12C13 12.2833 12.9043 12.5207 12.713 12.712C12.521 12.904 12.2833 13 12 13H4ZM4 8C3.71667 8 3.47933 7.90433 3.288 7.713C3.096 7.521 3 7.28333 3 7C3 6.71667 3.096 6.479 3.288 6.287C3.47933 6.09567 3.71667 6 4 6H15C15.2833 6 15.521 6.09567 15.713 6.287C15.9043 6.479 16 6.71667 16 7C16 7.28333 15.9043 7.521 15.713 7.713C15.521 7.90433 15.2833 8 15 8H4ZM17.4 12L20.3 14.9C20.4833 15.0833 20.575 15.3167 20.575 15.6C20.575 15.8833 20.4833 16.1167 20.3 16.3C20.1167 16.4833 19.8833 16.575 19.6 16.575C19.3167 16.575 19.0833 16.4833 18.9 16.3L15.3 12.7C15.1 12.5 15 12.2667 15 12C15 11.7333 15.1 11.5 15.3 11.3L18.9 7.7C19.0833 7.51667 19.3167 7.425 19.6 7.425C19.8833 7.425 20.1167 7.51667 20.3 7.7C20.4833 7.88333 20.575 8.11667 20.575 8.4C20.575 8.68333 20.4833 8.91667 20.3 9.1L17.4 12Z"
        fill={fill}
      />
    </svg>
  );
}

export default SvgOpen;
