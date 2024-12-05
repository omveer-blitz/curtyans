import { Route } from 'react-router-dom';

const NotFound = () => {
  const data = `The Page You Were Looking For Was Not Found`;
  return <Route path='**' Component={() => data} />
}

export default NotFound;
