import BreadcrumbTwo from "@/src/common/breadcrumbs/breadcrumb-2";

import FooterFour from "@/src/layout/footers/footer-4";
import React from "react";
import ConfessionList from "@/src/components/confession/confessionlist";

import Government from "@/src/components/government/index2";
import HeaderFour from "@/src/layout/headers/header-4";
import imgbread from "@/public/images/navbar/Acknowladg.png";

const NewsList = () => {
  return (
    <>
      {/* <HeaderTen /> */}
      <HeaderFour />
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main>
            <BreadcrumbTwo title={"​ສາ​ລະ​ໜ້າ​ຮູ້ ແລະ ຄວາ​ມ​ຮູ້​ກ່ຽວ​ກັບ​ໄຟ​ຟ້າ"} imgbread={imgbread} />
            <ConfessionList />
            <Government />
          </main>
          <FooterFour />
        </div>
      </div>
    </>
  );
};

export default NewsList;