---
title: Filmhydra
description: My own side project combining my humanities background, my love of movies, and the Hugo content management system.
cover:
    src: OneCutOfThedead.jpg
    alt: Film still from the movie One Cut of the Dead
    caption: This web site exists only to justify my copious consumption of movies. 
---


Filmhydra is one of many small websites I have built to host my own writing about topics that interest me. This one is about movies, but I have created (and destroyed) many others. The challenge for me as a writer and as a web developer is I want a system that allows me to focus on writing but _also_ makes it relatively simple for me to tinker with the presentation. And as great as Drupal is for universities and businesses, it's not a fantastic tool for a technically-minded independent producer. 

In the quest for something that would let me be a writer when I wanted to write but a developer when I wanted to develop I have tried everything from Moveable Type to SquareSpace, Drupal to Wix. PHP-Nuke? Yes. Textpattern? Multiple times. 

Nothing has worked for me like Hugo. [Hugo](https://gohugo.io/) is a fantastic tool for independent publishers who don't want to spend half their time maintaining software and security on their servers. Hugo runs FilmHydra, it runs this site, and I even used it at NewCity for [The Long 19th Amendment](/projects/long19/). The site has a lot of features you get in other content management systems:

- automatic cropping, scaling, and transcoding of images.
- relationships of content through taxonomy
- a blend of structured and unstructured content
- multiple views of the same content item

In addition — and this is a big plus in my book — all of the content is stored in Markdown format with yaml structured data in "frontmatter." This means I _never_ have to export content; content is naturally within a portable and human-readable format. 

Another nice feature: FilmHydra, like this site, was adapted about three months ago to use the [AMP framework](https://amp.dev/). Although it is possible to create AMP sites in Drupal or Wordpress, it requires a fair amount of work. In Drupal, for example, you would probably have to write a pretty flexible field formatter for images in order to cover the `<amp-image>` component. But Hugo templates are not nearly as opinionated as Drupal, so reworking my image templates to use `<amp-image>` was almost as easy as changing a tag in HTML. 

Is Hugo the best tool for all web sites? Of course not. But for me it hits the sweet spot for maintainability, flexibility, and simplicity. 

## Tools:

- [Hugo](https://gohugo.io/), the only CMS that gets me
- [TailwindCSS](https://tailwindcss.com/) for rapid styling
- [Netlify](https://www.netlify.com/) for hosting and continuous deployment