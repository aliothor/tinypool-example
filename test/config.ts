import { loadConfig } from 'unconfig'

const { config, sources } = await loadConfig<any>({
    sources: [
        // load from `my.config.xx`
        {
            files: 'my.config',
            // default extensions
            extensions: ['ts', 'mts', 'cts', 'js', 'mjs', 'cjs', 'json'],
        },
    ],
    // if false, the only the first matched will be loaded
    // if true, all matched will be loaded and deep merged
    merge: false,
})


const res = await config('参数')

console.log(res);

// console.log(sources, config);
