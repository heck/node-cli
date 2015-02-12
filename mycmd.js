#!/usr/bin/env node

const Liftoff = require('liftoff');

const MyCmd = new Liftoff({
    name: 'mycmd',
    config: '.mycmd'
});

const mycmd_logic = function(env) {
    console.log('my environment is:', env);
    console.log('my cli options are:', argv);
    console.log('my liftoff config is:', this);
};

const argv = require('minimist')(process.argv.slice(2));

MyCmd.launch(
    {},
    mycmd_logic
);