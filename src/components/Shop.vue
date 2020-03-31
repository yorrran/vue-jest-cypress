<script lang="tsx">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class Shop extends Vue {
  render() {
    return <div class="shop-wrapper">Logged In</div>;
  }
}
</script>

<style lang="stylus" scoped>
.shop-wrapper
  width: 100%
  height: 100vh
  display: flex
  justify-content: center
  align-items: center
</style>
