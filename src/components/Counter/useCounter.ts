import { ref } from 'vue';

export default function useCounter() {
	const count = ref(0);
	const increment = () => count.value++;
	const decrement = () => count.value--;
	const set = (value: number) => (count.value = value);

	return {
		count,
		set,
		increment,
		decrement,
	};
}
