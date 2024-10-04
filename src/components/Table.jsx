import { useState, useMemo } from 'react' 
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-material.css';

function Table() {


  // const CellRendererFunc = p => {
  //   const onAt = useCallback( ()=>window.alert('value is ' + p.data.Email))
  //   return(
  //     <>
  //     <strong onClick={onAt} style={{marginRight:'10px', border:'1px solid #C00', padding:'5px 10px'}}>Button</strong> 
  //     {p.value}
  //     </>
  //   )
  
  //   }

    const AddShortNameFunc = q => {
      return(
        <>
        <span className="ShortNameBg">{q.value.split(" ")[0][0]}{q.value.split(" ")[1][0]}</span> 
        {q.value}
        </>
      )
    }

    const statusBtnFunc = q => {
          if(q.value === "Updated"){
                    return <span className="statusBtn updatedStatus">{q.value}</span> 
                  }
          else if(q.value === "Active"){
            return <span className="statusBtn activeStatus">{q.value}</span> 
          }
          else{
            return <span className="statusBtn inactiveStatus">{q.value}</span> 
          }     
       }
        

   

    const [rowData] = useState([
        { UserName: "TammoyTammoyTammoy Das", Email: "tanmoy@gmail.com", UserType: "Internal", Company: "Reliance Industries", AccessProfiles: "Group Admin", LastLogin: "15/01/2024", Status:"Updated"},
        { UserName: "Sanjib Debnath", Email: "sanjibdebnath@gmail.com", UserType: "Internal", Company: "Tata Consultancy Services", AccessProfiles: "Rix Manager", LastLogin: "15/01/2024", Status:"Active"},
        { UserName: "Aritrak Debnath", Email: "aritrak.design@gmail.com", UserType: "Internal", Company: "Hindustan Unilever", AccessProfiles: "Group Admin", LastLogin: "15/01/2024", Status:"Updated"},
        { UserName: "Debashis Das", Email: "debashis.das@gmail.com", UserType: "Internal", Company: "Infosys", AccessProfiles: "Rix Manager", LastLogin: "15/01/2024", Status:"Active"},
        { UserName: "Krishna Pawar", Email: "krishna@rix.com", UserType: "Internal", Company: "Tata Consultancy Services", AccessProfiles: "Rix Manager", LastLogin: "15/01/2024", Status:"Active"},
        { UserName: "Tammoy Das", Email: "tanmoy@gmail.com", UserType: "Internal", Company: "Reliance Industries", AccessProfiles: "Group Admin", LastLogin: "15/01/2024", Status:"Updated"},
        { UserName: "Sanjib Debnath", Email: "sanjibdebnath@gmail.com", UserType: "Internal", Company: "Tata Consultancy Services", AccessProfiles: "Rix Manager", LastLogin: "15/01/2024", Status:"Active"},
        { UserName: "Aritrak Debnath", Email: "aritrak.design@gmail.com", UserType: "Internal", Company: "Hindustan Unilever", AccessProfiles: "Group Admin", LastLogin: "15/01/2024", Status:"Updated"},
        { UserName: "Debashis Das", Email: "debashis.das@gmail.com", UserType: "Internal", Company: "Infosys", AccessProfiles: "Rix Manager", LastLogin: "15/01/2024", Status:"Active"},
        { UserName: "Krishna Pawar", Email: "krishna@rix.com", UserType: "Internal", Company: "Tata Consultancy Services", AccessProfiles: "Rix Manager", LastLogin: "15/01/2024", Status:"Active"},
        { UserName: "Tammoy Das", Email: "tanmoy@gmail.com", UserType: "Internal", Company: "Reliance Industries", AccessProfiles: "Group Admin", LastLogin: "15/01/2024", Status:"Updated"},
        { UserName: "Sanjib Debnath", Email: "sanjibdebnath@gmail.com", UserType: "Internal", Company: "Tata Consultancy Services", AccessProfiles: "Rix Manager", LastLogin: "15/01/2024", Status:"Active"},
        { UserName: "Aritrak Debnath", Email: "aritrak.design@gmail.com", UserType: "Internal", Company: "Hindustan Unilever", AccessProfiles: "Group Admin", LastLogin: "15/01/2024", Status:"Updated"},
        { UserName: "Debashis Das", Email: "debashis.das@gmail.com", UserType: "Internal", Company: "Infosys", AccessProfiles: "Rix Manager", LastLogin: "15/01/2024", Status:"Active"},
        { UserName: "Krishna Pawar", Email: "krishna@rix.com", UserType: "Internal", Company: "Tata Consultancy Services", AccessProfiles: "Rix Manager", LastLogin: "15/01/2024", Status:"Inactive"},
      ]);
      
      const [colDefs] = useState([
        //{ field: "UserName",   checkboxSelection:true,     lockPinned:true,  width:220, , cellRenderer: p => <strong>{p.value}</strong> },
        { field: "UserName", cellRenderer: AddShortNameFunc,  maxWidth:220, minWidth:220, tooltipField:"UserName" },
        { field: "Email",  maxWidth:220, minWidth:220 },
        { field: "UserType"  },
        { field: "Company", filter:true,  tooltipField:'email'},
        { field: "AccessProfiles", cellRenderer: p => <span className='accessProfiles'>{p.value}</span>},
        { field: "LastLogin",  maxWidth:150, minWidth:150  },
        { field: "Status", cellRenderer: statusBtnFunc, resizable: false,  maxWidth:120, minWidth:120 }
      ]);
     
      //const defaultColDef = {sortable:true,  floatingFilter:false, editable:true, flex:1,  resizable: true, width:120,  wrapText: true,  autoHeight: true,} 
      const defaultColDef = {sortable:true,  floatingFilter:false,  flex:1 } 

      let gridApi
      const onGridReady = p => {
        gridApi = p.api
        //console.log('grid is ready');
        // fetch("https://jsonplaceholder.typicode.com/comments").then(resp=>resp.json())
        // .then(resp=>{
        //   gridApi.applyTransaction({add:resp})
        //   gridApi.paginationGoToPage(5); 
        // })
        gridApi.paginationGoToPage(5); 
      }
      
      const selection = useMemo(() => { 
        return { 
              mode: 'multiRow' 
          };
      }, []);






  return (
    <>
<div
  className="ag-theme-material" // applying the Data Grid theme
 
    // style={{ height:'calc(100vh - 370px)' }}
 >
   <AgGridReact
       rowData={rowData}
       columnDefs={colDefs}
       pagination={true}
       domLayout='autoHeight'
       defaultColDef={defaultColDef}
       selection={selection} 
       paginationPageSize={10}
       //paginationAutoPageSize={true}
       onGridReady={onGridReady}
       paginationPageSizeSelector={[5, 10, 20, 50, 100]}
       enableBrowserTooltips={true}

   />
 </div>

    </>
  )
}

export default Table
