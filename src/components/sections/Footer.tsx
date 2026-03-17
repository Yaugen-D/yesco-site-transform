const Footer = () => (
  <footer className="border-t border-border px-6 py-12 md:px-12 lg:px-20">
    <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
      <div>
        <p className="text-lg font-bold tracking-tight text-foreground">yescolab</p>
        <p className="mt-1 text-sm text-muted-foreground">
          SRE & Infrastructure Services
        </p>
      </div>

      <div className="flex flex-col gap-2 text-sm text-muted-foreground md:items-end">
        <a href="mailto:hello@yescolab.com" className="transition-colors hover:text-foreground">
          hello@yescolab.com
        </a>
        <a
          href="https://yescolab.com"
          target="_blank"
          rel="noopener noreferrer"
          className="transition-colors hover:text-foreground"
        >
          yescolab.com
        </a>
        <a
          href="https://t.me/yescolab"
          target="_blank"
          rel="noopener noreferrer"
          className="transition-colors hover:text-foreground"
        >
          @yescolab · Telegram
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
  </footer>
);

export default Footer;
