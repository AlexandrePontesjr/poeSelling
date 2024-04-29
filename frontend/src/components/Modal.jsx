
const Modal = ({game, isOpen, onClose, children }) => {
    if (!isOpen) return null;

    return (
        <div className="fixed z-10 inset-0 overflow-y-auto">
            <div className="flex items-center justify-center min-h-screen">
                <div className="fixed inset-0 transition-opacity" aria-hidden="true">
                    <div className="absolute inset-0 bg-gray-950 opacity-75"></div>
                </div>
                <div className="relative rounded-lg bg-slate-100 p-8 max-w-md lg:w-[450px] mx-auto opacity-100">
                    {children}
                </div>
            </div>
        </div>
    );
};

export default Modal;