<template>
    <div>
            <el-radio-group v-model="isCollapse" style="margin-bottom: 20px">
                <el-radio-button :label="false">expand</el-radio-button>
                <el-radio-button :label="true">collapse</el-radio-button>
            </el-radio-group>
            <el-menu default-active="2" class="el-menu-vertical-demo" 
                :collapse="isCollapse" 
                :router="true">
                <el-sub-menu index="login">
                    <template #title>
                        <el-icon>
                            <location />
                        </el-icon>
                        <span>权限管理</span>
                    </template>
                    <el-menu-item-group>
                        <el-menu-item index="user">用户管理</el-menu-item>
                        <el-menu-item index="role">角色管理</el-menu-item>
                    </el-menu-item-group>

                </el-sub-menu>
                <el-menu-item index="2">
                    <el-icon>
                       <Edit />
                    </el-icon>
                    <template #title>Navigator Two</template>
                </el-menu-item>
                <el-menu-item index="3" disabled>
                    <el-icon>
                        <document />
                    </el-icon>
                    <template #title>Navigator Three</template>
                </el-menu-item>
                <el-menu-item index="4">
                    <el-icon>
                        <setting />
                    </el-icon>
                    <template #title>Navigator Four</template>
                </el-menu-item>
            </el-menu>

    </div>
</template>
<script>
    export default {
       data() {
           return {
            isCollapse:true
        
           }
       },
    }

</script>

<style>
</style>