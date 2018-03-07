<template>
  <div>
    <div class="item" v-for="article in articles" :key="article.id">
      <Article :article="article" :tabType="tab"></Article>
    </div>
  </div>

</template>

<script>
import Article from './article'
export default {
  data: function () {
    return {}
  },
  props: ['articles', 'tab'],
  components: {
    Article
  }
}
</script>

<style lang="scss" scoped>
  .item {
    border-top: 1px solid #f0f0f0;
    height: 50px;
  }

  .item:first-child {
    border-top: none;
  }
</style>
