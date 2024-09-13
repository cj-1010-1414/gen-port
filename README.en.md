# Port Generator

_Dokumentasi di Bahasa Indonesia, disini [ID](README.md)_

This gives you a port that you can use for your Node.js web server. It used `nanoid` and `detect-port` packages internally to generate four numbers that will be used as a port and detect its availability. 

## Installation

To install, just as usual:

```
pnpm add gen-port
```

Or use another package manager like _bun_ or _npm_:

```
bun add gen-port

# or

npm install gen-port
```

## Starting

To use it in your script:

```
import gen_port from 'gen-port'

const port = await gen_port()

// this will give you a port that you can use
console.log(port)
```

## Using CLI

You can also use CLI. For instance:

```
pnpm exec gen-port
```

or

```
bunx gen-port
```


## Test

A test script hasn't been made.

## Error or a _pull request_?

Please, report if you find a bug, or you want a pull request or some suggestions for features.

## TODO

Creating _type definition_ `.d.ts`

## License

MIT