import { mount } from '@vue/test-utils';
import HelloWorldComponent from '../../src/components/Login.vue';
import LoginModule from '@/store/login';

const LoginWrapper = mount(HelloWorldComponent, {});

describe('Login.vue', () => {
  beforeEach(() => {
    LoginModule.resetLogin();
  });
  it('should login', () => {
    const input1 = LoginWrapper.find('.input1');
    (input1.element as any).value = 'p1';
    input1.trigger('input');
    const input2 = LoginWrapper.find('.input2');
    (input2.element as any).value = 'p1';
    input2.trigger('input');
    const submit = LoginWrapper.find('.submit-wrapper');
    submit.trigger('click');
    expect(LoginModule.loggedIn).toBe(true);
  });

  it('should login error', async () => {
    const input1 = LoginWrapper.find('.input1');
    (input1.element as any).value = 'p1';
    input1.trigger('input');
    const input2 = LoginWrapper.find('.input2');
    (input2.element as any).value = 'p2';
    input2.trigger('input');
    const submit = LoginWrapper.find('.submit-wrapper');
    submit.trigger('click');
    expect(LoginModule.loggedIn).toEqual(false);
  });
});
