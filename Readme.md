Playground for hoverfly

# install
```
$ brew install SpectoLabs/tap/hoverfly
$ npm i
```

# usage
On the first run - the fixtures are created. On the second run - the fixtures should be used.
```
$ npm test
# optionally remove files
$ npm run clenup
```

### capture and simulate
Before running test, we try to start a simulation from file. If no file - we delete any previously simulated data in hoverfly and set mode to capture, then run test. If post-test `writeSimulation` was true - we write the simulation data to file.

# todos
- [x] replace request lib with axios
- [x] try using /etc/hosts instead of `HTTP[S]_PROXY` - fail
- [ ] use certs for HTTPS?
