/* eslint-disable react/react-in-jsx-scope */
import P from 'prop-types';
import "./styles.css";
export const PostCard = ({ title, cover, body, id }) => (
  <div className="post">
    <img src={cover} alt={title} />
    <div className="post-content">
      <h2>
        {title} {id}
      </h2>
      <p>{body}</p>
    </div>
  </div>
);

PostCard.propTypes = {
  title: P.string,
  cover: P.string,
  body: P.string,
  id: P.number
}
