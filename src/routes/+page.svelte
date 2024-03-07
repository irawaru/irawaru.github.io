<script lang="ts">
	import rat from '$lib/images/rat.png';

	let surpriseDormant = true;

	const dormant = {
		headerText: 'Why hellurr there',
		headerStyle: '',
		ratStyle: 'tw-hidden',
		buttonText: 'this',
		suffix: '?',
		prefix: "uWu, what's"
	};
	const surprised = {
		headerText: 'Happy Birthday B!!!!!',
		headerStyle: `tw-bg-gradient-to-r tw-from-indigo-500 tw-via-purple-500 tw-to-pink-500 tw-bg-clip-text tw-text-transparent tw-font-extrabold tw-animate-gradient tw-bg-[length:200%_auto]`,
		ratStyle: 'tw-block',
		buttonText: 'get it off me',
		suffix: '!',
		prefix: 'oWo'
	};

	$: activeProps = surpriseDormant ? dormant : surprised;

	function surprise() {
		surpriseDormant = !surpriseDormant;
	}
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<section class="tw-flex tw-h-screen tw-flex-col tw-items-center tw-justify-around">
	<h1 class="tw-absolute tw-top-1/4 tw-text-5xl {activeProps.headerStyle}">
		{activeProps.headerText}
	</h1>

	<img src={rat} alt="Birthday rat" class="tw-animate-growspin {activeProps.ratStyle}" />
	<h2 class="tw-absolute tw-top-2/4 tw-flex tw-text-3xl">
		{activeProps.prefix}
		<p class="tw-animate-bounce tw-pl-2 tw-text-purple-500">
			<button on:click={surprise}> {activeProps.buttonText}</button>
		</p>
		{activeProps.suffix}
	</h2>
</section>
