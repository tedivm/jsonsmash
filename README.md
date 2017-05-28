# jsonsmash - a shell for browsing json files

[![npm package](https://nodei.co/npm/jsonsmash.png?stars=true)](https://www.npmjs.com/package/jsonsmash)

This projects solves the problem of browsing large json files by providing an
emulated shell environment that treats the json file as if it were a filesystem.
This allows the file to be browsed using commands such as `ls` and `cd` or
viewed (in human readable yaml) using `cat`.


## Install

This project is build with `node` and is installable using `npm`. It should be
installed globally.

```
$ npm install jsonsmash -g
```


## Usage

Any valid json file can be opened by calling `jsonsmash path`.

```
$ jsonsmash /path/to/jsonfile.js
```

Data can also be loaded from a url by calling `jsonsmash url`.

```
$ jsonsmash http://example.come/somejson.json
```

After opening jsonsmash a prompt will appear to accept commands.

## Paths

The jsonsmash shell treats the json data structure as a file system, with the
root of the data structure represented as `/` and the keys as either directories
(for objects and arrays) or files.

Paths can be either absolute or relative. Absolute paths must begin with `/`.

Commands that require a path will default to using the current working
directory.

## Commands

### cat

`cat [--json] [path]`

Print the data structure, defaulting to yaml for human readablility.

If the `--json` flag is passed the output will be in unformatted json.


### cd

`cat [path]`

Change to the specified path.


### echo

`echo [string ...]`

Print the argument passed to it.


### exit

`exit`

Close the jsonsmash shell.


### ls

`ls [-lhSr] [path]`

Display the children of the specified paths.

* `-l` list in long format.
* `-h` use unit suffixes (K,M,G,T) to reduce number of digits to three or less.
* `-S` sort by size instead of alphabetically.
* `-r` reverse sort order.


### pwd

`pwd`

Print the current working directory.


## Examples

```
$ jsonsmash http://headers.jsontest.com/
> cat
X-Cloud-Trace-Context: dbaae9ed37134e4c86d1e02147fe2676/1875084932880129464
Host: headers.jsontest.com

> ls -lh
  29 string Host
  78 string X-Cloud-Trace-Context
```
