import React from "react";
import SEO from "../common/seo";
import Organization from "../components/organization";
import Wrapper from "../layout/wrapper";

const index = () => {
  return (
    <Wrapper>
      <SEO pageTitle={"ໂຄງ​ຮ່າງ​ການ​ຈັດ​ຕັ້ງ"} />
      <Organization />
    </Wrapper>
  );
};

export default index;
