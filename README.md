This project contains the source used for the Graph Origami intro video.

To run locally:

```
$ npm install
$ npm run start
```

This will serve the entire project. In the served site, navigate to the following addresses (note trailing slashes).

- `src/site.graph/public/` for the initial About Us site
- `js/site/` for the JavaScript version of the site
- `google/site.graph/public/` for the Google Drive-backed version of the site. (Note: this version requires obtaining credentials for the Google Drive and Sheets API and saving those as `google/creds.json`.)

The `pattern` folder contains the files used in the video's middle portion, which looks at creating graphs using the Explorable graph interface.
