export default function PlayerImageFallback({
  className = "",
}: {
  className?: string;
}) {
  return (
    <div
      className={`flex items-center justify-center bg-gradient-to-br from-slate-700 to-slate-800 ${className}`}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="w-16 h-16 text-slate-500"
      >
        <path
          fillRule="evenodd"
          d="M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.101a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.594 18.594 0 0 1 12 22.5c-2.805 0-5.463-.523-7.913-1.475a.75.75 0 0 1-.437-.695.75.75 0 0 1 .101-.729Z"
          clipRule="evenodd"
        />
      </svg>
    </div>
  );
}
