import React from "react";
import SEO from "../common/seo";
import Service from "../components/service";
import Wrapper from "../layout/wrapper";

const index = () => {
  return (
    <Wrapper>
      <SEO pageTitle={"ກ່ຽວ​ກັບ​ລັດ​ວິ​ສາ​ຫະ​ກິດ​ໄຟ​ຟ້າ​ລາວ"} />
      <Service />
    </Wrapper>
  );
};

export default index;
