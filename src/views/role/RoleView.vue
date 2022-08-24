<template>
  <div id="role">
    <el-table :data="tableList" style="width: 100%">
      <el-table-column fixed prop="roleName" label="角色名称" />
      <el-table-column prop="roleCode" label="角色代码" />
      <el-table-column prop="roleDescription" label="角色描述" />
      <el-table-column prop="createTime" label="创建时间" />

      <el-table-column fixed="right" label="操作">
        <template #default="scope">
          <el-button text size="small" @click.prevent="updateRole(scope.row.roleId)">
            编辑
          </el-button>
          <el-button text size="small" @click.prevent="deleteRole(scope.row.roleId)">
            删除
          </el-button>
        
        </template>
      </el-table-column>
    </el-table>

  </div>
</template>
<script>
  import { roleList } from '@/api/role.js'
  export default {
    data() {
      return {
        tableList: [],
        kw: ''
      }
    },
    created() {
      this.getRoleList();
    },
    methods: {

      getRoleList() {
        const params = {
          kw: this.kw
        }
        roleList(params).then(res => {
          this.tableList = res.data.data
        })
      },
      deleteRole(roleId) {
          console.log("删除当前role=",roleId)
      },
      updateRole(roleId) {
        console.log("编辑当前role=",roleId)
      }
    },
  }
</script>