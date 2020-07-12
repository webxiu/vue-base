<template>
  <div>
    <el-form
      ref="testForm"
      :model="testForm"
      :rules="rules"
      style="width:400px;margin: 50px auto;"
      label-width="100px"
    >
      <template v-for="(item, key) in formCongfig.formItem">
        <el-button v-if="item.type=='button'" :key="key" @click="bindThis(item.handle)">添加</el-button>
        <el-form-item v-else :key="key" :label="item.label">
          <el-input
            v-model="bingFormField[item.id]"
            v-if="item.type=='input'"
            :placeholder="item.placeholder"
            style="width:100%"
            autocomplete="off"
          ></el-input>
          <el-select
            v-model="bingFormField[item.id]"
            v-else-if="item.type=='select'"
            filterable
            :placeholder="item.placeholder"
            style="width:100%"
          >
            <el-option
              v-for="(optionItem, optionIndex) in item.options"
              :key="optionIndex"
              :label="optionItem.label"
              value="optionItem.value"
            ></el-option>
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
            @focus="clearChioseDate"
            style="width:100%"
          ></el-date-picker>
        </el-form-item>
      </template>
      <el-form-item>
        <el-button type="primary" @click="submitForm">提交</el-button>
        <el-button @click="resetForm">重置</el-button>
      </el-form-item>
    </el-form>

    <el-dialog v-el-drag title="提示" :visible.sync="dialogVisible" width="30%" :before-close="handleClose">
      <span>这是一段信息</span>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
import { log } from "util";
import elDrag from '@/directive/el-drag'
export default {
  props: {
    formCongfig: {
      type: Object,
      required: true,
      default: () => {}
    }
  },
  directives: {elDrag},
  data() {
    let self = this;
    return {
      bingFormField: {},
      dialogTableVisible: false,
      dialogFormVisible: false,
      dialogVisible: false,
      formLabelWidth: "120px",
      choiceDate: "",
      testForm: {},
      rules: {
        name: [
          {
            required: true,
            message: "请输入用户名",
            trigger: ["change", "blur"]
          }
        ],
        region: [
          { required: true, message: "请选择活动", trigger: ["change", "blur"] }
        ],
        date: [
          { required: true, message: "请选择日期", trigger: ["change", "blur"] }
        ]
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
      this.$refs["testForm"].validate(valid => {
        if (valid) {
          alert("submit!" + JSON.stringify(this.bingFormField));
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    resetForm() {
      this.dialogVisible = true;
      this.$refs["testForm"].resetFields();
    },
    handleClose(){
      this.dialogVisible = false;
    }
  }
};
</script>