# Build for legacy browsers:

1. Uncomment in `index.js` lines with **//legacy**.
2. In `package.js` change browserlist to:
   `"production": [ "> 1%", "last 2 versions", "Firefox ESR" ],`
3. Delete `build` folder and `node_modules/.cache`
4. Build.
5. Copy builded folder to new folder `App/legacyApp`.

# Build for modern browsers:

1. Comment in `index.js` lines with **//legacy**.
2. In `package.js` change browserlist to:
   `"production": [ "Chrome >= 60", "Safari >= 10.1", "iOS >= 10.3", "Firefox >= 54", "Edge >= 15" ],`
3. Delete `build` folder and `node_modules/.cache`
4. Build.
5. Copy builded folder to new folder `App/modernApp`.

# Combine both app without ejecting:

1. Add `/App/` to `.eslintignore`
2. Search(with match case) in `App/legacyApp/build` and replace all:
   `static/` to `legacy/`
   `service-worker` to `legacy-worker`

   Rename `static` folder to `legacy` and `service-worker` to `legacy-worker` (both js and map.js)

3. Repeat point "2" for `modern` app.

4. Look at `index.template.html`, you need to create similar file:

   1. Go to `legacyApp/index.html` - all changes go here.
   2. Paste this code at first line of script:

      ```
      var modernToLoad = ["/modern/js/2.03ef0271.chunk.js", "/modern/js/main.fc69b70a.chunk.js"];
      var legacyToLoad = ["/legacy/js/2.37a35dcb.chunk.js", "/legacy/js/main.fd3b7002.chunk.js"];

      var s = document.createElement('script');
      var isModern = 'noModule' in s;
      var myPath = isModern ? 'modern/js/' : 'legacy/js/';
      var myScripts = isModern
         ? {
            3: '1d95ddd8',
            4: 'dc26f350',
            5: '965925f2',
            6: 'ce8acd4a',
            7: '2beed0d2',
            8: 'a06220aa',
            9: '77be6416',
            10: 'dd6cfbd2',
            11: 'ffd4f2b4',
            12: '01b81a6a',
            }
         : {
            3: '92e8b11b',
            4: '52489dcd',
            5: '8ac16a87',
            6: 'cd1196c3',
            7: 'df364481',
            8: '6ca13b4b',
            9: 'b7e39262',
            10: '87ee5843',
            11: '81504600',
            12: '047dc5d9',
            };

      function $loadjs(modernSrc, legacySrc) {
         var myScriptsToLoad = isModern ? modernSrc : legacySrc;
         for (var counter = 0; counter < myScriptsToLoad.length; counter++) {
            s = document.createElement('script');
            s.src = myScriptsToLoad[counter];
            document.head.appendChild(s);
         }
      }

      $loadjs(modernToLoad, legacyToLoad);
      ```

   3. Replace `legacyToLoad` links with src from end of `legacyApp/index.html` **<scripts>** tags.
      Delete this tags from end.
   4. Replace `modernToLoad` links with src from end of `modernApp/index.html` **<scripts>** tags.
   5. Look at `myScripts` variable and find similar objects in `modernApp/index.html` and `legacyApp/index.html`.
      Copy it to our `myScripts` variable.
   6. Replace object found at 5. to `myScripts`.
   7. A few lines up replce `legacy/js/` with `myPath` object.
   8. Compare your file with mine `index.template.html`.

5. Cut `service.worker files` and `modern`(old "static") folder from `App/modernApp` and paste it to `App/legacyApp`.
6. Delete `App/modernApp` folder.
7. Minify `index.html` and all other edited files.
8. You can rename `legacyApp` to `build`, replace with orginal `build` folder and run localhost!
   **_Done!_**
