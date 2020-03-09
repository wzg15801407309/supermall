<template>
  <div id="detail_comment" v-if="Object.keys(commentInfo).length != 0">
    <div class="comment_title">
      <span class="comment_name">用户评价</span>
      <span class="comment_more">更多</span>
    </div>
    <div class="comment_info">
      <div class="u_info">
        <img :src="commentInfo.user.avatar" alt="" />
        <span>{{ commentInfo.user.uname }}</span>
      </div>
      <div class="content">{{ commentInfo.content }}</div>
    </div>
    <div class="comment_content">
      <p class="content_info">
        {{ commentInfo.created | dateShow }} {{ commentInfo.style }}
      </p>
      <div class="shop_reply" v-if="commentInfo.explain != null">
        {{ commentInfo.explain }}
      </div>
    </div>
    <div class="comment_img" v-if="commentInfo.images != null">
      <img
        :src="item"
        alt=""
        v-for="(item, index) in commentInfo.images"
        :key="index"
      />
    </div>
  </div>
</template>
<script>
import { formatDate } from "@/commons/utils.js";
export default {
  props: {
    commentInfo: {
      type: Object,
      default() {
        return {};
      }
    }
  },
  filters: {
    dateShow(value) {
      let date = new Date(value * 1000);
      return formatDate(date, "yyyy-MM-dd");
    }
  }
};
</script>
<style lang="less" scoped>
#detail_comment {
  font-size: 0.65rem;
  padding: 0.42rem 0.34rem;
  border-bottom: 0.3rem solid rgba(128, 128, 128, 0.2);

  .comment_title {
    padding: 0.42rem 0;
    padding-bottom: 0.8rem;
    border-bottom: 0.08rem solid rgba(128, 128, 128, 0.3);
    position: relative;
    .comment_more {
      position: absolute;
      right: -0.26rem;
      top: 0rem;
      &:after {
        content: "";
        background: url("~assets/common/gengduo.png") 0 0/1.06rem 1.06rem;
        display: inline-block;
        position: relative;
        top: 0.26rem;
        width: 1.06rem;
        height: 1.06rem;
      }
    }
  }
  .comment_info {
    .u_info {
      padding: 0.42rem 0;
      line-height: 1.8rem;
      display: flex;
      img {
        width: 1.8rem;
        height: 1.8rem;
        border-radius: 50%;
        border: 0.04rem solid rgba(128, 128, 128, 0.3);
      }
      span {
        margin-left: 0.42rem;
      }
    }
    .content {
      line-height: 1rem;
      color: #666;
    }
  }
  .comment_content {
    display: flex;
    // justify-content: space-between;
    align-items: center;
    .shop_reply {
      padding: 0.5rem 0;
      color: gray;
      line-height: 0.8rem;
      margin-left: 0.4rem;
    }
  }
  .comment_img {
    img {
      margin-right: 0.21rem;
      width: auto;
      height: 4.26rem;
    }
  }
}
</style>
