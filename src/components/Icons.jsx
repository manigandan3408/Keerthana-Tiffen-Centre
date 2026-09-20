export function StarIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <path d="M12 2.5l2.95 6.1 6.7.9-4.9 4.6 1.25 6.6L12 17.5l-6 3.2 1.25-6.6-4.9-4.6 6.7-.9z" />
    </svg>
  );
}

export function HeartIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
    </svg>
  );
}

export function LogoMark({ className }) {
  return (
    <svg className={className} viewBox="0 0 64 64" aria-hidden="true" focusable="false">
      <circle cx="32" cy="32" r="30" fill="#f5b81c" />
      <circle cx="32" cy="32" r="30" fill="none" stroke="#fff2d2" strokeWidth="2" />
      <path
        d="M24 29c-3-4 3-6 0-10M32 29c-3-4 3-6 0-10M40 29c-3-4 3-6 0-10"
        stroke="#123a27"
        strokeWidth="2.6"
        fill="none"
        strokeLinecap="round"
      />
      <path d="M15 34h34a17 17 0 0 1-34 0z" fill="#123a27" />
      <rect x="21" y="52" width="22" height="3" rx="1.5" fill="#123a27" />
    </svg>
  );
}

/** Contactless / NFC symbol (a dot and three arcs). */
export function NfcIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <g fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round">
        <path d="M8.5 8.2a5.6 5.6 0 0 1 0 7.6" />
        <path d="M12 5.6a9.6 9.6 0 0 1 0 12.8" />
        <path d="M15.5 3a13.6 13.6 0 0 1 0 18" />
      </g>
      <circle cx="4.6" cy="12" r="1.7" fill="currentColor" />
    </svg>
  );
}
