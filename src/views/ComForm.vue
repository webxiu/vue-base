<template>
  <div>
      <BaseForm :formCongfig="formCongfig" />
  </div>
</template>

<script>
import BaseForm from "@/components/BaseForm";
import formMixins from "./mixins/formMixins";
export default {
  name: "Forms",
  components: { BaseForm },
  mixins:[formMixins],
  data() {
    return {
      formCongfig: {
        formItem: [
          { type: 'button', label: '返回', handle: function() {
            alert('88889')
          } },
          { id: 'date', type: 'datepicker', label: '统计时间' },
          { id: 'select1', type: 'select', label: '全部类型', placeholder: '请选择公牛奶', options: [
            { value: '选项1', label: '黄金糕' },
            { value: '选项2', label: '黄金糕2' }
          ] },
          { id: 'select2', type: 'select', label: '选择母牛奶', placeholder: '请输母牛奶', options: [
            { value: '选项1', label: '黄金3' },
            { value: '选项2', label: '黄金糕4' }
          ] }
      ],
      }
    };
  },
  mounted(){
    this.getInfo()
  },
  methods: {
    getInfo(){
      console.log('===111',this.formCongfig);
      console.log('组件方法后执行:'+'11111')
    }
  }
};
</script>
