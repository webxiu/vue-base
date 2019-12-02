<template>
  <div>
    <el-form ref="testForm" :model="testForm" :rules="rules" style="width:400px;margin: 50px auto;" label-width="100px">
      <template v-for="(item, key) in formCongfig.formItem">
          <el-button v-if="item.type=='button'" :key="key" @click="bindThis(item.handle)">添加</el-button>
        <el-form-item v-else :key="key" :label="item.label">
          <el-input v-model="bingFormField[item.id]" v-if="item.type=='input'" :placeholder="item.placeholder" style="width:100%" autocomplete="off"></el-input>
          <el-select v-model="bingFormField[item.id]" v-else-if="item.type=='select'" filterable :placeholder="item.placeholder" style="width:100%">
            <el-option v-for="(optionItem, optionIndex) in item.options" :key="optionIndex" :label="optionItem.label" value="optionItem.value"></el-option>
          </el-select>
          <el-date-picker
            v-model="bingFormField[item.id]" 
            v-else-if="item.type=='datepicker'" 
            type="daterange"
            align="right"
            :unlink-panels="false"
            value-format="yyyy-MM-dd"
            clearable
            range-separator="至"
            start-placeholder="开始日期"
            end-placeholder="结束日期"
            :picker-options="pickerOptions"
            @focus="clearChioseDate" style="width:100%"
          ></el-date-picker>
        </el-form-item>
      </template>
      <el-form-item>
        <el-button type="primary" @click="submitForm()">提交</el-button>
        <el-button @click="resetForm('testForm')">重置</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import { log } from "util";
export default {
  props:{
    formCongfig: {
      type: Object,
      required: true,
      default: () => {}
    }
  },
  data() {
    let self = this;
    return {
      bingFormField: {},
      dialogTableVisible: false,
      dialogFormVisible: false,
      
      formLabelWidth: "120px",
      choiceDate: "",
      rules:{
        name: [{ required: true, message: '请输入用户名', trigger: ['change', 'blur'] }],
        region: [{ required: true, message: '请选择活动', trigger: ['change', 'blur'] }],
        date: [{ required: true, message: '请选择日期', trigger: ['change', 'blur'] }]
      },
      pickerOptions: {
        disabledDate(time) {
          const minTime = new Date(
            new Date(self.choiceDate).getFullYear(),
            new Date(self.choiceDate).getMonth(),
            1
          );
          const maxTime = new Date(
            new Date(self.choiceDate).getFullYear(),
            new Date(self.choiceDate).getMonth() + 1,
            0
          );
          if (Date.now() <= time) {
            return true;
          } else if (time > maxTime || time < minTime) {
            return true;
          } else {
            return false;
          }
        },
        onPick({ maxDate, minDate }) {
          self.choiceDate = "";
          if (!maxDate) {
            self.choiceDate = minDate;
          }
        }
      }
    };
  },
  methods: {
    clearChioseDate() {
      this.choiceDate = "";
    },
    submitForm() {
        this.$refs['testForm'].validate((valid) => {
          if (valid) {
            alert('submit!'+ JSON.stringify(this.bingFormField));
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      resetForm(testForm) {
        this.$refs[testForm].resetFields();
      }
  }
};
</script>