// Import the file system functionality
var fs = require ( 'fs' )
var foldertoread = process.argv [ 2 ]

console.log ( foldertoread )

if ( foldertoread == undefined ) {
	console.log ( 'Please specify a folder!' )
	return // stops the current operation. nothing below will be executed
}

// fs.readdir(path[, options], callback)

fs.readdir ( foldertoread, function ( error, files ) {
	// catch the error
	if ( error ) {
		console.log ( "Error: " + error )
		throw error // lets js know that it is an error
	}

	// loop through the file array
	files.forEach ( function (file) {

		// reads one array element
		fs.readFile ( foldertoread + '/' + file, 'utf8', function ( error, filecontents ) {
			// catch the error
			if ( error ) {
				console.log ( "Error: " + error )
				throw error
			}
			// filecontents = JSON.parse ( filecontents )
			// output file contents
			console.log ( JSON.parse (filecontents) )
		})
	} )
} )

// json file stores objects
// clear in iterm to scroll up