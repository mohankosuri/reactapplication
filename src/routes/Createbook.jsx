import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { DataGrid } from '@mui/x-data-grid';

const Createbook = () => {
  const [books, setBooks] = useState([]);

  const columns =[
    
  { field: 'title', headerName: 'Title', width: 130 },
  { field: 'author', headerName: 'Authore', width: 130 },
  { field: 'publishedYear', headerName: 'Year', width: 130 },
  ]

  useEffect(() => {
    axios.get('http://localhost:5000/books')
      .then((response) => {
        setBooks(response.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className='text-white mt-10'> 
     


    <div style={{ height: 500, width: 500,color:"white" }}>
      <DataGrid
      
        rows={books}
        getRowId={(row) => row._id}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 5 },
          },
        }}
        pageSizeOptions={[5, 10]}
        checkboxSelection
      />
    </div>
    </div>
  );
};

export default Createbook;
