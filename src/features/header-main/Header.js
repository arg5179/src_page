import React, { useState, Fragment } from "react";
import { Link } from "react-router-dom";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      <div>
        <div className="bg-white">
          <div className="relative isolate px-6 pt-14 lg:px-8">
            <header className="absolute inset-x-0 top-0 z-50"></header>

            <div className="relative isolate px-6 pt-14 lg:px-8"></div>
            <div
              className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
              aria-hidden="true"
            ></div>
            <div className="mt-10">
              <div className="text-center">
                <h className="text-4xl mb-3">Welcome to</h>
                <h1 className="text-4xl font-bold text-blue-900 tracking-tight sm:text-6xl mt-3 mb-5">
                  openworkhub
                </h1>

                <p className="mt-10 text-lg leading-8 text-gray-600">
                  Discover endless opportunities at OpenWorkHub: A user-friendly
                  platform connecting tasks and talents, fostering
                  collaboration, economic growth, and trust in your local
                  community. Join us today
                </p>

                <div class=" mb-6 w-2/5 mt-10 mx-auto min-h-full gap-4">
                  <input
                    class="h-12 min-w-[20rem] rounded-lg border-blue indent-4 text-grey-500 shadow-lg focus:outline-none focus:ring focus:ring-blue-600"
                    type="text"
                    placeholder="What do you need help with"
                  />

                  <button class="h-12 ml-2 min-w-[8rem] rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                    Submit
                  </button>
                </div>
              </div>
            </div>
            <div
              className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
              aria-hidden="true"
            >
              <div
                className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
                style={{
                  clipPath:
                    "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
