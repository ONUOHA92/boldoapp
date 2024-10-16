import Image from "next/image";
import OurService from "./Components/Home/OurService";
import WeConnect from "./Components/Home/Connect";
import SecondConnect from "./Components/Home/SecondConnect";
import Enterprise from "./Components/Home/Enterprise";
import OurBlog from "./Components/Home/OurBlog";
import Company from "./Components/Home/Company";
import OurCustomers from "./Components/Home/OurCustomers";

export default function Home() {
  return (
    <>
      <OurService />
      <WeConnect />
      <SecondConnect />
      <Company />
      <OurCustomers />
      <OurBlog />
      <Enterprise />
    </>
  );
}
