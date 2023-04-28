import React, { useEffect, useState } from "react";

export const Contact = () => {
  const [user, setUser] = useState([]);

  useEffect(() => {
    fetch("http://localhost:9090/safari/user/getall")
      .then(response => response.json())
      .then((data) => {
        setUser(data)
      })
      .catch(function (ex) {
        console.log('error', ex);
      })
  }, [])

  const deleteUser = (userId) => {
    fetch(`http://localhost:9090/safari/user/delete/${userId}`, {
      method: 'delete',
    })
      .catch(function (ex) {
        console.log('error', ex);
      });;
  }


  return (
    <div>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>
              userId
            </th>
            <th>
              email
            </th>
            <th>password</th>
            <th>role</th>
            <th>firstName</th>
            <th>lastName</th>
            <th>dob</th>
            <th>address</th>
            <th>phoneNo</th>
          </tr>
        </thead>
        <tbody>
          {
            user && user.map((user) =>
              <tr key={user.userId}>
                <td>{user.userId}</td>
                <td>{user.email}</td>
                <td>{user.password}</td>
                <td>{user.role}</td>
                <td>{user.firstName}</td>
                <td>{user.lastName}</td>
                <td>{user.dob}</td>
                <td>{user.address}</td>
                <td>{user.phoneNo}</td>
                <td>
                  <button type="button" id="delete" onClick={() => deleteUser(user.userId)}>delete</button>
                </td>
              </tr>
            )
          }
        </tbody>
      </table>
    </div>
  );
};
