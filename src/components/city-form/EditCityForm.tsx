import { Button } from '@mui/material';
import { Formik, Form } from 'formik';

import { CityData, PostPutBody, API } from '../../utils/utils'
import FormFields from './FormFields';

const buttonStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    paddingTop: '10px'
}

interface CityFormProps {
    focusedCity: CityData | null
    closeEditModal: () => void
    refreshData: () => void
}

export default function CityForm(props: CityFormProps) {

    const deleteCity = () => {
        if (props.focusedCity) {
            const id = props.focusedCity.id.toString()
            API.DELETE_REMOVE(id)
                .then(() => {
                    props.refreshData()
                    props.closeEditModal()
                })
        }
    }

    return (
        <Formik
            initialValues={props?.focusedCity || {}}
            validate={() => { }}
            onSubmit={(data: any, { setSubmitting }) => {
                const body: PostPutBody = {
                    title: data.title,
                    content: data.content,
                    lat: data.lat,
                    long: data.long,
                    image_url: data.image_url
                }

                API.PUT_UPDATE(data.id, body)
                    .then(() => {
                        setSubmitting(false);

                    }).then(() => {
                        props.refreshData()
                        props.closeEditModal()
                    })
            }}
        >
            {({ submitForm, isSubmitting }) => (
                <Form>
                    <FormFields />
                    {/* {isSubmitting && <LinearProgress />} */}
                    <br />
                    <div style={buttonStyle}>
                        <Button
                            variant="contained"
                            color="primary"
                            disabled={isSubmitting}
                            onClick={submitForm}
                        >
                            Submit
                        </Button>
                        <Button
                            variant="contained"
                            color="error"
                            disabled={isSubmitting}
                            onClick={() => { deleteCity() }}
                        >
                            Delete
                        </Button>
                    </div>
                </Form>
            )
            }
        </Formik >
    );
}