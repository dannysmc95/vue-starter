<template>
	<button class="button is-primary is-small" @click="increment">
		Count: {{ count }}
	</button>
</template>

<script setup lang="ts">
	import useCounter from './useCounter';
	const { count, increment } = useCounter();
</script>
