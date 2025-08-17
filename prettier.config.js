export default {
	plugins: ['prettier-plugin-svelte'],

	editorConfig: true,
	singleQuote: true,
	semi: false,
	tabWidth: 4,
	trailingComma: 'all',
	quoteProps: 'consistent',
	arrowParens: 'avoid',

	svelteSortOrder: 'options-scripts-markup-styles',
	svelteAllowShorthand: true,
	svelteBracketNewLine: true,
	svelteIndentScriptAndStyle: false,
	overrides: [
		{
			files: '*.svelte',
			options: { parser: 'svelte' },
		},
	],
}
