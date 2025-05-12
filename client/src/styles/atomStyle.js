const dataGridStyle = {
  '& .MuiDataGrid-root': {
    fontSize: '0.7rem',
  },
  '& .MuiDataGrid-cell': {
    padding: '2px',
    fontSize: '0.7rem',
  },
  '& .MuiDataGrid-columnHeader': {
    fontSize: '0.7rem',
    padding: '0 8px',
  },
  '& .MuiDataGrid-footerCell': {
    fontSize: '0.7rem',
  },
  '& .MuiDataGrid-pagination': {
    fontSize: '0.7rem',
  },
  '& .MuiDataGrid-columnSeparator': {
    display: 'none',
  },
  '& .MuiCheckbox-root': {
    padding: '0',
  },
  '& .MuiSvgIcon-root': {
    height: '1rem !important',
    width: '1rem !important',
  },
}

const centerBox={
    display:"flex",justifyContent:"center",alignItems:"center",height:"100vh"
}
const boxContainer={
    display:"flex",justifyContent:"center",alignItems:"center",height:"100vh",width:"100vw"
}
const justcenter={
    display:"flex",justifyContent:"center",alignItems:"center"
}
export {dataGridStyle,centerBox,boxContainer,justcenter}
