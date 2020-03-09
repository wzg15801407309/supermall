import { request } from "./index";

export function getDetailData(iid) {
  return request({
    url: "/detail",
    params: iid
  });
}
//推荐数据
export function getDetailRecomment() {
  return request({
    url: "/recommend"
  });
}
export class Goods {
  constructor(itemInfo, columns, services) {
    this.title = itemInfo.title;
    this.desc = itemInfo.desc;
    this.newPreice = itemInfo.price;
    this.oldPrice = itemInfo.oldPrice;
    this.disCount = itemInfo.disCountDesc;
    this.realPrice = itemInfo.lowNowPrice;
    this.columns = columns;
    this.services = services;
  }
}
export class Shop {
  constructor(shopInfo) {
    this.logo = shopInfo.shopLogo;
    this.name = shopInfo.name;
    this.fans = shopInfo.fans;
    this.sells = shopInfo.cSells;
    this.score = shopInfo.score;
    this.goodsCount = shopInfo.cGoods;
  }
}
export class GoodsParam {
  constructor(info, rule) {
    this.image = info.images ? info.images[0] : 0;
    this.infos = info.set;
    this.sizes = rule.tables;
  }
}
