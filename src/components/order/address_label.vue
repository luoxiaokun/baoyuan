<template>
  <div class="address" @click="chooseAddress">
    <div class="add-address" v-if="address == null" >
      <i class="icon ion-plus-circled"></i>
      <span class="label">请添加收货地址</span>
    </div>
    <div class="address-info" v-if="address != null" >
      <div class="logo">
         <i class="icon ion-ios-location"></i>
      </div>
      <div class="delivery-info">
        <div class="user-info">
          <span class="name">收货人: {{address.name}}</span>
          <span class="phone">电话: {{address.phone}}</span>
        </div>
        <div class="address-detail">
          收货地址: {{address.province_str}} {{address.city_str}} {{address.district_str}} {{address.detail}}
        </div> 
      </div>
    </div>
  </div>

</template>

<script>
  import {mapGetters} from 'vuex'
  export default {
    computed: {
      ...mapGetters({
        address: 'address'
      })
    },
    methods: {
      chooseAddress() {
        this.$router.push({name: 'addresses'})
      }
    }
  }
</script>

<style lang="stylus" scoped>
  .address {
    background: #fff;
    padding: 10px;
    color: #000;
    .add-address {
      text-align: left;
      padding: 10px;
      .icon {
        color: #E84850;
        font-size: 22px;
      }
      .label {
        margin-left: 10px;
        font-size: 18px;
      }
    }
    .address-info {
      color: #000;
      display: flex;
      .logo {
        flex: 0 0 50px;
        i {
          color: #E84850;
          font-size: 22px;
        }
      } 
      .delivery-info {
        flex: 1;
        display: flex;
        flex-direction: column;
        text-align: left;
        .user-info {
          flex: 1;
          .name {
            float: left;
          }
          .phone {
            float: right;
          }
        }
        .address-detail {
          flex: 1;
        }
        &:after {

        }
      }     
    }
  }
</style>
