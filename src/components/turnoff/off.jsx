"use client";

import Link from "next/link";
import Categories from "./categories";
import RecentPost from "./recent-post";
import Search from "./search";
import React, { useState, useEffect } from "react";
import axios from "axios";
import moment from "moment";

import Image from "next/image";

import imgoff from "@/public/images/turnoff/image-151.png";

const PostboxArea = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://uat-api.edl.com.la/api_v1/customer-svc/notiDistrict/get"
        );
        setData(response.data.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <div className="postbox__area pb-40 pt-40">
        <div className="container">
          <div className="row">
            <div className="col-xxl-8 col-xl-8 col-lg-8">
              <div id="blog" className="postbox__wrapper pr-20">
                {data.length
                  ? data?.map((item, i) => (
                      <div
                        key={i}
                        className="card mb-3 d-flex"
                        style={{
                          boxShadow: "0 5px 12px rgba(0, 0, 0, 0.6)",
                          borderRadius: "20px",
                        }}
                      >
                        <div className="row g-0">
                          <div className="col-xxl-4 col-xl-4 col-lg-4 col-col-md-4 col-4">
                            <Image
                              src={imgoff}
                              className="rounded-start p-3"
                              alt="theme-pure"
                            />
                          </div>
                          <div className="col-xxl-8 col-xl-8 col-lg-8 col-md-8 col-8">
                            <div className="card-body">
                              <h5 style={{ fontFamily: "Noto Sans Lao" }}>
                                {item.noti.title_head}
                              </h5>
                              <p className="text-dark fw-bold">
                                {item.noti.sub_title}
                              </p>
                              <p className="card-text">
                                ມອດໄຟເວລາ: {item.noti.start_time} ໂມງ ຫາ{" "}
                                {item.noti.end_time} ໂມງ
                              </p>
                              <p className="text-danger">
                                ວັນທີມອດໄຟ {moment(item.noti.start_date).format('DD-MM-YYYY')} ຫາ{" "}
                                {moment(item.noti.end_date).format('DD-MM-YYYY')}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))
                  : null}

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
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PostboxArea;
