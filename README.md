# Notes
## Install 
### Windows

```ps
irm bun.sh/install.ps1|iex
irm https://moonrepo.dev/install/moon.ps1 | iex
```

### Mac

```sh
curl -fsSL https://moonrepo.dev/install/moon.sh | bash
# Add to your .bashrc/.kshrc 
export PATH="$HOME/.moon/bin:$PATH"
```

## Run
```
# Run the app
moon client:start 

# Run the linter.
moon client:lint
```
## Build

