import React from "react";
import SEO from "../common/seo";
import Service from "../components/newslist";
import Wrapper from "../layout/wrapper";

const index = () => {
  return (
    <Wrapper>
      <SEO pageTitle={"ຂ່າວ​ສານ ແລະ ປະ​ຊາ​ສຳ​ພັນ"} />
      <Service />
    </Wrapper>
  );
};

export default index;
