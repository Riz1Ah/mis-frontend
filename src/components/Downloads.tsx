import './Downloads.css';

function Downloads() {
  const downloads = [
    { id: 1266654, date: '11/02/2020', type: 'Favicon' },
    { id: 1266655, date: '21/02/2021', type: 'Favicon' },
    { id: 1266656, date: '18/07/2021', type: 'Favicon' },
    { id: 1266657, date: '12/08/2021', type: 'Favicon' },
    { id: 1266658, date: '01/02/2022', type: 'Favicon' }
  ];

  return (
    <div>
      <h1 className="mb-4">Downloads</h1>
      <div className="d-flex justify-content-between mb-3">
        <div>
          <select className="form-select me-2" style={{ width: '150px', display: 'inline-block' }}>
            <option>Year</option>
            {/* Add year options */}
          </select>
          <select className="form-select" style={{ width: '150px', display: 'inline-block' }}>
            <option>Type</option>
            {/* Add license type options */}
          </select>
        </div>
        <a href="/" className="text-decoration-none">Clear filter</a>
      </div>
      <table className="table table-hover">
        <thead>
          <tr>
            <th>Icon</th>
            <th>ID</th>
            <th>Date</th>
            <th>File Type</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {downloads.map((download, index) => (
            <tr key={index}>
              <td><img src="https://via.placeholder.com/40" alt="Icon" /></td>
              <td>{download.id}</td>
              <td>{download.date}</td>
              <td>{download.type}</td>
              <td>
                <div className="dropdown">
                  <button className="btn btn-link dropdown-toggle" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-expanded="false">
                    <i className="bi bi-three-dots"></i>
                  </button>
                  <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                    <li><a className="dropdown-item" href="#">Download</a></li>
                    <li><a className="dropdown-item" href="#">Delete</a></li>
                  </ul>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Downloads;
