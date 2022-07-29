import { TextField } from 'formik-mui';
import { Field } from 'formik';
import ID from '../../test/id';

const inputStyle = {
    margin: '5px',
    width: '-webkit-fill-available'
}

export default function FormFields() {
    return <>
        <Field
            data-testid={ID.FORM_TITLE}
            style={inputStyle}
            component={TextField}
            name="title"
            type="string"
            label="City Name"
        />
        <br />
        <Field
            data-testid={ID.FORM_LAT}
            style={inputStyle}
            component={TextField}
            type="lat"
            label="Latitude"
            name="lat"
        />
        <Field
            data-testid={ID.FORM_LONG}
            style={inputStyle}
            component={TextField}
            type="long"
            label="Longitude"
            name="long"
        />
        <Field
            data-testid={ID.FORM_CONTENT}
            style={inputStyle}
            component={TextField}
            type="content"
            label="Content"
            name="content"
        />
        <Field
            data-testid={ID.FORM_IMAGE_URL}
            style={inputStyle}
            component={TextField}
            type="image_url"
            label="Image URL"
            name="image_url"
        /></>
}