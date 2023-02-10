import { uploadPosts } from "../../store/reducer/postsReducer";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Audio } from "react-loader-spinner";
import { Link } from "react-router-dom";
import './Unicode.css';

const Unicode = () => {
  const { isLoading, posts } = useSelector((state) => state.posts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(uploadPosts());
  }, []);

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
    <div className="container__unicode">
      <div className="unicode__title">
        <div
          className="img-left"
          style={{ backgroundImage: `url(${posts[0]?.image}` }}
        >
          <div className="img-bottom">
            <h2 className="img__left-title-h2">{posts[0]?.title}</h2>
            <p className="img__left-title-descr">
              {posts[0]?.text.slice(0, 20)}.......
            </p>
          </div>
        </div>
        <div className="unicode__img-right">
          <div
            className="img-right"
            style={{ backgroundImage: `url(${posts[2]?.image}` }}
          >
            <div className="img-bottom">
              <h2 className="img__right-title-h2">{posts[2]?.title}</h2>
              <p className="img__right-title-descr">
                {posts[2]?.text.slice(0, 20)}.......
              </p>
            </div>
          </div>
          <div
            className="img-right"
            style={{ backgroundImage: `url(${posts[4]?.image}` }}
          >
            <div className="img-bottom">
              <h2 className="img__right-title-h2">{posts[4]?.title}</h2>
              <p className="img__right-title-descr">
                {posts[4]?.text.slice(0, 20)}.......
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="footer__unicode">
        <h2 className="footer__title-h2">Последние новости в мире IT</h2>
        <div className="footer__block">
          <div className="post">
            <img
              className="footer__img"
              src={posts[posts.length - 2]?.image}
              alt=""
            />
            <h2>{posts[posts.length - 2]?.title}</h2>
            <p>{posts[posts.length - 2]?.text.slice(0, 30)}......</p>
            <Link className="link__posts" to={`/post/${posts[posts.length - 2]?._id}`}>
              read more
            </Link>
          </div>
          <div className="post">
            <img
              className="footer__img"
              src={posts[posts.length - 1]?.image}
              alt=""
            />
            <h2>{posts[posts.length - 1]?.title}</h2>
            <p>{posts[posts.length - 1]?.text.slice(0, 30)}......</p>
            <Link className="link__posts" to={`/post/${posts[posts.length - 1]?._id}`}>
              read more
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Unicode;
