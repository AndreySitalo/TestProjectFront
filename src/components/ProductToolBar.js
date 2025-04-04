import React, { useState } from 'react';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import Save from '@mui/icons-material/Save';
import Search from '@mui/icons-material/Search';
import Stack from '@mui/material/Stack';
import { SetProducts, GetProducts } from '../services/products';
import { ActionCreators } from '../redux/productsReduser';
import TextField from '@mui/material/TextField';
import { useDispatch } from 'react-redux';
import { GridRowModes, GridToolbarContainer } from '@mui/x-data-grid';
import { randomId } from '@mui/x-data-grid-generator';

export default function EditToolbar(props) {
    const { setRows, setRowModesModel, rows } = props;
    const [productCode, setProductCode] = useState('');
    const [productName, setProductName] = useState('')
    const dispatch = useDispatch();

    const handleClick = () => {
        var id = randomId();

        setRows((oldRows) => [
            ...oldRows,
            { id, value: '', code: '', isNew: true },
        ]);
        setRowModesModel((oldModel) => ({
            ...oldModel,
            [id]: { mode: GridRowModes.Edit, fieldToFocus: 'name' },
        }));
    };

    const handleClickSave = () => {
        dispatch(ActionCreators.setProducts(rows));
        SetProducts(rows);
    };
    const handleClickSearch = () => {
        GetProducts(dispatch, productCode, productName)
    };

    return (
        <GridToolbarContainer>

            <Stack direction="row">
                <Button variant="text" startIcon={<AddIcon />} size="large" onClick={handleClick} >Добавить</Button>
                <Button variant="text" startIcon={<Save />} size="large" onClick={handleClickSave} >Отправить</Button>

                <TextField
                    id="outlined-basic"
                    label="Код"
                    variant="outlined"
                    size="small"
                    value={productCode}
                    onChange={(e) => setProductCode(e.target.value)}
                />
                <TextField
                    id="outlined-basic"
                    label="Название"
                    variant="outlined"
                    size="small"
                    value={productName}
                    onChange={(e) => setProductName(e.target.value)}
                />
                <Button startIcon={<Search />} size="large" onClick={handleClickSearch} />
            </Stack>
        </GridToolbarContainer>
    );
}