# Function Injection {#inject}

This guide covers the concept of function injection, also known as a [monkey patch](https://en.wikipedia.org/wiki/Monkey_patch).

If you are already familiar with this concept, you can skip directly to the [examples](#examples).

### What Is It? {#what-is-it}

Function patching is an enhanced technology for plugins that allows you to modify existing functions. There are two different types of patches. Some allow you to run your own code before the original function, typically with the goal of changing the arguments passed to the original function. Others are intended to run after the original function, allowing you to change the returned value before passing it somewhere else.

### How Can I Patch a Function? {#how-to-fix-function}

Unfortunately, you cannot directly patch a function; you will need to change the reference to the function used by other code. This means that if your target function is simply a locally or globally available function like this:

```js
function target() {}
```

You won't be able to affect it. However, if your goal is part of a module,
you can overwrite this link with your own function, effectively replacing the target function.

```js
const module = {
  target: function() {
      return 'red'
    }
};

function getColor() {
  return module.target();
}
getColor(); // 'red'

function myPatch() { // [!code highlight]
   return 'green'; // [!code highlight]
} // [!code highlight]

module.target = myPatch; // [!code highlight]

getColor(); // 'green' - fixed
```

If you look at the highlighted section, we create a new function `myPatch()`, which returns _green_, and assign it to `module.target()` effectively replacing the target function.
This means that when `getColor()` is called again, your function runs successfully because it references the `module` object.
Your patch fully replaces the target. All patches start like this but can be expanded into `pre` or `post` patches by saving the link and calling the original one.
However, if multiple plugins are patching the same function, this can quickly become complicated.

### Injector {#injector}

Fortunately, Yskra already has a module for managing multiple patches for each function and allows targeting different types of patches.
This means that if you want to make a `pre` or `post` patch, you no longer need to manually replace the function, save links, and call the original one.
Everything is done for you. Let's see how we can implement the example above using this module.

`injector` is part of the plugin context.

```js
const module = {
  target: function() {
    return 'red'
  }
};

function getColor() {
  return module.target();
}
getColor(); // 'red'

ctx.injector.post(module, 'target', () => { // [!code highlight]
  return 'green'; // [!code highlight]
}, 'debug-id'); // [!code highlight]

getColor(); // 'green' - fixed
```

This code has the same effect as before, calling `getColor()` instead of this gets **green**.
But let's look at the highlighted line more closely.
- We have a call to `ctx.injector.post()`, which indicates that we want to create a `post` patch.
- Then we give it the target object `module`.
- The name of our target inside this object.
- Our function for overriding the response.
- Also, we pass it a `debug-id`, which will be displayed in logs.
  Otherwise, Injector will generate one automatically. This identifier can also be used with `ctx.injector.uninject()` to manually remove the patch.

Injector takes care of everything else and even allows other plugins to set patches on top of yours.

## Examples {#examples}

Given:
```js :line-numbers
function someGlobal() {
}

const module = {
  value: "foobar",
  method(val = 0) {
    return 1 + val;
  },
  otherMethod(someArg) {
    console.log(`My value ${someArg}`);
  }
};
```
In this setup, `someGlobal` is a function that cannot be patched because there is no reference to replace.
However, `module.method()` and `module.otherMethod()` can both be patched.

### inject.pre {#inject-pre}

```js
ctx.inject.pre(module, 'otherMethod', (args) => {
  console.log(args);
  return args;
});

module.otherMethod("something");

// > ["something"]
// > My value something
```
In this example, we did not change the arguments but simply wanted to output to the console to see what values can be obtained.
This is a good method for selectively changing arguments. Suppose we don't mind seeing `something` in the console but dislike when it contains `token`. How might this look?

```js
ctx.inject.pre(module, 'otherMethod', (args) => {
  if (args[0] === "token") { // [!code highlight]
    args[0] = "no"; // [!code highlight]
  } // [!code highlight]
  return args;
});

module.otherMethod("something"); // > My value something
module.otherMethod("token");     // > My value no
```
The highlighted code checks when someone is trying to pass `token` as a value for `module.otherMethod()`, then replaces it with `no`.

### inject.post {#inject-post}

This type of patch is most commonly used in plugins.

```js
ctx.inject.post(module, 'method', (returned, args) => {
  return returned * 2;
});

module.method(5); // > 12
module.method();  // > 2
```
You may notice that the original function has transformed into `returned`.
Here, we simply multiply the result by `2` each time and return the value to the caller.
This means that for any number, the original function is applied first, then our patch multiplies it by `2`, and finally, the caller receives its value.
Injector will use whatever it wants as the **return** value.
However, if you don't return anything, the default returned value of the original function is used. This can have significant consequences. Let's consider this case:

```js
ctx.inject.post(module, 'method', (returned, args) => {
  if (args[0] === 5) 
    return null;
});
```
In our patch, we only return a value when `5` is passed. In all other cases, the default returned value of the original function is used because we didn't return anything.
You may also notice that our return is no longer a number. So what happens in this case above?

```js
ctx.inject.post(module, 'method', (returned, args) => {
  if (args[0] === 5) 
    return null;
});

const myNumber = 5 / module.method(5); // NaN
```

The variable `myNumber` became `NaN` - not a number. This might seem ironic given the name of the variable.
But this is a good example of how careful you need to be when dealing with changing the results of functions.
