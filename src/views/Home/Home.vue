<template>
	<div class="view-container is-home mx-3 my-3">
		<h2 class="is-size-4">
			Home View
		</h2>
		<Counter />

		<hr />

		<h2 class="mb-5 mt-5 is-size-5">
			Comes with:
		</h2>
		<ul>
			<li v-for="feature in features" :key="feature">
				{{ feature }}
			</li>
		</ul>
	</div>
</template>

<script setup lang="ts">
	import Counter from '../../components/Counter/Counter.vue';
	import { ref } from 'vue';

	const features = ref([
		'Vue 3',
		'Vue Router + Meta Guard',
		'Vite + Eslint plugin',
		'TypeScript',
		'SASS',
		'Bulma',
		'Eslint + Custom Configuration',
		'Eslint Security, SonarJS, XSS, and more',
		'Decorator support (reflect-metadata)',
	]);
</script>
