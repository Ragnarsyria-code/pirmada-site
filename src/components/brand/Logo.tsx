type LogoProps = {
  className?: string
  /** Render only the triangular mark. */
  markOnly?: boolean
}

export function LogoMark({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 30 34" fill="none" aria-hidden="true" className={className}>
      <path d="M13.873 26.256H8.599L0 11.352v14.102l10.663 6.191 3.21-5.389Z" fill="url(#pm-a)" />
      <path d="M6.306 13.07 8.943 8.484h20.408L14.676 0 2.752 6.879l3.554 6.191Z" fill="url(#pm-b)" />
      <path d="M21.44 13.07h8.026v12.383l-14.79 8.484h-.115l9.516-16.281-2.522-4.586" fill="url(#pm-c)" />
      <path d="m21.44 13.07-7.567 13.185L6.306 13.07H21.44Z" fill="currentColor" />
      <defs>
        <linearGradient id="pm-a" x1="-.524" y1="11.51" x2="10.689" y2="33.088" gradientUnits="userSpaceOnUse">
          <stop offset=".15" stopColor="currentColor" />
          <stop offset=".92" stopColor="currentColor" stopOpacity="0" />
        </linearGradient>
        <linearGradient id="pm-b" x1="30.578" y1="6.529" x2="2.867" y2="6.529" gradientUnits="userSpaceOnUse">
          <stop offset=".15" stopColor="currentColor" />
          <stop offset=".95" stopColor="currentColor" stopOpacity="0" />
        </linearGradient>
        <linearGradient id="pm-c" x1="14.706" y1="34.393" x2="29.783" y2="13.171" gradientUnits="userSpaceOnUse">
          <stop offset=".15" stopColor="currentColor" />
          <stop offset=".9" stopColor="currentColor" stopOpacity="0" />
        </linearGradient>
      </defs>
    </svg>
  )
}

export default function Logo({ className, markOnly }: LogoProps) {
  if (markOnly) return <LogoMark className={className} />
  return (
    <span className={`inline-flex items-center gap-2.5 text-fg ${className ?? ''}`}>
      <LogoMark className="h-[22px] w-auto shrink-0" />
      <span className="font-mono text-[13px] font-medium tracking-[0.22em]">PIRMADA</span>
    </span>
  )
}
