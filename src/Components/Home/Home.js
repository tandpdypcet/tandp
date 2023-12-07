import React from "react";
import Slider from "../Slider/Slider";
import { Cards } from "./Cards";
import Management from "./Management";
import AnnouncementSlider from "../Announcement/Announcement";
import { Navbar_b } from "../Navbar/Navbar_b";
export const Home = () => {
    return (
        <div>
            <Navbar_b/>
            <Slider/>
            <br/>
            <Cards/>
            <br/>
            <Management />
            
            <AnnouncementSlider />
           
            
        </div>
    )
}
