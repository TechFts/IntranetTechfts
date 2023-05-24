import { ReactElement } from 'react';
import { Box, Grid, Card, Container, TextField, Typography} from '@mui/material';

// hooks
import useSettings from '../../../../hooks/useSettings';
import Layout from '../../../../layouts';

// ----------------------------------------------------------------------

PageDatosPersonales.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default function PageDatosPersonales() {
  const { themeStretch } = useSettings();
  
  return (
    <Container maxWidth={themeStretch ? false : 'xl'}>
      <Grid container spacing={3}>
        <Grid item xs={12} md={12}>
          <Card sx={{ p: 3 }}>
            <Typography
              variant="overline"
              sx={{  mb: 1, display: 'block', color: 'text.secondary' }}
            >
              Datos Personales
            </Typography>
            <Box
              sx={{
                display: 'grid',
                rowGap: 1,
                columnGap: 1,
                gridTemplateColumns: { md: 'repeat(3, 1fr)', xs: 'repeat(1, 1fr)', sm: 'repeat(2, 1fr)' },
              }}
            > 
              <TextField name="displayName" select label="Tipo de Identificacion" size="small" />
              <TextField name="email" label="Numero de Identificacion" size="small"/>
              <TextField name="displayName" label="Razon Social" size="small" />
              <TextField name="phoneNumber" label="Primer Nombre" size="small"/>
              <TextField name="address" label="Segundo Nombre" size="small"/>
              <TextField name="displayName" label="Primer Apellido" size="small"/>
              <TextField name="phoneNumber" label="Segundo Apellido" size="small"/>
              <TextField name="address" label="Rango de Cliente" size="small"/>
              <TextField id="outlined-basic" variant="outlined" name="displayName" select label="Pago de Comision" size="small" />
            </Box>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
}