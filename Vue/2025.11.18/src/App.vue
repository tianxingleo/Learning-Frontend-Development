<template>
	<div class="wrapper">
		<header class="header">
			<h1 class="title">Vue3 组件间通信</h1>
			<nav class="nav-bar">
				<router-link active-class="active" class="nav-link" to="/props">
					1. props
				</router-link>
				<router-link active-class="active" class="nav-link" to="/event">
					2. 自定义事件
				</router-link>
				<router-link active-class="active" class="nav-link" to="/mitt">
					3. mitt
				</router-link>
				<router-link active-class="active" class="nav-link" to="/model">
					4. v-model
				</router-link>
				<router-link active-class="active" class="nav-link" to="/attrs">
					5. $attrs
				</router-link>
				<router-link active-class="active" class="nav-link" to="/ref-parent">
					6. $refs、$parent
				</router-link>
				<router-link active-class="active" class="nav-link" to="/provide-inject">
					7. provide、inject
				</router-link>
				<router-link active-class="active" class="nav-link" to="/pinia">
					8. pinia
				</router-link>
				<router-link active-class="active" class="nav-link" to="/slot">
					9. slot
				</router-link>
			</nav>
		</header>

		<main class="main-content">
			<!-- 展示区 -->
			<router-view></router-view>
		</main>
	</div>
</template>

<script setup lang="ts" name="App">
</script>

<style>
* {
	margin: 0;
	padding: 0;
	box-sizing: border-box;
}

body {
	font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
	background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
	min-height: 100vh;
}

.wrapper {
	min-height: 100vh;
	display: flex;
	flex-direction: column;
}

.header {
	background: rgba(255, 255, 255, 0.95);
	backdrop-filter: blur(10px);
	box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
	position: sticky;
	top: 0;
	z-index: 100;
}

.title {
	text-align: center;
	padding: 20px;
	margin: 0;
	font-size: 2rem;
	background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
	-webkit-background-clip: text;
	-webkit-text-fill-color: transparent;
	background-clip: text;
	font-weight: 700;
}

.nav-bar {
	display: flex;
	justify-content: center;
	align-items: center;
	flex-wrap: wrap;
	gap: 8px;
	padding: 15px 20px;
	background: rgba(255, 255, 255, 0.5);
	border-top: 1px solid rgba(0, 0, 0, 0.05);
}

.nav-link {
	display: inline-block;
	padding: 8px 16px;
	text-decoration: none;
	color: #4a5568;
	font-size: 14px;
	font-weight: 500;
	border-radius: 6px;
	transition: all 0.3s ease;
	background: rgba(255, 255, 255, 0.8);
	border: 1px solid rgba(102, 126, 234, 0.2);
}

.nav-link:hover {
	background: rgba(102, 126, 234, 0.1);
	border-color: rgba(102, 126, 234, 0.4);
	color: #667eea;
	transform: translateY(-2px);
	box-shadow: 0 2px 4px rgba(102, 126, 234, 0.2);
}

.nav-link.active {
	background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
	color: white;
	border-color: transparent;
	box-shadow: 0 4px 8px rgba(102, 126, 234, 0.3);
}

.main-content {
	flex: 1;
	padding: 30px 20px;
	max-width: 1400px;
	width: 100%;
	margin: 0 auto;
}

/* 响应式设计 */
@media (max-width: 768px) {
	.title {
		font-size: 1.5rem;
		padding: 15px;
	}

	.nav-bar {
		padding: 10px;
		gap: 5px;
	}

	.nav-link {
		font-size: 12px;
		padding: 6px 12px;
	}

	.main-content {
		padding: 20px 15px;
	}
}
</style>