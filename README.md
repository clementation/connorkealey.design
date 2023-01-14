# connorkealey.design
6th attempt at a personal portfolio website

# Dev Journal:

Dec 22, 2022

- Implement front end using nextJS.
- Here's the [documentation](https://nextjs.org/docs/getting-started)
- Why? While it may be slightly overblown for my portfolio site, it will be a good introduction to typescript and redux state management for use on a more complex project. The advantages described in [this Article](https://www.imaginarycloud.com/blog/next-js-vs-react/) peaked my interest.
- So my journy led me to [this tutorial](https://nextjs.org/learn/basics/create-nextjs-app) on nextjs.org which walks you through a simple blog app.
- OK so. Next JS is pretty nuts. It uses a Link tag instead of an a tag, and whenever a Link tag appears on a page, Next automatically prefetches the content for that page to reduce load times.
- Decided I'm not quite ready to take on learning typescript, however I run into a bug where it would have saved me I'll reconsider. 
- Realized that if HTML is being compiled on the server-side hosting is going to cost more. For refrence here are some of the hosting options on [Digital Ocean](https://www.digitalocean.com/pricing). I should check if next can run entirely on the client side, or at leas prepare to self host untill I can afford $60 a year.
- [This video](https://www.youtube.com/watch?v=y0W2TD1EUXE) outlines how to build as a static sight where JS is run by the user.

Dec 31, 2022
- So far next JS has been alirhgt but redux and typescript have been a but of a bust for me.
- Giving next another go, this time without using CSS modules, also going to try using [React Transition Group](http://reactcommunity.org/react-transition-group/css-transition) for animations throuout the site. Framer motion was also sort of a bust for the type of animation I'd like to do.

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

The page auto-updates as you edit the file.
