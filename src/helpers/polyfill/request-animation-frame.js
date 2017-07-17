/**
 * Provides requestAnimationFrame in a cross browser way.
 * @see: http://www.paulirish.com/2011/requestanimationframe-for-smart-animating/
 * @param { object } [ global = global || window ] - Defines the global scope on which the polyfill is applied to.
 */
( function( global ) {
    const vendors = ['webkit', 'moz'];
    let lastTime = 0;

    for ( let x = 0; x < vendors.length && !global.requestAnimationFrame; ++x ) {
        global.requestAnimationFrame = global[vendors[x] + 'RequestAnimationFrame'];
        global.cancelAnimationFrame =
            global[vendors[x] + 'CancelAnimationFrame'] || global[vendors[x] + 'CancelRequestAnimationFrame'];
    }

    if ( !global.requestAnimationFrame ) {
        global.requestAnimationFrame = function( callback, element ) {
            const currTime = new Date().getTime();
            const timeToCall = Math.max( 0, 16 - ( currTime - lastTime ) );
            const id = global.setTimeout( function() {
                callback( currTime + timeToCall );
            },
                timeToCall );
            lastTime = currTime + timeToCall;
            return id;
        };
    }

    if ( !global.cancelAnimationFrame ) {
        global.cancelAnimationFrame = function( id ) {
            clearTimeout( id );
        };
    }
} )( window || global );
