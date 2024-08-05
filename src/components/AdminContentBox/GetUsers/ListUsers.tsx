"use client"
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getUsersFromServer } from '@/Redux/users/Users'
import { AppDispatch, RootState } from '@/Redux/Store'
import Box from '@mui/material/Box';
import { GridColDef, DataGrid } from '@mui/x-data-grid'
import { v4 as uuidv4 } from 'uuid'
import Rtl from '@/components/MuiRtl/MuiRtl'
import { createTheme, ThemeProvider } from '@material-ui/core/styles';
import { faIR as corefaIR } from '@material-ui/core/locale';
import { DataGridPro } from '@mui/x-data-grid-pro';
import { faIR } from '@mui/x-data-grid/locales';



export default function ListUsers() {
  const [pageSize, setPageSize] = React.useState<number>(9);
  const theme = createTheme(
    {
      palette: {
        primary: { main: '#1976d2' },
      },
    },
  );

  const localizedTextsMap = {
    columnMenuUnsort: "مرتب کردن",
    columnMenuSortAsc: "مرتب سازی صعودی",
    columnMenuSortDesc: "مرتب سازی نزولی",
    columnMenuFilter: "فیلتر کردن",
    columnMenuHideColumn: "مخفی کردن ستون",
    columnMenuShowColumns: "نشان دادن ستون",
    columnManage: 'مدیریت ستون ها',
    
  };

const dispatch = useDispatch<AppDispatch>()
const users = useSelector<RootState>(state=>state.users)
console.log("users : ",users)

const columns: GridColDef[] = [
  {
    field: 'firstName',
    headerName:'نام',
    headerClassName: 'bg-slate-200 dark:bg-slate-700 dark:text-white font-moraba',
    cellClassName: 'font-dana justify-center item-center text-center dark:text-white',
    headerAlign: 'center',
    width: 100,
  },
  {
    field:'lastName',
    headerName: 'نام خانوادگی',
    headerClassName: 'bg-slate-200 dark:bg-slate-700 dark:text-white font-moraba',
    cellClassName: 'font-dana justify-center item-center text-center dark:text-white',
    headerAlign: 'center',
    width: 100,
  },
  {
    field:'age',
    headerName: 'سن',
    headerClassName: 'bg-slate-200 dark:bg-slate-700 dark:text-white font-moraba',
    cellClassName: 'font-dana justify-center item-center text-center dark:text-white',
    headerAlign: 'center',
    width: 70,
  },
  {
    field:'school',
    headerName: 'مدرسه',
    headerClassName: 'bg-slate-200 dark:bg-slate-700 dark:text-white font-moraba',
    cellClassName: 'font-dana justify-center item-center text-center dark:text-white',
    headerAlign: 'center',
    width: 90,
  },
  {
    field:'userCode',
    headerName: 'کد ملی',
    valueFormatter: (value)=> Number(value).toLocaleString("fa-IR"),
    headerClassName: 'bg-slate-200 dark:bg-slate-700 dark:text-white font-moraba',
    cellClassName: 'font-dana justify-center item-center text-center dark:text-white',
    headerAlign: 'center',
    width: 120,
  },
  {
    field:'grade',
    headerName: 'پایه',
    headerClassName: 'bg-slate-200 dark:bg-slate-700 dark:text-white font-moraba',
    cellClassName: 'font-dana justify-center item-center text-center dark:text-white',
    headerAlign: 'center',
    width: 70,
  },
  {
    field:'phoneNumber',
    headerName: 'شماره تماس',
    valueFormatter: (value)=> Number(value).toLocaleString("fa-IR"),
    headerClassName: 'bg-slate-200 dark:bg-slate-700 dark:text-white font-moraba',
    cellClassName: 'font-dana justify-center item-center text-center dark:text-white',
    headerAlign: 'center',
    width: 120,
  },
  { field: 'actions', 
  headerName: 'عملیات',
   width: 564,
   headerClassName: 'bg-slate-200 dark:bg-slate-700 dark:text-white font-moraba',
   cellClassName: 'font-moraba flex justify-center items-center text-center dark:text-white',
    renderCell: (params) => {
    return (
      <>
      <button
        onClick={(e) => {}} className='bg-red-500 font-dana rounded-lg h-9 flex justify-center items-center mr-2 p-1'
      >
        حذف
      </button>
      <button
        onClick={(e) => {}} className='bg-yellow-500 font-dana rounded-lg h-9 flex justify-center items-center mr-2 p-1'
      >
        بروزرسانی
      </button>
      <button
        onClick={(e) => {}} className='bg-sky-500 font-dana rounded-lg h-9 flex justify-center items-center mr-2 p-1'
      >
        اطلاعات کاربر
      </button>
      </>
      
    );
  } }
];

const rows =[...users];
console.log('rows' , rows)
// const usersData;
    useEffect(()=>{

         dispatch(getUsersFromServer('/api/user')) 

    },[])
// console.log("user data: ", usersData)
  return (
    <div className='p-2 '>

      <Box className='' 
      sx={{
        height: '85vh',
        width: '100%',
        
      }}
      >
      {/* <ThemeProvider theme={theme}> */}

      {/* <Rtl> */}
      <DataGrid
      pagination
      autoPageSize
      // localeText={corefaIR.props.MuiDataGrid.localeText} 
      getRowId={(row) => uuidv4()} 
      rows={rows} 
      columns={columns} 
      className='bg-slate-200 dark:bg-slate-700' 
      // localeText={
      //   localizedTextsMap
      // }
      localeText={faIR.components.MuiDataGrid.defaultProps.localeText}
      />
      {/* </Rtl> */}
      {/* </ThemeProvider> */}
    </Box>

    </div>
  )
}
