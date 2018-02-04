A playground for hoverfly - using the admin api, curl and cli. [docs](https://docs.hoverfly.io/en/latest/index.html)

# install
```bash
$ brew install SpectoLabs/tap/hoverfly
# optional
$ git clone [repo] && cd [repoDir] && npm i
```

# usage
- Simulation mode is default
- Admin port on `8888`
- proxy port on `8500`

### api och and node.js

Before running test, we try to start a simulation from file. If no file - we delete any previously simulated data in hoverfly and set mode to capture, then run test. If post-test `writeSimulation` was true - we write the simulation data to file.

```bash
$ npm test
# optionally remove files
$ npm run clenup
```

### curl and cli

```bash
# Capture and simulate from file
$ hoverctl start
$ hoverctl mode capture [--headers "User-Agent,Content-Type,Authorization" | --all-headers]
$ curl --proxy http://localhost:8500 http://time.jsontest.com
$ hoverctl export <file>
$ hoverctl mode simulate
$ hoverctl flush
$ hoverctl import <file|url>
$ curl --proxy http://localhost:8500 http://time.jsontest.com
$ hoverctl stop

# using SSL and simulate from memory
$ hoverctl start
$ hoverctl mode capture --all-headers
$ curl -i --proxy http://localhost:8500 https://gaston-api.herokuapp.com/echoJS --cacert cert.pem
$ hoverctl mode simulate
$ curl -i --proxy http://localhost:8500 https://gaston-api.herokuapp.com/echoJS --cacert cert.pem
$ hoverctl stop
```

# todos
- [x] replace request lib with axios
- [x] try using /etc/hosts instead of `HTTP[S]_PROXY` - fail
- [x] cli and curl
- [x] use certs for HTTPS
