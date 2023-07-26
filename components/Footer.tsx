import React from "react";
import Image from "next/image";
import { footerLinks } from "@/constants";
import Link from "next/link";

type ColumnProps = {
  title: string;
  Links: Array<string>;
};

const FooterColumn = ({ title, Links }: ColumnProps) => (
  <div className="footer_column">
    <h4 className="font-semibold">{title}</h4>
    <ul className="flex flex-col gap-2 font-normal">
      {Links.map((link) => (
        <Link href="/" key={link}>
          {link}
        </Link>
      ))}
    </ul>
  </div>
);

const Footer = () => {
  return (
    <footer className="flexStart footer">
      <div className="flex flex-col gap-12 w-full">
        <div className="flex flex-col items-start">
          <Image src="/logo.svg" width={115} height={38} alt={"PokerTracker"} />
          <p className="text-start text-sm font-normal mt-5 max-w-xs">
            track your poker scores
          </p>
        </div>
        <div className="flex flex-wrap gap-12">
          <FooterColumn
            title={footerLinks[0].title}
            Links={footerLinks[0].links}
          />
          <div className="flex-1 flex flex-col gap-4">
            <FooterColumn
              title={footerLinks[1].title}
              Links={footerLinks[1].links}
            />
            <FooterColumn
              title={footerLinks[2].title}
              Links={footerLinks[2].links}
            />
          </div>
          <FooterColumn
            title={footerLinks[3].title}
            Links={footerLinks[3].links}
          />
          <div className="flex-1 flex flex-col gap-4">
            <FooterColumn
              title={footerLinks[4].title}
              Links={footerLinks[4].links}
            />
            <FooterColumn
              title={footerLinks[5].title}
              Links={footerLinks[5].links}
            />
          </div>
        </div>
      </div>

      <div className="flexBetween footer_copyright">
        <p>@2023 PokerTracker All rights reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
