"use client";
import { ModalContainer, ModalContextProvider } from "@/app/context/ModalContext";
import SettingsButton from "./SettingsButton";
import { LuSettings } from "react-icons/lu";
import SettingsClose from "./SettingsClose";
import { MdOutlineWbSunny } from "react-icons/md";
import gsap from "gsap";
import { SplitText } from "gsap/all";
import { useEffect, useRef } from "react";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(SplitText);

const SettingsSection = () => {
  const textRef = useRef<HTMLParagraphElement>(null);
  const animRef = useRef<gsap.core.Animation | null>(null);

  useGSAP(() => {
    if (!textRef.current) return;

    gsap.set(textRef.current, { opacity: 1 });

    const splitInstance = SplitText.create(textRef.current, {
      type: "words,lines",
      linesClass: "line-mask",
      autoSplit: true,
      mask: "lines",
      onSplit: (self) => {
        animRef.current = gsap.from(self.lines, {
          yPercent: 100,
          opacity: 0,
          duration: 0.6,
          stagger: 0.1,
          ease: "expo.out",
        });
        return animRef.current;
      },
    });

    return () => {
      splitInstance.revert?.(); // balikin teks ke semula saat komponen unmount
    };
  }, []);

  return (
    <ModalContextProvider>
      <SettingsButton />
      <ModalContainer
        className={{
          base: "p-6 rounded-2xl flex flex-col gap-3 bg-white transform transition-all w-full mx-4 md:w-lg",
          active: "scale-100 opacity-100",
          noActive: "scale-80 opacity-0",
        }}>
        <div className="flex items-center gap-2 text-2xl font-medium">
          <LuSettings size={24} />
          Pengaturan
          <SettingsClose />
        </div>
        <p ref={textRef} className="text-justify">
          Disini kamu bisa mengatur pengaturanmu, seperti tema atau tampilan latar belakang.
        </p>
        <div className="flex items-center justify-between pb-3 text-lg">
          Tema website
          <button className="p-3 px-5 rounded-xl bg-zinc-800 text-white">
            <span className="flex items-center gap-2 text-base">
              <MdOutlineWbSunny size={18} />
              Light
            </span>
          </button>
        </div>
      </ModalContainer>
    </ModalContextProvider>
  );
};

export default SettingsSection;
