import { ReactElement } from 'react';
import { Container, Typography} from '@mui/material';
import Iconify from '../../../components/Iconify';

// layouts
import Layout from '../../../layouts';
// hooks
import useSettings from '../../../hooks/useSettings';

// components
import Page from '../../../components/Page';
// components
import Datospersonales from '../../../sections/@dashboard/cliente/agregar/datospersonales';
import PagePerfilTipoCliente from '../../../sections/@dashboard/cliente/agregar/perfiltipocliente';

// ----------------------------------------------------------------------

PageAgregar.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

// ----------------------------------------------------------------------

export default function PageAgregar() {
    const { themeStretch } = useSettings();

  return (
        <Page title="Agregar Cliente">
            <Container maxWidth={themeStretch ? false : 'xl'}>
                <Typography
                variant="overline"
                sx={{  mb: 1, display: 'block', color: 'text.secondary' }}
                >
                    Agregar Clientes
                </Typography>
                <PagePerfilTipoCliente/>
                <Datospersonales/>
            </Container>
    </Page>
  );
}