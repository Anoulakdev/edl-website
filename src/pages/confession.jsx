import React from "react";
import SEO from "../common/seo";
import Confession from "../components/confession";
import Wrapper from "../layout/wrapper";

const index = () => {
  return (
    <Wrapper>
      <SEO pageTitle={"​ສາ​ລະ​ໜ້າ​ຮູ້ ແລະ ຄວາ​ມ​ຮູ້​ກ່ຽວ​ກັບ​ໄຟ​ຟ້າ"} />
      <Confession />
    </Wrapper>
  );
};

export default index;