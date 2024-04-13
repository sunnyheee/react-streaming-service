import { useState } from "react";
import PageNavbar from "../components/PageNavbar";
import { Outlet, useNavigate } from "react-router-dom";

const AppLayout = () => {
  const [keyword, setKeyword] = useState();
  const navigate = useNavigate();
  const searchByKeyword = (e) => {
    e.preventDefault();
    navigate(`/movies?q=${keyword}`);
    setKeyword("");
  };
  return (
    <>
      <PageNavbar
        keyword={keyword}
        setKeyword={setKeyword}
        searchByKeyword={searchByKeyword}
      />
      <Outlet />
    </>
  );
};

export default AppLayout;
