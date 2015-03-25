#!/usr/bin/env node

const Liftoff = require('liftoff');
const Osenv = require('osenv');

const MyCmd = new Liftoff({
    name: 'mycmd',
    config: Osenv.home()+'/.mycmd'
});

const myOptions = {
    string: [ "string-opt-1", "string-opt-2" ],
    boolean: [ "bool-opt-1", "bool-opt-2" ],
    default: { "string-opt-1" : "My String 1", "string-opt-2" : "My String 2", "bool-opt-2" : true },
    alias: { s: "string-opt-1", b: "bool-opt-2" }
};

const argv = require('minimist')(process.argv.slice(2), myOptions);

const mycmd_logic = function(env) {
    console.log('my environment is:\n', env);
    console.log('my cli options are:\n', argv);
    console.log('my liftoff config is:\n', this);
};

MyCmd.launch(
    {},
    mycmd_logic
);