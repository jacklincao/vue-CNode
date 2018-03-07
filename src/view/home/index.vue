<template>
  <div id="common">
    <Headers></Headers>
    <router-view></router-view>
    <Footers></Footers>
  </div>
</template>

<script>
import Headers from '@/components/common/Headers'
import Footers from '@/components/common/Footers'

export default {
  name: 'common',
  components: {
    Headers,
    Footers
  }
}
</script>
