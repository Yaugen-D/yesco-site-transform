import Logo from "@/components/Logo";

const Footer = () =>
<footer className="border-t border-border px-6 py-12 md:px-12 lg:px-20">
    <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
      <div>
        <Logo />
        <p className="mt-2 text-sm text-muted-foreground">
          SRE & Infrastructure Services
        </p>
      </div>

      <div className="flex flex-col gap-2 text-sm text-muted-foreground md:items-end">
        <a href="mailto:contact@scepgroup.com" className="transition-colors hover:text-foreground">
          contact@scepgroup.com
        </a>
        <a
        href="https://scepgroup.com"
        target="_blank"
        rel="noopener noreferrer"
        className="transition-colors hover:text-foreground">
        
          scepgroup.com
        </a>
        <a
        href="https://t.me/scepgroup_bot"
        target="_blank"
        rel="noopener noreferrer"
        className="transition-colors hover:text-foreground">Telegram  · @scepgroup_bot 


      </a>
      </div>
    </div>

    <div className="mt-8 flex flex-wrap gap-4 text-xs text-muted-foreground">
      <span>NDA on first call</span>
      <span>·</span>
      <span>Crypto billing available</span>
      <span>·</span>
      <span>Full discretion standard</span>
    </div>
  </footer>;


export default Footer;
