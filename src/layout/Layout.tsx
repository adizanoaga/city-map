import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

import Table from '../components/table/Table'
import Map from '../components/map/Map'
import { Button } from '@mui/material';
import { CityData } from '../utils/utils';

import { styled } from '@mui/material/styles';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

interface LayoutProps {
    cityList: Array<CityData>,
    openEditModal: (city: CityData) => void
    openAddModal: () => void
}

export default function Layout(props: LayoutProps) {
    return <Box sx={{ flexGrow: 1 }}>
        <Grid container columns={16} spacing={3}>
            <Grid item xs={16}>
                <Item>
                    <Map {...props} />
                </Item>
            </Grid>
            <Grid item xs={16}>
                <Item>
                    <Button
                        variant="contained"
                        color="success"
                        onClick={() => {
                            props.openAddModal()
                        }}
                    >
                        Add City
                    </Button>
                </Item>
            </Grid>
            <Grid item xs={16}>
                <Item>
                    <Table {...props} />
                </Item>
            </Grid>
        </Grid>
    </Box>
}

