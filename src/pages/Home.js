import React from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";

export default function Home() {
  const { id } = useParams();

  const [users, setUsers] = React.useState([]);

  React.useEffect(() => {
    getUsers();
  }, []);

  const getUsers = async () => {
    const result = await axios.get("http://localhost:8080/users");
    setUsers(result.data);
  };

  const deleteUser = async (id) => {
    await axios.delete(`http://localhost:8080/user/${id}`);
    getUsers();
  };
  return (
    <div className="container">
      <div className="py-4">
        <table className="table border shadow">
          <thead>
            <tr>
              <th scope="col">Log</th>
              <th scope="col">Name</th>
              <th scope="col">User Name</th>
              <th scope="col">Email</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr>
                <th scope="row" key={index}>
                  {index + 1}
                </th>
                <td>{user.name}</td>
                <td>{user.userName}</td>
                <td>{user.email}</td>
                <td>
                  <Link className="btn btn-primary mx-2" 
                  to={`/viewUser/${user.id}`}
                  >View</Link>
                  <Link
                    className="btn btn-outline-primary mx-2"
                    to={`/editUser/${user.id}`}
                  >
                    Edit
                  </Link>
                  <Link className="btn btn-danger mx-2" onClick={()=> deleteUser(user.id)}>Delete</Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
