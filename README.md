A React/Typescript Chrome browser extension to capture data from LinkedIn.

## Steps to run this extension locally

1. Clone the repo

```
git clone https://github.com/duartefdias/LinkedInScraperChromeExtension.git
```

2. Navigate to directory

```
cd LinkedInScraperChromeExtension
```

3. Install dependencies

```
npm install
```

4. Build the extension (converts the react code into a production build inside a new folder "dist")

```
npm run build
```

5. In your browser, navigate to ```chrome://extensions/```

6. Enable "Developer mode" on the top righ corner

7. Click on "Load unpacked" and select the "dist" folder

The extension should now appear in your browser's list of extensions :)

## Making changes to the extension

If you are interested in playing with the extension's code and seeing the changes reflect locally, here is the dev loop:

1. Make changes to the code

2. ```npm run build```

3. Reload the extension in ```chrome://extensions/```

### Note
 React components live in the extension context, meaning that if you console.log in a react component, you'll need to right click on the extension panel and do inspect->console to view the output.

 You'll need to leverage the [chrome api](https://developer.chrome.com/docs/extensions/reference/api) to access the current tab in the browser. And example of doing this is via the chrome.scripting.executeScript method in this codebase.

To learn more about developing extensions for Chrome, make sure to follow their [get started guides](https://developer.chrome.com/docs/extensions/get-started).
