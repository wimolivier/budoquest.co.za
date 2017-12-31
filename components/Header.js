const { Link } = ReactRouterDOM;

const Header = () => (
  <header>
    <nav className="navbar navbar-inverse navbar-fixed-top">
      <div className="container">
        <div className="navbar-header">
          <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
            <span className="sr-only">Toggle navigation</span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
          </button>
          <Link className="navbar-brand" to="/">BudoQuest Martial Arts</Link>
        </div>

        <div id="navbar" className="collapse navbar-collapse">
          <ul className="nav navbar-nav">
            <li><Link to="/classes">Classes</Link></li>
            <li><Link to="/instructors">Instructors</Link></li>
            <li className="dropdown">
              <Link to="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Student Info<span className="caret"></span></Link>
              <ul className="dropdown-menu">
                <li><Link to="/studentcreed">Student Creed</Link></li>
                <li><Link to="/14pointcode">14-point Code of Mindful Action</Link></li>
                <li><Link to="/trainingprograms">Training Programs</Link></li>
                <li><Link to="/trainingvideos">Training Videos</Link></li>
              </ul>
            </li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>

      </div>
    </nav>
  </header>
);

window.BudoQuest.Header = Header;
