export function PhoenixMark({
  className,
  animated = false,
  id = "pm",
}: {
  className?: string;
  animated?: boolean;
  id?: string;
}) {
  return (
    <svg
      viewBox="0 0 200 200"
      fill="none"
      className={className}
      role="img"
      aria-label="Phoenix India flame mark"
    >
      <defs>
        <linearGradient id={`${id}-g`} x1="0" y1="200" x2="200" y2="0">
          <stop offset="0%" stopColor="var(--ember)" />
          <stop offset="45%" stopColor="var(--flame)" />
          <stop offset="100%" stopColor="var(--flame-2)" />
        </linearGradient>
      </defs>
      <g
        stroke={`url(#${id}-g)`}
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
        {...(animated
          ? {
              "data-animate": "true",
              style: {
                strokeDasharray: 900,
                strokeDashoffset: 900,
                animation: "ember-draw 2.4s ease forwards",
              },
            }
          : {})}
      >
        <path d="M100 178c-26-16-40-38-40-62 0-30 22-46 26-74 14 14 20 26 20 40 8-8 12-16 12-28 20 20 30 42 30 64 0 24-14 44-48 60Z" />
        <path d="M62 96C44 90 30 76 24 58c22 2 36 8 46 18" />
        <path d="M138 96c18-6 32-20 38-38-22 2-36 8-46 18" />
        <path d="M100 178v-46" strokeWidth="3" />
      </g>
    </svg>
  );
}
