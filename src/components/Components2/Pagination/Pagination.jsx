import React from 'react';

const Pagination = () => {
  return (
    <div>
      <nav aria-label="...">
        <ul className="pagination">
          <li className="page-item disabled">
            <a className="page-link" href="/searchpage">
              Previous
            </a>
          </li>
          <li className="page-item">
            <a className="page-link" href="/searchpage">
              1
            </a>
          </li>
          <li className="page-item active" aria-current="page">
            <a className="page-link" href="/searchpage">
              2
            </a>
          </li>
          <li className="page-item">
            <a className="page-link" href="/searchpage">
              3
            </a>
          </li>
          <li className="page-item">
            <a className="page-link" href="/searchpage">
              Next
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Pagination;
