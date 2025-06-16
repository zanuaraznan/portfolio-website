import { create } from 'zustand';

type ModalState = {
    isOpen: boolean;
    isAnimating: boolean;
    setOpen(): void;
    setClose(): void;
    toggle(): void;
    setAnimating(): void;
};

const useModalStore = create<ModalState>((set, get) => ({
    isOpen: false,
    setOpen: () => {
        set({ isOpen: true });
        setTimeout(() => set({ isAnimating: true }), 10);
    },
    setClose: () => {
        set({ isAnimating: false });
        setTimeout(() => set({ isOpen: false }), 300);
    },
    toggle: () => {
        const { isOpen, setOpen, setClose } = get();
        if (isOpen) {
            setClose();
        } else {
            setOpen();
        }
    },
    isAnimating: false,
    setAnimating: () => set((state) => ({ isAnimating: !state.isAnimating })),
}));

export { useModalStore };
