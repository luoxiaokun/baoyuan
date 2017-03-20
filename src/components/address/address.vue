<template>
  <div>
   <v-title :title="'地址管理'"></v-title>
  <div class="addresses-main" > 
    <ul class="addresses-list">
      <item v-for="address in addresses" :address="address" v-on:defaultAddress="defaultAddress" v-on:editAddress="editAddress" v-on:deleteAddress='deleteAddress' :key="address.id" :is-default="address.is_default" v-on:selectedAddress='setAddress'></item>
    </ul>
    <div class="empty-address" v-if="addresses.length == 0 && !isLoading">
        <div class="empty-icon"></div>
        <span class="empty-label">暂无任何地址</span>
    </div>
    <div class="add-address-btn" v-if="!isLoading">
        <div class="normal-add-btn btn-long" @click="newAddress">
            <span>手动添加</span>
        </div>
    </div>
  </div>
  <keep-alive>
  <modal v-if="showModal" :address.sync="selectedAddress" v-on:hideModal="hideModal" v-on:addAddress="addAddress" v-on:updateAddress="updateAddress"></modal> 
  </keep-alive>
  <div class="loading-more" v-if="isLoading">
    <loading-more :label="'正在加载地址信息'"></loading-more>
  </div>
  </div>
</template>

<script>
  import title from 'components/title/title'
  import modal from './modal'
  import loadingMore from 'components/loading/loading_more'
  import item from './item'
  import service from 'service/address_service'
  export default {
    data() {
      return {
        addresses: [],
        showModal: false,
        selectedAddress: {},
        isLoading: true
      }
    },
    components: {
      'v-title': title,
      modal,
      loadingMore,
      item
    },
    beforeRouteEnter(to, from, next) {
      next(vm => {
        vm.getAddresses()
      })
    },
    methods: {
      newAddress() {
        this.selectedAddress = {
          name: null,
          phone: null,
          province: 0,
          city: 0,
          district: 0,
          detail: null
        }
        this.showModal = true
      },
      hideModal() {
        this.showModal = false
      },
      addAddress(address) {
        this.addresses.push(address)
      },
      getAddresses() {
        this.isLoading = true
        service.index().then((response) => {
          this.isLoading = false
          this.addresses = response
        })
      },
      updateAddress(address) {
        this.addresses.filter((data) => {
          if (data.id === address.id) {
            data.name = address.name
            data.phone = address.phone
            data.province = address.province
            data.city = address.city
            data.district = address.district
            data.province_str = address.province_str
            data.city_str = address.city_str
            data.district_str = address.district_str
          }
        })
      },
      defaultAddress(address) {
        this.addresses.map((address) => {
          address.is_default = false
        })
        address.is_default = true
        console.log(address.is_default)
      },
      editAddress(address) {
        this.selectedAddress = address
        this.showModal = true
      },
      deleteAddress(address) {
        this.addresses = this.addresses.filter((addressO) => {
          if (addressO.id === address.id) {
            return false
          } else {
            return true
          }
        })
      },
      setAddress(address) {
        console.log('hello world')
        this.$router.go(-1)
      }
    }
  }
</script>

<style lang="stylus" scoped>
  .addresses-main {
    font-size: #000;
    position: absolute;
    top: 44px;
    padding-top: 20px;
    left: 0;
    overflow: auto;
    z-index: 500;
    width: 100%;
    height: 100%;
    background: #EBEBEB;
  }
  .empty-address {
    width: 100%;
    background-color: #fff;
    margin-bottom: 10px;
    padding-top: 15px;
    text-align: center;
    height: 92px;
    .empty-icon {
        width: 63px;
        height: 63px;
        margin: 0 auto;
        background: url('./bg.png') no-repeat;
        background-position: 0 0;
        background-size: 150px 75px;
    }
    .empty-label {
      margin-top: 30px;
    }
  }
  .empty-address {
    position: relative;
  }
  
  .addresses-list {
    position: relative;
    width: 100%;
    padding: 0;
    margin: 0;
    
    li {
        padding: 0;
        margin: 0;    
        position: relative;
        background-color: #fff;
        margin-bottom: 10px;
        list-style: none;
    }
  }  
  
  .add-address-btn {
    padding: 10px;
    .normal-add-btn {
      background-color: #E84850;
      color: #fff;
      padding: 10px;
      border-radius: 10px;
    }
  }
  
  .loading-more {
    position: absolute;
    top: 40%;
    left: 0;
    width: 100%;
    z-index: 600;
  }

</style>
