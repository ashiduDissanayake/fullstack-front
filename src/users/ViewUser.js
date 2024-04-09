import axios from "axios";
import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";

export default function ViewUser() {
  const { id } = useParams();

  const [user, setUser] = React.useState({
    name: "",
    email: "",
    userName: "",
  });

  useEffect(() => {
    loadUser();
  }, []);

  const loadUser = async () => {
    const result = await axios.get(`http://localhost:8080/user/${id}`);
    setUser(result.data);
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
          <h2 className="text-center">User Details</h2>

          <div className="card">
            <div className="card-header">Details of User ID: {user.id}</div>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">
                <b>Name: </b>
                {user.name}
              </li>
              <li className="list-group-item">
                <b>User Name: </b>
                {user.userName}
              </li>
              <li className="list-group-item">
                <b>Email: </b>
                {user.email}
              </li>
            </ul>
            <Link className="btn btn-primary my-2" to={"/"}>
              Back to Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
