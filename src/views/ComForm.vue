<template>
  <div>
      <BaseForm :formCongfig="formCongfig" />
  </div>
</template>

<script>
import BaseForm from "@/components/BaseForm";
export default {
  name: "Forms",
  components: { BaseForm },
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
  
};
</script>
