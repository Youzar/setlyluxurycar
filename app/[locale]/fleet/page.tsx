import { Fleet } from "@/components/sections";
import PageLayout from "@/components/sections/PageLayout";
import React from "react";

const FleetPage = () => {
  return (
    <PageLayout headerTitle="our fleet">
      <Fleet showAll={true} />
    </PageLayout>
  );
};

export default FleetPage;
