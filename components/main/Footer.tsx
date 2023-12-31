import React from "react";
import {
  RxDiscordLogo,
  RxGithubLogo,
  RxInstagramLogo,
  RxTwitterLogo,
  RxLinkedinLogo,
} from "react-icons/rx";

import { FaYoutube, FaFacebook } from "react-icons/fa";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="w-full h-full bg-transparent text-gray-200 shadow-lg p-[15px] z-50">
        <div className="w-full flex flex-col items-center justify-center m-auto">
            <div className="w-full h-full flex flex-row items-start justify-around flex-wrap">
                
                <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
                    <div className="font-bold text-[16px]">Contacts</div>
                    {/* <p className="flex flex-row items-center my-[15px] cursor-pointer">
                        <FaYoutube />
                        <span className="text-[15px] ml-[6px]">Youtube</span>    
                    </p> */}
                    <Link target="_blank" href="https://github.com/Rosemarries" passHref={true} className="flex flex-row items-center my-[15px] cursor-pointer">
                        <RxGithubLogo />
                        <span className="text-[15px] ml-[6px]">Github</span>    
                    </Link>
                    <Link target="_blank" href="https://discordapp.com/users/676003041387872287" passHref={true} className="flex flex-row items-center my-[15px] cursor-pointer">
                        <RxDiscordLogo />
                        <span className="text-[15px] ml-[6px]">Discord</span>
                    </Link>
                </div>
                <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
                    <div className="font-bold text-[16px]">Social Media</div>
                    <Link target="_blank" href="https://www.instagram.com/rosemarr13s/" passHref={true} className="flex flex-row items-center my-[15px] cursor-pointer">
                        <RxInstagramLogo />
                        <span className="text-[15px] ml-[6px]">Instagram</span>
                    </Link>
                    <Link target="_blank" href="https://web.facebook.com/profile.php?id=100010951620919" passHref={true} className="flex flex-row items-center my-[15px] cursor-pointer">
                        <FaFacebook />
                        <span className="text-[15px] ml-[6px]">Facebook</span>
                    </Link>
                    <Link target="_blank" href="https://www.linkedin.com/in/rosarin-niyomsuntisuk-104382289" passHref={true} className="flex flex-row items-center my-[15px] cursor-pointer">
                        <RxLinkedinLogo />
                        <span className="text-[15px] ml-[6px]">Linkedin</span>
                    </Link>
                </div>
                <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
                    <div className="font-bold text-[16px]">About</div>
                    {/* <p className="flex flex-row items-center my-[15px] cursor-pointer">
                     
                        <span className="text-[15px] ml-[6px]">Become Sponsor</span>    
                    </p> */}
                    <p className="flex flex-row items-center my-[15px] cursor-pointer">
                      
                        <span className="text-[15px] ml-[6px]">Learning about me</span>    
                    </p>
                    <Link href="mailto:rosarinniyomsuntisuk@gmail.com" passHref={true} className="flex flex-row items-center my-[15px] cursor-pointer">
                  
                        <span className="text-[15px] ml-[6px]">rosarinniyomsuntisuk@gmail.com</span>    
                    </Link>
                </div>
            </div>

            <div className="mb-[20px] text-[15px] text-center">
                &copy; Rosemarries All rights reserved
            </div>
        </div>
    </div>
  )
}

export default Footer