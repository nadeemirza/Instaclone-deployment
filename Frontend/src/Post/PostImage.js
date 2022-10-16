const PostImage = ({ config }) => {
  return (
    <div className="PostImage">
      <span>
        <img
          src={
            "https://instaclone-10x-april.herokuapp.com/image/" +
            config.PostImage
          }
          alt="Pictures"
        ></img>
      </span>
    </div>
  );
};

export default PostImage;
