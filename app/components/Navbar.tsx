"use client";
import { useState } from "react";

interface IPROPS {
  logo: string;
  navbarItems: any[];
}

import Link from "next/link";
import Image from "next/image";
import { Disclosure } from "@headlessui/react";

export default function Navbar(props: IPROPS) {
  const [activeTab, sectActiveTab] = useState("Home");

  return (
    <div className="w-full bg-white">
      <nav className="relative mx-auto flex max-w-[1240px] flex-wrap items-center justify-between p-8 lg:justify-between xl:px-0">
        {/* Logo  */}
        <Disclosure>
          {({ open }) => (
            <>
              <div className="flex w-full flex-wrap items-center justify-between lg:w-auto">
                <Link href="/">
                  <span className="flex items-center space-x-2 text-2xl font-medium text-indigo-500 dark:text-gray-100">
                    <span>
                      <Image src={props?.logo} alt="N" width="40" height="40" />
                    </span>
                  </span>
                </Link>

                <Disclosure.Button
                  aria-label="Toggle Menu"
                  className="dark:focus:bg-trueGray-700 ml-auto rounded-md px-2 py-1 text-gray-500 hover:text-indigo-500 focus:bg-indigo-100 focus:text-indigo-500 focus:outline-none dark:text-gray-300 lg:hidden"
                >
                  <svg
                    className="h-6 w-6 fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                  >
                    {open && (
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"
                      />
                    )}
                    {!open && (
                      <path
                        fillRule="evenodd"
                        d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
                      />
                    )}
                  </svg>
                </Disclosure.Button>

                <Disclosure.Panel className="my-5 flex  w-full flex-col flex-wrap gap-4 lg:hidden">
                  <>
                    {props?.navbarItems.map((item) => (
                      <Link
                        href={"/"}
                        key={item?.key}
                        onClick={() => sectActiveTab(item.itemName)}
                        className={`cursor-pointer ${
                          activeTab === item?.itemName
                            ? " text-black"
                            : "text-gray-400"
                        } font-medium hover:text-black`}
                      >
                        {item?.itemName}
                      </Link>
                    ))}
                    <button className="rounded-md bg-[#059669] px-6 py-3 text-white">
                      Sign Up
                    </button>
                  </>
                </Disclosure.Panel>
              </div>
            </>
          )}
        </Disclosure>

        {/* menu  */}
        <div className="flex gap-10">
          <div className="hidden text-center lg:flex lg:items-center">
            <ul className="flex-1 list-none items-center justify-end gap-10 pt-6 lg:flex lg:pt-0">
              {props?.navbarItems.map((item, index) => (
                <li className="nav__item mr-3" key={index}>
                  <Link
                    href={"/"}
                    key={item?.key}
                    onClick={() => sectActiveTab(item.itemName)}
                    className={`cursor-pointer ${
                      activeTab === item?.itemName
                        ? " text-black"
                        : "text-gray-400"
                    } font-medium hover:text-black`}
                  >
                    {item?.itemName}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="nav__item mr-3 hidden space-x-4 lg:flex">
            <button className="rounded-md bg-[#059669] px-6 py-3 text-white">
              Sign Up
            </button>
          </div>
        </div>
      </nav>
    </div>
  );
}
