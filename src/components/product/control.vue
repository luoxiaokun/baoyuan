<template>
  <div class="cart-control">
    <div class="product-decrease " :class="{ 'disabled' : quantity == 1}" @click="decrease">
        <i class="ion-minus-round icon"></i>
    </div>
    <div class="product-count" >{{quantity}}</div>
    <div class="product-add icon-add_circle" @click="add">
      <i class="icon ion-plus-round"></i>
    </div>
  </div>
</template>

<script>
  import {mapGetters} from 'vuex'
  export default {
    computed: {
      ...mapGetters({
        quantity: 'quantity'
      })
    },
    methods: {
      add() {
        this.$store.dispatch('addQuantity')
      },
      decrease() {
        this.$store.dispatch('decreaseQuantity')
      }
    }
  }
</script>

<style lang="stylus" scoped>
  .cart-control {    
    font-size: 18px;
    border-raidus: 5px;
    border: 1px solid #c0bfc4;
    color: #000;
    display: flex;
    width: 100px;
    float:right;
    margin-right: 20px;
    line-height: 30px;
    .product-decrease {
      border-right: 1px solid #c0bfc4;
      flex: 0 0 25px;
      &.disabled {
        color: #c0bfc4;
      }
    }
    .product-add {
      border-left: 1px solid #c0bfc4;
      flex: 0 0 25px;
    }
    .product-count {
      flex: 1;
    }
  }  
</style>
