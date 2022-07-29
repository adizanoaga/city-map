import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button'

import ID from '../../test/id'

import { CityData } from '../../utils/utils'

interface TableProps {
    cityList: Array<CityData>
    openEditModal: (city: CityData) => void
}

export default function DenseTable(props: TableProps) {
    const { cityList, openEditModal } = props

    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table" data-testid={ID.TABLE}>
                <TableHead>
                    <TableRow>
                        <TableCell>City Name</TableCell>
                        <TableCell align="left">Content</TableCell>
                        <TableCell align="left">Edit</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {cityList.map((item) => (
                        <TableRow
                            key={item.title}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            data-testid={ID.TABLE_ROW}
                        >
                            <TableCell component="th" scope="row">
                                {item.title}
                            </TableCell>
                            <TableCell align="left">{item.content}</TableCell>
                            <TableCell align="left" >
                                <Button onClick={() => openEditModal(item)} variant="contained">Details</Button>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}
