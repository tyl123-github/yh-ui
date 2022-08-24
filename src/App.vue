<template>
	<div id="layout">
		<el-container>
			<el-aside :width="this.isCollapse ? 'auto' : '200px'">
				<left-menu></left-menu>
			</el-aside>
			<el-container>
				<el-header :height="'60px'">header部分</el-header>
				<el-main>
					<router-view />
				</el-main>
			</el-container>
		</el-container>
	</div>

</template>
<script>
	import LeftMenu from '@/components/LeftMenu.vue'
	export default {
		components: {
			LeftMenu
		},
		computed(){
			this.isCollapse = false
		}
	}
</script>

<style lang="scss">
	* {
		margin: 0;
		padding: 0;
		border: 0;
	}
	#layout {
		width: 100%;
		height: 100vh;
		overflow-y: hidden;

		.el-aside {
			background-color: #3b466a;
		}

		.el-header {
			background: #fff;
		}

		.el-main {
			background: #eee;
			overflow-y: hidden;
		}
	}
</style>
