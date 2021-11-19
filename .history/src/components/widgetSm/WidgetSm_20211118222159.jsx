import "./widgetSm.css";
import { Visibility } from "@material-ui/icons";
import { useEffect, useState } from "react";
import axios from "axios";

export default function WidgetSm() {
  const [users, setUsers] = useState([]);

  const fetchUsers = async () => {
    const data = await axios("https://jsonplaceholder.typicode.com/users?_limit=5").then(
      (res) => res.data
    );
    setUsers(data);
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  console.log(users);
  return (
    <>
     {user}
    </>
  );
}
