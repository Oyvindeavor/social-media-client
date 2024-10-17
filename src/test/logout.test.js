import { logout } from '../js/api';

// Checks to see if logout function removes the token from localstorage.

localStorage.setItem('token', 'fake-token'); // Set the token key that logout will remove

describe('check to see if token is removed', () => {
  test('It should remove token from localStorage when logout is called', () => {
    // Call the actual logout function
    logout();

    // Check that the token is removed from localStorage
    expect(localStorage.getItem('token')).toBe(null); // Match the "token" key

    // Optional: log a message if the token is successfully removed
    if (!localStorage.getItem('token')) {
      console.log('Storage token is removed');
    }
  });
});
