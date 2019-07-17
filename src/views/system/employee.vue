<template>
  <div>
    <el-form :inline="true" :model="formInline" class="demo-form-inline">
      <el-form-item label="关键字">
        <el-input v-model="formInline.keyword" placeholder="请输入姓名/邮箱"></el-input>
      </el-form-item>
      <el-form-item label="部门">
        <el-select v-model="formInline.depId" placeholder="请选择">
          <el-option label="全部" :value="-1"></el-option>
          <el-option v-for="item in options" :key="item.id" :label="item.name" :value="item.id"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit" icon="el-icon-search">查询</el-button>
        <el-button type="success" @click="onSubmit" icon="el-icon-plus">添加</el-button>
        <el-button type="danger" @click="onSubmit" icon="el-icon-delete-solid">批量删除</el-button>
        <el-button type="warning" @click="onSubmit" icon="el-icon-sort">导出</el-button>
      </el-form-item>
    </el-form>

    <el-table
      ref="multipleTable"
      :data="tableData"
      tooltip-effect="dark"
      style="width: 100%"
      @selection-change="handleSelectionChange"
    >
      <el-table-column type="selection" width="55"></el-table-column>
      <el-table-column prop="id" label="编号"></el-table-column>
      <el-table-column prop="name" label="名称"></el-table-column>
      <el-table-column prop="email" label="email"></el-table-column>
      <el-table-column prop="age" label="年龄"></el-table-column>
      <el-table-column prop="dept.name" label="部门"></el-table-column>
      <el-table-column prop="name" label="操作">
        <el-button type="primary" icon="el-icon-edit">编辑</el-button>
        <el-button type="danger" icon="el-icon-delete">删除</el-button>
      </el-table-column>
    </el-table>

    <el-pagination
      @size-change="handleSizeChange"
      background
      @current-change="handleCurrentChange"
      :current-page="currentPage"
      :page-size="10"
      layout="prev, pager, next, total"
      :total="total"
    ></el-pagination>
  </div>
</template>

<script>
import { employeeApi, departmentListApi } from "@/request/api.js";
export default {
  data() {
    return {
      formInline: {
        keyword: "",
        depId: ""
      },
      tableData: [],
      multipleSelection: [],
      currentPage: 1,
      total: 0,
      options: []
    };
  },
  methods: {
    onSubmit() {
      console.log("submit!");
    },
    handleSelectionChange() {},
    handleSizeChange(val) {
      this.currentPage = val;
      this.getEmployee();
    },
    handleCurrentChange(val) {
      this.currentPage = val;
      this.getEmployee();
    },
    getEmployee() {
      employeeApi({
        currentPage: this.currentPage,
        pageSize: 10,
        keyword: this.formInline.keyword,
        depId: this.formInline.depId,
        token: localStorage.getItem("token")
      }).then(res => {
        if (res.success) {
          (this.tableData = res.data.list), (this.total = res.data.total);
          console.log(res);
        }
      });
    }
  },

  created() {
    this.getEmployee();
    departmentListApi({
      currentPage: 1,
      pageSize: 1000,
      token: localStorage.getItem("token")
    })
      .then(res => {
        this.options = res.data.list; // 获取部门列表
      })
      .catch(err => {
        console.log(err);
      });
  }
};
</script>

<style lang="less" scoped>
.el-pagination {
  text-align: right;
  margin-top: 10px;
}
</style>
