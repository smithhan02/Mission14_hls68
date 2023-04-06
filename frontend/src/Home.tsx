function Home() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-4">
          <img
            src="JoelHiltonHeadshot.png"
            alt="Headshot"
            className="img-fluid rounded-circle"
          />
        </div>
        <div className="col-md-8 align-self-center">
          <h1 className="display-4 mb-4">
            Welcome to Hilton's Movie Collection
          </h1>
          <p className="lead">
            Discover the latest movies in Joel Hilton's Collection.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Home;
