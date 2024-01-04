import React from "react";
import { Link } from "react-router-dom";
import Layout from "./../components/Layout/Layout";
import useCategory from "../hooks/useCategory";
import "../styles/Categories.css";

const Categories = () => {
  const categories = useCategory();
  return (
    <Layout title={"All catgories"}>
      <div className="container categories">
        <div className="row">
          {categories.map((c) => (
            <div className="col-md-6 mt-5 mb-3 gx-3 gy-3" key={c._id}>
              <Link to={`/category/${c.slug}`} className="btn btn-primary">
                {c.name}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Categories;
