import React, { useState } from "react";
import ResousceList from "./ResourceList";
import UserList from "./UserList";

const App = () => {
  const [resource, setResource] = useState("posts");
  return (
    <div>
      <button onClick={() => setResource("posts")}>Posts</button>
      <button onClick={() => setResource("todos")}>Todos</button>
      <UserList />
      <ResousceList resource={resource} />
    </div>
  );
};

export default App;
