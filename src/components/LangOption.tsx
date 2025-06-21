"use client";

import { Languages } from "@/constants";
import { ChevronDown, ChevronUp, Globe } from "lucide-react";
import React, { useEffect, useRef, useState } from "react";

const LangOption = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState(Languages[0]);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const toggleDropdown = () => setIsOpen((prev) => !prev);

  const handleSelect = (lang: typeof selected) => {
    setSelected(lang);
    setIsOpen(false);
    // You can also update the locale or call i18n here
  };

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  });

  return (
    <div className="relative font-manrope" ref={dropdownRef}>
      <button
        onClick={toggleDropdown}
        className="flex items-center font-medium gap-1 transition cursor-pointer text-basecolor"
      >
        <Globe size={18} />
        <span>{selected.country}</span>
        {isOpen ? (
          <ChevronUp
            size={18}
            className="transition-transform duration-200 rotate-360"
          />
        ) : (
          <ChevronDown
            size={18}
            className="transition-transform duration-200"
          />
        )}
      </button>

      {isOpen && (
        <div className="absolute mt-2 w-32 rounded-md shadow-md bg-white ring-1 ring-black/5 transition duration-200">
          <div className="py-1">
            {Languages.map((lang) => (
              <button
                key={lang.code}
                onClick={() => handleSelect(lang)}
                className="w-full text-left px-4 py-2 text-basecolor hover:bg-gray-100"
              >
                {lang.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default LangOption;
