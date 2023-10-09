
import './App.css';
import DataTable from './DataTable';
import DeleteContainer from './DeleteContainer';
import { useState,useEffect } from 'react';

function App() {
  const [data, setData] = useState([]);
  const [deletedItems, setDeletedItems] = useState([]);
  const[newItem,setNewItem]=useState({id:'',firstName:'',lastName:'',email:'',contactNumber:'',age:'',dob:'',salary:'',address:''})
  
  useEffect(() => {
    
    fetch('https://hub.dummyapis.com/employee?noofRecords=100')
      .then(response => response.json())
      .then(data => setData(data))
      .catch(error => console.error(error));
  }, []);



  const handleDelete = (item) => {
    const newData = data.filter((d) => d.id !== item.id);
    setDeletedItems([...deletedItems, item]);
    setData(newData);
  };

  const onRestore = (item) => {
    const newDeletedItems = deletedItems.filter((d) => d.id !== item.id);
    setDeletedItems(newDeletedItems);
    setData([...data, item]);
  };
  const onPermanent = (item) => {
    const newDeletedItems = deletedItems.filter((d) => d.id !== item.id);
    setDeletedItems(newDeletedItems);
  };
 const handleAddRow=()=>{
    if(newItem.id&&newItem.firstName&&newItem.lastName&&newItem.email&&newItem.contactNumber&&newItem.age&&newItem.dob&&newItem.salary&&newItem.address)
    {
      setData([...data,newItem])
      setNewItem({id:'',firstName:'',lastName:'',email:'',contactNumber:'',age:'',dob:'',salary:'',address:''})
    }
    }
  
  const sortData=()=>{
    const sortedData=([...data].sort((a,b)=>b.id-a.id))
    setData(sortedData)
  }
  
  return (
    <>
    <div>
      <h1>Data Table</h1>
      <DataTable data={data} onDelete={handleDelete} />
      <h2>Delete Container</h2>
      <DeleteContainer deletedItems={deletedItems} onRestore={onRestore} onPermanent={onPermanent} />
    </div>
    

    <h3>Add rows</h3>
    <input type="text" placeholder="Enter id" value={newItem.id}
    onChange={(e)=>setNewItem({...newItem, id:e.target.value})} />
    <br/>
     <input type="text" placeholder="Enter first name" value={newItem.firstName}
    onChange={(e)=>setNewItem({...newItem, firstName:e.target.value})} />
    <br/>
    <input type="text" placeholder="Enter last name" value={newItem.lastName}
    onChange={(e)=>setNewItem({...newItem, lastName:e.target.value})} />
    <br/>
   <input type="email" placeholder="Enter email" value={newItem.email}
    onChange={(e)=>setNewItem({...newItem, email:e.target.value})} />
    <br />
   <input type="number" placeholder="Enter contactNumber" value={newItem.contactNumber}
    onChange={(e)=>setNewItem({...newItem, contactNumber:e.target.value})} />
    <br />
    <input type="number" placeholder="Enter age" value={newItem.age}
    onChange={(e)=>setNewItem({...newItem, age:e.target.value})} />
    <br />
    <input type="date" placeholder="Enter Date of birth" value={newItem.dob}
    onChange={(e)=>setNewItem({...newItem, dob:e.target.value})} /><br></br>
    <input type="number" placeholder="Enter Salary" value={newItem.salary}
    onChange={(e)=>setNewItem({...newItem, salary:e.target.value})} /><br></br>
    <input type="text" placeholder="Enter address" value={newItem.address}
    onChange={(e)=>setNewItem({...newItem, address:e.target.value})} /><br></br>
    
    <button onClick={handleAddRow}>Add row</button>
    <h3>Sorting accodring to id</h3>
    <button onClick={sortData}>Sort</button>
    

    </>
  );
}
export default App;

