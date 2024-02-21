/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      keyframes: {
        bouncer : {
          "0%" : {
            transform : "translateY(1px)"
          }, 
          "100%" : {
            transform : "translateY(32px)"
          },
        },
        pulse : {
          "0%" : {
            transform : "scale(1) translateY(-1px)"
          },
          "100%" : {
            transform: "scale(1.3) translateY(-1px)"
          }
        },
        enlarge : {
          "0%" : {
            transform : "scale(1)"
          },
          "100%" : {
            transform : "scale(1.5)"
          },
        },
        rotate : {
          "0%" : {
            transform : "rotate(0deg)"
          },
          "100%" : {
            transform : "rotate(360deg)"
          },
        },
      },
      animation: {
        "bouncer" : "bouncer 0.8s alternate infinite",
        "pulse" : "pulse 0.8s alternate infinite",
        "enlarge" : "enlarge 0.5s alternate infinite",
        "rotate" : "rotate 2s linear infinite",
      }
    },
  },
  plugins: [],
}

