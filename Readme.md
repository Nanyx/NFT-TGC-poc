# NFT TGC POC
A simple proof of concept that _Trading Card Game_ can use _Non-Fungible-Token_ to validate the authenticity, eligibility and uniqueness of a digital asset. Therefore giving it a rarity and value.

## How to Use
Aside of grabing the master branch and having [NodeJS](https://nodejs.dev/) installed, use `npm i` on each project to download the library needed to make the stuff work.

After that you'll want to generate a set of cards. To do that, go to the server project and use `npm run generate` to create your set of card (Each card will have there own Blockchain making them unique for this particular _Set_). Technicaly, wee should save the block chain to a public readable database but for the __POC__ object file will suffice.

Once the long wait is over, go ahead and start both the server and the client app with `npm start` and start buying booster pack.

## Caveat
One night sprint from start to finish. By the end, I took a lot of short coner. Tests file are still written, I use `timestamp` as user and my code is basically the first draft. If I see interrest in this project, I'll probably give it some love.

## Bottom Line
It was a blast for me to learn what an _NFT_ is, making one to get the gist and grasp the whole concept of what really is a Bitcoin, Etherium or any other crypto-currency. Playing with what will probably be the future of _TCG_ was a neet thing.