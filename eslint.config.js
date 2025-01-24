import { defineConfig } from 'eslint-define-config';
import eslintPluginReact from 'eslint-plugin-react';
import eslintPluginReactHooks from 'eslint-plugin-react-hooks';
import eslintPluginJsxA11y from 'eslint-plugin-jsx-a11y';
import eslintPluginPrettier from 'eslint-plugin-prettier';
import typescriptEslintPlugin from '@typescript-eslint/eslint-plugin';
import typescriptEslintParser from '@typescript-eslint/parser';

export default defineConfig([
	{
		ignores: ['node_modules', 'dist'], // Fichiers ou dossiers à ignorer
	},
	{
		files: ['**/*.{ts,tsx}'], // Fichiers à analyser
		languageOptions: {
			ecmaVersion: 'latest',
			sourceType: 'module',
			parser: typescriptEslintParser,
		},
		plugins: {
			react: eslintPluginReact,
			'react-hooks': eslintPluginReactHooks,
			'jsx-a11y': eslintPluginJsxA11y,
			prettier: eslintPluginPrettier,
			'@typescript-eslint': typescriptEslintPlugin,
		},
		rules: {
			'prettier/prettier': 'error', // Intégration de Prettier
			'react/react-in-jsx-scope': 'off', // Désactiver pour React 17+
			'arrow-body-style': ['error', 'as-needed'], // Préférence pour les composants sans logique -> pas de return
		},
		settings: {
			react: {
				version: 'detect', // Auto-détection de la version de React
			},
		},
	},
]);
