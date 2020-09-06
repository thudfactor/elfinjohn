---
title: Davidson College
description: A lengthy and very detailed CMS comparison between Drupal and WordPress kicked of this otherwise typical web site overhaul.
weight: 10
cover: 
    src: davidson_campus.jpg
    alt: "The campus at Davidson College"
    caption: Davidson College in North Carolina had a drastic overhaul of their site done in close consultation with their Technology & Innovation team.
---

When Davidson College decided to move from Ingeniux, a hosted, enterprise CMS, they knew they wanted an open-source solution instead. The problem was they didn’t know whether to go with Drupal or WordPress. 

{{% fig align="right" src="davidson_before.png" alt="The Davidson site as it looked before." %}}
Davidson was using an enterprise CMS called Ingeniux, but wanted to move to an open-source solution they could understand and use themselves.
{{% /fig %}}

In general, Davidson required considerably more documentation and analysis of tools and solutions than our typical client experience. I spent much of the early portion of the project presenting different options, and then following up with a written report of what we discussed. But in the case of the CMS, Davidson wanted exhaustively detailed information because they expected to have a lot of involvement in the site’s operation after delivery. There was an assumption that WordPress would be more straightforward for people to use, but they were afraid of leaving powerful Drupal features behind. 

Typically, when NewCity’s clients have had this problem, we make a recommendation based on audience research and UX expectations, but Davidson wanted more a more detailed explanation.  At the kick-off meeting held on-site at Davidson, I demonstrated a Drupal implementation from a project similar to Davidson College’s size and expected complexity. I also arranged for a remote demonstration of a similar WordPress site by NewCity’s lead WordPress developer, Jesse Janowiak. All of us then discussed our honest impressions of the benefits and flaws of both systems. 

{{% fig align="left" src="after.jpg" alt="The home page comp for the new Davidson site." %}}
The new design was intended to be more colorful and considerably more airy than the previous iteration.
{{% /fig %}} 

The meeting was constructive but inconclusive, so I decided to collect the Development team’s perspective on both systems and write as “non-partisan” an analysis as possible. I wrote an initial draft, including factual research on both systems, and then opened the report to the rest of the NewCity development team to revise. Davidson used this to help them decide to use Drupal throughout the college. The resulting document was then revised and reformatted again as a generic NewCity whitepaper called _[Open Source Solutions: WordPress Vs. Drupal (PDF)](NewCity_Wordpress_vs_Drupal_Guide.pdf)_.

Content migration from the original site was another challenge. Some of the content, such as news releases, was archival and well-structured. Usually, we would approach these migrations by exporting the data and then writing a tailored content import, but Ingeniux could not provide any data exports. I had to resort to page scraping using a custom Node script for this content. I also did this for generic page content, which was then revised and reformatted by the Davidson team. 

Other data came from various third-party systems, some of which NewCity integrated through recurring Drupal Migrate imports. But for budgetary reasons, we were unable to provide all of the migrations Davidson wanted. Instead, I spent some time with the Davidson Technology and Innovation developers, training them to use our Docker-based development environment, write migrations themselves, and then test imports before using them in production. 

NewCity launched the Davidson website in 2019.

### Built With

- [Drupal 8](https://drupal.org/) as the CMS
- [Fractal](https://fractal.build/) for design implementation.

### Project Team:
- [Erin Simmons](https://www.insidenewcity.com/team/view/erin-simmons)), project manager
- [Melissa Beaver](https://www.insidenewcity.com/team/view/melissa-beaver), user experience design
- [Rodger Bridges](https://www.insidenewcity.com/team/view/rodger-bridges), design
- [Rachel DeLauder](https://www.insidenewcity.com/team/view/rachel-delauder), content strategist
- [John Williams](https://www.insidenewcity.com/team/view/john-williams), developer (Drupal and Front End)
- [Phil Pelanne](https://www.insidenewcity.com/team/view/phil-pelanne), developer (Drupal and Front End)
- Jenny Slaughter, developer, front-end