import "./widgetSm.css";
import { Visibility } from "@material-ui/icons";
import { useEffect, useState } from "react";
import axios from "axios";

export default function WidgetSm() {
  const [users, setUsers] = useState([]);

  const fetchUsers = async () => {
    const data = await axios("https://jsonplaceholder.typicode.com/users?_limits").then(
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
      <div className="widgetSm">
        <span className="widgetSmTitle">New Join Members</span>
        <ul className="widgetSmList">
        <div style={{ display: "flex", flexDirection: "column" }}>
      {users.map((u) => (
        <div
          className="widgetSm"
          style={{ display: "flex", flexDirection: "column", width: "600px" }}
        >
          <span className="widgetSmTitle">New Join Members</span>
          <ul
            className="widgetSmList"
            style={{ display: "flex", flexDirection: "column" }}
          >
            <li className="widgetSmListItem">
              <img
                src="https://images.pexels.com/photos/3992656/pexels-photo-3992656.png?auto=compress&cs=tinysrgb&dpr=2&w=500"
                alt=""
                className="widgetSmImg"
              />
              <div className="widgetSmUser">
                <span className="widgetSmUsername">{u.name}</span>
                <span className="widgetSmUserTitle">Software Engineer</span>
              </div>
              <button className="widgetSmButton">
                <Visibility className="widgetSmIcon" />
                Display
              </button>
            </li>
          </ul>
        </div>
      ))}
    </div>
        </ul>
      </div>
    </>
  );
}
