import {
  Module,
  VuexModule,
  Action,
  Mutation,
  getModule,
} from 'vuex-module-decorators';
import store from './index';

@Module({ dynamic: true, name: 'auth/login', namespaced: true, store })
class Login extends VuexModule {
  loggedIn: boolean = false;

  @Action({ rawError: true })
  login({ username, password }: { username: string; password: string }) {
    if (username === 'p1' && password === 'p1') {
      this.updateloggedIn(true);
      return true;
    }
    throw new Error('error login');
  }

  @Mutation
  updateloggedIn(payload: boolean) {
    this.loggedIn = payload;
  }

  @Mutation
  resetLogin() {
    this.loggedIn = false;
  }
}

const LoginModule = getModule(Login);

export default LoginModule;
