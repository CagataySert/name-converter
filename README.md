# Name Converter [![Twitter](https://img.shields.io/twitter/url/https/twitter.com/SertCagatay.svg?style=social&label=SertCagatay)](https://twitter.com/SertCagatay)

Name converter is a basic tool which is useful to change format of variable names.

## Installation

Use the package manager [npm](https://www.npmjs.com/) to install Name Converter.

```bash
npm install nameconverter
```

## Usage

```python
import Converter from "@cagataysert/nameconverter";

converter.toSnake('fooBar') # returns 'foo_bar'
converter.toSnake('foo-bar') # returns 'foo_bar'

converter.toCamel('foo_bar') # returns 'fooBar'
converter.toCamel('foo-bar') # returns 'fooBar'

converter.toCapital('foo_bar') # returns 'Foobar'
converter.toCapital('foo-bar') # returns 'Foobar'
```

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Also you contact with me from my [twitter](https://twitter.com/SertCagatay) account.

ps: It's my first npm package, be kind please :)

## License

MIT
