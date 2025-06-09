"use client";
import {
  createContext,
  Dispatch,
  PropsWithChildren,
  RefObject,
  SetStateAction,
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import { createPortal } from "react-dom";
import ReactFocusLock from "react-focus-lock";

type ModalContextType = {
  modalRef: RefObject<HTMLDivElement | null>;
  isOpen: boolean;
  isAnimating: boolean;
  close(): void;
  open(): void;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
  setIsAnimating: Dispatch<SetStateAction<boolean>>;
};

const ModalContext = createContext<ModalContextType | undefined>(undefined);

const ModalContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const modalRef = useRef<HTMLDivElement>(null);

  const open = useCallback(() => {
    setIsOpen(true);
    setTimeout(() => setIsAnimating(true), 10);
    if (modalRef.current) modalRef.current.focus();
  }, []);

  const close = useCallback(() => {
    setIsAnimating(false);
    setTimeout(() => setIsOpen(false), 300);
  }, []);

  const handleOutside = (e: MouseEvent) => {
    if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
      close();
    }
  };
  useEffect(() => {
    if (isOpen) {
      document.addEventListener("mousedown", handleOutside);
    } else {
      document.removeEventListener("mousedown", handleOutside);
    }

    return () => document.removeEventListener("mousedown", handleOutside);
  }, [isOpen]);

  return (
    <ModalContext.Provider value={{ isOpen, setIsOpen, isAnimating, setIsAnimating, open, close, modalRef }}>
      {children}
    </ModalContext.Provider>
  );
};

const useModalContext = () => {
  const ctx = useContext(ModalContext);
  if (!ctx) throw new Error("ModalContext harus digunakan di dalam <ModalContextProvider>");
  return ctx;
};

type ModalContainerProps = PropsWithChildren & {
  className: {
    base: string;
    active: string;
    noActive: string;
  };
};

const ModalContainer = ({ children, className }: ModalContainerProps) => {
  const { modalRef, isOpen, isAnimating } = useModalContext();

  if (!isOpen) return null;

  return createPortal(
    <ReactFocusLock>
      <div className="fixed flex justify-center items-center inset-0 overflow-hidden bg-black/25 backdrop-blur-sm z-9999">
        <div ref={modalRef} className={`${className.base} ${isAnimating ? className.active : className.noActive}`}>
          {children}
        </div>
      </div>
    </ReactFocusLock>,
    document.body
  );
};

export { ModalContextProvider, useModalContext, ModalContainer };
