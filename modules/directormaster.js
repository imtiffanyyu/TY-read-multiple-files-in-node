// in modules, everything needs to be exported as a function

function readadirectory ( foldername ) {

	// Import the file system functionality
	var fs = require ( 'fs' )
	// var foldertoread = process.argv [ 2 ] OR COULD DO foldertoread = foldername

	// console.log ( foldername )

	if ( foldername == undefined ) {
		console.log ( 'Please specify a folder!' )
		return // stops the current operation. nothing below will be executed
	}

	// fs.readdir(path[, options], callback)

	fs.readdir ( foldername, function ( error, files ) {
		// catch the error
		if ( error ) {
			console.log ( "Error: " + error )
			throw error // lets js know that it is an error
		}

		// loop through the file array
		files.forEach ( function (file) {

			// reads one array element
			fs.readFile ( foldername + '/' + file, 'utf8', function ( error, filecontents ) {
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

}

module.exports.directorymaster = readadirectory

// json file stores objects
// clear in iterm to scroll up