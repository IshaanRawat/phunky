import React from "react";
import Portal from "../Portal";

interface ModalProps {
  title: string;
  close: () => void;
}

const Modal: React.FC<ModalProps> = ({ children, title, close }) => {
  return (
    <Portal>
      <section className="fixed font-mono w-screen h-full overflow-auto max-h-screen z-50 left-0 top-0 backdrop-brightness-50 flex flex-col items-center justify-center">
        {close && (
          <section
            className="fixed top-0 left-0 w-full h-screen"
            onClick={close}
          />
        )}
        <section
          className="flex relative z-10 flex-col bg-p-black text-white"
          onBlur={close}
        >
          <div className="flex items-center justify-between w-full p-4 border-b">
            <h3>{title}</h3>
            <button className="ml-4" onClick={close}>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M13.41 12L19.71 5.71C19.8983 5.5217 20.0041 5.2663 20.0041 5C20.0041 4.7337 19.8983 4.47831 19.71 4.29C19.5217 4.1017 19.2663 3.99591 19 3.99591C18.7337 3.99591 18.4783 4.1017 18.29 4.29L12 10.59L5.71 4.29C5.5217 4.1017 5.2663 3.99591 5 3.99591C4.7337 3.99591 4.4783 4.1017 4.29 4.29C4.1017 4.47831 3.99591 4.7337 3.99591 5C3.99591 5.2663 4.1017 5.5217 4.29 5.71L10.59 12L4.29 18.29C4.19627 18.383 4.12188 18.4936 4.07111 18.6154C4.02034 18.7373 3.9942 18.868 3.9942 19C3.9942 19.132 4.02034 19.2627 4.07111 19.3846C4.12188 19.5064 4.19627 19.617 4.29 19.71C4.38296 19.8037 4.49356 19.8781 4.61542 19.9289C4.73728 19.9797 4.86799 20.0058 5 20.0058C5.13201 20.0058 5.26272 19.9797 5.38458 19.9289C5.50644 19.8781 5.61704 19.8037 5.71 19.71L12 13.41L18.29 19.71C18.383 19.8037 18.4936 19.8781 18.6154 19.9289C18.7373 19.9797 18.868 20.0058 19 20.0058C19.132 20.0058 19.2627 19.9797 19.3846 19.9289C19.5064 19.8781 19.617 19.8037 19.71 19.71C19.8037 19.617 19.8781 19.5064 19.9289 19.3846C19.9797 19.2627 20.0058 19.132 20.0058 19C20.0058 18.868 19.9797 18.7373 19.9289 18.6154C19.8781 18.4936 19.8037 18.383 19.71 18.29L13.41 12Z"
                  fill="white"
                />
              </svg>
            </button>
          </div>
          {children}
        </section>
      </section>
    </Portal>
  );
};

export default Modal;
