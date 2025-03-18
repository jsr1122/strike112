import React from 'react'

const Modalhelper2 = ({ isOpen, onClose, children }) => {
    if (!isOpen) return null; // Do not render the modal if it's closed

    return (
      <div className="fixed inset-0 bg-gray-400 bg-opacity-50 flex justify-center items-center z-50 px-2">
        <div className="bg-stone-950 rounded-lg p-8 md:w-[500px] w-96 flex flex-col justify-center items-center">
          <div className="flex justify-between items-center">
            <h2 className="text-xl font-bold text-center">This website is only for users aged 18 and above</h2>
          </div>
          <div className="mt-4 flex flex-col justify-center items-center">
            {children}
          </div>
        </div>
      </div>
    );
}

export default Modalhelper2
