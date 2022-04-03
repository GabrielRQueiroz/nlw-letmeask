import Modal from "react-modal"

type ModalProps = {
	isOpen: boolean
	onRequestClose: () => void
	onConfirmation: () => void
	onAfterOpen?: () => void
	icon?: string
	sentence?: string
	btnMessage?: string
}

export const ConfirmationModal = ({
	icon = "",
	sentence = "Default",
	btnMessage = "Yes",
	isOpen = false,
	...props
}: ModalProps) => {
	return <Modal isOpen={isOpen} className="modal" {...props}></Modal>
}
