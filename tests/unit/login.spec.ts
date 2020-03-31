import LoginModule from '../../src/store/login';

describe('Login', () => {
  beforeEach(() => {
    jest.resetModules();
    LoginModule.resetLogin();
  });

  it('login successful', async () => {
    await LoginModule.login({ username: 'p1', password: 'p1' });
    expect(LoginModule.loggedIn).toBe(true);
  });

  it('login with error', async () => {
    try {
      await LoginModule.login({ username: 'p1', password: 'p2' });
    } catch (e) {
      expect(e.message).toBe('error login');
      expect(LoginModule.loggedIn).toBe(false);
    }
  });
});
