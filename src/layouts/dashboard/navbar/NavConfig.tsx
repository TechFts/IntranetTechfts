// components
import SvgIconStyle from '../../../components/SvgIconStyle';

// ----------------------------------------------------------------------

const getIcon = (name: string) => (
  <SvgIconStyle src={`/assets/icons/navbar/${name}.svg`} sx={{ width: 1, height: 1 }} />
);

const ICONS = {
  user: getIcon('ic_user'),
  ecommerce: getIcon('ic_ecommerce'),
  analytics: getIcon('ic_analytics'),
  dashboard: getIcon('ic_dashboard'),
};

const navConfig = [
  // GENERAL
  // ----------------------------------------------------------------------
  {
    subheader: 'general v3.5.0',
    items: [
      { 
      title: 'cliente', 
      path: '/dashboard/cliente', 
      icon: ICONS.dashboard,
      children: [
        { title: 'Perfil', path: '/dashboard/cliente/perfil' },
        { title: 'Consultar Cliente', path: '/dashboard/cliente/agregar' }, 
        { title: 'Agregar Cliente', path: '/dashboard/cliente/agregar' },
      ],},
      
      { 
      title: 'bodega', 
      path: '/dashboard/bodega', 
      icon: ICONS.dashboard,
      children: [
        { title: 'Consultar Bodega', path: '/dashboard/bodega/consultar' },
        { title: 'Agregar Bodega', path: '/dashboard/bodega/agregar' }, 
      ],},
      
      { 
      title: 'usuarios', 
      path: '/dashboard/usuarios', 
      icon: ICONS.dashboard,
      children: [
        { title: 'Consultar Usuarios', path: '/dashboard/usuarios/consultar' },
        { title: 'Agregar Usuarios', path: '/dashboard/usuarios/agregar' }, 
      ],},
      
      { 
      title: 'proovedores', 
      path: '/dashboard/proovedores', 
      icon: ICONS.dashboard,
      children: [
        { title: 'Agregar Proovedores', path: '/dashboard/proovedores/agregar' },
        { title: 'Productos y Comisiones', path: '/dashboard/usuarios/productosycomisiones' }, 
      ],},
      
      { 
      title: 'productos', 
      path: '/dashboard/productos', 
      icon: ICONS.dashboard,
      children: [
        { title: 'Consultar Producto', path: '/dashboard/productos/consultar' },
        { title: 'Crear Producto', path: '/dashboard/productos/crear' },
        { title: 'Grupo', path: '/dashboard/productos/grupo' },
      ],},
      
      { 
      title: 'informes', 
      path: '/dashboard/informes', 
      icon: ICONS.dashboard,
      children: [
        { title: 'Saldo de Red', path: '/dashboard/informes/saldored' },
        { title: 'Extracto de Red', path: '/dashboard/informes/extractodered' },
        { title: 'Mi Extracto', path: '/dashboard/informes/miextracto' },
        { title: 'Proveedor Producto', path: '/dashboard/informes/proveedorproducto' },
        {title: 'finaciero',
                  path: '/dashboard/informes/finaciero',
                  children: [
                    {
                      title: 'balance',
                      path: '/dashboard/informes/finaciero/balance',
                    },
                    {
                      title: 'beneficios del gestor',
                      path: '/dashboard/informes/finaciero/beneficiosgestor',
                    },
                     {
                      title: 'comisiones pagadas',
                      path: '/dashboard/informes/finaciero/comisionespagadas',
                    },
                  ],
        },
        { title: 'Clientes con Cupo', path: '/dashboard/informes/clientescupo' },
        { title: 'Ventas de Red', path: '/dashboard/informes/ventasred' },
        { title: 'Ventas de Clientes', path: '/dashboard/informes/ventasclientes' },
        { title: 'Transacciones Detalle', path: '/dashboard/informes/transaccionesdetalle' },
        { title: 'Buscar Ticket', path: '/dashboard/informes/buscarticket' },
      ],},
      
      {
        title: 'herramientas',
        path: '/dashboard/informes',
        icon: ICONS.user,
        children: [
          { title: 'subir pines', path: '/dashboard/informes/subirpines' },
          { title: 'transferencia de saldo', path: '/dashboard/informes/transferenciasaldo' },
          { title: 'tasa de cambio', path: '/dashboard/informes/tasacambio' },
          { title: 'cupo', path: '/dashboard/informes/cupo' },
          { title: 'eliminar cupo', path: '/dashboard/informes/eliminarcupo' },
          { title: 'ver pines', path: '/dashboard/informes/verpines' },
          { title: 'pos llamadas',
            path:  '/dashboard/informes/posllamadas',
                  children: [
                    {
                      title: 'crear y modificar perfil',
                      path: '/dashboard/informes/posllamadas/crearymodificarperfil',
                    },
                    {
                      title: 'crear destino',
                      path: '/dashboard/informes/posllamadas/creardestino',
                    },
                    {
                      title: 'asignar perfil',
                      path: '/dashboard/informes/posllamadas/asignarperfil',
                    },
                    {
                      title: 'cambiar perfil a cliente',
                      path: '/dashboard/informes/posllamadas/cambiarperfil',
                    },
                    {
                      title: 'asignar cupo Pto de venta',
                      path: '/dashboard/informes/posllamadas/asignarcupoptoventa',
                    },
                    {
                      title: 'asignar cupo red',
                      path: '/dashboard/informes/posllamadas/asignarcupored',
                    },
                    {
                      title: 'ver-anular cupo',
                      path: '/dashboard/informes/posllamadas/veranularcupo',
                    },
                  ],
          },
        ],
      },
    ],
  },
];

export default navConfig;
