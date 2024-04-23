const menu_data = [
    {
      id: 1,
      mega_menu: false,
      has_dropdown: false,
      title: "ໜ້າ​ຫຼັກ",
      link: "/",
      active: "active",
      sub_menus: [],
    },
    {
      id: 2,
      mega_menu: false,
      has_dropdown: true,
      title: "ກ່ຽວ​ກັບ",
      link: "",
      active: "",
      sub_menus: [
        { link: "/about", title: "ກ່ຽວ​ກັບ​ລັດ​ວິ​ສາ​ຫະ​ກິດ​ໄຟ​ຟ້າ​ລາວ" },
        { link: "/organization", title: "​ໂຄງ​ຮ່າງ​ການ​ຈັດ​ຕັ້ງ" },
        
      ],
    },
    
    {
      id: 3,
      mega_menu: false,
      has_dropdown: true,
      title: "​ຂ່າ​ວ​ສານ ແລະ ປະ​ຊາ​ສຳ​ພັນ",
      link: "",
      active: "",
      sub_menus: [
        { link: "/newslist", title: "​ຂ່າ​ວ​ສານ ແລະ ປະ​ຊາ​ສຳ​ພັນ" },
        { link: "/confession", title: "​ສາ​ລະ​ໜ້າ​ຮູ້" },
        { link: "/turnoff", title: "ແຈ້ງມອດ​ໄຟ" },
        { link: "/magazine", title: "ວ​າ​ລະ​ສານ" },
        { link: "/notice-of-auction", title: "ແຈ້ງປະ​ມູນ" },
        { link: "/jobvacancy", title: "​ປະ​ກາດ​ຮັບ​ສະ​ໝັກ" },
        
      ],
    },
  
    {
      id: 4,
      mega_menu: false,
      has_dropdown: true,
      title: "ຕິດ​ຕໍ່",
      link: "",
      active: "",
      sub_menus: [
        { link: "/service-center", title: "ສູນ​ບໍ​ລິ​ການ" },
        { link: "/comment", title: "​ສະ​ແດງ​ຄຳຄິດ​ເຫັນຕໍ່ ຟ​ຟ​ລ" },
        { link: "/branch", title: "ສາ​ຂາ" },
      ],
    },
    
    
  
  ];
  export default menu_data;
  