/** @format */
import React from "react";
import Profile from "./Component/profile/Profile";
import Statistics from "./Component/statistics/Statistics";
import user from "./data/user.json";
import statisticalData from "./data/statisticalData.json";
import FriendList from "./Component/friendList/FriendList";
import friends from "./data/friends.json";
import TransactionHistory from "./Component/transactionHistory/TransactionHistory";
import transactions from "./data/transactions.json";

const App = () => {
  return (
    <>
      <Profile
        name={user.name}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <section className="statistics">
        <Statistics title="Upload stats" stats={statisticalData} />
      </section>
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </>
  );
};

export default App;
