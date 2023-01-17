// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    modules: [
        ['nuxt-mail', {

            message: {
                to: 'blah@test.com',
            },
            smtp: {
                host: 'server.us',
                port: 587,
                "secure": false,
                auth: {
                    user: 'bilbo',
                    pass: 'bobbins',
                },
            },
        } ],
    ]
})
