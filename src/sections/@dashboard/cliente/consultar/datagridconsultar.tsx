import React from "react";
import { DataGrid, GridRowsProp, GridColDef, GridToolbar } from "@mui/x-data-grid";

export default function BasicExampleDataGrid() {
  
 const rows: GridRowsProp = [
  { id: 1, col1: "Virtual 8 MUNICIPIO", col2: "Punto de Venta" , col3:"111", col4:"56.34", col5:"Cal l 1 -3", col6:"12345678", col7:"p@p.com"},
  { id: 2, col1: "Punto Prueba", col2: "Punto de Venta",col3:"121", col4:"100.34", col5:"Av 23  -3", col6:"67812345", col7:"a@p.com"},
  { id: 3, col1: "Virtual 9 MUNICIPIO", col2: "Punto de Venta", col3:"311", col4:"9.07", col5:"Loma 5", col6:"67534680", col7:"d@p.com"},
  { id: 4, col1: "Virtual 6 MUNICIPIO", col2: "Mayorista" , col3:"111", col4:"23,65", col5:"Avenida Calle Carrera", col6:"1389653", col7:"h@p.com"},
  { id: 5, col1: "Virtual 2 MUNICIPIO", col2: "Punto de Venta", col3:"114", col4:"12.67", col5:"Monumento 5", col6:"123425678", col7:"v@p.com"},
  { id: 6, col1: "Punto PruebaI", col2: "is Mayorista", col3:"511", col4:"15.77", col5:"Parcela 56", col6:"07643563", col7:"n@p.com"},
];

const columns: GridColDef[] = [
  { field: "id",  width: 50},
  { field: "col1", headerName: "Nombre" , width: 150},
  { field: "col2", headerName: "Tipo de Cliente", width: 120},
  { field: "col3", headerName: "Numero", width: 80},
  { field: "col4", headerName: "Saldo Disponible", width: 80},
  { field: "col5", headerName: "Direccion", width: 120},
  { field: "col6", headerName: "Telefono", width: 120},
  { field: "col7", headerName: "Email", width: 160}
];

  return (
    <div style={{ height: 600, width: '100%' }}>
      <DataGrid rows={rows} columns={columns} slots={{ toolbar: GridToolbar }} />
    </div>
  );
}