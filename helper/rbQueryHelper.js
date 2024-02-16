'use strict';

// cheapo imitation of jQuery form/AJAX helper functions at
// https://api.jquery.com/category/helper-functions/

// update form elements according to query
function setFilters( /* Object */ form ) {
	// TODO: set according to `location.search` query
}

// collect form query from markup
function serializeArray( /* Object */ form ) {
	let query = {};

	// collect key names
	form.querySelectorAll( '[name]' ).forEach( function( element ) {
		query[ element.getAttribute('name') ] = [];
	} );

	// collect values
	// TODO: some form tags are missing
	form.querySelectorAll( 'input:checked, select, [type=text], [type=search]' ).forEach( function( element ) {
		query[ element.getAttribute('name') ].push( element.value );
	} );
	// TODO: check how the jquery.serializeArray() function handles this
	Object.keys(query).forEach( function ( key ) {
		if (
			// 1. filter against entries with values
			query[key].filter( function ( entry ) {
				return entry.length;
			} )
		.length === 0 ) {
			 // 2. delete empty params
			query[ key ] = []
		}
	} );
	// TODO: remove checkbox queries that amount to the number of available options
	//       this might be a little controversional … think about downsides
	return query;
}
