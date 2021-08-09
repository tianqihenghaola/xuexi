module.exports = {
    chainWebpack: config => {
        config
            .plugin('html')
            .tap(args => {
                args[0].title = 'lalallala'
                return args
            })
    }
    // configureWebpack: config => {
    //     return {
    //         title: title,
    //         resolve: {
    //             alias: {
    //                 '@': resolve('src')
    //             }
    //         },
    //         plugins: []
    //     }
    // }
}