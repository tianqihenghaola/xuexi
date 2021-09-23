<template>
  <div>
    <el-table :data="tableData" style="width: 100%">
      <template v-for="item in column">
        <el-table-column :prop="item.prop" :label="item.lable" :key="item.label">
          <template slot-scope="scope">
            <template>
              <span>{{ scope.row[column.prop] }}</span>
            </template>
          </template>
        </el-table-column>
      </template>
    </el-table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tableData: [
        {
          name: "王小虎",
          date: "2016-05-02",
          address: "上海市普陀区金沙江路 1518 弄",
        },
      ],
      column: [
        {
          prop: "name",
          lable: "姓名",
        },
        {
          prop: "date",
          lable: "日期",
        },
        {
          prop: "text",
          lable: "说明文字",
        },
      ],
    };
  },
};
</script>

<style>
</style>