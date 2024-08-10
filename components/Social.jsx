import Link from "next/link";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import React from "react";

const socials = [
  { icon: <FaGithub />, link: "https://github.com/Tarun-Kataruka" },
  {
    icon: <FaLinkedin />,
    link: "https://www.linkedin.com/in/tarun-kataruka-29494327a/",
  },
  { icon: <FaInstagram />, link: "https://www.instagram.com/tarun.kataruka/" },
];

const Social = ({ containerStyles, iconStyles }) => {
  return (
    <div className={containerStyles}>
      {socials.map((item, index) => {
        return (
          <Link key={index} href={item.link} className={iconStyles}>
            {item.icon}
          </Link>
        );
      })}
    </div>
  );
};

export default Social;
