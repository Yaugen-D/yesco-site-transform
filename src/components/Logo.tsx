interface LogoProps {
  variant?: "horizontal" | "stacked";
  className?: string;
}

const Logo = ({ variant = "horizontal", className = "" }: LogoProps) => {
  // Brand colors from brandbook: Red #FC2217, Dark #333333
  const mark = (
    <svg viewBox="0 0 40 44" fill="none" xmlns="http://www.w3.org/2000/svg" className={variant === "horizontal" ? "h-7 w-auto" : "h-10 w-auto"}>
      <path d="M20 0L0 22h8l12-13.2L32 22h8L20 0z" fill="hsl(var(--brand-red))" />
      <path d="M20 44L0 22h8l12 13.2L32 22h8L20 44z" fill="hsl(var(--brand-red))" />
    </svg>
  );

  if (variant === "stacked") {
    return (
      <div className={`flex flex-col items-center gap-1 ${className}`}>
        {mark}
        <span className="text-lg font-bold tracking-tight text-foreground" style={{ fontFamily: "'Montserrat', sans-serif" }}>
          yescolab
        </span>
      </div>
    );
  }

  return (
    <div className={`flex items-center gap-2 ${className}`}>
      {mark}
      <span className="text-lg font-bold tracking-tight text-foreground" style={{ fontFamily: "'Montserrat', sans-serif" }}>
        yescolab
      </span>
    </div>
  );
};

export default Logo;
