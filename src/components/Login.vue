<script lang="tsx">
import { Component, Prop, Vue } from 'vue-property-decorator';
import LoginModule from '../store/login';

@Component
export default class HelloWorld extends Vue {
  user: string = '';
  password: string = '';
  error: string = '';

  @Prop() private msg!: string;

  mounted() {
    console.log('hello world');
  }

  async handleLogin() {
    this.error = '';
    try {
      await LoginModule.login({ username: this.user, password: this.password });
      this.$router.push('/p2');
    } catch (e) {
      this.error = e.message;
    }
  }

  handleInputUser($e: InputEvent) {
    this.user = ($e.target as any).value;
  }

  handlePassword(event: InputEvent) {
    this.password = (event.target as any).value;
  }

  render() {
    return (
      <div class="form-wrapper">
        <div class="title">Log In</div>
        <div class="form-input">
          <div class="item-wrapper">
            <div class="item-title">Username: </div>
            <input
              class="input1"
              onInput={(val: InputEvent) => this.handleInputUser(val)}
            />
          </div>
          <div class="item-wrapper">
            <div class="item-title">Password: </div>
            <input
              class="input2"
              type="password"
              onInput={(event: InputEvent) => this.handlePassword(event)}
            />
          </div>
        </div>
        {this.error.length > 0 && <div class="error-input">{this.error}</div>}
        <div class="submit-wrapper" onClick={() => this.handleLogin()}>
          submit
        </div>
      </div>
    );
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" scoped>
.form-wrapper {
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  .title {
    font-size: 20px;
  }

  .form-input {
    .item-wrapper {
      display: flex;
      flex-direction: row;
      margin: 10px 0px;

      .item-title {
        width: 80px;
      }
    }
  }

  .submit-wrapper {
    border: 1px solid black;
    padding: 5px 10px;
    border-radius: 20px;
  }

  .error-input {
    color: red;
    margin-bottom: 10px;
  }
}
</style>
