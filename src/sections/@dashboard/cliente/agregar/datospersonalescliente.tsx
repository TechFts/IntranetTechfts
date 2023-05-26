import { ReactElement } from 'react';
import { Box, Grid, Card, Container} from '@mui/material';

// hooks
import useSettings from '../../../../hooks/useSettings';
import Layout from '../../../../layouts';
import TablaDatosPersonales from './tabladatospersonales';

// ----------------------------------------------------------------------

PageDatosPersonalesCliente.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default function PageDatosPersonalesCliente() {
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
                gridTemplateColumns: { md: 'repeat(1, 1fr)', xs: 'repeat(1, 1fr)', sm: 'repeat(1, 1fr)' },
              }}
            > 
                <TablaDatosPersonales/>
            </Box>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
}