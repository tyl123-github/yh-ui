<template>
    <div>

        <el-input v-model="kw" style="width: 20%;" placeholder="请输入用户名/姓名" clearable />
        <el-button type="primary" @click="getUserList" icon="el-icon-search">搜索</el-button>
        <el-button text size="small" @click="handleClick">新增</el-button>
        <el-table :data="tableData" table-layout="auto" style="width: 100%" height="600">
            <el-table-column size="small" prop="userName" label="用户名" />
            <el-table-column size="small" prop="name" label="姓名" />
            <el-table-column size="small" prop="mobile" label="手机号" />
            <el-table-column size="small" prop="roleName" label="" />
            <el-table-column size="small" label="角色">
                <template #default="scope">
                    <span v-for="role in scope.row.roleVos" :key="role.roleId">
                        <el-tag>{{ role.roleName }} </el-tag>&nbsp;&nbsp;
                    </span>

                </template>
            </el-table-column>
            <el-table-column size="small" prop="createTime" label="创建时间" />
            <el-table-column size="small" fixed="right" label="操作">
                <template #default="scope">
                    <el-button text size="small" @click="userUpdate(scope.row.userId)">编辑</el-button>
                    <el-button text size="small" @click="delUser(scope.row.userId)">删除</el-button>

                </template>
            </el-table-column>
        </el-table>

        <!--弹框-->
        <el-dialog v-model="dialogTableVisible" :title="userTitle" :destroy-on-close="true" @close="userclear()">
            <el-form :model="fromUser" :rules="rules" ref="fromUser">
                <el-form-item label="用户名" prop="userName">
                    <el-input type="text" v-model="fromUser.userName" autocomplete="off" />
                </el-form-item>
                <el-form-item label="密码" prop="password">
                    <el-input type="password" v-model="fromUser.password" autocomplete="new-password" />
                </el-form-item>
                <el-form-item type="text" label="姓名" prop="name">
                    <el-input v-model="fromUser.name" autocomplete="off" />
                </el-form-item>
                <el-form-item label="手机号" prop="mobile">
                    <el-input type="text" v-model="fromUser.mobile" autocomplete="off" />
                </el-form-item>
                <el-form-item label="角色" prop="roleIds">
                    <el-select v-model="fromUser.roleIds" multiple placeholder="请选择角色">
                        <el-option v-for="item in roleList" :label="item.roleName" :value="item.roleId"
                            :key="item.roleId" />
                    </el-select>
                </el-form-item>
            </el-form>
            <template #footer>
                <span class="dialog-footer">
                    <el-button @click="userclear()">取消</el-button>
                    <el-button type="primary" @click="save('fromUser')">保存</el-button>
                </span>
            </template>
        </el-dialog>

    </div>

</template>
<script>
    import { userList, save, delUser, getById, updateById } from '@/api/user.js'
    import { roleList } from '@/api/role.js'
    export default {
        name: 'UserView',
        data() {
            return {
                tableData: [],
                //搜索框
                kw: '',
                dialogTableVisible: false,
                userTitle: '',
                fromUser: {
                    userId: '',
                    name: '',
                    userName: '',
                    mobile: '',
                    password: '',
                    roleIds: []
                },
                roleList: [],
                rules: {
                    userName: [
                        { required: true, message: '请输入用户名', trigger: 'blur' },
                        { min: 3, max: 16, message: '用户名长度为3到16', trigger: 'blur' },
                    ],
                    password: [
                        { required: true, message: '请输入密码', trigger: 'change' },
                        { min: 6, max: 16, message: '密码长度为6到16个字符', trigger: 'change' },
                    ],
                    name: [
                        { required: true, message: '请输入姓名', trigger: 'change' },
                        { min: 2, max: 8, message: '姓名长度为2到8个字符', trigger: 'change' },
                    ],
                    mobile: [
                        { required: true, message: '请输入手机号', trigger: 'change' },
                        { required: true, message: '请输入手机号', trigger: 'change' }
                    ],
                    roleIds: [
                        {
                            required: true,
                            message: '请选择角色',
                            trigger: 'change',
                        },
                    ],
                }

            }
        },
        created() {
            this.getUserList();
        },
        methods: {
            getUserList() {
                const param = {
                    kw: this.kw
                }
                userList(param).then(res => {
                    this.tableData = res.data.data
                })
            },
            getRoleList() {
                const param = {
                }
                roleList(param).then(res => {
                    console.log(res.data.data)
                    this.roleList = res.data.data
                })
            },
            handleClick() {
                this.dialogTableVisible = true
                this.userTitle = "用户新增"
                this.getRoleList();
            },
            userUpdate(userId) {
                this.dialogTableVisible = true;
                this.userTitle = "编辑用户"
                this.getRoleList();
                this.getById(userId);
            },
            getById(userId) {
                const params = {
                    userId: userId
                }
                getById(params).then(res => {
                    this.fromUser = res.data.data
                    this.fromUser.roleIds = res.data.data.roleVos.map(e => e.roleId)
                })
            },
            userclear() {
                this.dialogTableVisible = false;
                this.fromUser = {}

            },
            save(formName) {
                const params = this.fromUser
                this.$refs[formName].validate((valid) => {
                    if (valid) {
                        if (params.userId) {
                            this.updateUser(params);
                        } else {
                            this.saveUser(params);
                        }

                    } else {
                        return false;
                    }
                });
            },
            updateUser(params) {
                updateById(params).then(res => {
                    console.log(res.data)
                    this.dialogTableVisible = false;
                    this.fromUser = {}
                    this.getUserList()
                }).catch(() => {

                });
            },
            saveUser(params) {
                save(params).then(res => {
                    console.log(res.data)
                    this.dialogTableVisible = false;
                    this.fromUser = {}
                    this.getUserList()
                }).catch(() => {

                });
            },
            delUser(userId) {
                console.log(1111111111, userId)
                const params = {
                    userId: userId
                }
                delUser(params).then(res => {
                    res.data
                    console.log(res.data)
                    this.getUserList();
                })
            }


        },


    }
</script>