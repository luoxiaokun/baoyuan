<template>
  <div class="product-types">
    <div class="product-type-wrapper">
      <ul>
        <li v-for="type in productTypes" class="product-type-item "  @click="selectType(type)" :class="{'current': type.id == currentProductType.id }">
          <span class="text border-1px">
            {{type.name}}
          </span>
        </li>
      </ul>      
    </div>
    <div class="sub-types-wrapper" v-if="currentProductType != null">
      <div class="product-type-thumb">
        <img :src="currentProductType.banner" alt="">
      </div>
      <div class="product-content-wrapper">
        <grid></grid>  
      </div>
    </div>
  </div>
</template>

<script>
  import {mapGetters} from 'vuex'
  import grid from './grid/grid'
  export default {
    components: {
      grid
    },
    computed: {
      ...mapGetters({
        productTypes: 'productTypes',
        currentProductType: 'currentProductType'
      })
    },
    methods: {
      selectType(type) {
        this.$store.dispatch('setCurrentProductType', type)
      }
    }
  }
</script>

<style lang="stylus" scoped>
  .product-types {
    display: flex;
    height: 100%;
    border-top: 1px solid #EDEDED;
    .product-type-wrapper {
      flex: 0 0 90px;
      width: 90px;
      background: #fff;
      border-right: 1px solid #ededed;
      text-align: center;
      height: 100%;
      .product-type-item {
        position: relative;
        display: table;
        width: 100%;
        padding: 0px
        margin: 20px 0; 
        color: #000;
        font-size: 14px;
        line-height: 30px;
        
        &.current {
          &:before {
            position: absolute;
            top: 0;
            left: 0;
            height: 100%;
            border-left: 5px solid rgb(222,62,67);
            content: '';
          }
          .text {
            font-size: 18px;
            color: rgb(222,62,67);
          }
        }
      }
    }
    
    .sub-types-wrapper {
      .product-type-thumb {
        margin: 10px;
        img {
          width: 100%;
        }
      }
    }
    
    .product-content-wrapper {
      width: 100%;
    }
  }
</style>
