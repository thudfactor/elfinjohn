---
title: Edward Via College of Osteopathic Medicine
description: The Edward Via College of Osteopathic Medicine wanted a migration from Drupal 7 to Drupal 8 … and to bring most of the existing content with them.
weight: 10
cover: 
    src: vcom.jpg
    alt: photo of the campus in Virginia
    caption: "VCOM wanted to modernize their design and their CMS but maintain most of the content and existing structure."
---

{{% fig align="right" src="vcom_before.png" alt="Screenshot of the original Drupal 7 VCOM site." %}}
  Screenshot of the Virginia College of Osteopathic Medicine web site as it existed in January 2020.
{{% /fig %}}

When most people choose a doctor, the doctor the choose is an "MD." MDs practice a form of medicine called "Allopathic Medicine." But there's an alternative, equally valid approach called “Osteopathic Medicine.” Physicians from this school are not MDs but "DOs." But both are licensed as doctors, regulated as doctors, and sometime work in the same hospital or practice. The difference lies in the philosophical approach. 

The Edward Via College of Osteopathic Medicine's Virginia Campus was a long-time neighbor of NewCity — their campus was literally across the street from the office. They first contracted with us to move their old, Drupal 7 site to a new hosting environment at Pantheon. Afterwards, they asked us to redesign their site and migrate content to Drupal 8. 

{{% fig align="left" src="vcom_after.png" alt="Screenshot of the new VCOM site." %}}
  The new VCOM site design is much more open and makes use of campus color schemes to help visually indicate each of the four separate campuses.
{{% /fig %}}

I joined the project early to review designs and wireframes for problem areas, and discussed technical requirements with the client contact to determine their need for more complex features such as event calendars and content moderation. I also set up the initial pattern library and Drupal implementation, but turned these tasks over to Matt Gaskey. I stayed on to provide some technical advice and to handle the migration of data from the Drupal 7 site to the Drupal 8 site. 

These data migrations were accomplished through the standard Drupal Migrate plugin. Content was exported from the Drupal 7 site as either JSON or CSV, and then the fields were mapped to new fields in the Drupal 8 site. Sometimes more processing of the data stream was required, but since the Migrate process in Drupal is a bit of a black box, I elected to this transformation using small Node scripts. 

The new VCOM site launched in the second quarter of 2020.


### Built With

- [Drupal 8](http://www.drupal.org) as the CMS.
- [Fractal](https://fractal.build/) for design implementation.
- [tailwindcss](https://tailwindcss.com/), a CSS framework

### Project Team

- [Natalie Allen](https://www.insidenewcity.com/team/view/natalie-brown), project manager
- [Rusty Segars](https://www.insidenewcity.com/team/view/rusty-segars), design
- [Samantha Shaibani](https://www.insidenewcity.com/team/view/samantha-shaibani), developer
- [Rachel DeLauder](https://www.insidenewcity.com/team/view/rachel-delauder), content strategy
- [John Williams](https://www.insidenewcity.com/team/view/john-williams), data migrations
- [Matt Gaskey](https://www.insidenewcity.com/team/view/matt-gaskey), developer
- [Sarah Wilkes](https://www.insidenewcity.com/team/view/sarah-wilkes), QA, content editing, content placement

