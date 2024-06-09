import './TokenTable.css';

function TokenTable() {
  const tokens = [
    { name: 'USDC', price: '$150.8m', change: '+150.8m', volume: '$150.8m', tvl: '$150.8m' },
    { name: 'USDC', price: '$150.8m', change: '+150.8m', volume: '$150.8m', tvl: '$150.8m' },
    { name: 'USDC', price: '$150.8m', change: '+150.8m', volume: '$150.8m', tvl: '$150.8m' },
    { name: 'USDC', price: '$150.8m', change: '+150.8m', volume: '$150.8m', tvl: '$150.8m' },
    { name: 'USDC', price: '$150.8m', change: '+150.8m', volume: '$150.8m', tvl: '$150.8m' },
    { name: 'USDC', price: '$150.8m', change: '+150.8m', volume: '$150.8m', tvl: '$150.8m' },
    { name: 'USDC', price: '$150.8m', change: '+150.8m', volume: '$150.8m', tvl: '$150.8m' },
    { name: 'USDC', price: '$150.8m', change: '+150.8m', volume: '$150.8m', tvl: '$150.8m' },
    { name: 'USDC', price: '$150.8m', change: '+150.8m', volume: '$150.8m', tvl: '$150.8m' },
    { name: 'USDC', price: '$150.8m', change: '+150.8m', volume: '$150.8m', tvl: '$150.8m' },
    // Add more tokens as needed
  ];

  return (
    <div>
      <h2 className="text-white mb-4">Top Tokens</h2>
      <table className="table table-dark table-hover">
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Price</th>
            <th>Price Change</th>
            <th>Volume 24H</th>
            <th>TVL</th>
          </tr>
        </thead>
        <tbody>
          {tokens.map((token, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td><img src="https://via.placeholder.com/20" alt="icon" className="me-2"/>{token.name}</td>
              <td>{token.price}</td>
              <td className={token.change.startsWith('+') ? 'text-success' : 'text-danger'}>{token.change}</td>
              <td>{token.volume}</td>
              <td>{token.tvl}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="d-flex justify-content-between text-white mt-3">
        <span>Page 1 of 5</span>
        <div>
          <button className="btn btn-outline-light me-2">Previous</button>
          <button className="btn btn-outline-light">Next</button>
        </div>
      </div>
    </div>
  );
}

export default TokenTable;
