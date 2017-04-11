<template>
  <div id="m-addr-mask"  @click.self="hide">
    <toasting v-if="isLoading"></toasting>
    <div class="m-addr-main" v-if="address != null">
        <div class="m-addr-title">添加新收货地址</div>
        <div class="close" @click="hide">
          <i class="icon ion-close-circled"></i>
        </div>
        <div class="address-receiver">
          <input type="hidden" v-model="address.id">
           <input class="addr-input name" id="name" placeholder="名字" type="text" v-model.trim="address.name">
           <input class="addr-input phone" placeholder="电话" type="tel" v-model.number="address.phone">
        </div>
        <div class="select-group">
            <div class="select-item select-province">
                <select class="m-addr-select"  v-model="address.province" v-on:change="initCities()">
                    <option value="0">选择省份</option>
                    <option v-for="province in provinces" v-bind:value="province.province_id">
                        {{province.name}}
                    </option>
                </select>

            </div>
            <div class="select-item select-city">
                <select class="m-addr-select" v-model="address.city" v-on:change="initDistricts()">
                    <option value="0">请选择城市</option>                    
                     <option v-for="city in cities" v-bind:value="city.city_id">
                        {{city.name}}
                    </option>
                </select>
            </div>
            <div class="select-item select-district">
                <select class="m-addr-select" v-model="address.district">                   
                    <option value="0">请选择区县</option>                  
                    <option v-for="district in districts" v-bind:value="district.district_id">
                        {{district.name}}
                    </option>
                </select>
            </div>
        </div>
        <div class="address">
            <input placeholder="请填写详细街道地址" type="text" v-model.trim="address.detail">
        </div>
        <div class="m-addr-save" @click="saveAddress">保存</div>
        <div class="m-addr-close">
            <div class="ms-addr-close-icon" @click="changeAddress = false"></div>
        </div>
    </div>
</div>
</template>

<script>
  import toasting from 'components/loading/toasting'
  import service from 'service/location_service'
  import addressService from 'service/address_service'
  import {Toast} from 'mint-ui'
  export default {
    props: {
      address: {
        type: Object
      }
    },
    components: {
      toasting
    },
    data() {
      return {
        cities: [],
        provinces: [],
        districts: [],
        isLoading: true,
        isSaving: false
      }
    },
    methods: {
      getProvinces() {
        this.isLoading = true
        service.provinces().then((response) => {
          this.isLoading = false
          this.provinces = response
        })
      },
      initCities() {
        this.getCities()
        this.address.city = 0
        this.address.district = 0
        this.districts = []
      },
      initDistricts() {
        this.getDistricts()
        this.address.district = 0
      },
      getCities() {
        if (this.address.province === 0) {
          return
        }
        this.isLoading = true
        service.cities(this.address.province).then((response) => {
          this.isLoading = false
          this.cities = response
        })
      },
      getDistricts() {
        if (this.address.city === 0) {
          return
        }
        this.isLoading = true
        service.districts(this.address.city).then((response) => {
          this.isLoading = false
          this.districts = response
        })
      },
      saveAddress() {
        var isValid = this.validateAddress()
        if (!isValid) {
          return
        }
        this.isLoading = true
        this.isSaving = true
        if (this.address.id != null) {
          addressService.update(this.address).then((response) => {
            this.isLoading = false
            this.isSaving = false
            this.setAddressStr()
            this.$emit('updateAddress', this.address)
            this.$emit('hideModal')
          })
        } else {
          addressService.create(this.address).then((response) => {
            if (response.address_id != null) {
              this.address.id = response.address_id
              this.address.is_default = false
              this.isLoading = false
              this.isSaving = false
              this.setAddressStr()
              this.$emit('addAddress', this.address)
              this.$emit('hideModal')
            }
          })
        }
      },
      hide() {
        this.$emit('hideModal')
      },
      toastError(message) {
        Toast({
          message: message,
          iconClass: 'icon ion-close-round',
          duration: 3000
        })
      },
      validateAddress() {
        if (!this.address.name) {
          this.toastError('请输入收货人姓名')
          return false
        }
        if (!this.address.phone) {
          this.toastError('请输入收货人电话')
          return false
        }
        if (this.address.province === 0) {
          this.toastError('请选择省份')
          return false
        }
        if (this.address.city === 0) {
          this.toastError('请选择城市')
          return false
        }
        if (this.address.district === 0) {
          this.toastError('请选择区县')
          return false
        }
        if (!this.address.detail) {
          this.toastError('请输入具体送货地址')
          return false
        }
        return true
      },
      setAddressStr() {
        this.provinces.map((province) => {
          if (province.province_id === this.address.province) {
            this.address.province_str = province.name
          }
        })
        this.cities.map((city) => {
          if (city.city_id === this.address.city) {
            this.address.city_str = city.name
          }
        })
        this.districts.map((district) => {
          if (district.district_id === this.address.district) {
            this.address.district_str = district.name
          }
        })
      },
      _init() {
        this.getProvinces()
        if (this.address.city !== 0) {
          this.getCities()
        }
        if (this.address.district !== 0) {
          this.getDistricts()
        }
      }
    },
    activated() {
      this._init()
    }
  }
</script>

<style lang="stylus" scoped>
  .m-addr-main {
    position: fixed;
    top: 9%;
    left: 6.5%;
    width: 87%;
    border-radius: 2.5px;
    background-color: #fff;
    text-align: center;
    color: #000;
    font-size: 16px;
    
    .close {
      position: absolute;
      top: -11px;
      font-size: 22px;
      right: -6px;;
      color: #999999; 
    }
    
  .m-addr-title {
    padding: 5px;
    text-align: center;
    border-bottom: 1px solid #c0bfc4;    
  }  
  
  .address-receiver {
    display: flex;
    height: 60px;
    line-height: 60px;
    border-bottom: 1px solid #c0bfc4;    
    .addr-input {
      flex: 1;
      border-right: 1px solid #c0bfc4;    
      width: 100%;
      &.name {
        padding-left: 10px;
      }
      &.phone {
        padding-right: 10px;
        padding-left: 5px;
      }
    }
  }
  
  .address {
    padding: 5px;
    height: 60px;
    line-height: 60px;
    border-bottom: 1px solid #c0bfc4;
    input {
      width: 100%;
      font-size: 16px;
      line-height: 60px;
    }
  }
  
  .select-group {
    display: flex;
    width: 100%;
    color: #000;
    font-size: 16px;
    .select-item {
      flex: 1;
      height: 60px;
      line-height: 60px;
      border: 1px solid #c0bfc4; 
      .m-addr-select {
        width: 100%;
        font-size: 16px;
        option {
          font-size: 16px;
        }
      }
    }
  }

  .m-addr-save {
      position: relative;
      display: inline-block;
      width: 180px;
      height: 35px;
      line-height: 35px;
      margin: 14px 0;
      font-size: 15px;
      color: #fff;
      background-color: #dc2426;
      border-radius: 2.5px;
      box-shadow: 1px 2px 3px #aaa;
  }

  

  
}

#m-addr-mask {
    position: absolute;
    width: 100%;
    height: 100%;
    min-height: 610px;
    top: 0;
    left: 0;
    background: rgba(60,60,60,.9);
    z-index: 500;
}
</style>
