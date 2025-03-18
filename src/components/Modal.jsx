import React, { useEffect, useState } from 'react'
import ModalHelper from './Modalhelper';
import ModalHelper2 from './Modalhelper2';
import authScreenAtom from '../atom/modalAtom';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import model2Atom from '../atom/model2Atom';
import model3Atom from '../atom/model3Atom';

const Modal = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const setauthScreen = useSetRecoilState(authScreenAtom)
    const setmodel2 = useSetRecoilState(model2Atom);
    const setmodel3 = useSetRecoilState(model3Atom);

    const model2state = useRecoilValue(model2Atom);
    const model3state = useRecoilValue(model3Atom);

    // Open the modal when the page loads
    // useEffect(() => {
    //     setIsModalOpen(true);
    // }, []);

    // Close the modal
    const closeModal = () => {
        setmodel2(false);
        setauthScreen(true);
    };
    const closeModal2 = () => {
        setmodel3(true);
        setmodel2(false);
    };
    const closeModal3 = () => {
        setmodel2(true);
        setmodel3(false);
    };
    return (
        // <div className="flex items-center justify-center min-h-screen bg-gray-800 mx-2 border">
        <>
            <ModalHelper isOpen={model2state} onClose={closeModal}>
                <p className='pb-6'>This website is for users who are 18 or older. Please confirm your age to continue.</p>
                <button
                    onClick={closeModal}
                    className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
                >
                    Yes
                </button>
                <button
                    onClick={closeModal2}
                    className="px-4 py-2 mx-4 bg-red-500 text-white rounded-lg hover:bg-red-600"
                >
                    No
                </button>
                
            </ModalHelper>
            <ModalHelper2 isOpen={model3state}>
                <p className='pb-6'>You cannot access this website.</p>
                <button
                    onClick={closeModal3}
                    className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
                >
                    back
                </button>
                
                
            </ModalHelper2>
            </>
        // </div>
    )
}

export default Modal
