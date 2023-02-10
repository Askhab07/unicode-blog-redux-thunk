import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { Audio } from "react-loader-spinner";
import { uploadPosts } from "../../store/reducer/postsReducer";
import "./Category.css";

const Category = () => {
  const { categories } = useSelector((state) => state.categories);
  const { isLoading, posts } = useSelector((state) => state.posts);
  const dispatch = useDispatch();
  const { id } = useParams();

  useEffect(() => {
    dispatch(uploadPosts());
  }, []);

  const category = categories.find((item) => item._id === id);

  const catt = posts.filter((item) => item.categoryId === id);

  if (isLoading) {
    return (
      <Audio
        height="80"
        width="80"
        radius="9"
        color="green"
        ariaLabel="three-dots-loading"
        wrapperStyle
        wrapperClass
      />
    );
  }

  return (
    <div className="all__category">
      <div className="category__container">
        <div className="category__container-left">
          <h1>{category?.title}</h1>
          {catt.map((item) => (
            <div className="category__block">
              <img className="category__block-img" src={item?.image} alt="" />
              <div className="category__block-descr">
                <h2 className="category">{item?.title.slice(0, 10)}</h2>
                <p>{item?.text.slice(0, 169)}...</p>
                <Link className="category__link" to={`/post/${item?._id}`}>
                  read more
                </Link>
              </div>
            </div>
          ))}
        </div>

        <aside>
          <h2 className="aside__h2">Рекомендуем к прочтению</h2>
          {posts
            .map((item) => (
              <div className="category__aside">
                <img className="category__aside-img" src={item?.image} alt="" />
                <div className="aside-descr">
                  <h2 className="category__aside-h2">
                    {item?.title.slice(0, 10)}
                  </h2>
                  <div className="aside__descr-descr">
                    <p>{item?.text.slice(0, 169)}...</p>
                    <Link className="category__aside-link" to={`/post/${item?._id}`}>
                      read more
                    </Link>
                  </div>
                </div>
              </div>
            ))
            .slice(0, 3)}
        </aside>
      </div>

      <div className="footer">
        <h2 className="footer__h2">Рекомендуем к прочтению</h2>
        <div className="footer__block">
        {posts.map(item => <Link className="footer__link" to={`/post/${item?._id}`}>
          <div
            className="footer__img"
            style={{ backgroundImage: `url(${item?.image}` }}
          >
            <h3>{item?.title}</h3>
          </div>
        </Link>)}
        </div>
      </div>
    </div>
  );
};

export default Category;
