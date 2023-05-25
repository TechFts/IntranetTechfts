import { capitalCase } from 'change-case';
// @mui
import { Container, Tab, Box, Tabs } from '@mui/material';
// hooks
import useTabs from '../../../hooks/useTabs';
import useSettings from '../../../hooks/useSettings';
// layouts
import Layout from '../../../layouts';
// components
import Page from '../../../components/Page';
import Iconify from '../../../components/Iconify';
// sections
import AgregarProveedor from '../../../sections/@dashboard/cliente/agregar/agregarproveedor';
import AgregarContactoComercial from '../../../sections/@dashboard/cliente/agregar/agregarcontactocomercial';


// ----------------------------------------------------------------------

UserAccount.getLayout = function getLayout(page: React.ReactElement) {
  return <Layout>{page}</Layout>;
};

// ----------------------------------------------------------------------

export default function UserAccount() {
  const { themeStretch } = useSettings();

  const { currentTab, onChangeTab } = useTabs('proveedor');

  const ACCOUNT_TABS = [
    {
      value: 'proveedor',
      icon: <Iconify icon={'ic:round-account-box'} width={20} height={20} />,
      component: <AgregarProveedor />,
    },
    {
      value: 'contacto comercial',
      icon: <Iconify icon={'ic:round-account-box'} width={20} height={20} />,
      component: <AgregarContactoComercial />,
    },
    {
      value: 'Contacto tecnico',
      icon: <Iconify icon={'ic:round-account-box'} width={20} height={20} />,
      component: <AgregarProveedor />,
    },
    {
      value: 'contacto recaudador',
      icon: <Iconify icon={'ic:round-account-box'} width={20} height={20} />,
      component: <AgregarContactoComercial />,
    },
  ];

  return (
    <Page title="User: Account Settings">
      <Container maxWidth={themeStretch ? false : 'lg'}>


        <Tabs
          allowScrollButtonsMobile
          variant="scrollable"
          scrollButtons="auto"
          value={currentTab}
          onChange={onChangeTab}
        >
          {ACCOUNT_TABS.map((tab) => (
            <Tab
              disableRipple
              key={tab.value}
              label={capitalCase(tab.value)}
              icon={tab.icon}
              value={tab.value}
            />
          ))}
        </Tabs>

        <Box sx={{ mb: 5 }} />

        {ACCOUNT_TABS.map((tab) => {
          const isMatched = tab.value === currentTab;
          return isMatched && <Box key={tab.value}>{tab.component}</Box>;
        })}
      </Container>
    </Page>
  );
}