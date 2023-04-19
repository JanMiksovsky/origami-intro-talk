This project contains the source used for the Graph Origami intro video.

To run locally:

```
$ npm install
$ npm run start
```

This will serve the entire project. In the served site, navigate to the following addresses (note trailing slashes).

- `src/site.graph/public/` for the initial About Us site
- `js/site/` for the JavaScript version of the site
- `google/site.graph/public/` for the Google Drive-backed version of the site.\*

\*The Google version is just meant for demonstration purposes, and is not meant to imply complete or ongoing support for accessing Google's APIs as explorable graphs. If you want to play with that version, you'll need to obtain credentials file for the Google Drive and Sheets API. As of April 2023, the steps required are:

1. Open the [Google Cloud Console](https://console.cloud.google.com).
1. Create a new project.
1. Enable the "Google Drive API" and "Google Sheets API" services for your project.
1. Open the [Credentials](https://console.cloud.google.com/apis/credentials) area.
1. Create a "Service Account" for your project.
1. In "Service account details", select "Keys".
1. Select "Add Key", then "Create new key".
1. Create a "JSON" key. This will produce and download a JSON file.
1. Rename the JSON file to `creds.json`, and move it to the `google` folder.

The `pattern` folder contains the files used in the video's middle portion, which looks at creating graphs using the Explorable graph interface.
