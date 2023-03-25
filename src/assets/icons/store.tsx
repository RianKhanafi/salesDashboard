import { IConsProps } from "module/common/type";
import * as React from "react";

function StoreSvg(props: React.SVGProps<SVGSVGElement> & IConsProps) {
  const { width = 24, height = 24, fill = "#7C7C7A" } = props;
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 26 26"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2.02734 10.3335V22.3335C2.02734 23.0407 2.28424 23.719 2.74153 24.2191C3.19881 24.7192 3.81902 25.0002 4.46572 25.0002H21.5343C22.181 25.0002 22.8012 24.7192 23.2585 24.2191C23.7158 23.719 23.9727 23.0407 23.9727 22.3335V10.3335"
        stroke={fill}
        stroke-width="1.5"
      />
      <path
        d="M16.4538 25.0002V17.0002C16.4538 16.2929 16.1969 15.6146 15.7396 15.1145C15.2823 14.6144 14.6621 14.3335 14.0154 14.3335H11.577C10.9303 14.3335 10.3101 14.6144 9.85285 15.1145C9.39557 15.6146 9.13867 16.2929 9.13867 17.0002V25.0002"
        stroke={fill}
        stroke-width="1.5"
        stroke-miterlimit="16"
      />
      <path
        d="M24.9704 9.48533L22.9051 1.58C22.8614 1.41286 22.7691 1.26585 22.6422 1.1612C22.5152 1.05655 22.3606 0.999961 22.2016 1H17.2676L17.8467 8.60533C17.8554 8.72763 17.8908 8.84586 17.9497 8.95022C18.0087 9.05458 18.0895 9.14204 18.1856 9.20533C18.6611 9.516 19.5901 10.0893 20.3155 10.3333C21.5542 10.7507 23.3635 10.6 24.3949 10.4613C24.4952 10.4472 24.5915 10.4092 24.6769 10.3502C24.7624 10.2911 24.8351 10.2124 24.8899 10.1195C24.9447 10.0265 24.9803 9.92165 24.9942 9.81212C25.0081 9.7026 25 9.59107 24.9704 9.48533Z"
        stroke={fill}
        stroke-width="1.5"
      />
      <path
        d="M15.4378 10.3333C16.1303 10.1 17.0081 9.568 17.4982 9.25067C17.6125 9.1763 17.7051 9.0681 17.7656 8.93857C17.826 8.80905 17.8516 8.66347 17.8396 8.51867L17.2666 1H8.73227L8.15925 8.51867C8.14698 8.66369 8.17253 8.80954 8.23295 8.93933C8.29336 9.06912 8.38618 9.17753 8.50062 9.252C8.99074 9.568 9.86855 10.1 10.561 10.3333C12.3813 10.9467 13.6175 10.9467 15.4378 10.3333Z"
        stroke={fill}
        stroke-width="1.5"
      />
      <path
        d="M3.09497 1.58L1.02967 9.48667C1.00052 9.59224 0.992727 9.70349 1.00683 9.81269C1.02094 9.92188 1.05661 10.0264 1.11136 10.119C1.16611 10.2116 1.23864 10.2901 1.32391 10.349C1.40917 10.4079 1.50513 10.4457 1.60513 10.46C2.63534 10.6 4.44583 10.7493 5.68453 10.3333C6.40994 10.0893 7.34018 9.516 7.81444 9.20667C7.91068 9.14324 7.99166 9.05557 8.05062 8.95097C8.10958 8.84636 8.14481 8.72786 8.15338 8.60533L8.73249 1H3.79844C3.63949 0.999961 3.48485 1.05655 3.35792 1.1612C3.23099 1.26585 3.13869 1.41286 3.09497 1.58Z"
        stroke={fill}
        stroke-width="1.5"
      />
    </svg>
  );
}

export default StoreSvg;