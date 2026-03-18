import logoSvg from "@/assets/yescolab_logo_hor_black.svg";

interface LogoProps {
  className?: string;
}

const Logo = ({ className = "" }: LogoProps) => (
  <img src={logoSvg} alt="yescolab" className={`h-10 w-auto ${className}`} />
);

export default Logo;
