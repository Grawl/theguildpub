<script>
	import logo from './logo.svg'
	const email = 'guest@theguildpub.ru'
</script>
<svelte:head>
	<title>The Guild Pub</title>
	<meta name="description" content="Паб во Владивостоке" />
</svelte:head>
<section class=root>
	<img src={logo} alt='The Guild Pub' class=logo />
	<div class=contacts>
		<p>
			<a href='mailto:{email}'>{email}</a>
		</p>
		<p>
			<a href='https://go.2gis.com/hhkov' target=_blank>Краснознамённый переулок, 3</a>
		</p>
	</div>
</section>
<style lang=stylus>
.root
	display flex
	align-items safe center
	justify-content center
	flex-flow column
	gap 1em
	height 100%
.logo
	max-width 20em
.contacts
	display flex
	flex-flow column
	gap: 0.5em
	text-align center
	a
		color inherit
p
	margin-block unset
</style>
