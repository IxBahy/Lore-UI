import React, { useEffect, useRef } from "react";
import Transition from "./Transition";

function Modal({ children, id, ariaLabel, show, handleClose }) {
	const modalContent = useRef(null);
	const modalBackdrop = useRef(null);
	const modalStyle = {
		minHeight: "40vh",
		height: "fit-content",
	};
	// close the modal on click outside
	useEffect(() => {
		const clickHandler = ({ target }) => {
			if (target === modalBackdrop.current) {
				handleClose();
			}
		};
		document.addEventListener("click", clickHandler);
		return () => {
			document.removeEventListener("click", clickHandler);
		};
	});

	// close the modal if the esc key is pressed
	useEffect(() => {
		const keyHandler = ({ keyCode }) => {
			if (keyCode !== 27) return;
			handleClose();
		};
		document.addEventListener("keydown", keyHandler);
		return () => {
			document.removeEventListener("keydown", keyHandler);
		};
	});

	return (
		<>
			{/* Modal backdrop */}
			<Transition
				className="fixed inset-0 z-50 bg-black bg-opacity-75 transition-opacity w-full"
				show={show}
				enter="transition ease-out duration-200"
				enterStart="opacity-0"
				enterEnd="opacity-100"
				leave="transition ease-out duration-100"
				leaveStart="opacity-100"
				leaveEnd="opacity-0"
				aria-hidden="true"
			/>

			{/* Modal dialog */}
			<Transition
				id={id}
				className="absolute inset-0 z-50 overflow-hidden flex items-start w-full  justify-center px-4 sm:px-6 h-screen sm:block sm:p-0  "
				role="dialog"
				aria-modal="true"
				aria-labelledby={ariaLabel}
				show={show}
				appear={show}
				enter="transition ease-out duration-200"
				enterStart="opacity-0 scale-95"
				enterEnd="opacity-100 scale-100"
				leave="transition ease-out duration-200"
				leaveStart="opacity-100 scale-100"
				leaveEnd="opacity-0 scale-95"
			>
				<div className="fixed z-10 inset-0">
					<div
						ref={modalBackdrop}
						className="flex items-start mt-12 justify-center min-h-screen px-4 pb-20 text-center sm:block sm:p-0 mb-[97px]"
					>
						<span className="hidden sm:inline-block sm:align-middle sm:h-screen"></span>
						<div
							style={modalStyle}
							className="border z-20 inline-block align-bottom bg-white dark:bg-gray-700 rounded-xl text-left overflow-hidden shadow-lg drop-shadow-md shadow-black dark:shadow-gray-800 transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full pb-4"
						>
							<div ref={modalContent}>{children}</div>
						</div>
					</div>
				</div>
			</Transition>
		</>
	);
}

export default Modal;
