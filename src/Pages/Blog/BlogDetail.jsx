import React, { useState, useEffect, useRef } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import Footer from "../../Component/Footer/Footer";
import Header from "../../Component/Header/Header";
import { blogDetail, blogList } from "../../Redux/actions";
import parse from "html-react-parser";
import moment from "moment/moment";
import Slider from "react-slick";
import GetInTouchForm from "../../Component/GetInTouchForm/Index";
const BlogDetail = () => {
  const { editId } = useParams();
  console.log(editId, "opapapapapp");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const Data = useSelector((s) => s.Blog.blogdetails?.blogDetail);
  const RecentData = useSelector((s) => s.Blog?.blogdetails?.recentBlogs);
  const RelatedData = useSelector((s) => s.Blog?.blogdetails?.relatedBlogs);
  const settings = {
    dots: true,
    infinite: true,
    speed: 400,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    // rtl: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  const body = {
    limit: 5,
    orderBy: "createdAt",
    order: -1,
    page: 1,
    status: "active",
  };
  useEffect(() => {
    dispatch(blogList(body));
  }, [dispatch]);
  useEffect(() => {
    if (editId) {
      dispatch(blogDetail(editId));
    }
  }, [editId]);
  const handleRoute = (Id) => {
    navigate(`blog-detail${Id}`);
    dispatch(blogDetail(Id));
  };

  return (
    <>
      <Header />
      <section className="blog-Main py-5">
        <Container>
          <Row className="align-items-start">
            <Col lg="8" className="my-2">
              <div className="mainBlogwrp">
                <div className="mainImg py-2">
                  <img
                    src={Data?.images?.link}
                    alt=""
                    className="img-fluid w-100 rounded"
                  />
                </div>
                <div className="content-wrp text-start">
                  <div className="top-heading py-2">
                    <h1 className="m-0 fw-bold">{Data?.title}</h1>
                    <ul className="list-unstyled ps-0 aboutList mt-2 mb-0 py-2 list d-flex align-items-start gap-10 flex-wrap">
                      <li className="d-flex align-items-center">
                        <span className="icn me-1">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                          >
                            <rect width="24" height="24" fill="#F5F5F5" />
                            <g clip-path="url(#clip0_0_1)">
                              <path
                                d="M21.5 4H18.8333V6C18.8333 6.19261 18.7954 6.38333 18.7217 6.56127C18.648 6.73921 18.5399 6.9009 18.4038 7.03709C18.2676 7.17328 18.1059 7.28132 17.9279 7.35502C17.75 7.42873 17.5593 7.46667 17.3667 7.46667C17.1741 7.46667 16.9833 7.42873 16.8054 7.35502C16.6275 7.28132 16.4658 7.17328 16.3296 7.03709C16.1934 6.9009 16.0853 6.73921 16.0116 6.56127C15.9379 6.38333 15.9 6.19261 15.9 6V4H8.13333V6C8.13333 6.38898 7.97881 6.76204 7.70376 7.03709C7.4287 7.31214 7.05565 7.46667 6.66667 7.46667C6.27768 7.46667 5.90463 7.31214 5.62958 7.03709C5.35452 6.76204 5.2 6.38898 5.2 6V4H2.53333C2.37468 3.9982 2.21728 4.02822 2.07043 4.08831C1.92359 4.14839 1.79029 4.23732 1.67841 4.34982C1.56653 4.46232 1.47835 4.59611 1.41907 4.74329C1.3598 4.89046 1.33065 5.04803 1.33333 5.20667V20.1267C1.33068 20.2825 1.35876 20.4373 1.41596 20.5823C1.47316 20.7273 1.55837 20.8596 1.66671 20.9717C1.77505 21.0837 1.9044 21.1733 2.04738 21.2354C2.19035 21.2974 2.34416 21.3307 2.5 21.3333H21.5C21.6558 21.3307 21.8096 21.2974 21.9526 21.2354C22.0956 21.1733 22.225 21.0837 22.3333 20.9717C22.4416 20.8596 22.5268 20.7273 22.584 20.5823C22.6412 20.4373 22.6693 20.2825 22.6667 20.1267V5.20667C22.6693 5.05083 22.6412 4.89599 22.584 4.751C22.5268 4.60601 22.4416 4.47371 22.3333 4.36166C22.225 4.24961 22.0956 4.15999 21.9526 4.09794C21.8096 4.03588 21.6558 4.0026 21.5 4ZM6.66667 17.3333H5.33333V16H6.66667V17.3333ZM6.66667 14H5.33333V12.6667H6.66667V14ZM6.66667 10.6667H5.33333V9.33333H6.66667V10.6667ZM10.6667 17.3333H9.33333V16H10.6667V17.3333ZM10.6667 14H9.33333V12.6667H10.6667V14ZM10.6667 10.6667H9.33333V9.33333H10.6667V10.6667ZM14.6667 17.3333H13.3333V16H14.6667V17.3333ZM14.6667 14H13.3333V12.6667H14.6667V14ZM14.6667 10.6667H13.3333V9.33333H14.6667V10.6667ZM18.6667 17.3333H17.3333V16H18.6667V17.3333ZM18.6667 14H17.3333V12.6667H18.6667V14ZM18.6667 10.6667H17.3333V9.33333H18.6667V10.6667Z"
                                fill="#2F2F2F"
                              />
                              <path
                                d="M6.66667 6.66667C6.84348 6.66667 7.01305 6.59643 7.13807 6.4714C7.2631 6.34638 7.33333 6.17681 7.33333 6V2C7.33333 1.82319 7.2631 1.65362 7.13807 1.52859C7.01305 1.40357 6.84348 1.33333 6.66667 1.33333C6.48986 1.33333 6.32029 1.40357 6.19526 1.52859C6.07024 1.65362 6 1.82319 6 2V6C6 6.17681 6.07024 6.34638 6.19526 6.4714C6.32029 6.59643 6.48986 6.66667 6.66667 6.66667Z"
                                fill="#2F2F2F"
                              />
                              <path
                                d="M17.3333 6.66667C17.5101 6.66667 17.6797 6.59643 17.8047 6.4714C17.9298 6.34638 18 6.17681 18 6V2C18 1.82319 17.9298 1.65362 17.8047 1.52859C17.6797 1.40357 17.5101 1.33333 17.3333 1.33333C17.1565 1.33333 16.9869 1.40357 16.8619 1.52859C16.7369 1.65362 16.6667 1.82319 16.6667 2V6C16.6667 6.17681 16.7369 6.34638 16.8619 6.4714C16.9869 6.59643 17.1565 6.66667 17.3333 6.66667Z"
                                fill="#2F2F2F"
                              />
                            </g>
                            <defs>
                              <clipPath id="clip0_0_1">
                                <rect width="24" height="24" fill="white" />
                              </clipPath>
                            </defs>
                          </svg>
                        </span>
                        {moment(Data?.publishDate).format("YYYY-MM-DD")}{" "}
                      </li>
                      <li className="d-flex align-items-center">
                        <span className="icn me-1">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                          >
                            <path
                              d="M4 11H10C10.2652 11 10.5196 10.8946 10.7071 10.7071C10.8946 10.5196 11 10.2652 11 10V4C11 3.73478 10.8946 3.48043 10.7071 3.29289C10.5196 3.10536 10.2652 3 10 3H4C3.73478 3 3.48043 3.10536 3.29289 3.29289C3.10536 3.48043 3 3.73478 3 4V10C3 10.2652 3.10536 10.5196 3.29289 10.7071C3.48043 10.8946 3.73478 11 4 11ZM14 11H20C20.2652 11 20.5196 10.8946 20.7071 10.7071C20.8946 10.5196 21 10.2652 21 10V4C21 3.73478 20.8946 3.48043 20.7071 3.29289C20.5196 3.10536 20.2652 3 20 3H14C13.7348 3 13.4804 3.10536 13.2929 3.29289C13.1054 3.48043 13 3.73478 13 4V10C13 10.2652 13.1054 10.5196 13.2929 10.7071C13.4804 10.8946 13.7348 11 14 11ZM4 21H10C10.2652 21 10.5196 20.8946 10.7071 20.7071C10.8946 20.5196 11 20.2652 11 20V14C11 13.7348 10.8946 13.4804 10.7071 13.2929C10.5196 13.1054 10.2652 13 10 13H4C3.73478 13 3.48043 13.1054 3.29289 13.2929C3.10536 13.4804 3 13.7348 3 14V20C3 20.2652 3.10536 20.5196 3.29289 20.7071C3.48043 20.8946 3.73478 21 4 21ZM17 21C19.206 21 21 19.206 21 17C21 14.794 19.206 13 17 13C14.794 13 13 14.794 13 17C13 19.206 14.794 21 17 21Z"
                              fill="#2F2F2F"
                            />
                          </svg>
                        </span>
                        {(Data?.category?.map((ele) => ele?.name) || [])?.join(", ")}
                      </li>
                      <li className="d-flex align-items-center">
                        <span className="icn me-1">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                          >
                            <path
                              d="M12 4C13.0609 4 14.0783 4.42143 14.8284 5.17157C15.5786 5.92172 16 6.93913 16 8C16 9.06087 15.5786 10.0783 14.8284 10.8284C14.0783 11.5786 13.0609 12 12 12C10.9391 12 9.92172 11.5786 9.17157 10.8284C8.42143 10.0783 8 9.06087 8 8C8 6.93913 8.42143 5.92172 9.17157 5.17157C9.92172 4.42143 10.9391 4 12 4ZM12 14C16.42 14 20 15.79 20 18V20H4V18C4 15.79 7.58 14 12 14Z"
                              fill="#2F2F2F"
                            />
                          </svg>
                        </span>
                        {Data?.authorName}
                      </li>
                    </ul>
                  </div>
                  <div className="py-2">
                    <p className="my-2" dangerouslySetInnerHTML={{ __html: Data?.content }}></p>
                  </div>
                </div>
              </div>
            </Col>
            <Col lg="4" className="py-2 sticky-top">
              <div className="popular-blog border text-start rounded">
                <h4 className="fw-bold m-0 py- mb-2 px-3 border-bottom">
                  Recent Blogs
                </h4>
                <ul className="list-unstyled ps-0 mb-0 py-2">
                  {RecentData &&
                    RecentData?.map((item) => {
                      return (
                        <>
                          <li
                            className={
                              editId == item.id ? "py-1 active" : "py-1"
                            }
                          >
                            <Link onClick={() => handleRoute(item.slug)}>
                              <div className="card-cstm p-3 d-flex align-items-start">
                                <div className="img-wrp me-2">
                                  <img
                                    src={item?.images?.link}
                                    alt=""
                                    className="img-fluid"
                                  />
                                </div>
                                <div className="content">
                                  <h6 className="m-0">{item?.title}</h6>
                                  <p className="m-0">
                                    <p className="my-2" dangerouslySetInnerHTML={{ __html: Data?.content }}></p>
                                  </p>
                                </div>
                              </div>
                            </Link>
                          </li>
                        </>
                      );
                    })}
                </ul>
              </div>
              <div className="py-5">
                <GetInTouchForm />
              </div>
            </Col>
            <Col lg="12" className="my-2 pb-4">
              <div className="section-header text-center heading-wrap">
                <h2>Our Related Blogs</h2>
                {/* <p>Discover top Sellers loved by our customers</p>
                <p>&nbsp;</p> */}
              </div>
            </Col>
            <Slider {...settings} className="product-slider">
              {RelatedData &&
                RelatedData?.map((item, index) => {
                  return (
                    <>
                      <Col key={index} className="my-2" style={{
                        borderRadius: "10px",
                        border: "10px solid white",
                      }}>
                        <Link
                          to={`/blog-detail/${item?.slug}`}
                          //  to="/blog-detail/"
                          className="h-100 text-dark"
                        >
                          <div className="blogCard bg-white h-100">
                            <div className="img-wrp">
                              <img
                                src={item?.images?.link}
                                alt=""
                                className="img-fluid w-100"
                              />
                            </div>
                            <div className="content text-start py-3 px-3">
                              <h6 className="m-0 card-head">{item?.title}</h6>
                              <ul className="list-unstyled ps-0 mb-0 py-2 list d-flex align-items-start justify-content-between gap-10">
                                <li className="d-flex align-items-center">
                                  <span className="icn me-1">
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      width="24"
                                      height="24"
                                      viewBox="0 0 24 24"
                                      fill="none"
                                    >
                                      <rect
                                        width="24"
                                        height="24"
                                        fill="#F5F5F5"
                                      />
                                      <g clip-path="url(#clip0_0_1)">
                                        <path
                                          d="M21.5 4H18.8333V6C18.8333 6.19261 18.7954 6.38333 18.7217 6.56127C18.648 6.73921 18.5399 6.9009 18.4038 7.03709C18.2676 7.17328 18.1059 7.28132 17.9279 7.35502C17.75 7.42873 17.5593 7.46667 17.3667 7.46667C17.1741 7.46667 16.9833 7.42873 16.8054 7.35502C16.6275 7.28132 16.4658 7.17328 16.3296 7.03709C16.1934 6.9009 16.0853 6.73921 16.0116 6.56127C15.9379 6.38333 15.9 6.19261 15.9 6V4H8.13333V6C8.13333 6.38898 7.97881 6.76204 7.70376 7.03709C7.4287 7.31214 7.05565 7.46667 6.66667 7.46667C6.27768 7.46667 5.90463 7.31214 5.62958 7.03709C5.35452 6.76204 5.2 6.38898 5.2 6V4H2.53333C2.37468 3.9982 2.21728 4.02822 2.07043 4.08831C1.92359 4.14839 1.79029 4.23732 1.67841 4.34982C1.56653 4.46232 1.47835 4.59611 1.41907 4.74329C1.3598 4.89046 1.33065 5.04803 1.33333 5.20667V20.1267C1.33068 20.2825 1.35876 20.4373 1.41596 20.5823C1.47316 20.7273 1.55837 20.8596 1.66671 20.9717C1.77505 21.0837 1.9044 21.1733 2.04738 21.2354C2.19035 21.2974 2.34416 21.3307 2.5 21.3333H21.5C21.6558 21.3307 21.8096 21.2974 21.9526 21.2354C22.0956 21.1733 22.225 21.0837 22.3333 20.9717C22.4416 20.8596 22.5268 20.7273 22.584 20.5823C22.6412 20.4373 22.6693 20.2825 22.6667 20.1267V5.20667C22.6693 5.05083 22.6412 4.89599 22.584 4.751C22.5268 4.60601 22.4416 4.47371 22.3333 4.36166C22.225 4.24961 22.0956 4.15999 21.9526 4.09794C21.8096 4.03588 21.6558 4.0026 21.5 4ZM6.66667 17.3333H5.33333V16H6.66667V17.3333ZM6.66667 14H5.33333V12.6667H6.66667V14ZM6.66667 10.6667H5.33333V9.33333H6.66667V10.6667ZM10.6667 17.3333H9.33333V16H10.6667V17.3333ZM10.6667 14H9.33333V12.6667H10.6667V14ZM10.6667 10.6667H9.33333V9.33333H10.6667V10.6667ZM14.6667 17.3333H13.3333V16H14.6667V17.3333ZM14.6667 14H13.3333V12.6667H14.6667V14ZM14.6667 10.6667H13.3333V9.33333H14.6667V10.6667ZM18.6667 17.3333H17.3333V16H18.6667V17.3333ZM18.6667 14H17.3333V12.6667H18.6667V14ZM18.6667 10.6667H17.3333V9.33333H18.6667V10.6667Z"
                                          fill="#2F2F2F"
                                        />
                                        <path
                                          d="M6.66667 6.66667C6.84348 6.66667 7.01305 6.59643 7.13807 6.4714C7.2631 6.34638 7.33333 6.17681 7.33333 6V2C7.33333 1.82319 7.2631 1.65362 7.13807 1.52859C7.01305 1.40357 6.84348 1.33333 6.66667 1.33333C6.48986 1.33333 6.32029 1.40357 6.19526 1.52859C6.07024 1.65362 6 1.82319 6 2V6C6 6.17681 6.07024 6.34638 6.19526 6.4714C6.32029 6.59643 6.48986 6.66667 6.66667 6.66667Z"
                                          fill="#2F2F2F"
                                        />
                                        <path
                                          d="M17.3333 6.66667C17.5101 6.66667 17.6797 6.59643 17.8047 6.4714C17.9298 6.34638 18 6.17681 18 6V2C18 1.82319 17.9298 1.65362 17.8047 1.52859C17.6797 1.40357 17.5101 1.33333 17.3333 1.33333C17.1565 1.33333 16.9869 1.40357 16.8619 1.52859C16.7369 1.65362 16.6667 1.82319 16.6667 2V6C16.6667 6.17681 16.7369 6.34638 16.8619 6.4714C16.9869 6.59643 17.1565 6.66667 17.3333 6.66667Z"
                                          fill="#2F2F2F"
                                        />
                                      </g>
                                      <defs>
                                        <clipPath id="clip0_0_1">
                                          <rect
                                            width="24"
                                            height="24"
                                            fill="white"
                                          />
                                        </clipPath>
                                      </defs>
                                    </svg>
                                  </span>
                                  {moment(item?.publishDate).format("YYYY-MM-DD")}{" "}
                                </li>
                                <li className="d-flex align-items-center">
                                  <span className="icn me-1">
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      width="24"
                                      height="24"
                                      viewBox="0 0 24 24"
                                      fill="none"
                                    >
                                      <path
                                        d="M4 11H10C10.2652 11 10.5196 10.8946 10.7071 10.7071C10.8946 10.5196 11 10.2652 11 10V4C11 3.73478 10.8946 3.48043 10.7071 3.29289C10.5196 3.10536 10.2652 3 10 3H4C3.73478 3 3.48043 3.10536 3.29289 3.29289C3.10536 3.48043 3 3.73478 3 4V10C3 10.2652 3.10536 10.5196 3.29289 10.7071C3.48043 10.8946 3.73478 11 4 11ZM14 11H20C20.2652 11 20.5196 10.8946 20.7071 10.7071C20.8946 10.5196 21 10.2652 21 10V4C21 3.73478 20.8946 3.48043 20.7071 3.29289C20.5196 3.10536 20.2652 3 20 3H14C13.7348 3 13.4804 3.10536 13.2929 3.29289C13.1054 3.48043 13 3.73478 13 4V10C13 10.2652 13.1054 10.5196 13.2929 10.7071C13.4804 10.8946 13.7348 11 14 11ZM4 21H10C10.2652 21 10.5196 20.8946 10.7071 20.7071C10.8946 20.5196 11 20.2652 11 20V14C11 13.7348 10.8946 13.4804 10.7071 13.2929C10.5196 13.1054 10.2652 13 10 13H4C3.73478 13 3.48043 13.1054 3.29289 13.2929C3.10536 13.4804 3 13.7348 3 14V20C3 20.2652 3.10536 20.5196 3.29289 20.7071C3.48043 20.8946 3.73478 21 4 21ZM17 21C19.206 21 21 19.206 21 17C21 14.794 19.206 13 17 13C14.794 13 13 14.794 13 17C13 19.206 14.794 21 17 21Z"
                                        fill="#2F2F2F"
                                      />
                                    </svg>
                                  </span>
                                  {(item?.category?.map((ele) => ele?.name) || [])?.join(", ")}
                                </li>
                              </ul>
                              <p className="my-2" dangerouslySetInnerHTML={{ __html: item?.content }}></p>
                              <div className="btn-wrp mt-3">
                                <p className="link-btn m-0">
                                  Read More{" "}
                                  <span className="">
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      width="24"
                                      height="24"
                                      viewBox="0 0 24 24"
                                      fill="none"
                                    >
                                      <path
                                        d="M5.70001 17.3C5.51667 17.1167 5.42501 16.8833 5.42501 16.6C5.42501 16.3167 5.51667 16.0833 5.70001 15.9L9.57501 12L5.70001 8.1C5.51667 7.91667 5.42067 7.68767 5.41201 7.413C5.40334 7.13834 5.49934 6.90067 5.70001 6.7C5.88334 6.51667 6.11667 6.425 6.40001 6.425C6.68334 6.425 6.91667 6.51667 7.10001 6.7L11.7 11.3C11.8 11.4 11.871 11.5083 11.913 11.625C11.955 11.7417 11.9757 11.8667 11.975 12C11.975 12.1333 11.9543 12.2583 11.913 12.375C11.8717 12.4917 11.8007 12.6 11.7 12.7L7.10001 17.3C6.91667 17.4833 6.68767 17.5793 6.41301 17.588C6.13834 17.5967 5.90067 17.5007 5.70001 17.3ZM12.3 17.3C12.1167 17.1167 12.025 16.8833 12.025 16.6C12.025 16.3167 12.1167 16.0833 12.3 15.9L16.175 12L12.3 8.1C12.1167 7.91667 12.0207 7.68767 12.012 7.413C12.0033 7.13834 12.0993 6.90067 12.3 6.7C12.4833 6.51667 12.7167 6.425 13 6.425C13.2833 6.425 13.5167 6.51667 13.7 6.7L18.3 11.3C18.4 11.4 18.471 11.5083 18.513 11.625C18.555 11.7417 18.5757 11.8667 18.575 12C18.575 12.1333 18.554 12.2583 18.512 12.375C18.47 12.4917 18.3993 12.6 18.3 12.7L13.7 17.3C13.5167 17.4833 13.2877 17.5793 13.013 17.588C12.7383 17.5967 12.5007 17.5007 12.3 17.3Z"
                                        fill="#F16114"
                                      />
                                    </svg>
                                  </span>
                                </p>
                              </div>
                            </div>
                          </div>
                        </Link>
                      </Col>
                    </>
                  );
                })}
            </Slider>
          </Row>
        </Container>
      </section>
      <Footer />
    </>
  );
};
export default BlogDetail;
