import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

import AddCityForm from '../city-form/AddCityForm'

const boxStyle = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};


interface ModalProps {
    addModalOpen: boolean,
    closeAddModal: () => void
    refreshData: () => void
}

export default function BasicModal(props: ModalProps) {
    const { addModalOpen, closeAddModal } = props

    const handleClose = () => { closeAddModal() }

    return (
        <div>
            <Modal
                open={addModalOpen}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={boxStyle}>
                    <Typography id="modal-modal-description" sx={{ mt: 2 }} component="div">
                        <AddCityForm {...props} />
                    </Typography>
                </Box>
            </Modal>
        </div>
    );
}