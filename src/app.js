// Import the file system functionality
var fs = require ( 'fs' )

// fs.readdir(path[, options], callback)

fs.readdir ( './resources', function ( error, files ) {
	// catch the error
	if ( error ) {
		console.log ( "Error: " + error )
		throw error // lets js know that it is an error
	}

	// loop through the file array
	files.forEach ( function (file) {

		// reads one array element
		fs.readFile ( './resources/' + file, 'utf8', function ( error, filecontents ) {
			// catch the error
			if ( error ) {
				console.log ( "Error: " + error )
				throw error
			}
			// filecontents = JSON.parse ( filecontents )
			console.log ( JSON.parse (filecontents) )
		})
	} )
} )

// json file stores objects
// clear in iterm to scroll up