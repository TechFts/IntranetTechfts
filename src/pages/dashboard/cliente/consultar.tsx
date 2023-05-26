import { ReactElement } from 'react';
import { Container, Typography, Grid, Box, Card} from '@mui/material';

// layouts
import Layout from '../../../layouts';
// hooks
import useSettings from '../../../hooks/useSettings';

// components
import Page from '../../../components/Page';
// components
import ConsultarCliente from '../../../sections/@dashboard/cliente/consultar/datagridconsultar';


// ----------------------------------------------------------------------

PageConsultar.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

// ----------------------------------------------------------------------

export default function PageConsultar() {
    const { themeStretch } = useSettings();

  return (
        <Page title="Agregar Cliente">
            <Container maxWidth={themeStretch ? false : 'xl'}>
                <Typography
                variant="overline"
                sx={{  mb: 1, display: 'block', color: 'text.secondary' }}
                >
                    Consultar Clientes
                </Typography>
                <Container maxWidth={themeStretch ? false : 'xl'}>
                  <Grid container spacing={3}>
                    <Grid item xs={12} md={12}>
                      <Card sx={{ p: 3 }}>
                          <ConsultarCliente/>   
                      </Card>
                    </Grid>
                  </Grid>
                </Container>
                         
            </Container>
    </Page>
  );
}