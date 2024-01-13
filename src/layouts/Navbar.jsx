const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary bg-gradient">
      <div className="container-md">
        <a className="navbar-brand" href="#">
          Redux Users
        </a>
      </div>
      <button type="button" className="btn text-light me-5">
        Users <span className="badge text-dark bg-light">3</span>
      </button>
    </nav>
  );
};

export default Navbar;
