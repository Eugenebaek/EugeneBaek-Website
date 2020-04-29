---
templateKey: project-post
title: How I created my website
date: 2020-03-27T09:49:32.706Z
description: A look into how I created my website and the technologies used
featuredpost: true
featuredimage: /img/project-index.jpg
tags:
  - JavaScript
  - GatsbyJS
  - NetlifyCMS
  - Netlify
  - Sass
  - Bulma
  - React
  - ''
---
This website was created with the **JAMstack architecture** in mind. 

But, what is JAMstack? 

Well, the *JAM* part of the JAMstack is a concatenation for JavaScript, API, and Markup. Essentially, it's a new way of making web apps. 

> "A modern web development architecture based on client-side JavaScript, reusable APIs, and prebuilt Markup"
>
> — Mathias Biilmann (CEO & Co-founder of Netlify).

You can read more about what JAMstack is from this great article by [Snipcart](https://snipcart.com/blog/jamstack). 

<br/>

For my JAMstack website, I used [GatbsyJS ](https://www.gatsbyjs.org/)as my static site generator, [NetlifyCMS ](https://www.netlifycms.org/)as my content management system, [Bulma ](https://bulma.io/)and [Sass ](https://sass-lang.com/)for all the styling, which is all being hosted on my [github repository](https://github.com/Eugenebaek/EugeneBaek-Website). 

I chose GatsbyJS as my site generator as it is *very fast* since it creates the static build on runtime. This means no fetching data from a server.

All the code that I write is then being pushed to my github repository where I then incorporate NetlifyCMS. You can read more on what a CMS (content management system) is but essentially, the CMS acts as a gateway for the creator to make changes to the website without having to go inside the code. So if I want to make a new blog post, I would access the CMS and make my edits from there. 

Bulma and Sass were used for the styling as they were simple. However, I intend to move it towards being styled with CSS-in-JS with Material-UI in the future as it would allow for more customization and responsiveness. 

<br/>

If you want to get started with building your own JAMstack website, I highly recommend you do so by first walking through the [GatsbyJS documentation](https://www.gatsbyjs.org/docs/) and getting familiar with how GatsbyJS works. Once you've gotten your feet wet with that, have a look at [Wrong Akram's YouTube channel](https://www.youtube.com/channel/UCqrxiLP9RHz2GxDJaZuTRBw). There are a lot of tutorials on web development and one series where he goes through using GatsbyJS. If you feel confident enough to incorporate a CMS, look at the[ NetlifyCMS documentation ](https://www.netlifycms.org/docs/intro/)or some other CMS that you like. There are many options to choose from, and this is just one way to do it, so don't be afraid to explore!