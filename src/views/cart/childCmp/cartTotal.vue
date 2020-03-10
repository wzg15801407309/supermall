<template>
  <div id="cart_total">
    <div @click="checkClick" style="display: flex;">
      <cart-check-button :isChecked="checkAll" ref="checkButtonRef" />全选
    </div>
    <div class="calc">总计：￥{{ totalPrice | keep2Decimal }}</div>
    <div class="buy" @click="buySth">去购买({{ totalLength }})</div>
  </div>
</template>
<script>
import CartCheckButton from "./CartCheckButton.vue";
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters(["cartList"]),
    checkedItem() {
      return this.cartList.filter(item => item.checked == true);
    },
    totalLength() {
      return this.checkedItem.length;
    },
    totalPrice() {
      return this.checkedItem.reduce(
        (pre, curr) => pre + curr.count * curr.price.replace("¥", ""),
        0
      );
    },
    checkAll() {
      if (this.cartList.length == 0) {
        return false;
      } else {
        return this.cartList.every(value => value.checked == true);
      }
    }
  },
  components: {
    CartCheckButton
  },
  filters: {
    keep2Decimal(value) {
      return Math.round(value * 100) / 100;
    }
  },
  methods: {
    checkClick() {
      /* if (this.checkAll == true) {
        this.cartList.forEach(item => item.checked = false);
      } else {
        this.cartList.forEach(item => item.checked = true);
      } */
      let checkFlag = !this.checkAll;
      this.cartList.forEach(item => (item.checked = checkFlag));
    },
    buySth() {
      if (this.totalLength == 0) {
        this.$toast.show("请选择要购买的商品");
      } else {
        //====>购买界面，确认信息
        console.log("购买界面，确认信息");
      }
    }
  }
};
</script>
<style scoped>
#cart_total {
  font-size: 0.7rem;
  height: 40px;
  display: flex;
  background-color: rgb(228, 228, 228);
  line-height: 40px;
  text-align: center;
}

.calc {
  flex: 1;
}
.buy {
  width: 5rem;
  background-color: var(--color-high-text);
  color: white;
}
</style>
