// Your Client ID can be retrieved from your project in the Google
// Developer Console, https://console.developers.google.com
var CLIENT_ID = '420330819411-49via88dh3pf4p061vbnkhha2tcri7qs.apps.googleusercontent.com';

var SCOPES = ['https://www.googleapis.com/auth/drive.metadata.readonly'];

/**
 * Check if current user has authorized this application.
 */
function checkAuth() {
  console.log('Checking authentication');
  gapi.auth.authorize({
    'client_id': CLIENT_ID,
    'scope': SCOPES.join(' '),
    'immediate': false
  }, handleAuthResult);
}

/**
 * Handle response from authorization server.
 *
 * @param {Object} authResult Authorization result.
 */
function handleAuthResult(authResult) {
  var authorizeDiv = document.getElementById('authorize-div');
  if (authResult && !authResult.error) {
    // Hide auth UI, then load client library.
    authorizeDiv.style.display = 'none';
    loadDriveApi();
  } else {
    // Show auth UI, allowing the user to initiate authorization by
    // clicking authorize button.
    authorizeDiv.style.display = 'inline';
  }
}

/**
 * Initiate auth flow in response to user clicking authorize button.
 *
 * @param {Event} event Button click event.
 */
function handleAuthClick(event) {
  gapi.auth.authorize({
      client_id: CLIENT_ID,
      scope: SCOPES,
      immediate: false
    },
    handleAuthResult);
  return false;
}

/**
 * Load Drive API client library.
 */
function loadDriveApi() {
  console.log('Loading Drive API');
  gapi.client.load('drive', 'v2').then(retrieveAllFilesInPublicFolder);
}

/**
 * Print files.
 */
function listFiles() {
  var request = gapi.client.drive.files.list({
    'maxResults': 10
  });

  request.execute(function(resp) {
    appendPre('Files:');
    var files = resp.items;
    if (files && files.length > 0) {
      for (var i = 0; i < files.length; i++) {
        var file = files[i];
        appendPre(file.title + ' (' + file.id + ')');
      }
    } else {
      appendPre('No files found.');
    }
  });
}

/**
 * Append a pre element to the body containing the given message
 * as its text node.
 *
 * @param {string} message Text to be placed in pre element.
 */
function appendPre(message) {
  var pre = document.getElementById('output');
  var textContent = document.createTextNode(message + '\n');
  pre.appendChild(textContent);
}


/**
 * Retrieve all files in the Public folder where we're storing our photos.
 * @return {[type]} [description]
 */
function retrieveAllFilesInPublicFolder() {
  return retrieveAllFilesInFolder('0BxMLuiMxG16PZ0V2VGpPT29hQ2c', printResult);
}

/**
 * Retrieve a list of files belonging to a folder.
 *
 * @param {String} folderId ID of the folder to retrieve files from.
 * @param {Function} callback Function to call when the request is complete.
 *
 */
function retrieveAllFilesInFolder(folderId, callback) {
  console.log('Entered retrieveAllFilesInFolder');
  var retrievePageOfChildren = function(request, result) {
    console.log('Executing retrievePageOfChildren');
    request.execute(function(resp) {
      result = result.concat(resp.items);
      var nextPageToken = resp.nextPageToken;
      if (nextPageToken) {
        request = gapi.client.drive.children.list({
          'folderId' : folderId,
          'pageToken': nextPageToken
        });
        retrievePageOfChildren(request, result);
      } else {
        console.log('Executing callback');
        callback(result);
      }
    });
  }
  console.log('gapi.client.drive:');
  console.log(gapi.client.drive);
  var initialRequest = gapi.client.drive.children.list({
      'folderId' : folderId
    });
  retrievePageOfChildren(initialRequest, []);
}

function printResult(result) {
  console.log('Type of result:' + typeof result);
  console.log(result);
}

function onLoadFn() {
  console.log('Retrieving files from Public folder:');
  checkAuth();
  // loadDriveApi();
}