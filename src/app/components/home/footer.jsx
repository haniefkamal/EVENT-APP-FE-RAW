import Image from "next/image";
import React from "react";
import {
  ChevronRight,
  Facebook,
  Instagram,
  Twitter,
  Youtube,
} from "react-feather";

function SectionFooter() {
  return (
    <>
      {/* end BannerFoot*/}
      <div className="bg-[#F2CD5C] w-full flex justify-center">
        <div
          className="py-10 max-w-[880px] w-full px-4" // Added px-4 for padding on small screens
          style={{ fontFamily: "Poppins" }}
        >
          {/* Responsive adjustments */}
          <div className="flex flex-col md:flex-row md:justify-between">
            <div id="findus" className="text-base mb-5 md:mb-0 md:mr-5">
              <div className="font-semibold mb-3">Find Us</div>
              {/* Address */}
              <div className="text-sm mb-3 font-extralight">
                Head Quarter Office: <br />
                Jalan Jenderal Sudirman No.21 <br />
                Kuningan, Setiabudi <br />
                Jakarta
              </div>
              {/* Telephone */}
              <div className="text-base mt-5 ">
                <span className="border-b pb-1 border-black font-light">
                  +62 127127127
                </span>
              </div>
              {/* Open hours */}
              <div className="text-sm mt-3 font-extralight">
                <div>
                  Mo - Fr
                  <span className="ml-3">
                    09.00 - 16.00 WIB <br />
                  </span>
                </div>
              </div>
              {/* Social Media */}
              <div className="flex gap-5 mt-7">
                <button>
                  <Facebook color="black" size={25} />
                </button>
                <button>
                  <Youtube color="black" size={25} />
                </button>
                <button>
                  <Twitter color="black" size={25} />
                </button>
                <button>
                  <Instagram color="black" size={25} />
                </button>
              </div>
            </div>

            <div id="aboutus" className="text-base mb-5 md:mb-0 md:mr-5">
              <div className="font-semibold mb-3">Event Categories</div>
              <div className="font-extralight text-sm py-1">
                <a href="">Concert</a>
              </div>
              <div className="font-extralight text-sm py-1">
                <a href="">Standup Comedy</a>
              </div>
              <div className="font-extralight text-sm py-1">
                <a href="">Seminar</a>
              </div>
              <div className="font-extralight text-sm py-1">
                <a href="">Theatre</a>
              </div>
            </div>

            <div id="Products" className="text-base mb-5 md:mb-0 md:mr-5">
              <div className="font-semibold mb-3">Event Locations</div>
              <div className="font-extralight text-sm py-1">
                <a href="">Jakarta</a>
              </div>
              <div className="font-extralight text-sm py-1">
                <a href="">Bandung</a>
              </div>
              <div className="font-extralight text-sm py-1">
                <a href="">Yogyakarta</a>
              </div>
              <div className="font-extralight text-sm py-1">
                <a href="">Balikpapan</a>
              </div>
            </div>

            <div
              id="others"
              className="text-base mb-5 md:mb-0"
              style={{ fontFamily: "Poppins" }}
            >
              {/* Mailing List */}
              <div className="font-semibold mb-3 text-base">
                Subscribe to our newsletter
              </div>
              {/* Input Email Box*/}
              <div className="flex">
                <label className="relative block">
                  <input
                    className="placeholder:text-block italic bg-white w-full border border-[#93959C] rounded-md py-1 pl-2 pr-8 shadow-sm focus:outline-none focus:border-[#286b48] focus:ring-[#286b48] focus:ring-1 sm:text-sm text-black font-extralight"
                    style={{ fontFamily: "Poppins" }}
                    placeholder="Enter your email"
                    type="text"
                    name="mailing"
                  />
                  <button className="absolute inset-y-0 right-0 flex items-center px-2">
                    <div className="flex items-center justify-center h-5 w-5 text-black">
                      <ChevronRight color="gray" size={20} />
                    </div>
                  </button>
                </label>
              </div>
              {/* Payment Section */}
              <div className="font-semibold mb-3 mt-5">Payment</div>
              {/* Payment content*/}
              <div className="flex gap-3">
                <div id="visa">
                  <img
                    className="rounded-md w-12 h-7 object-scale-down bg-white px-1 py-1"
                    src="https://1000logos.net/wp-content/uploads/2017/06/VISA-Logo.jpg"
                    alt=""
                  />
                </div>
                <div id="mc">
                  <img
                    className="rounded-md w-12 h-7 object-scale-down bg-white px-1 py-1"
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Mastercard-logo.svg/1280px-Mastercard-logo.svg.png"
                    alt=""
                  />
                </div>
                <div id="paypal">
                  <img
                    className="rounded-md w-12 h-7 object-scale-down px-1 py-1 bg-[#0171C0]"
                    src="https://cdn.iconscout.com/icon/free/png-256/free-paypal-3521628-2945072.png"
                    alt=""
                  />
                </div>
                <div id="atmber">
                  <img
                    className="rounded-md w-12 h-7 object-scale-down bg-white px-1 py-1"
                    src="https://upload.wikimedia.org/wikipedia/id/e/e8/ATM_Bersama_2016.png"
                    alt=""
                  />
                </div>
                <div id="ovo">
                  <img
                    className="rounded-md w-12 h-7 object-scale-down bg-[#491F8A] px-1 py-1"
                    src="https://storage.googleapis.com/ovo-prd-fs-edu-blog-static/cerdasfinansial/f5807836-ovo-logo-putih.png"
                    alt=""
                  />
                </div>
              </div>
              <div className="font-extralight mt-14 text-xs">
                © 2024 EVÉNT. All rights reserved.
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SectionFooter;
