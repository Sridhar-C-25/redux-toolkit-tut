const StatusBar = () => {
  return (
    <div className="bg-white border shadow-sm mb-2 d-flex align-items-center gap-4 p-3">
      <h6 className="mt-1">
        Active Users <span className="badge bg-secondary">2</span>
      </h6>
      <h6 className="mt-1">
        Inactive Users <span className="badge bg-secondary">1</span>
      </h6>
      <button
        data-bs-toggle="offcanvas"
        href="#offcanvasExample"
        role="button"
        aria-controls="offcanvasExample"
        className="btn btn-success ms-auto"
      >
        New User
      </button>
    </div>
  );
};

export default StatusBar;
