import React from "react";

interface Props {
  fill?: string;
  size?: number;
  className?: string;
}

function Customers({ fill = "#4C5966", size = 16, className }: Props) {
  return (
    <svg
      xmlnsXlink="http://www.w3.org/1999/xlink"
      className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-1mbx69x"
      focusable="false"
      aria-hidden="true"
      viewBox="0 0 16 16"
      data-testid="CustomersIcon"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
    >
      <path
        d="M5.6 8.00001C7.3675 8.00001 8.8 6.56726 8.8 4.80001C8.8 3.03276 7.3675 1.60001 5.6 1.60001C3.8325 1.60001 2.4 3.03276 2.4 4.80001C2.4 6.56726 3.8325 8.00001 5.6 8.00001ZM6.8675 9.20001H4.3325C1.93925 9.20001 0 11.14 0 13.5325C0 14.0125 0.388 14.4 0.8665 14.4H10.3325C10.8125 14.4 11.2 14.0125 11.2 13.5325C11.2 11.14 9.26 9.20001 6.8675 9.20001Z"
        fill={fill}
      ></path>
      <path
        d="M11.9718 9.59999H10.1229C11.2733 10.5425 11.9943 11.9525 11.9943 13.5325C11.9943 13.8525 11.8992 14.1475 11.7439 14.4H15.1989C15.642 14.4 16 14.04 16 13.5775C16 11.39 14.2074 9.59999 11.9718 9.59999ZM10.7926 7.99999C12.3423 7.99999 13.5966 6.74749 13.5966 5.19999C13.5966 3.65249 12.3423 2.39999 10.7926 2.39999C10.1639 2.39999 9.58987 2.61387 9.12221 2.96274C9.41062 3.51574 9.59088 4.13499 9.59088 4.79999C9.59088 5.68799 9.2922 6.50349 8.8 7.16774C9.30797 7.67999 10.0115 7.99999 10.7926 7.99999Z"
        fill={fill}
        className="secondary"
      ></path>
    </svg>
  );
}

export default Customers;
