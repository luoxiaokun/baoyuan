<template>
  <div class="order-group">
    <div class="product-wrapper">
      <div class="thumb">
        <img src="" alt="">
      </div>
      <div class="info">
        <div class="name"></div>
        <div class="price"></div>
      </div>
    </div>
    <div class="group-info">
      <div class="group-wrapper">
        <p v-if="group.left > 0">还差<span>1</span>人,赶快参团吧~</p>
        <ul>
          <user v-for="user in groups" :key="user.id" :isCreateUser="isCreateUser(user)" :url="user.url"></user>  
          <user v-if="group.isArchived"></user>
        </ul>
        <div class="time">
          剩余<span class="hour">23</span>: <span class="minute">16</span>: <span class="seconds">16</span>结束
        </div>
        <div class="btn-join">
          <div class="join">参加团</div>
        </div>
      </div>
    </div>
  </div>  
</template>

<script>
  import user from './user'
  export default {
    components: {
      user
    },
    data() {
      return {
        group: null
      }
    },
    computed: {
      isCreateUser(user) {
        if (this.group != null && user.id === this.group.createUser.id) {
          return true
        } else {
          return false
        }
      }
    }
  }
</script>

<style>
  
</style>