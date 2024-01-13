const Drawer = () => {
  return (
    <form
      className="offcanvas offcanvas-start"
      tabIndex="-1"
      id="offcanvasExample"
      aria-labelledby="offcanvasExampleLabel"
    >
      <div className="offcanvas-header">
        <h5 className="offcanvas-title" id="offcanvasExampleLabel">
          New Users
        </h5>
        <button
          type="button"
          className="btn-close text-reset"
          data-bs-dismiss="offcanvas"
          aria-label="Close"
        ></button>
      </div>
      <div className="offcanvas-body">
        <div className="dropdown mt-3">
          <div className="mb-3">
            <label htmlFor="exampleFormControlInput1" className="form-label">
              Username
            </label>
            <input
              type="test"
              name="username"
              className="form-control"
              required
              id="exampleFormControlInput1"
              placeholder="John Doe"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleFormControlTextarea1" className="form-label">
              About
            </label>
            <textarea
              name="about"
              className="form-control"
              id="exampleFormControlTextarea1"
              rows="3"
              required
            ></textarea>
          </div>
          <div className="form-check mb-4 d-flex gap-2 justify-content-end">
            <input
              className="form-check-input"
              type="checkbox"
              name="isActive"
              id="flexCheckChecked"
              checked={true}
            />
            <label className="form-check-label" htmlFor="flexCheckChecked">
              Default Active
            </label>
          </div>
          <div>
            <button type="submit" className="btn btn-primary mb-3">
              Confirm
            </button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default Drawer;
