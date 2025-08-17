# Publishing a Plugin {#publish}

The final `.js` file can be published anywhere, for example GitHub/Cloudflare pages

You can also create a [repository](../../reference/plugin-repository) with all your plugins to easily distribute them among users.

## Publishing in the Official Repository {#publish-official}

To publish in the official repository, the plugin must follow the recommendations described in the following section, as well as these additional requirements:

1. Plugin must be published under an open-source license.
   - Allow the use of the plugin, modify and distribute it.
   
   For example: MIT, MPL-2.0, GPLv3

2. Code availability
   - The source code of the plugin must be available (for example, in a public repository).
   - If the source code is not available, the final `.js` file must be readable: without obfuscation, with the preservation of variable names and comments.
   A significant minimization (for example, through uglify, terser with obfuscation) is not allowed if it hinders the analysis of the code.
   
   This allows anyone to view the code with a security risk or a dangerous code, and to use the plugin to train and create their own

3. Plugin must support localization
   - The plugin must use localization provided by the application. All text displayed to the user must be retrieved from the localization object provided by the application.
   - Provide a way to translate community requests or feedback: Pull requests, email or a messenger.

4. The plugin should be accessible to everyone equally.

5. Compliance with app publishing rights on LG and Samsung app stores

> Publishing apps in the LG Content Store and Samsung Smart Hub is regulated by their internal rules.
> 
> There is no exact list of banned applications publicly available, but you cannot publish apps with unlicensed, malicious, or content infringing material.
