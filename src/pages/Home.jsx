import React, { useEffect, useState } from "react";
import Card from "../components/card";

const Home = () => {
  const [user, setUser] = useState({});
  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await fetch(
          "https://randomuser.me/api/?page=1&results=1&seed=abc"
        );
        if (res.ok) {
          const data = await res.json();
          const randomUser = data.results[0];
          const updatedUser = {
            name: {
              title: randomUser.name?.title || "Mr",
              first: randomUser.name?.first || "Devesh",
              last: randomUser.name?.last || "Rathod",
            },
            cell: randomUser.cell || "123-456-7890",
            gender: randomUser.gender || "Male",
            picture: {
              large:
                randomUser.picture?.large ||
                "https://i.pinimg.com/originals/7d/34/d9/7d34d9d53640af5cfd2614c57dfa7f13.png",
            },
          };
          setUser(updatedUser);
          console.log(updatedUser);
        } else {
          throw new Error("Failed to fetch user data");
        }
      } catch (error) {
        console.error("Error fetching user:", error);
      }
    };
    fetchUser();
  }, []);

  return (
    <div className="flex justify-center items-center h-screen">
      <Card
        title={user.name?.title}
        first={user.name?.first}
        last={user.name?.last}
        cell={user.cell}
        gender={user.gender}
        image={user.picture?.large}
      />
    </div>
  );
};

export default Home;
