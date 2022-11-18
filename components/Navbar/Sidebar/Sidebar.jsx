import React, {useState} from 'react';
import Image from "next/image";
import Link from "next/link";
import {GrClose} from "react-icons/gr";
import { 
  TiSocialFacebook, 
  TiSocialLinkedin, 
  TiSocialTwitter, 
  TiSocialYoutube,
  TiSocialInstagram,
  TiArrowSortedDown,
  TiArrowSortedUp,
 } from "react-icons/ti";

 //INTERNAL IMPORT
 import Style from "./SideBar.module.css";
 import images from "../../../img";
 import Button from "../../Button/Button";


const Sidebar = ({ setOpenSideMenu }) => {
  //------ USESTATE
  const [openDiscover, setOpenDiscover] = useState(false);
  const [openHelp, setOpenHelp] = useState (false);

   
    //------ DISCOVER NAVIGATION MENU
    const discover = [
    {
      name: "Collection",
      link: "collection"
    },
    {
      name: "Search",
      link: "search"
    },
    {
      name: "Author Profile",
      link: "author-profile"
    },
    {
      name: "NFT Details",
      link: "NFT-details"
    },
    {
      name: "Account Settings",
      link: "account-settings"
    },
    {
      name: "Connect Wallet",
      link: "connect-wallet"
    },
    {
      name: "Blog",
      link: "blog"
    }
    ];
    //---- HELPCENTRE NAVIGATION MENU
    const helpCentre = [
      {
        name: "About",
        link: "about"
      },
      {
        name: "Contact Us",
        link: "contact-us"
      },
      {
        name: "Sign Up",
        link: "sign-up"
      },
      {
        name: "Sign In",
        link: "sign-in"
      },
      {
        name: "Subscription",
        link: "subscription"
      },
    ];

    const openDiscoverMenu = ()=> {
      if(!openDiscover){
        setOpenDiscover(true);
      } else{
        setOpenDiscover(false);
      }
    };

    const openHelpMenu = ()=> {
      if(!openHelp){
        setOpenhelp(true);
      } else{
        setOpenHelp(false);
      }
    };

    const closeSideBar = () => {
      setOpenSideMenu(false);
    };
  
  return (
    <div className={Style.sideBar}>
      <GrClose 
      className={Style.sideBar_closeBtn} 
      onClick={()=> closeSideBar()}
      />
      
      <div className={Style.sideBar_box}>
        <Image src={images.logo} alt="logo" width={150} height={150}  />
        <p>Discover the most well researched articles on everything that relates to NFT's
        </p>
        <div className={Style.sideBar_social}>
          <a href="#">
            <TiSocialFacebook/>
          </a>
          <a href="#">
            <TiSociallinkedin/>
          </a>
          <a href="#">
            <TiSocialTwitter/>
          </a>
          <a href="#">
            <TiSocialYoutube/>
          </a>
        </div> 
      </div>
      
      <div className={Style.sideBar_menu}>
        <div>
          <div 
          className={Style.sideBar_menu_box} 
          onClick={()=> openDiscoverMenu()}
          >
            <p>Discover</p>
            <TiArrowSortedDown/>
          </div>

          {
            openDiscover && (
              <div className={Style.sideBar_discover}>
                {discover.map((el, i) => (
                  <p key={i + 1}>
                    <Link href={{pathname: `${el.link}` }}>{el.name}</Link>
                  </p>
                ))}
              </div>  
            )}
        </div>

          <div>
            <div 
            className={Style.sideBar_menu_box} 
            onClick={()=> openHelpMenu()}
            >
              <p>Help Centre</p>
              <TiArrowSortedDown />
            </div>

            {
            openHelp && (
              <div className={Style.sideBar_discover}>
                {helpCentre.map((el, i) => (
                  <p key={i + 1}>
                    <Link href={{pathname: `${el.link}` }}>{el.name}</Link>
                  </p>
                ))}
              </div>  
            )}
        </div>      
      </div>

      <div className={Style.sideBar_button}>
        <Button btnName = "Create"/>
        <Button btnName = "Connect Wallet"/>
      </div>
    </div>
  );
};

export default Sidebar;