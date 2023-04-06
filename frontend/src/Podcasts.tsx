const Podcasts = () => {
  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-8">
          <h1 className="display-4 mb-4 text-center">Check Out Our Podcasts</h1>
          <div className="card mb-4">
            <div className="card-body">
              <h2 className="card-title">Bacon Sale</h2>
              <p className="card-text">
                A podcast about movies, TV shows, pop culture, and bacon. Tune
                in every week for hilarious discussions and reviews.
              </p>
              <a
                href="https://baconsale.com/"
                className="btn btn-primary"
                target="_blank"
                rel="noopener noreferrer"
              >
                Listen Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Podcasts;
