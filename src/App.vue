<script lang="tsx">
import { Component, Vue } from 'vue-property-decorator';
import Login from './components/Login.vue';

@Component({})
export default class App extends Vue {
  handleHello() {
    this.$router.push('/p1');
    console.log('hello');
  }

  mounted() {
    this.$router.push('/p1');
  }

  render() {
    return (
      <div>
        <router-view />
      </div>
    );
  }
}
</script>

<style lang="stylus"></style>
