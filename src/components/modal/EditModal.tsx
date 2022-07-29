import { useState } from 'react'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

import EditCityForm from '../city-form/EditCityForm'

import { API, CityData } from '../../utils/utils';
import { useEffect } from 'react';

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
    focusedCity: CityData | null
    closeEditModal: () => void
    refreshData: () => void
}

const imgStyle = {
    width: '100%',
    height: '100%'
}

export default function BasicModal(props: ModalProps) {
    const { focusedCity, closeEditModal } = props

    const [cityData, setCityData] = useState<CityData | null>(null)

    const handleClose = () => { closeEditModal() }

    useEffect(() => {
        focusedCity && API.GET_SHOW(`${focusedCity.id}`)
            .then(response => response.json())
            .then(response => {
                setCityData(response)
            })
    }, [focusedCity])


    return (
        <div>
            <Modal
                open={!!focusedCity}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={boxStyle}>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        {cityData?.title}
                    </Typography>
                    <img src={focusedCity?.image_url} alt='- URL not valid' style={imgStyle}></img>
                    <Typography id="modal-modal-description" sx={{ mt: 2 }} component="div">
                        <EditCityForm {...props} />
                    </Typography>
                </Box>
            </Modal>
        </div>
    );
}