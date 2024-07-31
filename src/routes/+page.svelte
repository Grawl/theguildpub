<script>
	import logo from './logo.svg'
	import poster from './poster.jpg'
	const email = 'guest@theguildpub.ru'
</script>
<svelte:head>
	<title>The Guild Pub</title>
	<meta name="description" content="Паб во Владивостоке" />
	<meta property="og:image" content="{poster}" />
</svelte:head>
<section class=root>
	<img src={logo} alt='The Guild Pub' class=logo width=475 height=463 />
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
	min-height 100%
	padding 1em
	--p 60%
	background:
		no-repeat radial-gradient(
			var(--p) var(--p) at center,
			rgba(0, 0, 0, 0) var(--p), rgba(0, 0, 0, 0.15)),
		url('./bg.svg') center repeat
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
