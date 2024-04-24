import BreadcrumbTwo from "@/src/common/breadcrumbs/breadcrumb-2";

import FooterFour from "@/src/layout/footers/footer-4";
import React from "react";
import AllBranch from "@/src/components/branch/allbranch";
import Government from "@/src/components/government/index2";
import HeaderFour from "@/src/layout/headers/header-4";
import imgbread from "@/public/images/navbar/Region.png"

const Branch = () => {
  return (
    <>
      {/* <HeaderTen /> */}
      <HeaderFour />
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main>
            <BreadcrumbTwo title={"ສາ​ຂາ"} imgbread={imgbread} />
            <AllBranch />
            <Government />
          </main>
          <FooterFour />
        </div>
      </div>
    </>
  );
};

export default Branch;