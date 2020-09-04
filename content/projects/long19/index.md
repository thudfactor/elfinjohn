---
title: Long 19th Amendment Portal
description: To celebrate the centenary of Women's Suffrage in the United States, the Schlesinger Library launched this site to provide search access to their collections as well as space to write about them.
weight: 1
cover:
    src: splash.jpg
    alt: The front page of the Long 19th site
    caption: The celebration of the Centenary of women's suffrage in the United States required a very large microsite.
---

{{% fig align="right" src="alice_paul.jpg" alt="Headshot of Alice Paul, suffragist and leader of the National Women’s Party." %}}
  Alice Paul was the leader of the National Women’s Party for a half-century. Her story and many others are told through primary sources made available through the Long 19th Amendment research portal.
{{% /fig %}}

This project for the Schlesinger Library, Radcliffe Institute for Advanced Study at Harvard University, is intended to serve as a clearinghouse for digitized collections of artifacts and literature related to the struggle to achieve and maintain women’s access to the vote. [Here is a press release about the project](https://www.radcliffe.harvard.edu/news/in-news/mellon-foundation-grant-radcliffes-schlesinger-library).

This client came to NewCity with a small budget and unique technical needs. Library catalog data is messy and incomplete, and there is a multitude of competing standards for expressing collection metadata. The Long 19th Project needed a way of gathering these resources together in one searchable interface with minimal effort. The client also considered ease of use and maintenance critical to the project’s success, but the budget was too small to allow an advanced integration of WordPress or Drupal.

After a few proofs-of-concept, we elected to build the database application with React and MongoDB. I created the initial application prototype and developed the MongoDB aggregation pipelines, which enabled faceted and keyword searches.  Mike Warner then took over the application, polishing it and adding additional features with my technical direction.

{{% fig align="left" src="long19.png" alt="The top part of the home page for the Long 10th Amendment web site" %}}
  The content portion of the site is built entirely in Hugo and maintained by the client using a Git workflow. Pages written in Markdown.
{{% /fig %}}

For the content management system, we chose [Hugo](https://gohugo.io/), a static site builder written in Go. Hugo has no front-end and no database. Pages in Hugo are simply directories with assets and Markdown files. Structured data is represented using Yaml. 

This approach has several advantages for the Long 19th project, as maintenance tasks are minimal, and a straightforward host environment can be used. There is little need to update the CMS, and what need is never urgent; the final site is an artifact, not generated on demand for site visitors the way WordPress or Drupal sites are. The application portion of the site requires only a Node server and a MongoDB server. 

Several months before launch, I trained the client to use Docker, Hugo, and Git to manage the production of the site’s content. With a couple of training sessions and some additional support from their on-staff IT expert, the client team built their site using a Git-based workflow, including making and approving pull requests. 

{{% fig align="right" src="search.png" alt="The search interface for the Long 19 web site." %}}
  A significant challenge for the search interface was finding a graceful way to support a dataset with both sparse and detailed information on records. We are using post-launch research to improve this experience.
{{% /fig %}}

The site launched in August of 2020, and NewCity’s engagement with this client continues with new feature requests and additional support. 

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
