<template>
  <li class="address-item-use">
    <div class="address-item-wrap">
      <div class="address-item-main aim-small">
        <div class="contact-name">
          {{address.name}}, {{address.phone}}
        </div>
        <div class="contact-address">
         {{_detail}}
        </div>
      </div>
      <div class="address-item-choose-btn" @click="_chooseAddress" v-if="product != null">
      </div>
    </div>
    <div class="address-item-ops-1">
      <span class="address-item-set-default" @click="_selectDefault" :class="{'default' : _isDefault}">{{defaultStr}}</span>
    </div>
    <div class="address-item-ops-2">
      <div class="address-item-edit" @click="_editAddress">
          <span>编辑</span>
      </div>
      <div class="address-item-delete" @click="_deleteAddress">
          <span>删除</span>
      </div>
    </div>
  </li>
</template>

<script>
  import {mapGetters} from 'vuex'
  import addressService from 'service/address_service'
  export default {
    props: {
      address: {
        type: Object
      },
      isDefault: {
        type: Boolean
      },
      showUsed: {
        type: Boolean
      }
    },
    computed: {
      _isDefault: {
        get() {
          return this.isDefault
        },
        set(newVal) {
          this.$emit('defaultAddress', this.address)
          return newVal
        }
      },
      defaultStr() {
        if (this.isDefault) {
          return '已设为默认'
        } else {
          return '设为默认'
        }
      },
      _detail: {
        get() {
          return `${this.address.province_str} ${this.address.city_str} ${this.address.district_str} ${this.address.detail}`
        }
      },
      ...mapGetters({
        product: 'product'
      })
    },
    methods: {
      _selectDefault() {
        if (this.isDefault) {
          return
        }
        this._isDefault = true
      },
      _editAddress() {
        this.$emit('editAddress', this.address)
      },
      _deleteAddress() {
        this.$emit('deleteAddress', this.address)
        addressService.delete(this.address)
      },
      _chooseAddress() {
        this.$store.dispatch('setAddress', this.address)
        this.$emit('selectedAddress')
      }
    }
  }
</script>

<style lang="stylus" scoped>
  .address-item-wrap {
        position: relative;
        width: 100%;
        padding: 8px 10px 0 15px;
        min-height: 55px;
        height: auto;
        color: #3d4245;
        font-size: 13px;
        border-bottom: 1px solid #c4c4c4;
        text-align: left;
        .aim-small {
            width: 87%;
            padding-right: 6px;
        }
        .address-item-main {
            position: relative;
            display: inline-block;
            width: 100%;
            margin-bottom: 8px;
        }
        .contact-name {
            margin-bottom: 4px;
        }
        .contact-address {
            word-break: break-all;
        }

        .address-item-choose-btn {
            position: absolute;
            display: inline-block;
            width: 44px;
            height: 23px;
            top: 16px;
            right: 30px;
            background: url('./bg.png') no-repeat;
            background-position: -66px 0;
            background-size: 150px 75px;
        }

        .address-item-using {
           width: 20px;
           height: 15px;
            top: 20px;
            right: 17px;
           background-position: -111px -46px;
        }
        
    }
    
    .address-item-ops-1 {
        position: relative;
        display: inline-block;
        width: 30%;
        height: 36px;
        text-align: left;
        line-height: 36px;
        .default {
           color: #fd3f4b;
        }
        .default:before {
            width: 16px;
            height: 16px;
            top: -1px;
            left: -20px;
            background-position: -66px -27px;
        }
    }

    .address-item-ops-1 .address-item-set-default {
        position: relative;
        color: #999;
        font-size: 12px;
        margin-left: 35px;
    }

    .address-item-set-default:before {
        content: "";
        position: absolute;
        display: inline-block;
        width: 14px;
        height: 14px;
        top: 0;
        left: -20px;
        background: url('./bg.png') no-repeat;
        background-position: -118px -27px;
        background-size: 150px 75px;
    }

    .address-item-ops-2 {
        position: relative;
        display: inline-block;
        width: 66%;
        height: 36px;
        text-align: right;
        line-height: 36px;
        color: #999;
        font-size: 12px;
        .address-item-edit {
            position: relative;
            display: inline-block;
            width: 52px;
            height: 100%;
             span {
               position: relative;
                margin-left: 25px;
            }
            span:before {
                content: "";
                position: absolute;
                display: inline-block;
                width: 13px;
                height: 14px;
                top: -1px;
                left: -22px;
                background: url('./bg.png') no-repeat;
                background-position: -102px -27px;
                background-size: 150px 75px;
            }
        }

        .address-item-delete {
            position: relative;
            display: inline-block;
            width: 52px;
            height: 100%;
            margin-left: 5px;
            span {
               position: relative;
                margin-left: 24px;
            }
            span:before {
                content: "";
                position: absolute;
                display: inline-block;
                width: 14px;
                height: 15px;
                top: -1px;
                left: -22px;
                background: url('./bg.png') no-repeat;
                background-position: -84px -27px;
                background-size: 150px 75px;
            }
        }
    }
</style>
