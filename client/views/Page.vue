<template>
  <div class="row">
    <div class="col-md-3" style="border-right:1px solid">
      <PageList></PageList>
    </div>
    <div class="col-md-9">Detail</div>
  </div>
</template>

<script>
import PageList from '../components/PageList.vue'
export default {
  components: {
    PageList
  }
}
</script>
