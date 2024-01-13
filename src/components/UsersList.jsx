const UsersList = () => {
  return (
    <div className="p-4  shadow-sm  bg-white">
      <div className="d-flex flex-wrap gap-4 justify-content-center">
        {new Array(6).fill(null).map((user) => {
          return (
            <div
              className="card border-secondary mb-3"
              style={{
                width: "250px",
                opacity: 1,
                cursor: "pointer",
              }}
            >
              <div className="card-header d-flex justify-content-between">
                User Detail{" "}
                <button
                  type="button"
                  className="btn-sm btn-close"
                  aria-label="Close"
                ></button>
              </div>

              <div className="card-body text-secondary">
                <h5 className="card-title">John Doe</h5>
                <p className="card-text">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sint
                  minima magnam fugit.
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default UsersList;
