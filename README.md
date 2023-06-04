# Trending Component task
Submitted by: Mrigank Badola

Total time spent on development: **25 hours 34 minutes**

Stack and additional information:
- MongoDB for DBaaS
- Node (Expressjs) for Backend
- React (Nextjs) for Frontend
- Mockaroo for dummy data

## Approach

-	In order to identify which articles are trending at the moment, we could leverage customer behaviour tracking
-	According to Figma, the card has the following components:
	-	Headline image
	-	Headline
	-	Date and time of publish
	-	Current viewership
-	Now for customer behaviour tracking we would have to log the following data whenever a user navigates throughout the website
	-	Visit ID
	-	Page/Article ID
-	Visit ID as a PK will help us in identifying details like Geolocation (based on IP), UTM source, UTM campaign etc.
-	Article ID on the other hand, would help us fetch the details required for rendering our trending component.
-	The “tailored” experience would be played out as follows:
	-	<VISIT_ID_SECTION>
	-	User visits ES organically or via campaign
	-	Check for a visit cookie if present. If yes, then don’t update the entry if on home page. If no, create a visit ID and save it as a cookie. If a user visits a particular page, then only insert entry.
	-	</VISIT_ID_SECTION>
	-	Status of the user gets updated periodically (30-60 seconds)
	-	All the latest entries made globally within the last 2 minutes becomes our base. Out of this, articles that are no older than 5 days will be selected.
	-	This base is then processed by taking in the context of current user i.e., article category and geolocation they are of.
	-	A minimum threshold shall also be set for both the viewership and number of articles. For instance, if a person is accessing a Lacrosse article in Timbuktu just out of curiosity, then the chances of people in their vicinity that are also reading same/similar Lacrosse article may even be 0. In that scenario, fallback method shall be implemented by ignoring one or maybe even both the parameters.

## Sample screenshots
Desktop preview

![Desktop preview](https://github.com/mgkbadola/trending-component/blob/main/imgs/es-desktop.png?raw=true)

Mobile preview (portrait)

![Desktop preview](https://github.com/mgkbadola/trending-component/blob/main/imgs/es-mobile-portrait.png?raw=true)


Mobile preview (landscape)

![Desktop preview](https://github.com/mgkbadola/trending-component/blob/main/imgs/es-mobile-landscape.png?raw=true)

