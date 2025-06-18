# Chandler Trousdale's Personal Website

This site is built using Vite, React, TailwindCSS, and Typescript.

## Running locally

```bash
pnpm i # Install dependencies

pnpm vite # Start the development server
```

Dependencies include node, pnpm, and the packages listed in `package.json`. Developed against node v24.1.0.

## Artwork

I was inspired to create this by my visit to teamLab Planets. Hideaki Takashi's [Infinity](https://www.teamlab.art/ew/koi_and_people/planets/) is a live rendering of koi and flowers which is projected onto a pool of water.
As visitors walk through the space, interactions with the pond are captured by a computer program which influences the rendering.

The artwork on this site are geometric shapes (created with three.js) and which use a TensorFlow.js model to influence the movement as users interact with the site.
Just as with Infinity, the shape paths are not predetermined, and are guaranteed with an extremely high certainty to be unique to each visit.
