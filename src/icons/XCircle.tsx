export default function XCircle({
  className,
}: {
  className?: string;
}) {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className ?? ""}
    >
      <g clipPath="url(#clip0_0_646)">
        <path
          d="M12.5 7.50002L7.50001 12.5M7.50001 7.50002L12.5 12.5M18.3333 10C18.3333 14.6024 14.6024 18.3334 10 18.3334C5.39763 18.3334 1.66667 14.6024 1.66667 10C1.66667 5.39765 5.39763 1.66669 10 1.66669C14.6024 1.66669 18.3333 5.39765 18.3333 10Z"
          stroke="#333333"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_0_646">
          <rect width="20" height="20" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
}
