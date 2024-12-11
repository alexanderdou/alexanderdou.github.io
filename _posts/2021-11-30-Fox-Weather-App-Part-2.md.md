---

layout: post

title: Fox Weather App Part 2/n

date: 2021-11-30

published: false

---



In the [last article](https://alexanderdou.com/2021/11/25/fox-weather-app-part-1) we did a very basic map of the Fox Weather App Product: what pages exist, how the app is monetized, and download stats



In this article we'll go deeper and examine this from a User Jobs To Be Done (JTBD) and Company Strategy lens



## For Users, what Jobs are solved by using this App? And, second, are there any that are not already solved by the default iOS or Android Weather Apps?



The big, headliner Jobs to be Done are:



1. User can check what the current weather and forecast are for a given city or zip code

    - Likely, this will be their current home city

    - But it could also be a place where they visit often

2. The Plan It tab helps a User know what the weather will be for an upcoming trip—ostensibly for them to pack the appropriate clothes

3. For severe weather events, a User can get access to live TV to watch things develop

4. A User can also watch the Doppler radar of their area, and how it looks over ±4 hours



Only Job 1 can currently be satisfied by the default iOS and Android apps, which means that Fox does have an interesting leg up on those apps



## My initial position on the Fox Weather app was that it was not going to be useful, but upon closer examination, there are some interesting hotspots of User Value



### Job (3) - To make this more useful: During severe weather events, Live video should link to your local Fox affiliate



Currently, I have 3 cities saved as locations. The App should use that information to show only the Live local weather news that is relevant to me. Currently, [my live video is showing ski conditions in West Virginia](https://photos.app.goo.gl/owYujYGXhHV4rGSQ6). 



This is even more important during inclement weather, like the [big rains we had this summer in New York](https://www.usatoday.com/story/news/nation/2021/09/02/flooding-nyc-after-hurricane-ida-subway-videos/5692921001/). It would have helped me immensely to have meteorology expertise during that time 



### Job (4) - I should be able to drag a slider to scrub what time I want to see on the Doppler; I want to be able to share the Doppler in other services



The first one is sheer utility: right now, in order to see the Doppler, I just... wait... for the gif to restart. Not particularly friendly



The second one might also open up an interesting acquisition channel for App Users. If you could share the Map Object, along with the overlaid Doppler, and then share that via Instagram or email, along with a "powered by Fox Weather" in the bottom right corner, I'd imagine that would result in some increase in Downloads



This one sounds like a L/XL level of effort, so I'd run some assumption tests first. Maybe run folks through a prototype that doesn't actually programmatically generate Dopplerized Map Objects, but rather 3-5 for major metro areas



## This leads us to Company Strategy—why in the world would Fox invest untold millions into *yet another weather app*



If there's one thing I've learned this far in my career, it's that if Leadership does something that sounds stupid, it's worth making at least a pitstop on your leap to "Leadership is incompetent". Take a short breather at "is it possible they are seeing something that I'm not or know something that I do not?" If that isn't the case, then by all means continue to the final destination of "Leadership is incompetent"



That's certainly how I started this analysis



After digging a bit, I found out that there are a couple of tailwinds and pockets of deep engagement that might make this a worthwhile play for Fox. They are:



1. Climate Change has led to an increase in severe weather events. People look at the news more when there's severe weather

2. Weather is hyperlocal. This makes it computationally hard forecast accurately for each User and their given hyperlocality 



Fox has an advantage with (2), compared to the Default Weather App: it's invested decades into building out local news and weather stations. With (1), it's finally becoming financially viable to sell weather information directly to Consumers (as opposed to weather historically being a commodity packaged in a local news TV channel)



My take on the Fox Weather App is that it is a bet on a $X.99/month subscription fee for hyperlocal weather forecasting and information



Don't touch that dial, in the next section we go deeper into the Weather Rabbit Hole