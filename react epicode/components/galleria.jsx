function Img(props) {
  const styleImg = {
    width: "50%",
  };
  return (
    <>
      <h1>{props.text}</h1>
      <img src="https://www.dire.it/wp-content/uploads/2021/03/logo-inter-scaled.jpg" alt="Inter" style={styleImg} />
    </>
  );
}

export default Img;
