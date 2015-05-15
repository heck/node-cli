# MyCmd

A prototype project for creating command line utils using Node and [Commander](https://www.npmjs.com/package/commander)

usage: `$ mycmd`

```shell
$ ./mycmd --help

  Usage: mycmd [options]


  Commands:

    simplesub <arg1> <other_args>  A simple sub command
    complexsub <args>              Complex sub command defined in a separate file
    help [cmd]                     display help for [cmd]

  More text telling about this util

  Options:

    -h, --help                   output usage information
    -V, --version                output the version number
    -a, --first_option           This is the first option
    -b, --second_option [param]  This is a second option with a param [mydefault]
    -c --size <size>             Size
    -i, --integer <n>            An integer argument
    -f, --float <n>              A float argument
    -r, --range <a>..<b>         A range
    -l, --list <items>           A list
```

Notables:

* Includes a number of parameter examples
* Includes a "complex subcommand" example (`$ mycmd complexsub`).  See `mycmd-complexsub` file.
* Includes a "simple subcommand" example (`$ mycmd simplesub`) embedded in `mycmd` file
* All commands and subcommands simply `console.log` their parameters
