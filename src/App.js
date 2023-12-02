import React from "react";
import "./index.css";
import { Success } from "./components/success/Success";
import { Users } from "./components/users/Users";

// Тут список пользователей: https://reqres.in/api/users

function App() {

  const [users, setUsers] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);
  const [filterValue, setFilterValue] = React.useState("");
  const [invites, setInvites] = React.useState([]);
  const [isSendInvites, setIsSendInvites] = React.useState(false);



  React.useEffect(() => {
    fetch("https://reqres.in/api/users")
      .then(res => res.json())
      .then(data => {
        setUsers(data.data)
      })
      .catch(err => console.log(err))
      .finally(() => {
        setIsLoading(false)
      });
  }, [])

  const onClickInvitePeople = (id) => {
    if (invites.includes(id)) {
      setInvites(prev => prev.filter(prevId => prevId !== id))
    } else {
      setInvites(prev => [...prev, id])
    }
  }

  const onChangeFilterValue = (event) => {
    setFilterValue(event.target.value);
  }

  const onClickSendInvites = () => {
    setIsSendInvites(true);
  }

  return (
    <div className="App">
      {isSendInvites ? (
        <Success
          invites={invites}
        />
      ) : (
        <Users
          items={users}
          isLoading={isLoading}
          filterValue={filterValue}
          onChangeFilterValue={onChangeFilterValue}
          onClickInvitePeople={onClickInvitePeople}
          invites={invites}
          onClickSendInvites={onClickSendInvites}
        />)
      }
    </div>
  );
}

export default App;
