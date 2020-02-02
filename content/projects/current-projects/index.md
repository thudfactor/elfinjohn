---
title: Current Projects
description: Here are the current projects I am involved with. All of these anticipate a launch in the first or second quarter of 2020.
---

## Pomona College D8 Re-implementation

{{% fig align="right" src="pomona.png" alt="screenshot of the Pomona College Drupal 7 site." %}}
  Screenshot of the Pomona College web site as it exists in January 2020.
{{% /fig %}}

Pomona College is upgrading from Drupal 7 to Drupal 8, keeping the existing design in place. The existing design is several years old, and the current implementation had many compromises and deviations from best practice in order to support browsers as old as IE9. Responsive behavior and accessibility concerns were addressed _ex post facto_ by the client using a variety of Javascript and CSS patches introduced through Javascript and CSS Injectors. The goals of the upgrade are to

- systematize the existing design
- build responsiveness and accessibility in from the beginning
- use modern markup and CSS strategies

This amounts to a complete reimplementation with a normalization of the existing design.

### Built With

- [Drupal 8](http://www.drupal.org) as the CMS.
- [Fractal](https://fractal.build/) for design implementation.
- [tailwindcss](https://tailwindcss.com/), a CSS framework

### Project Team

- [Erin Simmons](https://www.insidenewcity.com/team/view/erin-simmons), project manager
- [Phil Pelanne](https://www.insidenewcity.com/team/view/phil-pelanne), lead developer
- [John Williams](https://www.insidenewcity.com/team/view/john-williams), developer
- [Matt Gaskey](https://www.insidenewcity.com/team/view/john-williams), developer
- [Jenny Slaughter](https://www.insidenewcity.com/team/view/jenny-slaughter), developer

{{% terminal %}}

{{% fig align="left" src="vcom_before.png" alt="Screenshot of the original Drupal 7 VCOM site." %}}
  Screenshot of the Virginia College of Osteopathic Medicine web site as it exists in January 2020.
{{% /fig %}}

## Virginia College of Osteopathic Medicine, D8 Implementation

The [Virginia College of Osteopathic Medicine](https://www.vcom.edu/) is upgrading from Drupal 7 to Drupal 8, redesigning in the process.

### Built With

- [Drupal 8](http://www.drupal.org) as the CMS.
- [Fractal](https://fractal.build/) for design implementation.
- [tailwindcss](https://tailwindcss.com/), a CSS framework

### Project Team

- [Natalie Brown](https://www.insidenewcity.com/team/view/natalie-brown), project manager
- [Rusty Segars](https://www.insidenewcity.com/team/view/rusty-segars), design
- [Rachel DeLauder](https://www.insidenewcity.com/team/view/rachel-delauder), content strategy
- [John Williams](https://www.insidenewcity.com/team/view/john-williams), lead developer
- [Matt Gaskey](https://www.insidenewcity.com/team/view/john-williams), developer
- [Phil Pelanne](https://www.insidenewcity.com/team/view/phil-pelanne), data migrations

{{% terminal %}}

## The “Long 19th Amendment” Research Portal

{{% fig align="right" src="alice_paul.jpg" alt="Headshot of Alice Paul, suffragist and leader of the National Women’s Party." %}}
  Alice Paul was the leader of the National Women’s Party for a half-century. Her story and many others are told through primary sources made available through the Long 19th Amendment research portal.
{{% /fig %}}

This project for the Schlesinger Library, Radcliffe Institute for Advanced Study at Harvard University is intended to serve as a clearinghouse for digitized collections of artifacts and literature related to the struggle to achieve and maintain women’s access to the vote. [Here is a press release about the project](https://www.radcliffe.harvard.edu/news/in-news/mellon-foundation-grant-radcliffes-schlesinger-library).

### Built With

- [Hugo](https://gohugo.io/) in place of a traditional CMS
- [React](https://reactjs.org/) for the collections interface
- [MongoDB](https://www.mongodb.com/) for the collections database
- [Node.js](https://nodejs.org/en/) for server-side mediation between the React application and Mongo DB.
- [Fractal](https://fractal.build/) for design implementation.

In addition to these tool sets, the project has so far involved training the client to use Markdown and Gitlab's Web IDE, as well as importing diverse data sets from CSV files and several standardized academic archival data systems like the [Digital Public Library of America's Metadata Application Profile](https://pro.dp.la/hubs/metadata-application-profile) and the [Open Archives Initiative Protocol for Metadata Harvesting](https://www.openarchives.org/OAI/openarchivesprotocol.html).

### Project Team:
- [Natalie Brown](https://www.insidenewcity.com/team/view/natalie-brown), project manager
- [Melissa Beaver](https://www.insidenewcity.com/team/view/melissa-beaver), user experience design
- [Rodger Bridges](https://www.insidenewcity.com/team/view/rodger-bridges), design
- [John Williams](https://www.insidenewcity.com/team/view/john-williams), lead developer
- [Mike Warner](https://www.insidenewcity.com/team/view/mike-warner), developer
- [Phil Pelanne](https://www.insidenewcity.com/team/view/phil-pelanne), devops

It's been exciting and interesting to build a web site with the Schlesinger Library that is so tightly focused on one topic.
