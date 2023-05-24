import { ReactElement } from 'react';
import { Box, Grid, Card, Container, TextField, MenuItem } from '@mui/material';

// hooks
import useSettings from '../../../../hooks/useSettings';
import Layout from '../../../../layouts';

// ----------------------------------------------------------------------

const opctipo = [
  {
    value: '1',
    label: 'Punto de Venta',
  },
  {
    value: '2',
    label: 'Subdistribuidor',
  },
  {
    value: '3',
    label: 'Distribuidor',
  },
  {
    value: '4',
    label: 'Mayorista',
  },
  {
    value: '5',
    label: 'Mayorista Marca Blanca',
  },
];

const opcperfil = [
  {
    value: '1',
    label: 'Perfil Kiosko',
  },
  {
    value: '2',
    label: 'Perfil Venta',
  },
];

PagePerfilTipoCliente.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default function PagePerfilTipoCliente() {
  const { themeStretch } = useSettings();
  
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
                gridTemplateColumns: { md: 'repeat(2, 1fr)', xs: 'repeat(1, 1fr)', sm: 'repeat(2, 1fr)' },
              }}
            > 
            <TextField
                name="displayName"
                select
                label="Perfil del Cliente"
                defaultValue="1"
                size="small"
            >
            {opcperfil.map((option) => (
            <MenuItem key={option.value} value={option.value}>
                {option.label}
            </MenuItem>
            ))}
            </TextField>
            <TextField
                name="displayName"
                select
                label="Tipo de Cliente"
                defaultValue="1"
                size="small"
            >
            {opctipo.map((option) => (
            <MenuItem key={option.value} value={option.value}>
                {option.label}
            </MenuItem>
            ))}
            </TextField>
            </Box>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
}