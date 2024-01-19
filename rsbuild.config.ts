import {defineConfig} from '@rsbuild/core';
import {pluginReact} from '@rsbuild/plugin-react';
import {pluginSvgr} from "@rsbuild/plugin-svgr";

export default defineConfig({
    source: {
        define: {
            'process.env': JSON.stringify(process.env),
        },
    },
    output: {
        assetPrefix: '.',
        distPath: {
            image: 'assets',
            svg: 'assets',
            font: 'assets',
            media: 'assets',
        },
        copy: [{from: './public', to: 'public'}],
    },
    dev: {
        assetPrefix: '/',
    },
    server: {
        publicDir: {
            name: 'public',
            copyOnBuild: false,
        },
    },
    plugins: [
        pluginReact(),
        pluginSvgr({
            svgDefaultExport: 'component',
        }),
    ],
});
