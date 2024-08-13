import TeamList from "@/components/TeamList";
import { getUsers } from "@/helpers/apiFunctions";
import React from "react";

export const metadata = {
  title: "Team Page",
  description: "This is Team Page",
};

//* You can use fetch with async/await in Server Components,
const Team = async () => {
  //? bu sayede serverda data fetch işlemi serverda gerçekleşti ve cliente data fetch edilmiş olarak geldi
  const users = await getUsers();
  console.log(users);
  return (
    <div className="text-2xl text-center p-10">
      <h1>Team</h1>
      <TeamList users={users} />
    </div>
  );
};

export default Team;
