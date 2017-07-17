/**
 * Console polyfill for <=IE10
 */
( function( global ) {
    const noop = function() {
        // deliberate no-operation
    };

    if ( !global.console ) {
        global.console = {};
    }
    if ( typeof global.console.log !== 'function' ) {
        global.console.log = noop;
    }
    if ( typeof global.console.warn !== 'function' ) {
        global.console.warn = noop;
    }
    if ( typeof global.console.error !== 'function' ) {
        global.console.error = noop;
    }
    if ( typeof global.console.debug !== 'function' ) {
        global.console.debug = noop;
    }
} )( window || global );
