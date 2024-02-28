"use client";

import { Input, Option, Select } from "@material-tailwind/react";
import React from "react";
import { useState, useEffect } from "react";
import { Calendar, Clock, PlusCircle } from "react-feather";
import CurrencyInput from "react-currency-input-field";

function CardCreate() {
  const MIN_CAPACITY = 1;
  const MAX_CAPACITY = 50000;
  const [capacity, setCapacity] = useState(0);

  useEffect(() => {
    console.log(document.getElementById("cpy").value, capacity);
  }, [capacity]);

  return (
    <>
      <div className="my-10 w-[900px] create-container">
        <div className="create-grid">
          <div className="w-full max-w-full">
            <div className="create-card">
              {/* SECTION BANNER */}
              <div className="block">
                <div className="relative min-h-[150px] max-h-[421px]">
                  <div className="create-banner">
                    <img
                      className="w-full object-cover"
                      src="https://www.loket.com/images/banner-event.jpg"
                      alt=""
                    />
                    {/* TEXT OVERLAY */}
                    <div className="absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center text-white text-sm font-thin">
                      <div className="text-center flex flex-col items-center">
                        <div>
                          {" "}
                          <input
                            className="items-center justify-center"
                            type="file"
                          />
                        </div>
                        <div
                          className="items-center justify-center mb-1"
                          href=""
                        ></div>
                        {/* <p>Upload your image/poster/banner</p> */}
                        <p>
                          Recommended 16:9 aspect ratio and max file size 1.5 MB
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* SECTION BODY */}
              <div className="pt-4 pb-10 pr-10 pl-10">
                <div className="grid grid-cols-1">
                  <div className="mb-4">
                    {/* Title */}
                    <div className="w-full">
                      <Input variant="standard" label="Event's Title" />
                    </div>
                  </div>
                  {/* Categories */}
                  <div className="mb-4">
                    <Select variant="standard" label="Category">
                      <Option>Concert</Option>
                      <Option>Stand Up Comedy</Option>
                      <Option>Seminar</Option>
                      <Option>Theatre</Option>
                    </Select>
                  </div>
                  {/* Description */}
                  <div className="mb-4">
                    <Input variant="standard" label="Description" />
                  </div>

                  {/* Capacity */}
                  <div className="flex justify-between mb-4">
                    <div className="flex">Capacity</div>
                    <div>
                      <input
                        className=" border-b-[1px] border-[#B0BEC5] "
                        defaultValue={capacity}
                        id="cpy"
                        onChange={(e) => {
                          let { value } = e.target;
                          // if (
                          //   Number(value) >= MIN_CAPACITY &&
                          //   Number(value) <= MAX_CAPACITY
                          // )
                          if (isNaN(value) || e.target.value == "")
                            e.target.value = "";
                          else if (value < MIN_CAPACITY) e.target.value = 1;
                          else if (value > MAX_CAPACITY)
                            e.target.value = MAX_CAPACITY;

                          if (e.target.value) setCapacity(e.target.value);
                        }}
                      />
                    </div>
                  </div>

                  {/* Price */}
                  <div className="flex justify-between mb-4">
                    <div className="flex">Ticket price</div>
                    <div className="ml-5">
                      <CurrencyInput
                        className="border-b-[1px] border-[#B0BEC5] "
                        id="input-example"
                        name="input-name"
                        prefix="Rp "
                        color=""
                        placeholder="Please enter a price"
                        defaultValue={0}
                        decimalsLimit={3}
                        onValueChange={(value, name, values) =>
                          console.log(value, name, values)
                        }
                      />
                    </div>
                  </div>

                  {/* GRID 2 */}
                  <div className="grid grid-cols-3">
                    <div className="">
                      <div>Organized by</div>
                      <div className="flex pt-2 pb-1 items-center">
                        <img
                          className="inline-block rounded-full object-scale-down w-10 h-10"
                          src="https://media.istockphoto.com/id/1200064810/id/vektor/tombol-ikon-login-profil-pengguna-atau-autentikasi-akses-orang-simbol-tanda-logo-masuk-akun.jpg?s=170667a&w=0&k=20&c=5qLbb6tV1VG3Yz_fFYVfdr8bbV8i2pcRSJq9Dlf7nzE="
                          alt=""
                        />
                        <div className="ml-3 truncate max-w-48">
                          `{"Reserved User"}`
                        </div>
                      </div>
                    </div>
                    <div className="">
                      <div>Date and Time</div>
                      <div className="flex gap-8 text-base items-center my-1">
                        <div className="flex gap-3 items-center">
                          <div className="">
                            <Calendar color="black" fill="#F2CD5C" size={20} />
                          </div>
                          <div>Reserved UI Date Picker</div>
                        </div>
                      </div>
                      <div className="flex gap-3 items-center">
                        <div className="menu-item">
                          <Clock color="black" fill="#F2CD5C" size={20} />
                        </div>
                        <div>Reserved UI Time Picker</div>
                      </div>
                    </div>

                    <div className="">
                      <div>Location</div>
                      <Select variant="standard" label="Choose location">
                        <Option>Jakarta</Option>
                        <Option>Bandung</Option>
                        <Option>Yogyakarta</Option>
                        <Option>Balikpapan</Option>
                      </Select>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default CardCreate;
