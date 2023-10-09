import React from 'react';
function DeleteContainer({ deletedItems, onRestore,onPermanent }) {
  return (
    <div>
      {deletedItems.map((item) => (
        <div key={item.id}>
          <p>ID: {item.id}</p>
          <p>FirstName: {item.firstName}</p>
          <p>LastName:{item.lastName}</p>
          <p>Email:{item.email}</p>
            <p>Contact:{item.contactNumber}</p>
        <p>Age:{item.age}</p>
            <p>Date of birth:{item.dob}</p>
             <p>Salary:{item.salary}</p>
             <p>Address:{item.address}</p>
          <button onClick={() => onRestore(item)}>Restore</button>
          <button onClick={()=> onPermanent(item)}>Permanently Delete</button>
        </div>
      ))}
    </div>
  );
}
export default DeleteContainer;

 