"use client";
import AnimatedText from "@/components/AnimatedText";
import TransitionEffect from "@/components/TransitionEffect";
import React, { useState, useEffect } from "react";
import { IoMdSend } from "react-icons/io";
export default function page() {
  return (
    <>
      <TransitionEffect />
      <div className="max-w-screen-xl mx-auto h-full w-full">
        <div className="flex justify-center mt-8">
          <AnimatedText className={"contact_text_shadow"}>
            Contact Me
          </AnimatedText>
        </div>
        <div className="text-gray-600 body-font relative ">
          <div className="container px-5 py-24 mx-auto">
            <div className="lg:w-1/2 md:w-2/3 mx-auto">
              <form
                className="flex flex-wrap -m-2"
                action="https://getform.io/f/nbvkklga"
                method="POST"
              >
                <div className="p-2 w-full">
                  <div className="relative">
                    <label
                      htmlFor="name"
                      className="leading-7 text-dark dark:text-light text-base"
                    >
                      Name
                    </label>
                    <input
                      required
                      type="text"
                      id="name"
                      name="name"
                      className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    />
                  </div>
                </div>
                <div className="p-2 w-full">
                  <div className="relative">
                    <label
                      htmlFor="email"
                      className="leading-7 text-dark dark:text-light text-base"
                    >
                      Email
                    </label>
                    <input
                      required
                      type="email"
                      id="email"
                      name="email"
                      className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    />
                  </div>
                </div>
                <div className="p-2 w-full">
                  <div className="relative">
                    <label
                      htmlFor="phone"
                      className="leading-7 text-dark dark:text-light text-base"
                    >
                      Phone
                    </label>
                    <input
                      required
                      type="phone"
                      id="phone"
                      name="phone"
                      className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    />
                  </div>
                </div>
                <div className="p-2 w-full">
                  <div className="relative">
                    <label
                      htmlFor="message"
                      className="leading-7 text-dark dark:text-light text-base"
                    >
                      Tell Me About Your Project?
                    </label>
                    <textarea
                      required
                      id="information"
                      name="Clients Information"
                      className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                      defaultValue={""}
                    />
                  </div>
                </div>
                <div className="p-2 w-full">
                  <button className="flex mx-auto" type="submit">
                    <div className="bg-dark w-max text-light px-4 py-2 rounded-lg flex items-center justify-center gap-1 group dark:bg-light dark:text-dark ">
                      <p className="text-lg text-light dark:text-dark">
                        Send Message
                      </p>
                      <IoMdSend
                        color={"#2fce84"}
                        size={20}
                        className=" group-hover:translate-x-2 transition-all"
                      />
                    </div>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
