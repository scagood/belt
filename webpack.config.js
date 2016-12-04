const webpack = requireGlobal('webpack');
const p = require('./package.json');

function requireGlobal(packageName) {
	var childProcess = require('child_process');
	var path = require('path');
	var fs = require('fs');

	var globalNodeModules = childProcess.execSync('npm root -g').toString().trim();
	var packageDir = path.join(globalNodeModules, packageName);
	if (!fs.existsSync(packageDir)) {
		packageDir = path.join(globalNodeModules, 'npm/node_modules', packageName);
	} // find package required by old npm

	if (!fs.existsSync(packageDir))	{
		throw new Error('Cannot find global module \'' + packageName + '\'');
	}

	var packageMeta = JSON.parse(fs.readFileSync(path.join(packageDir, 'package.json')).toString());
	var main = path.join(packageDir, packageMeta.main);

	return require(main);
}

p.name = p.name.replace(/\.js/g, '');

module.exports = [{
	name: 'min',
	entry: './' + p.main,
	output: {
		library: [p.name],
		libraryTarget: 'var',
		path: './web',
		filename: p.name.toLowerCase() + '.min.js'
	},
	plugins: [
		new webpack.optimize.UglifyJsPlugin()
	]
}, {
	name: 'max',
	entry: './' + p.main,
	output: {
		library: [p.name],
		libraryTarget: 'var',
		path: './web',
		filename: p.name.toLowerCase() + '.js'
	}
}];
