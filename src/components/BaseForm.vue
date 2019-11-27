<template>
  <div>
    <el-form ref="testForm" :model="testForm" :rules="rules" style="width:400px;margin: 50px auto;" label-width="100px">
      <el-form-item label="用户名" prop="name">
        <el-input v-model="testForm.name" style="width:100%" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="活动区域" prop="region">
        <el-select v-model="testForm.region" style="width:100%" placeholder="请选择活动区域">
          <el-option label="区域一" value="shanghai"></el-option>
          <el-option label="区域二" value="beijing"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="请选择日期" prop="date">
        <el-date-picker
          v-model="testForm.date"
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
  data() {
    let self = this;
    return {
      gridData: [
        {
          date: "2016-05-02",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          date: "2016-05-04",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          date: "2016-05-01",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          date: "2016-05-03",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        }
      ],
      dialogTableVisible: false,
      dialogFormVisible: false,
      testForm: {
        name: "",
        region: "",
        date: []
      },
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
            alert('submit!'+ JSON.stringify(this.testForm));
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