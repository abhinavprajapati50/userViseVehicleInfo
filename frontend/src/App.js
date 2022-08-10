import './App.css';
import { Outlet } from 'react-router-dom';

function App() {
  // https://www.youtube.com/watch?v=UY34YaSMwRI&list=PL2PkZdv6p7ZkQFQgwwZKYiTR4_HtbnMCp&index=3&ab_channel=CoderDost
  return (
    <div>
      <Outlet />
    </div>
  )
}
export default App;
