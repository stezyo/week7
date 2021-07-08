import * as React from 'react';
import { DataGrid, GridColDef, GridValueGetterParams } from '@material-ui/data-grid';


const columns: GridColDef[] = [
    { field: 'id', headerName: 'ID', width: 150 },
    { field: 'make', headerName: 'make', width: 200 },
    { field: 'model', headerName: 'model', width: 200 },
    { field: 'year', headerName: 'year', width: 200 },
    // {
    //   field: 'fullName',
    //   headerName: 'Full name',
    //   description: 'This column has a value getter and is not sortable.',
    //   sortable: false,
    //   width: 160,
    //   valueGetter: (params: GridValueGetterParams) =>
    //     `${params.getValue('firstName') || ''} ${params.getValue('lastName') || ''}`,
    // },
  ];

  const rows = [
    { id: 1, make: 'Honda', model: 'Civic', year: 2001 },
    { id: 2, make: 'Subaru', model: 'WRX', year: 2003 },
    { id: 3, make: 'Infiniti', model: 'G35', year: 2008 },
    { id: 4, make: 'Tesla', model: 'Model Y', year: 2021 },
    { id: 5, make: 'BMW', model: 'e30', year: 1989 },
    { id: 6, make: 'Toyota', model: 'Sienna', year: 2014 },
    { id: 7, make: 'Honda', model: 'Accord', year: 2018 },
    { id: 8, make: 'BMW', model: 'X3', year: 2020 },
];





export const DataTable = () => {
    return (
        <div style={{ height: 400, width: '100%' }}>
          <h2>Cars In Inventory</h2>
          <DataGrid rows={rows} columns={columns} pageSize={5} checkboxSelection />
        </div>
      );
}