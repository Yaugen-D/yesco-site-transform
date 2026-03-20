import logoSvg from "@/assets/scep_logo.jpg";

interface LogoProps {
  className?: string;
}

const Logo = ({ className = "" }: LogoProps) => (
  <img src={logoSvg} alt="SCEP" className={`h-12 w-auto ${className}`} />
);

export default Logo;
