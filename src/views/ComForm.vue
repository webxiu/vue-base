<template>
  <div>
    <BaseForm :formCongfig="formCongfig" />

    <div>
      <p>上传</p>
      <p>
        <input type="file" @change="change" />
        <canvas ref="canvas" width="200" height="200"></canvas>
      </p>
    </div>
  </div>
</template>

<script>
import BaseForm from "@/components/BaseForm";
import formMixins from "./mixins/formMixins";
export default {
  name: "Forms",
  components: { BaseForm },
  mixins: [formMixins],
  data() {
    return {
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
    change(e) {
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
