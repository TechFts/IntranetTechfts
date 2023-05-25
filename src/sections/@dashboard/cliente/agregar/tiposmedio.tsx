import { ReactElement } from 'react';
import { Box, Grid, Card, Container, TextField, MenuItem } from '@mui/material';

// hooks
import useSettings from '../../../../hooks/useSettings';
import Layout from '../../../../layouts';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import ListItemText from '@mui/material/ListItemText';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import Checkbox from '@mui/material/Checkbox'
import OutlinedInput from '@mui/material/OutlinedInput';
import * as React from 'react';

// ----------------------------------------------------------------------
const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const names = [
  'WEB',
  'WAP',
  'POS',
  'VENDING',
  'SSM',
  'USSD',
  'IVR',
  'MINI-VENDING',
  'APLICACION PC',
];

PageTipoMedio.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default function PageTipoMedio() {

    const { themeStretch } = useSettings();
    const [personName, setPersonName] = React.useState<string[]>([]);
    const handleChange = (event: SelectChangeEvent<typeof personName>) => {
      const {
        target: { value },
      } = event;
      setPersonName(
        // On autofill we get a stringified value.
        typeof value === 'string' ? value.split(',') : value,
      );
    };
    
  return (
    <Container maxWidth={themeStretch ? false : 'xl'}>
      <Grid container spacing={3}>
        <Grid item xs={12} md={12}>
          <Card sx={{ p: 3 }}>
            <Box
              sx={{
                display: 'grid',
                rowGap: 1,
                columnGap: 1,
              }}
            > 
      <FormControl sx={{ width: 300 }}>
        <InputLabel id="-multiple-checkbox-label">Tipos de Medio</InputLabel>
        <Select
          labelId="-multiple-checkbox-label"
          id="multiple-checkbox"
          multiple
          size="small"
          value={personName}
          onChange={handleChange}
          input={<OutlinedInput label="Tipos de Medio" />}
          renderValue={(selected) => selected.join(', ')}
          MenuProps={MenuProps}
        >
          {names.map((name) => (
            <MenuItem key={name} value={name}>
              <Checkbox checked={personName.indexOf(name) > -1} />
              <ListItemText primary={name} />
            </MenuItem>
          ))}
        </Select>
      </FormControl>
            </Box>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
}