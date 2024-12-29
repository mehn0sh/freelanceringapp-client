import React from "react";
import DashboardHeader from "../../ui/DashboardHeader";
import Loading from "../../ui/Loading";
import useOwnerProjects from "../projects/useOwnerProject";
import Stats from "./Stats";

const DashboardLayout = () => {
  const { projects, isLoading } = useOwnerProjects();
  if (isLoading) return <Loading />;
  return (
    <div>
      <DashboardHeader/>
      <Stats projects={projects} />
    </div>
  );
};

export default DashboardLayout;
