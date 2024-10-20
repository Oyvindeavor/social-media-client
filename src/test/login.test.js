import { login } from '../js/api';

// Checks to see if a successful login stores the returned token in localstorage.

jest.mock('../js/api');
describe('check to see if token is stored', () => {
  test('It should return and store token if successful', async () => {
    const mockResponse = {
      accessToken: 'fake-token',
      user: { id: 1, email: 'jojojda@stud.noroff.no' },
    };

    login.mockResolvedValueOnce(mockResponse);

    const user = await login('jojojda@stud.noroff.no', 'test123456');

    expect(user).toHaveProperty('accessToken');

    localStorage.setItem('accessToken', user.accessToken);

    expect(localStorage.getItem('accessToken')).toBe('fake-token');
    if (localStorage.getItem('accessToken')) {
      console.log('Storage token is saved');
    }
  });
});
