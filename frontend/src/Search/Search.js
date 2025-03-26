// import React from 'react'
// import {  InputAdornment,TextField,Button } from '@mui/material';
// import SearchIcon from '@mui/icons-material/Search';

// const Search = () => {
//   return (
// <div className='flex'>
//     <TextField
//            className='search'

//         label="Search"
//         variant="outlined"
//        // fullWidth
//       //  value={searchQuery}
//        // onChange={handleSearchChange}
//         InputProps={{
//           startAdornment: (
//             <InputAdornment position="start">
//               <SearchIcon />
//             </InputAdornment>
//           ),
//         }}
//         style={{ marginBottom: '20px',width:'200px',display:'flex',justifyContent:'flex-end',marginLeft:'900px' }}      />


//     <Button 
//     variant="contained" 
//    // color="primary" 
//  //onClick={handleAddNew}
//     // style={{ marginBottom: '20px',marginLeft:'20px' ,backgroundColor:'green'}}
//   style={{ marginBottom: '20px',marginLeft:'20px' ,borderRadius:'5px',height:'50px',width:'20px',backgroundColor:'green'}}
//   >
//     Add New
//   </Button>
  

  
//   </div>
  
//       )
// }

// export default Search;
import React from 'react'
import {  InputAdornment,TextField,Button } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

const Search = () => {
  return (
<div className='buttons'>
    <TextField
           className='search'

        label="Search"
        variant="outlined"
       // fullWidth
      //  value={searchQuery}
       // onChange={handleSearchChange}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>
          ),
        }}
        style={{ marginBottom: '10px',width:'100px' }}
      />


    <Button 
    variant="contained" 
   // color="primary" 
 //onClick={handleAddNew}
    style={{ marginBottom: '20px',marginLeft:'20px' ,backgroundColor:'green'}}
  >
    Add New
  </Button>
  

  
  </div>
  
      )
}

export default Search;