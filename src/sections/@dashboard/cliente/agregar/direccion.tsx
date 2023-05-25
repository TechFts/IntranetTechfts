import { ReactElement } from 'react';
import { Box, Grid, Card, Container,Typography, TextField, MenuItem, Button } from '@mui/material';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
// hooks
import useSettings from '../../../../hooks/useSettings';
import Layout from '../../../../layouts';
import TablaDireccion from './tabladireccion';


// ----------------------------------------------------------------------

PageTelefonoEmail.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

// ----------------------------------------------------------------------

export default function PageTelefonoEmail() {
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
              <TablaDireccion/>
            </Box>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
}