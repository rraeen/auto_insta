import React from 'react'
import { DataGrid } from '@mui/x-data-grid'
import { Box, Button, Typography } from '@mui/material'
import { Element } from '../../atoms'
import { dataGridStyle } from '../../../styles/atomStyle'

function GridTable({ title = 'Appointments', handleAdd,columns=[],rows=[] }) {
  return (
    <Box sx={{ height: 580, width: '100%' }}>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <Typography variant="h6" sx={{ mb: 1, fontSize: '1rem' }}>
          {title} ({rows.length})
        </Typography>
        <Element
          type="simplebutton"
          props={{
            onClick: handleAdd,
            label: ' Add appointment',
            var: 'p',
            customStyle: { mb: 1 },
          }}
        />
      </Box>
      <DataGrid
        rows={rows}
        columns={columns}
        checkboxSelection
        disableRowSelectionOnClick
        rowHeight={30}
        headerHeight={25}
        pageSize={5}
        rowsPerPageOptions={[5, 10, 20]}
        sx={dataGridStyle}
      />
    </Box>
  )
}

export default GridTable
