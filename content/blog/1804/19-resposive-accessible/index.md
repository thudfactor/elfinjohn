---
title: What responsive design can teach us about accessiblity
date: 2018-04-19T18:56:35-04:00
description: "Developing for accessibility becomes easier when we stop thinking about disabilities in a clincal fashion."
cover:
    src: daniel-romero.jpg
    alt: "A couple of iPads in boxes sitting next to a ruler."
    caption: "Just as devices have different capabilities, so do people. Photo by <a href='https://unsplash.com/@rmrdnl?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText'>Daniel Romero</a> on <a href='https://unsplash.com/s/photos/tablets?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText'>Unsplash</a>"
---

<span></span>

_“Every time you try to operate one of these weird black controls that are labelled in black on a black background, a little black light lights up black to let you know you've done it." — Restaurant at the End of the Universe_

A while back I was reading through Accessibility Twitter (#a11y) and saw a lot of people saying “we can make websites responsive, why can’t we make them accessible, too?” And to be honest I felt a little attacked. You know, kind of like people were asking why we were waving a wand for one thing and not waving a wand for another. Responsive design is still a great deal of hard work.

But in this era of hard conversations and defensive arguments, I’ve been trying to practice thinking more and reacting less. And the more I thought about it, the more I realized accessibility and responsive design have a lot in common. In fact, it’d help a lot if we started thinking about the two things as being two parts of a larger problem.

Developers spend a lot of time with devices and browsers, and we know our way around those pretty well. Since Internet Explorer was first released, actually, a large part of our web developer experience has been focused on mitigating browser differences in order to deliver, as much as possible, the same experience to everyone.

Responsive design changes that somewhat. We have absolutely no hope of delivering the same experience on a handheld device, a desktop screen, and a football-stadium jumbotron. The goal instead becomes to communicate the same message or provide the same opportunities, as much as possible, across those devices. Over the last several years we’ve gotten very good at discussing browser differences and working around browser capabilities in order to do this.

We use a couple of strategies to help us solve these problems. They are called “responsive design” and “progressive enhancement.” We can take these notions and apply them to accessibility, and the end result is something that’s far more useful to all our users. But first we need to change how we think about disability and websites a bit.

A deaf person, a blind person, someone with prosthetic limbs — that’s who we commonly think of when we talk about disabled people. But what about a nearsighted person? What about a myopic person?

Does it make a difference whether or not I describe the same condition as “myopic” or “nearsighted?”

Here’s the problem: you can’t really sort people into “disabled” and “abled” boxes. At least not very neatly. And — questions of propriety aside — it’s a little like designing for specific browsers: “This Site Optimized for Perfect Eyeballs.”

There is another way of looking at disability that, whatever its other benefits or faults, is extremely useful for web development. People call it the “social model of disability,” and it works like this:

People have different capabilities; some of those differences might be so significant that they considered “impairments.”

Someone in a wheelchair has difficulty walking at the very least. No one disputes that. But someone in a wheelchair is not actually disabled until faced with a flight of stairs. The person isn’t disabled; the conditions are disabling.

It doesn’t matter whether the person in the wheelchair has a broken leg, post-polio syndrome, or just has to stay off their feed post-surgery. They are, in that moment, disabled.

For our purposes, this is the key insight: disabled is not something that people are, it is something that happens to them. If a blind person comes to our web site and cannot navigate it, it is not because they are disabled; it is because we disabled them by not providing them an interface they could use.

On the flip side, we have both the responsibility and the privilege to enable people. If we learn how to take their limitations into account.

Now, as web developers we’ve handled less-capable browsers with a strategy called “progressive enhancement.” This is the strategy of developing for a limited experience first, then keeping it available as a fallback as we layered more complex design and interactions on top.

First you communicate, then you complicate. We’re used to thinking this way with browsers; we can extend it to people.

Now, obviously browsers are predictable, are designed to ignore values, tags, and properties they don’t understand, and we can use feature detection to figure out what they are capable of using and what they can’t. People, unfortunately, don’t come with an API. And it’s impractical and probably rude to ask all your visitors to do dexterity and perception tests before displaying the site.

But what we can do is think about all of the decisions we make — UX, design, content — and try to think about how much capability we are assuming in our design.

Think about if your design requires perceiving subtle details, fine motor skills, or concentration. If it does, see if you can lighten that load.

Remember that things like radio buttons, drop-downs, checkboxes, buttons, and links all have interfaces for screen readers and keyboard navigation as well as sighted users; if you replace one with a designed component, be prepared to replace / recreate those interfaces as well. Or, better yet, rethink your solution so you don’t have to replace them at all.

When you show video, make sure the content of the video is available some other way — through captions or transcripts. This is useful not only for deaf people, but also people who are effectively deaf because they won’t turn on their speakers or are watching in a noisy environment.

The subtle color scheme looks nice on a high-quality monitor in the dark office where you don’t turn on the overhead lights, but how will it fare on lesser displays or with lesser eyes?

Nothing you do to make your writing more clear can possibly make it less effective unless you are writing for expression and entertainment. And, frankly, most of us aren’t. But it will make it better for people with clinical cognitive disabilities and the under-caffeinated alike.

When you think about it that way, accessible design is just a more radical form of responsive design — one that takes into account not just the communications device but the human platform as well.