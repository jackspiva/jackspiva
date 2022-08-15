---
layout: '../../layouts/BlogPost.astro'
title: 'Webpacker, Buildpacks and Ruby — Solving an Application’s  Memory Woes'
description: 'After a long process of trying to understand Webpacker’s huge effect on our application’s memory, a few changes unexpectedly solved all of our problems.'
pubDate: 'Jun 06 2019'
---

At my previous job, we added Webpacker to our Rails app so that we could start using more modern JavaScript tools. A lot of thought went into the decision and the migration, which could easily be its own blog post, and everything ended up going pretty smoothly except for a large increase in our app’s memory usage. We spent a long time trying to diagnose what exactly was causing the increase. Some, but not all, of the things we tried or looked into:

1. Moving our styles and javascript out of Webpack back into Sprockets, which had minimal effect on the memory.
2. Setting an environment variable to limit Node’s use of memory, which also did not seem to do much. See [this GitHub issue](https://github.com/rails/webpacker/issues/1189) for more info on this.
3. Fixing unrelated memory issues in other parts of our application. This obviously helped by lower our app’s overall memory usage, but didn’t get at the root of the problem.

We did know about one issue with how we were running Webpacker, although I didn’t believe it was the cause at the time. Because of some disconnects between the default version of Node that Heroku runs and the versions of Node that our continuous integration service would support, I had added a NodeJS build pack to our Heroku app in order to get it to deploy correctly. I ended up finding [this GitHub issue](https://github.com/heroku/heroku-buildpack-ruby/issues/654#issuecomment-476954188) explaining that this meant we were probably installing our installing our Yarn dependencies twice. The consequences of this weren’t totally clear, but at the very least it seemed like it was increasing how long it took us to deploy.

Eventually, we upgraded our continuous integration service and were able to get on a more standard version of Node. This meant that we could remove our NodeJS buildpack from Heroku. At the same time, we upgraded from Ruby 2.3.1 to 2.5.3. One of those changes, or the combination, nearly halved our memory usage! I suspect it was mainly the buildpack causing Node to use way more memory than it needed to, but our memory is also now staying a lot more stable than it used to, which I think could be some memory fixes from the Ruby upgrade.
