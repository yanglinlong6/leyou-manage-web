<template>
  <v-stepper v-model="step">
    <v-stepper-header>
      <v-stepper-step :complete="step > 1" step="1">基本信息</v-stepper-step>
      <v-divider />
      <v-stepper-step :complete="step > 2" step="2">商品描述</v-stepper-step>
      <v-divider />
      <v-stepper-step :complete="step > 3" step="3">规格参数</v-stepper-step>
      <v-divider />
      <v-stepper-step step="4">SKU属性</v-stepper-step>
    </v-stepper-header>
    <v-stepper-items>
      <v-stepper-content step="1">
        基本信息
      </v-stepper-content>
      <v-stepper-content step="2">
        商品描述
      </v-stepper-content>
      <v-stepper-content step="3">
        规格参数
      </v-stepper-content>
      <v-stepper-content step="4">
        SKU属性
      </v-stepper-content>
    </v-stepper-items>
  </v-stepper>
</template>
<script>
  export default {
    name: "my-goods-form",
    props: {
      oldGoods: {
        type: Object
      },
      isEdit: {
        type: Boolean,
        default: false
      },
      step: {
        type: Number,
        default: 1
      }
    },
    data() {
      return {
        goods: {
          categoroes: [],
          brandId: 0,
          title: '',
          subTitle: '',
          spuDetail: {
            packingList: '',
            afterService: ''
          }
        }
      }
    },
    watch: {
      'goods.categories': {
        deep: true,
        handler(val) {
          // 判断商品分类是否存在，存在才查询
          if (val && val.length > 0) {
            // 根据分类查询品牌
            this.$http.get("/item/brand/cid/" + this.goods.categories[2].id)
              .then(({
                data
              }) => {
                this.brandOptions = data;
              })
          }
        }
      }
    },
    methods: {

    }
  }

</script>
<style scoped></style>
