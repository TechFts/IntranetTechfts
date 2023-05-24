import { ReactElement } from 'react';
import { Box, Grid, Card, Container, TextField} from '@mui/material';

// layouts
import Layout from '../../../layouts';
// hooks
import useSettings from '../../../hooks/useSettings';
// components
import Page from '../../../components/Page';

// ----------------------------------------------------------------------

PageFour.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

// ----------------------------------------------------------------------

export default function PageFour() {
  const { themeStretch } = useSettings();
  
  return (
  <Page title="Page 4">
    <Container maxWidth={themeStretch ? false : 'xl'}>
      <Grid container spacing={3}>
        <Grid item xs={12} md={12}>
          <Card sx={{ p: 3 }}>
            <Box
              sx={{
                display: 'grid',
                rowGap: 1,
                columnGap: 1,
                gridTemplateColumns: { md: 'repeat(3, 1fr)', xs: 'repeat(1, 1fr)', sm: 'repeat(2, 1fr)' },
              }}
            >
              <TextField name="displayName" label="Name" />
              <TextField name="email" label="Email Address" />
              <TextField name="displayName" label="Tipo de Identificacion" size="small" />
              <TextField name="phoneNumber" label="Phone Number" />
              <TextField name="address" label="Address" />



              <TextField name="state" label="State/Region" />

              <TextField name="city" label="City" />
              <TextField name="zipCode" label="Zip/Code" />
            </Box>

 
          </Card>
        </Grid>
      </Grid>
    </Container>
    </Page>
  );
}