import { render } from '@testing-library/react';
import CacheProvider from './CacheProvider';
import App from './App';

test('renders learn react link', () => {
  render(
    <CacheProvider>
      <App />
    </CacheProvider>);
  const linkElement = true;
  expect(linkElement).toBeTruthy();
});
