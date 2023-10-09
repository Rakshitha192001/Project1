import React from 'react';
function DataTable({ data, onDelete }) {
  return (
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>FirstName</th>
            <th>LastName</th>
            <th>Email</th>
            <th>Contact</th>
            <th>Age</th>
            <th>Date of birth</th>
            <th>Salary</th>
            <th>Address</th>
            <th>Delete</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item) => (
          <tr key={item.id}>
            <td>{item.id}</td>
            <td>{item.firstName}</td>
              <td>{item.lastName}</td>
              <td>{item.email}</td>
              <td>{item.contactNumber}</td>
              <td>{item.age}</td>
              <td>{item.dob}</td>
             <td>{item.salary}</td>
             <td>{item.address}</td>
            <td>
              <button onClick={() => onDelete(item)}>Delete</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
export default DataTable;