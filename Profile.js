import React from "react";
import { useParams } from "react-router-dom";

export const Profile = () => {
  const { id } = useParams();
  return <div>Profile Page for User {id}</div>;
};