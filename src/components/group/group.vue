<template>
  <div class="page">
    <loading v-if="isLoading"></loading>
    <div class="container">
    <v-title></v-title>
    <split></split>    
    <div class="group-product" v-if="group != null">
        <div class="product-icon">
          <img :src="group.product.icon" alt="">
        </div>
        <div class="product-info">
          <h5 class="title">{{group.product.name}}</h5>
          <div class="description">{{group.product.description}}</div>
          <div class="single-buy-btn buy-btn" @click="showProduct">
            <span class="label">单买</span>
            ￥ {{group.product.single_price}}
          </div>
          <div class="group-buy-btn buy-btn" @click="showProduct">
            <span class="label">{{group.product.group_no}}人团</span>
            ￥ {{group.product.group_price}}
          </div>
        </div>
    </div>
    <split></split>
    <component :is="groupInfoView" :status="status" v-if="groupInfoView != null"></component>
    <split></split>
    <div class="members">
      <h5 class="title">参加包圆详情</h5>
      <ul v-if="group != null">
        <member  v-for="member in group.members" :member="member" :key="member.id"></member>
      </ul>
    </div> 
    </div>
    <cartcontrol v-if="group != null" v-show="showControl" v-on:hideControl="hideControl"></cartcontrol>
    <v-mark v-show="showControl" v-on:hideControl="hideControl"></v-mark>
    <v-bottom :group="group" v-if="group != null" v-on:showControl="openControl" ></v-bottom>
  </div>
</template>

<script>
  import title from './title'
  import split from 'components/split/split'
  import join from './status/join'
  import status from './status/status'
  import member from './member/member'
  import bottom from './bottom'
  import cartcontrol from 'components/product/cartcontrol'
  import mark from 'components/product/mark'
  import loading from 'components/loading/loading'
  import service from 'service/group_service'
  import {mapGetters} from 'vuex'
  let WAIT = 0
  let SUCCESS = 1
  export default {
    components: {
      'v-title': title,
      split,
      join,
      loading,
      status,
      member,
      cartcontrol,
      'v-mark': mark,
      'v-bottom': bottom
    },
    data() {
      return {
        groupInfoView: null,
        status: null,
        isLoading: true,
        group: null,
        showControl: false
      }
    },
    computed: {
      ...mapGetters({
        product: 'product'
      })
    },
    created() {
      service.group(this.$route.params.groupId).then((response) => {
        this.isLoading = false
        this.group = response
        this._initGroupStatus()
        this.$store.dispatch('setProduct', this.group.product)
      })
    },
    methods: {
      _initGroupStatus() {
        this.status = {
          endedAt: this.group.ended_at,
          person: this.group.short_no
        }
        if (this.group.status === WAIT) {
          this.groupInfoView = 'join'
        } else {
          if (this.group.status === SUCCESS) {
            this.status.label = '很遗憾, 此团已拼团成功啦!'
          } else {
            this.status.label = '此团已过期啦'
          }
          this.groupInfoView = 'status'
        }
      },
      openControl() {
        this.showControl = true
      },
      hideControl() {
        this.showControl = false
      },
      showProduct() {
        this.$router.push({name: 'product', params: {productId: this.group.product.id}})
      }
    }
  }
</script>

<style lang="stylus" scoped>
  .container {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 66px;
    overflow: auto;
    width: 100%;
    z-index: 30;
    background: #f0f0f0;
  }
  .group-product {
    display: flex;
    padding: 10px;
    background: #fff;
    .product-icon {
      flex: 0 0 150px;
      width: 150px;
      height: 170px;
      img {
        width: 100%;
        height: 100%;
        border: 1px solid #C8C8CD;
      }
    }
    .product-info {
      color: #000;
      padding-left:10px;
      text-align: left;
      flex: 1;
      .title {
        font-size: 18px;
      }
      .description {
        font-size: 12px;
        color: #999;
      }
    }
    .buy-btn {
      margin-top: 10px;
      border: 1px solid gray;
      text-align: center;
      padding-top: 10px;
      padding-bottom: 2px;
      border-radius: 5px;
      position: relative;
      font-size: 18px;
      .label {
        position: absolute;
        top: -10px;
        background: #fff;
        padding: 0 10px;
        font-size: 12px;
      }
      &.single-buy-btn {
        color: #999;
        border: 1px solid #999;
        margin-bottom: 5px;
      }
      &.group-buy-btn {
        color: #EB555D;
        border: 1px solid #EB555D;
      }
    }
  }
  .members {
      background: #fff;
      color: #000;
      .title {
        text-align: left;
        padding: 10px;
      }
    }
</style>
