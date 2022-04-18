
function Navbar() {
  return (
      <>
  <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <div className="container-fluid">
    <a className="navbar-brand" href="/">News-Views</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div className="navbar-nav">
        <a className="nav-link active" aria-current="page" href="/">Home</a>
        <a className="nav-link" href="/">Features</a>
        <a className="nav-link" href="/">Pricing</a>
        <li><a className="nav-link" href="/">Business</a></li>
        <li><a className="nav-link" href="/">Entertainment</a></li>
        <li><a className="nav-link" href="/">General</a></li>
        <li><a className="nav-link" href="/">Health</a></li>
        <li><a className="nav-link" href="/">Science</a></li>
        <li><a className="nav-link" href="/">Sports</a></li>
        <li><a className="nav-link" href="/">Technology</a></li>
      </div>
      
      
    </div>
    <form className="d-flex">
      <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
      <button className="btn btn-outline-success" type="submit">Search</button>
    </form>
  </div>
</nav>
</>
);
}

export default Navbar;