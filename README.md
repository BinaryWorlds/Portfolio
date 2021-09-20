<h1 align="center">My portfolio website with React</h1>

<h2 align="center">Check live: <a href="https://dev-is.me">https://dev-is.me</a></h2>

# Table of Contents

- [Tech](#tech)
- [What have I learned?](#what-i-have-learned)

# Tech

- React
  - Hooks
  - Redux
  - Router
- Prop-types
- Styled Components
- React Spring
- Three.js @React-three-fiber
- Formik
- Openpgp
- Google Recaptcha v2
- Google Analytics
- Cloudflare
- Eslint
- Prettier

# What I have learned?

<details>
<summary style="font-weight:bold">My component for properly sizing images </summary>
<p>

Example of use my image component:
[example](src/pages/Project/Project.js)

Just set width in % and meta.json and watch the magic!

- image has a correct placeholder - no content reflow
- after mount, correct image size was downloaded
- support for legacy browsers - alt format
- [Image component](src/components/Image/Image.js)

</p>
</details>

<details>
<summary style="font-weight:bold">How lock scroll, e.q. on mobile menu</summary>
<p>

It's simple. Checkout:
[MobileMenu](src/components/MobileMenu/MobileMenu.js)

</p>
</details>

<details>
<summary style="font-weight:bold">Create a standardized theme</summary>
<p>

[My theme](src/layout/theme.js)

How correctly set css breakpoints - [great article](https://www.freecodecamp.org/news/the-100-correct-way-to-do-css-breakpoints-88d6a5ba1862/)

</p>
</details>

<details>
<summary style="font-weight:bold">Optimal way to load fonts</summary>
<p>

1. Preconnect to the font file origin.
2. Preload the font stylesheet asynchronously with low priority.
3. Asynchronously load the font stylesheet and font file after the content has been rendered with JavaScript.

   Checkout: [index.html](public/index.html)

</p>
</details>

<details>
<summary style="font-weight:bold">Optimizing Techniques</summary>
<p>

1. Prevent rerender - gain performance with React.memo().
2. Lazy loading - serve once needed avoiding wait time to see content.
3. Reduce Media size.
4. Install modules instead of global imports - reduce bundle size.
5. Alias exports for only used modules. [three-exports](src/alias/three-exports.js)

</p>
</details>

<details>
<summary style="font-weight:bold">Creating backend for contact form</summary>
<p>

I created the backend using AWS, then tried Google Lambda.

That's not for me as I can't sleep without a ddos ​​cost protection switch.

For now I am using the EmajlJS service.

</p>
</details>

<details>
<summary style="font-weight:bold">Manifest - logo / favicon isn't obvious</summary>
<p>

Useful tools:

[realfavicongenerator](https://realfavicongenerator.net/)

[maskable.app](https://maskable.app/editor)

</p>
</details>

</br>

- Mobile First is great approach
- configure eslint + prettier
- lighthouse is a great tool - i fixed all the problems and learn a lot
