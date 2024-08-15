import DetailCard from "@/components/DetailCard";
import { getUsersDetail } from "@/helpers/apiFunctions";
import React from "react";

const UserDetail = async ({ params: { id } }) => {
  const person = await getUsersDetail(id);
  console.log(person);
  return (
    <div className="text-center">
      <h1 className="text-2xl">Team Person</h1>
      <DetailCard {...person} />
    </div>
  );
};

export default UserDetail;

// Create meta data for dynamic pages
export async function generateMetadata({ params: { id } }) {
  const person = await getUsersDetail(id);
  return {
    title: `${person.first_name} ${person.last_name}`,
    description: `Person Detail Page for user ${id}`,
  };
}

export async function generateStaticParams() {
  const person = await getUsersDetail();
  return person.map((user) => ({ params: { id: user.id.toString() } }));
}
