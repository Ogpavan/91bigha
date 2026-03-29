export function SearchModal() {
  return (
    <div className="modal fade" id="search-modal" tabIndex={-1} aria-hidden="true">
      <div className="modal-dialog modal-dialog-centered modal-lg">
        <div className="modal-content">
          <div className="modal-body search-wrap">
            <form className="search-form" id="search-form" action="/rent-property-grid-sidebar">
              <div className="d-flex align-items-center justify-content-between mb-4">
                <h5>What Are You Looking for?</h5>
                <a href="javascript:void(0);" className="close" data-bs-dismiss="modal">
                  <i className="material-icons-outlined">close</i>
                </a>
              </div>
              <div className="input-group input-group-flat">
                <input type="text" className="form-control" placeholder="Type a Keyword...." />
                <span className="input-group-text">
                  <i className="material-icons-outlined">search</i>
                </span>
              </div>
              <h6>Popular Properties</h6>
              <div className="search-list">
                <p><a href="/rent-property-grid-sidebar">Beautiful Condo Room</a></p>
                <p><a href="/rent-property-grid-sidebar">Royal Apartment</a></p>
                <p><a href="/rent-property-grid-sidebar">Grand Villa House</a></p>
                <p><a href="/rent-property-grid-sidebar">Grand Mahaka</a></p>
                <p><a href="/rent-property-grid-sidebar">Lunaria Residence</a></p>
                <p><a href="/rent-property-grid-sidebar">Stephen Alexander Homes</a></p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
