import React from "react";
import { Carousel, Typography } from "@material-tailwind/react";
import { Button } from "@material-tailwind/react";
import "../index.css";
import { NavbarWeb } from "../topbar/Navbar";

import Footer from "../pages/Footer";


export function MainPage() {
  return (
    <>
      <div className="w-full">
           <NavbarWeb />

        <section className="h-100 bg-[#f3f3f3] px-40 py-10 ">
          <div className="flex justify-center gap-12">
            <div className="flex flex-col justify-center">
              <Typography variant="h1" color="blue-gray">
              Welcome to TMS Timetable Generation Portal
              </Typography>
              <Typography
                variant="h4"
                color="blue-gray"
                className="mt-5 font-normal"
              >
               TMS's Transparent Timetable Generation Universe
              </Typography>
              <Typography variant="h5" color="blue-gray" className="font-light">
                Unlock the Power of Technology
              </Typography>
              <div className="mt-5  hidden lg:flex">
                <a href="">
                  <Button className=" px-10" size="sm">
                    Login
                  </Button>
                </a>
              </div>{" "}
            </div>

            <div className="header_img relative">
              <img
                className="relative z-10 h-96 w-full "
                src="../img/17725.jpg"
                alt="nature image"
              />
            </div>
          </div>
        </section>

        <section className="bg-[#616161]/90">
          <div className="flex flex-col lg:flex-row p-5 lg:px-40">
            <div className="w-100 p-10 text-center text-white">
              <Typography variant="h4">Efficiency</Typography>
              <Typography variant="p">
                We help you optimize generation and timetable management, saving
                both time and resources.
              </Typography>
            </div>
            <div className="w-100 p-10 text-center text-white">
              <Typography variant="h4">Accuracy</Typography>
              <Typography variant="p">
                {" "}
                Our algorithm and tool tools ensure precise decision-making and
                timetable planning.
              </Typography>
            </div>
            <div className="w-100 p-10 text-center text-white">
              <Typography variant="h4">Security</Typography>
              <Typography variant="p">
                We prioritize data security and compliance with all relevant
                regulations, so you can trust us with your sensitive
                information.
              </Typography>
            </div>
          </div>
        </section>


     
      </div>

      <Footer />
    </>
  );
}
