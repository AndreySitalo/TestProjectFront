import * as React from 'react';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import Stack from '@mui/material/Stack';
import { SetProducts } from '../services/products';
import { ActionCreators } from '../redux/productsReduser';
import { useDispatch } from 'react-redux';
import {GridRowModes, GridToolbarContainer} from '@mui/x-data-grid';
import {randomId} from '@mui/x-data-grid-generator';

export default function EditToolbar(props) {
  const { setRows, setRowModesModel, rows } = props;
  const dispatch = useDispatch();

  const handleClick = () => {
    var id = randomId(); 

    setRows((oldRows) => [
      ...oldRows,
      { id, value: '', code: '',isNew: true },
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

  return (
    <GridToolbarContainer>
      <Stack spacing={2} direction="row">
            <Button variant="text" startIcon={<AddIcon />} onClick={handleClick} >Добавить запись</Button>
            <Button variant="contained" color="success" onClick={handleClickSave} >Сохранить</Button>
       </Stack>
    </GridToolbarContainer>
  );
}