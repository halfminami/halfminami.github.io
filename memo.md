## Submodules

### Updating

```
git submodule update --remote
```
and commit.

### Adding Submodules

```
git submodule add <remote-url> <local-path>
```
and commit.

#### After Adding a Submodule

- `/**/index.tsx`: index it somewhere
- `package.json`: write build script and call it from another script
- `.gitignore`: add the build output path under `public/`
- `tsconfig.json`: exclude the submodule to be safe

#### Build

rm all build output of submodules before running build


## Murmurs

### Updating Submodules

I think I can make push of submodules trigger a build workflow
but I'm afraid that it fails to build
(and my local build did for some reason)

### Build

Firstly I thought some javascripts would live together
and they're only static pages so Vite is good and configurable
but I hadn't tried other frameworks yet
and now I'm using git-submodule instead
(but not each GitHub Repository Pages!)

It's so gross...

I will try other web frameworks
and maybe I should separate scripts from demo pages
and place only demo pages here? idk
I feel like it's about publishing a package but I'm not publishing.
It's good to remember that no one cares
