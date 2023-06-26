<template>

	<!-- Header -->
	<header id="header">
		<Header />
	</header>

	<!-- Sidebar -->
	<aside id="sidebar">
		<Sidebar />
	</aside>

	<!-- Content -->
	<main id="content">
		<RouterView v-slot="{ Component }">
			<template v-if="Component">
				<Suspense :timeout="1000">
					<component :is="Component" />
					<template #fallback>
						<Loading />
					</template>
				</Suspense>
			</template>
		</RouterView>
	</main>

	<!-- Footer -->
	<footer id="footer">
		<Footer />
	</footer>
</template>

<script setup lang="ts">
	import Header from './partials/Header.vue';
	import Sidebar from './partials/Sidebar.vue';
	import Footer from './partials/Footer.vue';
	import Loading from './components/_default/Loading.vue';
</script>
