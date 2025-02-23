import userData from "./userData.json";
import Profile from "./components/Profile/Profile";
import FriendList from "./components/FriendList/FriendList";
import friends from "./friends.json";
import transactions from "./transaction.json";
import TransactionHistory from "./components/TransactionHistory/TransactionHistory";

import "./App.css";

export default function App() {
  return (
    <>
      <Profile
        name={userData.username}
        tag={userData.tag}
        location={userData.location}
        image={userData.avatar}
        stats={userData.stats}
      />

      <FriendList friends={friends} />

      <TransactionHistory items={transactions} />
    </>
  );
}
