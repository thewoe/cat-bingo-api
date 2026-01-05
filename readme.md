## Cat Bingo API

### Introduction

**What can I say...?**

It's an API that returns the complete list of cat breeds, images, and image credits from [Wikipedia](https://en.wikipedia.org/wiki/List_of_cat_breeds) (*obviously* the most reliable source of information!), or a random bingo card containing 16 cats.

### Features

More features coming soon, but for now, just:
* Return all cat breeds in a random order each time, to create a calling list:
```
GET {baseurl:port}/call
```
* Return a randomly-generated bingo card each time, containing 16 cats:
```
GET {baseurl:port}/card
```

### Coming Soon
* Web sockets to facilitate multiplayer interaction (with player room codes)
* DB for saving/loading existing games (with user accounts)
* Might generalise to add support for other types of bingo that users can think of (e.g., make your own bingo on your chosen theme)

Acknowledgements:
* List of cat breeds from **Wikipedia**, images (mostly Wikimedia Commons, but check individual image credits for details)
* **Marcel George/Laurence King Publishing** for the idea
* **Chris's friends** at the New Year's Eve party I was invited to, for owning a copy of the game
* **Penny**, for probably being the only person at least showing some interest in wanting to play this at some point haha :)
