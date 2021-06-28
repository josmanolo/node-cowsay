
# Node Cowsay
Node Cowsay example

## Installation

- Install GitHub CLI, gh is available via [Homebrew](https://brew.sh/index_es)
```bash
brew install gh
```

- Clone repository to local and add node packages
```bash
gh repo clone josmanolo/node-cowsay
cd node-cowsay
yarn init
yarn
yarn add cowsay
yarn add express
```

## Usage

```bash
node index.js
```
- Go to http://localhost:3001/

## Docker Usage
```bash
docker build -t node-cowsay .
docker run -dp 3001:3001 node-cowsay
```
- Go to http://localhost:3001/
## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License
[MIT](https://choosealicense.com/licenses/mit/) 
