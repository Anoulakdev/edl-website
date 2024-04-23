import React from "react";
import SEO from "../common/seo";
import Branch from "../components/branch";
import Wrapper from "../layout/wrapper";

const index = () => {
  return (
    <Wrapper>
      <SEO pageTitle={"ສາ​ຂາ"} />
      <Branch />
    </Wrapper>
  );
};

export default index;