import logoSvg from "@/assets/yescolab_logo_hor_black.svg";

interface LogoProps {
  className?: string;
}

const Logo = ({ className = "" }: LogoProps) => (
  <img src={logoSvg} alt="YesColab" className={`h-12 w-auto ${className}`} />
);

export default Logo;
