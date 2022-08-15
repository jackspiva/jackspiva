---
layout: '../../layouts/BlogPost.astro'
title: 'Parsing XML with CSS Paths'
description: 'I recently learned that you can use CSS paths to parse XML with the Nokogiri Ruby gem, which made my work parsing XML responses from the Amazon Pay API much easier.'
pubDate: 'Jun 02 2019'
---

Recently I've been adding the ability to issue refunds through Amazon Pay from our website's admin tables. This meant revisiting Amazon Pay's extremely frustrating documentation and dealing with a lot of the weird ways they seem to do things. I did notice that Amazon recently updated the UI around their developer docs for Amazon Pay and it does look nicer, but I think everything around their API seems even more painful because Stripe's is so well documented and easy to use.

One major pain point was dealing with their request responses, which are in the markup language [XML](https://en.wikipedia.org/wiki/XML). I've only dealt with XML in the context of adding Amazon Pay functionality to this app, so I don't think I really know enough to be critical of it, but I found it difficult to deal with simply because of my inexperience and because it's not something our development team has any default way of handling. We are typically dealing with JSON, which I have found super easy to get used to, so when it came time to parse XML returned from Amazon I was on my own. Additionally, because Amazon's documentation is so poor, it was not always clear what exactly I could expect from their XML and where all the information I wanted would be located within the response.

I knew that we use the Nokogiri Ruby gem for some parsing and that it was probably the tool I'd want to use to parse the API response, but had basically no experience with it. When I originally wrote our basic Amazon Pay integration code, I used two different methods of parsing XML. Initially I had just created a hash from the XML using the `from_xml` method provided by ActiveSupport in Rails. This allowed me to do something like:

```ruby
parsed_response = Hash.from_xml(xml)
status = parsed_response.dig('AuthorizeResponse', 'AuthorizeResult', 'AuthorizationDetails', 'AuthorizationStatus')
```

I then tried using XPaths to parse the responses and it took me quite awhile to get the paths exactly right and working consistently. This looked something like:

```ruby
parsed_response = Nokogiri::XML(response.body)
state_xpath = "//RefundResponse//RefundResult//RefundDetails//RefundStatus//State"
amazon_status = parsed_response.at_xpath(state_xpath).content
```

Again, XPaths are something I have very little knowledge of, so probably I was just not using them in a very clever way, but regardless it was a real pain to get up and running.

This time I did a bit more reading about Nokogiri and how to parse XML and saw that the Nokogiri documentation [here](https://nokogiri.org/tutorials/searching_a_xml_html_document.html) suggests using CSS paths instead of XPaths to search XML. I followed their suggestion and it made things much, much easier.

Using CSS paths made my code more readable and less fragile. It may not look that different than the XPath code, but having no essentially no knowledge of how XPaths work meant that using CSS paths saved me a lot of uncertainty and Googling around. Since I was already very comfortable using CSS paths, it required very little documentation reading once I found out about Nokogiri's `at_css` method. Now my parsing code reads like this:

```ruby
parsed_response = Nokogiri::XML(response.body)
state_xpath = "RefundResponse RefundResult RefundDetails RefundStatus State"
amazon_status = parsed_response.at_css(state_xpath).text
```
