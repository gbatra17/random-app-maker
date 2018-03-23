> Based off of sindresorhus' yes/no generator
*The lists are just JSON files and can be used wherever.*


## Install

```
$ npm install --save random-app-maker
```


## Usage

```js
const randomAppMaker = require('random-app-maker');

randomAppMaker.randomApp();
//=> 'A [VR App] that [visualizes data] for [museums]'
```


## API

### .all

Type: `array`

All ideas.

### .allRandom()

Type: `function`

Random app ideas.


## CLI

```
$ npm install --global random-app-maker
```

```
$ random-app-maker --help

  Examples
    $ random-app-maker
    A VR App for Museums

    $ random-app-maker --all --type yes
    Absolutely
    Affirmative
    ...

  Options
    --all   Get all words instead of a random word
    --type  Type of word: yes|no|all  Default: all
```


## Related

- [cat-names](https://github.com/sindresorhus/cat-names) - Get popular cat names
- [dog-names](https://github.com/sindresorhus/dog-names) - Get popular dog names

## License

MIT © [Garima Batra](http://github.com/gbatra17)
