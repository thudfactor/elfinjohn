---
title: Tweetsie Railroad Games
description: This Flash-based children's game for a regional amusement park required a path-finding algorithm.
weight: 500
cover:
    src: train.jpg
    alt: A train pulled by two engines crossing a trestle. 
    caption: In 2007, the Tweetsie "Kids Zone" wanted a couple of flash games; one of which turned out to be more complicated than anticipated.
---

One of my very first projects at NewCity was the implementation of a couple of Flash-based games for Tweetsie Railroad. These flash files are thirteen years old, but -- for the moment -- they still work if you have Flash installed.

## Be The Locomotive Engineer

{{% fig src="locomotive.png" align="left" alt="A screenshot of the game in process" %}}
Not the best train simulator, I admit.
{{% /fig %}}

This is a simple whack-a-mole game. You choose from one of two Tweetsie characters and hit buttons as they pop up. (Just to be clear, this is not how real trains work.) Difficulty gradually increases. For the most part, this is simple event-driven ActionScript code. It was built in AS3 in the Flash editor.

<object type="application/x-shockwave-flash" data="kids_engineer.swf" width="579" height="455"> 
    <param name="movie" value="kids_engineer.swf" />
    <param name="quality" value="high" />
</object>

<hr>

{{% fig src="maze.png" align="left" alt="A screenshot of the game in process" %}}
The order you get the track pieces is randomized; in fact, I think the number of each is randomized as well. This play-through was a bit of a challenge.
{{% /fig %}}

## Connect the Tracks Game

Here, you are fed a series of tracks and you have to drag them onto a grid to make a path from the start to the finish. This same mechanic was used as the “hacking” mini-game in _Bioshock_ (also released in 2007), but I do not know if that's where Jeff got the inspiration. 

This was also coded in AS3 in the Flash editor, but I had to implement an A* Search algorithm with a binary heap to tell whether or not the train actually had a clear path to the exit. Not bad for a computer science drop-out who failed data structures.

Sound up, by the way.

<object type="application/x-shockwave-flash" data="kids_trainmaze.swf" width="579" height="455"> 
    <param name="movie" value="kids_trainmaze.swf" />
    <param name="quality" value="high" />
</object>



