module.exports = {
    important: false,
    content: [
        "src/views/**/*.twig",
        "src/assets/js/**/*.js",
    ],
    darkMode: 'class', // or 'media' or 'class'
    theme   : {
        container : {
            center : true,
            padding: '10px',
            screens: {
                '2xl': "1280px"
            }
        },
        fontFamily: {
            sans: [
                'var(--font-main)',
                '-apple-system',
                'BlinkMacSystemFont',
            ],
            primary: "var(--font-main)"
        },
        extend    : {
            transitionTimingFunction: {
              'elastic': 'cubic-bezier(0.55, 0, 0.1, 1)',
            },
            gridTemplateColumns: {
                'auto-fill'  : 'repeat(auto-fill, 290px)',
            },
            colors             : {
                'dark'         : '#1C1917',
                'darker'       : '#0F0E0D',
                'danger'       : '#E05353',
                'primary'         : 'var(--color-primary)',
                'primary-d'       : 'var(--color-primary-dark)',
                'primary-l'       : 'var(--color-primary-light)',
                'primary-reverse' : 'var(--color-primary-reverse)',
                'primary-dark'    : 'var(--color-primary-dark)',
                'lady-rose'       : '#C4737F',
                'lady-rose-light' : '#FDF2F4',
                'lady-rose-dark'  : '#8E3E4B',
                'lady-gold'       : '#C5A880',
                'lady-gold-light' : '#FAF5EE',
                'lady-mocha'      : '#A37B5C',
                'lady-mocha-light': '#FAF7F2',
                'lady-lavender'   : '#93739B',
                'lady-lavender-light': '#F7F4F9',
                'lady-bg'         : '#FCFAF8',
                'lady-border'     : '#F0EAE3',
            },
            aspectRatio: {
                '3/4': '3 / 4',
                '4/5': '4 / 5',
                '1/1': '1 / 1',
                '16/9': '16 / 9',
            },
            spacing: {
              '3.75': '15px',
              '7.5' : '30px',
              '58'  : '232px',
              '62'  : '248px',
              '100' : '28rem',
              '116' : '464px',
              '132' : '528px',
              '200' : '800px',
            },
            borderRadius       : {
                'large': '22px',
                'big'  : '40px',
                'tiny' : '3px',
                'lady' : '1.25rem',
                'lady-lg': '1.75rem',
                'lady-pill': '9999px',
                DEFAULT: '.875rem',
            },
            fontSize           : {
                'icon-lg'   : '33px',
                'xxs'       : '10px',
                'xxxs'      : '8px',
                'title-size': '42px',
                '22px'      : '22px',
            },
            lineHeight         : {
                '12': '3rem',
                '14': '3.5rem',
                '16': '4rem',
                '18': '4.5rem',
                '20': '5rem',
            },
            boxShadow          : {
                'default' : '0 4px 20px -2px rgba(28, 25, 23, 0.05)',
                'top'     : '0px 0px 10px #0000001A;',
                'md'      : '0 8px 30px -4px rgba(28, 25, 23, 0.08)',
                'dropdown': '0 10px 25px -5px rgba(196, 115, 127, 0.12)',
                'light'   : '0px 4px 15px rgba(1, 1, 1, 0.04)',
                'huge'    : '0 20px 40px -10px rgba(28, 25, 23, 0.12)',
                'progress': '0 5px 15px rgba(196, 115, 127, 0.4)',
                'lady-card': '0 10px 30px -5px rgba(35, 31, 30, 0.04), 0 2px 6px rgba(35, 31, 30, 0.02)',
                'lady-hover': '0 20px 40px -8px rgba(196, 115, 127, 0.14), 0 6px 16px rgba(0, 0, 0, 0.04)',
                'lady-glow': '0 0 25px rgba(196, 115, 127, 0.25)',
                'mobile': '0 4px 20px rgba(0, 0, 0, 0.06)',
            },
            width              : {
                '18': '4.5rem',
                '22': '5.5rem',
                '74': '18.5rem',
                '76': '19rem',
                '78': '19.5rem',
            },
            height             : {
                'banner'        : '220px',
                'lg-banner'     : '460px',
                'full-banner'   : '640px',
                '500'           : '500px',
                '460'           : '460px',
            },
            minWidth           : {
                '1/4': '25%',
                '1/2': '50%',
                '3/4': '75%',
            },
            maxWidth           : {
                '1/4': '25%',
                '1/2': '50%',
                '3/4': '75%',
            },
            zIndex             : {
                '1': '1',
                '2': '2',
                '-1': '-1',
            },
            screens            : {
                'xxs': {'min': '380px', 'max': '479px'},
                'xs': '480px',
            },
            backgroundOpacity  : {
                '05': '0.05',
            },
            transitionProperty : {
                'height': 'height'
            },
            keyframes: {
                slideUpFromBottom: {
                    '0%': { transform: 'translateY(100%)', opacity: '0' },
                    '100%': { transform: 'translateY(0%)', opacity: '1' },
                },
                slideDownFromBottom: {
                    '0%': { transform: 'translateY(0%)', opacity: '1' },
                    '100%': { transform: 'translateY(100%)', opacity: '0' },
                },
                shimmer: {
                    '100%': { transform: 'translateX(100%)' },
                },
                pulseSoft: {
                    '0%, 100%': { opacity: '1', transform: 'scale(1)' },
                    '50%': { opacity: '.85', transform: 'scale(1.03)' },
                }
            },
            animation: {
                slideUpFromBottom: 'slideUpFromBottom .6s linear',
                slideDownFromBottom: 'slideDownFromBottom .6s linear',
                shimmer: 'shimmer 2s infinite',
                pulseSoft: 'pulseSoft 3s ease-in-out infinite',
            },
        },
    },
    corePlugins: {
      outline: false,
    },
    plugins: [
      require('@tailwindcss/forms'),
    ],
}
