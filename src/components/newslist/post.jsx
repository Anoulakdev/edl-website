"use client"
import VideoPopup from "@/src/modals/video-popup";
import SearchIcon from "@/src/svg/search-icon";
import Link from "next/link";
import React, { useState } from "react";
import Categories from "./categories";
import RecentPost from "./recent-post";
import Search from "./search";
import Tags from "./tags";

import img_1 from "../../../public/assets/img/blog/blog-list-1.jpg";
import img_2 from "../../../public/assets/img/blog/blog-list-3.jpg";
import thumb from "../../../public/assets/img/blog/blog-list-2.jpg";
import Image from "next/image";

import news1 from "@/public/images/news/1.jpeg";
import news2 from "@/public/images/news/2.jpg";
import news3 from "@/public/images/news/3.jpg";
import news4 from "@/public/images/news/4.jpeg";
import news5 from "@/public/images/news/5.jpg";

// blog page data
const blog_page_data = [
  {
    id: 1,
    img: news1,
    cls: "format-image",
    slider_img: false,
    category: "Resources",
    date: "April 12, 2023",
    video: [],
    title:
      "ທ່ານ ສອນໄຊ ສີພັນດອນ ນາຍົກລັດຖະມົນຕີ ແຫ່ງ ສປປລາວ ລົງເຮັດວຽກ ແລະ ຊີ້ນໍາກະຊວງພະລັງງານແລະບໍ່ແຮ່",
    des: (
      <>
        From publishing content and hoping to acquire leads to gaining audience
        insights and making personalized content, content marketing.
      </>
    ),
  },
  {
    id: 2,
    img: news2,
    cls: "format-video",
    slider_img: false,
    category: "Resources",
    date: "April 20, 2023",
    video: [
      {
        video_tum: thumb,
        videoId: "-WRZI63emjs",
      },
    ],
    title: "ພິທີມອບ-ຮັບໜ້າທີ່ ຜູ້ອໍານວຍການໃຫຍ່ ລັດວິສາຫະກິດໄຟຟ້າລາວ",
    des: (
      <>
        From publishing content and hoping to acquire leads to gaining audience
        insights and making personalized content, content marketing.
      </>
    ),
  },
  {
    id: 3,
    img: news3,
    cls: "format-image fix",
    slider_img: false,
    category: "Resources",
    date: "April 12, 2023",
    video: [],
    title: "ກອງປະຊຸມເສວະນາກ່ຽວກັບການດໍາເນີນທຸລະກິດ",
    des: (
      <>
        From publishing content and hoping to acquire leads to gaining audience
        insights and making personalized content, content marketing.
      </>
    ),
  },
  {
    id: 4,
    img: news4,
    cls: "format-image fix",
    slider_img: false,
    category: "Resources",
    date: "April 12, 2023",
    video: [],
    title: "ພິທີສະເຫຼີມສະຫຼອງ ວັນສ້າງຕັ້ງ ລັດວິສາຫະກິດໄຟຟ້າລາວ ຄົບຮອບ 62 ປີ",
    des: (
      <>
        From publishing content and hoping to acquire leads to gaining audience
        insights and making personalized content, content marketing.
      </>
    ),
  },
  {
    id: 5,
    img: news5,
    cls: "format-image fix",
    slider_img: false,
    category: "Resources",
    date: "April 12, 2023",
    video: [],
    title:
      "ພິທີປາຖະກະຖາເລົ່າມູນເຊື້ອວັນສ້າງຕັ້ງ ຄຊປປລ ພ້ອມປະດັບຫຼຽນ ຊາວໜຸ່ມຕະລຸມບອນ ແລະ ມອບຫຼຽນກາລະນຶກ 65 ປີ",
    des: (
      <>
        From publishing content and hoping to acquire leads to gaining audience
        insights and making personalized content, content marketing.
      </>
    ),
  },
];

const PostboxArea = () => {
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  return (
    <>
      <div className="postbox__area pb-40 pt-40">
        <div className="container">
          <div className="row">
            <div className="col-xxl-8 col-xl-8 col-lg-8">
              
              <div id="blog" className="postbox__wrapper pr-20">
                {blog_page_data.map((item, i) => (
                  <article style={{ boxShadow: '0 5px 12px rgba(0, 0, 0, 0.6)', borderRadius: '20px' }}
                    key={i}
                    className={`postbox__item ${item.cls} mb-50 transition-3`}
                  >
                    <div className="postbox__thumb w-img">
                      <Link href="/blog-details">
                        <Image src={item.img} alt="theme-pure" />
                      </Link>
                    </div>
                    <div className="postbox__content px-3">
                      <div className="postbox__meta">
                        {/* <span>
                          <Link href="#">{item.category}</Link>
                        </span> */}
                        <span>
                          <Link href="#">{item.date}</Link>
                        </span>
                      </div>
                      <h3 className="postbox__title pb-4">
                        <Link href="/blog-details">{item.title}</Link>
                      </h3>
                      
                      {/* <div className="postbox__btn mt-35">
                        <Link
                          className="tp-btn-inner tp-btn-hover alt-color-black"
                          href="/blog-details"
                        >
                          <span>Read More</span>
                          <b></b>
                        </Link>
                      </div> */}
                    </div>
                  </article>
                ))}

                <div className="basic-pagination">
                  <nav>
                    <ul>
                      <li>
                        <Link href="#">
                          <i className="far fa-angle-left"></i>
                        </Link>
                      </li>
                      <li>
                        <Link className="current" href="#">
                          1
                        </Link>
                      </li>
                      <li>
                        <Link href="#">2</Link>
                      </li>
                      <li>
                        <Link href="#">3</Link>
                      </li>
                      <li>
                        <Link href="#">4</Link>
                      </li>
                      
                      <li>
                        <span>...</span>
                      </li>
                      <li>
                        <Link href="#">7</Link>
                      </li>
                      <li>
                        <Link href="#">
                          <i className="far fa-angle-right"></i>
                        </Link>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
            </div>

            <div className="col-xxl-4 col-xl-4 col-lg-4">
              <div className="sidebar__wrapper">
                <Search />
                <RecentPost />
                <Categories />
                {/* <Tags />  */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PostboxArea;
