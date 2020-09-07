---
title: University of Kentucky Platform
description: The University of Kentucky needed a base Drupal 8 implementation, matching style guide, and team training to provide a solid base for smaller university websites.
weight: 20
cover: 
    src: pattern1.png
    alt: "details of some pattern elements"
    caption: 
---

{{% fig align="right" src="carousel.png" alt="A sample carousel pattern" %}}
As much as I wish otherwise, no site design is complete without a carousel. 
{{% /fig %}}

The University of Kentucky contracted with NewCity to do an unusual project. Instead of a specific redesign, they wanted a generic starter toolkit to distribute to organizations within the University to build their customized properties with University branding. The intent was to create both a pattern library and a drupal implementation that could serve as the basis for a new site, but not dictate a project’s entire design. 

It was fortuitous timing. NewCity had just begun thinking about a similar starting kit for web sites. We took some of our initial work and rolled it into this project. 

The early work on the system included closer-than-usual collaboration with UX architect Jennie Salamoun, designer Rodger Bridges and myself. We broke down old designs to find what they had in common. At this time, I also created some new technical tools intended to make customization simpler. The first of these was [a SASS library called “root-rhythm”](https://www.npmjs.com/package/root-rhythm), responsible for keeping spacing and typography consistent but flexible and responsive. I also created a SASS settings file for fonts, component spacing, and color schemes. NewCity used these tools in several different projects until late last year.

{{% fig align="left" src="link-block.png" alt="A sample link-block pattern" %}}
NewCity encourages the use of link-blocks like these to collect links typically scattered throughout body text in order to keep links from interrupting a reader's flow. I wrote more about [the importance and strategy of links](https://www.insidenewcity.com/blog/view/is-your-hypertext-too-hyper) at the NewCity web site.
{{% /fig %}}

The model Drupal implementation of the pattern library, which served as the basis for a starter distribution of Drupal for the University, was handled by Andy Hebrank. Andy and I worked together, him on the Drupal configuration end and me on the front end, to build generic templates that organizations could integrate into Drupal with as little manipulation as possible. 

At the end of the project, Andy, Jennie, and I traveled to Lexington for three days of training sessions with the primary contact and staff. We then presented a different, higher-level training session to several other community groups within the University of Kentucky. 

Unless it’s been moved since I last checked, [the full University of Kentucky pattern library](https://patternlab.uky.edu/) is still available.