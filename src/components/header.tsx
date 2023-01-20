import * as React from "react";
import Cta from "../components/cta";
import "./bootstrap.min.css";

<script src='https://kit.fontawesome.com/a076d05399.js' ></script>
type Link = {
  label: string;
  url: string;
};

const links: Link[] = [
  // {
  //   label: "Home",
  //   url: "/",
  // },
  // {
  //   label: "About",
  //   url: "/turtlehead-tacos",
  // },
  // {
  //   label: "Services",
  //   url: "/turtlehead-tacos",
  // },
  // {
  //   label: "Contect-us",
  //   url: "/turtlehead-tacos",
  // },
];

const Header = () => {
  const linkDoms = links.map((link) => (
    <div key={link.label}>
      <a href={link.url} target="_blank" rel="noreferrer">
        {link.label}
      </a>
    </div>
  ));

  return (
    <>
    <div className="bg-info bg-gradient">
     
      
      {/* <!-- Facebook --> */}
<a className="btn btn-primary m-3 p-3"  href="#!" role="button"
  ><i className="fab fa-facebook-f"></i>
</a>

{/* <!-- Twitter --> */}
<a className="btn btn-primary m-3 p-3" href="#!" role="button"
  ><i className="fab fa-twitter"></i></a>

{/* <!-- Google --> */}
<a className="btn btn-primary m-3 p-3"  href="#!" role="button"
><i className="fab fa-google"></i></a>

{/* <!-- Instagram --> */}
<a className="btn btn-primary m-3 p-3"  href="#!" role="button"
  ><i className="fab fa-instagram"></i></a>



      </div>
      <div className="top-detailse">

    </div>
    <div className="d-block p-2 bg-primary text-white">
      <div className="centered-container">
        <nav className="py-6 flex items-center justify-between">
          <div className="flex gap-x-4 items-center">
            <img className="rounded mx-auto d-block"
              src="https://4.bp.blogspot.com/-pMbXD7F9IF8/UVIDSiDqGxI/AAAAAAAAEIc/Ohs73VGP5u8/s1600/logo+sample+design+(10).jpg"
              width="100"
              height="100"
            ></img>
            {/* <div className="flex gap-x-4 text-sm font-semibold text-body">
              {linkDoms}
            </div> */}
          </div>
          <div className="space-x-5">
            <a href="">HOME</a>
            <a href="">ABOUT</a>
            <a href="">SERVICES</a>
            <a href="">CONTECT-US</a>
          </div>
        </nav>
      </div>
    </div>
    </>
  );
};

export default Header;
