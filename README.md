# moongate-scraper

Casperjs script for scraping CISHK's moongate platform.

## Pre-requisites
- Python 2.6+
- Yarn

## Installation
```
yarn install
cp credentials_default.js credentials.js
rm credentials_default.js
```

Once you've copied and removed `credentials_default.js`, replace the fields in `credentials.js` with proper moongate credentials. 

## Usage

```
yarn start [options]

Options:

--search    Term to use in moongate's search bar. Will output a 'results.png' image file containing search results.
```

## Sample Usage
```
yarn start --search="Ted Faunce"
```

