"use client";
import useGetAllUsers from "@/hooks/users/useGetAllUsers";
import Account from "../Account/Account";
import styles from "./styles.module.scss";

const Accounts = ({ handleSelectedUser, selectedUser, myId }) => {
  const [allUsers, loading] = useGetAllUsers();
  console.log("---- allUsers:", allUsers);
  return (
    <div className={styles.accounts}>
      {allUsers?.map((user, index) => (
        <Account
          key={index}
          user={user}
          clickHandler={handleSelectedUser}
          selectedUser={selectedUser}
          myId={myId}
        />
      ))}
    </div>
  );
};

export default Accounts;
