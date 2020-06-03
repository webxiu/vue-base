<template>
  <div>
    <BaseForm :formCongfig="formCongfig" />

    <div>
      <p>
        上传预览:
        <input type="file" @change="change" multiple accept="image/*" />
      </p>
      <div>
        <img v-for="(item, index) in imgs" :src="item" :key="index" height="200" />
      </div>
    </div>
    <div>
      <p>
        上传裁剪:
        <input type="file" @change="changeCut" />
      </p>
      <p>canvas图片裁剪:</p>
      <div class="cut-box">
        <canvas ref="canvas" height="200"></canvas>
        <div class="mask"></div>
        移动端头像裁剪:
        <img :src="headerImg" class="header-img" width="50" height="50" alt />
      </div>
    </div>
  </div>
</template>

<script>
import BaseForm from "@/components/BaseForm";
import formMixins from "../mixins/formMixins";

import Clipic from "clipic";
const clipic = new Clipic();
// console.log('clipic', clipic)
export default {
  name: "Forms",
  components: { BaseForm },
  mixins: [formMixins],
  data() {
    return {
      imgs: [],
      headerImg: require("@/assets/win7.jpg"),
      formCongfig: {
        formItem: [
          {
            type: "button",
            label: "返回",
            handle: function() {
              alert("88889");
            }
          },
          { id: "date", type: "datepicker", label: "统计时间" },
          {
            id: "select1",
            type: "select",
            label: "全部类型",
            placeholder: "请选择公牛奶",
            options: [
              { value: "选项1", label: "黄金糕" },
              { value: "选项2", label: "黄金糕2" }
            ]
          },
          {
            id: "select2",
            type: "select",
            label: "选择母牛奶",
            placeholder: "请输母牛奶",
            options: [
              { value: "选项1", label: "黄金3" },
              { value: "选项2", label: "黄金糕4" }
            ]
          }
        ]
      }
    };
  },
  mounted() {
    this.getInfo();
  },
  methods: {
    getInfo() {
      console.log("===111", this.formCongfig);
      console.log("组件方法后执行:" + "11111");
    },
    // 多图片预览
    change(e) {
      let files = e.target.files;
      if (files[0]) {
        this.imgs = [];
      }
      for (const key in files) {
        if (files.hasOwnProperty(key)) {
          const file = files[key];
          let fr = new FileReader();
          fr.readAsDataURL(file);
          fr.onload = e => {
            let url = e.target.result;
            this.imgs.push(url);
          };
        }
      }
    },
    // 单个图片裁剪
    changeCut(e) {
      let file = e.target.files[0];
      let fr = new FileReader();
      fr.readAsDataURL(file);
      fr.onload = e => {
        let url = e.target.result;
        this.loadImg(url).then(res => {
          let cv = this.$refs.canvas;
          let ctx = cv.getContext("2d");
          ctx.clearRect(0, 0, cv.width, cv.height);
          ctx.drawImage(res, 0, 0, cv.width, cv.height);

          clipic.getImage({
            width: 500,
            height: 500,
            src: url,
            onDone: base64 => {
              //这里就是上传完成的回调函数，可以在这里请求接口上传至服务器
              this.headerImg = base64;
              console.log(this.headerImg); //图片上传完成后生成的base64
            }
          });
        });
      };
    },
    // 根据地址返回图片
    loadImg(url) {
      return new Promise((resolve, reject) => {
        const img = new Image();
        img.onload = () => {
          console.log("一张图片加载完成");
          resolve(img);
        };
        img.onerror = () => {
          reject(new Error("Could not load image at" + url));
        };
        img.src = url;
      });
    }
  }
};
</script>

<style scoped>
.cut-box {
  position: relative;
}

.mask {
  position: absolute;
}
.header-img {
  border-radius: 50%;
}
</style>
