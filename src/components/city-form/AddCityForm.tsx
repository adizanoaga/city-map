import { Button } from '@mui/material';
import { Formik, Form, FormikErrors, FormikValues } from 'formik';

import { PostPutBody, API } from '../../utils/utils'
import FormFields from './FormFields';


const buttonStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    paddingTop: '10px'
}

interface CityFormProps {
    addModalOpen: boolean,
    closeAddModal: () => void
    refreshData: () => void
}

interface FormFieldsInt {
    title: string,
    lat: string,
    long: string,
    content: string,
    image_url: string,
}


export default function CityForm(props: CityFormProps) {

    return (
        <Formik
            initialValues={{
                title: '',
                lat: '',
                long: '',
                content: '',
                image_url: '',
            }}
            validate={(item: FormFieldsInt) => {
                console.log()
                const errors: FormikErrors<FormikValues> = {}
                if (!item.title) {
                    errors.title = 'This is a mandatory field'
                }
                if (!item.content) {
                    errors.content = 'This is a mandatory field'
                }
                if (item.long && Number.isNaN(Number(item.long))) {
                    errors.long = 'This field needs to be a number'
                }
                if (item.lat && Number.isNaN(Number(item.lat))) {
                    errors.lat = 'This field needs to be a number'
                }
                return errors
            }}
            onSubmit={(data: any, { setSubmitting }) => {
                const body: PostPutBody = {
                    title: data.title,
                    content: data.content,
                    lat: data.lat,
                    long: data.long,
                    image_url: data.image_url
                }

                API.POST_CREATE(data.id, body)
                    .then(() => {
                        setSubmitting(false);

                    }).then(() => {
                        props.refreshData()
                        props.closeAddModal()
                    })
            }}
        >
            {({ submitForm, isSubmitting }) => (
                <Form>
                    <FormFields />
                    <br />
                    <div style={buttonStyle}>
                        <Button
                            variant="contained"
                            color="primary"
                            disabled={isSubmitting}
                            onClick={submitForm}
                        >
                            Add
                        </Button>
                    </div>
                </Form>
            )
            }
        </Formik >
    );
}