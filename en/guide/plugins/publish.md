# Publishing a Plugin {#publish}

The final `.js` file can be published anywhere, for example: on Github Pages.

You can also create a [repository](../../reference/plugin-repository) with all your plugins to easily distribute them among users.

## Publishing in the Official Repository {#publish-official}

To publish in the official repository, the plugin must follow the recommendations described in the following section, as well as these additional requirements:

1. The plugin should be open source.

   - A public repository or the final `.js` file should be unobfuscated and not minified or otherwise tangled.

   This allows anyone who wants to check the code for malicious or unreliable code, as well as to use it for learning and creating their own.

2. The plugin must support internationalization.
   - Users should have the ability to submit a Pull Request or directly send a translation file in any language to the developer.

3. The plugin should not discriminate against those who can use it.

4. Compliance with app publishing rights on LG and Samsung app stores

> Publishing apps in the LG Content Store and Samsung Smart Hub is regulated by their internal rules.
> There is no exact list of banned applications publicly available, but you cannot publish apps with unlicensed, malicious, or content infringing material.
