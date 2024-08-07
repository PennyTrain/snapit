# Testing Snap It

- While testing snapit I used manual testing throughout the development!

--- 

| Feature | Category | Priority | User Story | Acceptance Criteria | Pass/Fail |
|-----|-----|-----|-----|-----|-----|
| Navigation | Navigation | 1 | As a user, I want to be able to easily navigate the page. | Navigation bar is present on all pages. Links are clearly labeled and functional. | Pass |
| Navigation | Navigation | 1 | As a user, I want to be able to navigate throughout the site quickly. | Page load times are under 2 seconds. Navigation menu is accessible from any page. | Pass |
| Navigation | Navigation | 1 | As a user, I want to be logged in until I decide to log out. | Sessions persist even after closing the browser. Manual logout button is available. | Pass |
| Account Management | Profile Edit | 1 | As a user, I want to be able to update my profile. | Users can change their personal information (name, password, etc.). | Pass |
| Account Management | Profile Edit | 1 | As a user, I want to be able to change my profile picture. | Users can upload and save a new profile picture. | Pass |
| Account Management | Profile Edit | 1 | As a user, I want to be able to change my username. | Users can update their username, given it’s unique. | Pass |
| Account Management | Profile Edit | 1 | As a user, I want to be able to change my password. | Users can change their password. | Pass |
| Account Management | Profile Edit | 1 | As a user, I want to be able to change my bio. | Users can add/edit a bio on their profile. | Pass     |
| Account Registration | Registration | 1 | As a new user, I want to be able to register a new account. | Registration form includes fields for username and password. | Pass |
| Account Registration | Registration | 1 | As a new user, I want there to be apparent features I am gaining when creating an account. | Features of having an account are highlighted. | Pass |
| Account Sign-In | Sign-In | 1 | As a recurring user, I want an account unique to me. | Unique usernames are enforced. | Pass |
| Account Sign-In | Sign-In | 1 | As a user, I want it to be clear that I am signed in. | Navbar displays more options when logged in. | Pass |
| Account Sign-Out | Sign-Out | 1 | As a user, I want to be able to sign out of my account so that it is secure. | A clear sign-out button is available. Sessions are terminated after sign-out. | Pass |
| Account Sign-Out | Sign-Out | 1 | As a user, I want it to be clear that I am signed out. | No information is displayed after sign-out. | Pass |
| Snap Management | Create Snap | 1 | As a user, I want to be able to snap a photo of my pet and post it. | Users can upload a photo and post it as a snap. | Pass |
| Snap Management | View Snap | 1 | As a user, I want to be able to view my snaps. | Users can see a gallery of their posted snaps when they click on thier own profile. | Pass |
| Snap Management | Edit Snap | 1 | As a user, I want to be able to edit my snap. | Users can edit on their snaps. | Pass |
| Snap Management | Delete Snap | 1 | As a user, I want to be able to delete my snap. | Users can delete their snaps. | Pass |
| Snap Management | Like Snap | 1 | As a user, I do not want to be able to dislike my own snap. | The dislike button is disabled for the user’s own snaps. | Pass |
| Snap Management | Like Snap | 1 | As a user, I do not want to be able to like my own snap. | The like button is disabled for the user’s own snaps. | Pass |
| Snap Management | Comment Snap | 1 | As a user, I want to be able to comment on my own snap. | Users can comment on their own snaps. | Pass |
| Snap Management | Like Snap | 1 | As a user, I want to be able to like others snaps. | Users can like snaps posted by others. | Pass |
| Snap Management | Like Snap | 1 | As a user, I want to be able to dislike others snaps. | Users can dislike snaps posted by others. | Pass |
| Snap Management | View Others' Snaps | 1 | As a user, I want to be able to see other users snaps. | Users can view a feed or gallery of other users' snaps. | Pass |
| Comment Management | Add Comment | 1 | As a user, I want to be able to comment on snaps. | Users can leave comments on snaps. | Pass |
| Comment Management | Add Comment | 1 | As a user, I want to be able to attach a photo of my pet. | Users can attach a photo in the comment section. | Pass |
| Comment Management | Add Comment | 1 | As a user, I want to be able to include information about my pet. | Users can add text information about their pet in comments. | Pass |
| Comment Management | Edit Comment | 1 | As a user, I want to be able to edit my comment. | Users can edit their comments after posting. | Pass |
| Comment Management | Delete Comment | 1 | As a user, I want to be able to delete my comment. | Users can delete their comments. | Pass |
| Comment Management | View Comment | 1 | As a user, I want to be able to view my comments on a snap. | Users can see a list of their comments on snaps. | Pass |
| Comment Management | View Others' Comments | 1 | As a user, I want to be able to view others comments on a snap. | Users can see comments from others on snaps. | Pass |
| Filtering and Searching | Filter Snaps | 1 | As a user, I want to be able to filter through my liked snaps. | Users can filter snaps to only show those they have liked. | Pass |
| Filtering and Searching | Filter Snaps | 1 | As a user, I want to be able to filter through my disliked snaps. | Users can filter snaps to only show those they have disliked. | Pass |
| Filtering and Searching | Search Snaps | 1 | As a user, I want to be able to search through pet types. | Users can search snaps by pet types (e.g., dogs, cats). | Pass |
| Filtering and Searching | Search Snaps | 1 | As a user, I want to be able to search through pet ages. | Users can search snaps by pet ages. | Pass     |
| Filtering and Searching | Search Snaps | 1 | As a user, I want to be able to search through pet breeds. | Users can search snaps by pet breeds. | Pass |
| Filtering and Searching | Search Snaps | 1 | As a user, I want to be able to search through other users snaps. | Users can search for snaps by other users. | Pass |
| Filtering and Searching | Search Snaps | 1 | As a user, I want to be able to search through pet names. | Users can search snaps by pet names. | Pass |


# CSS Validation Results

The following CSS files were validated using the [W3C CSS Validator](https://jigsaw.w3.org/css-validator/). Each file has been tested to ensure it adheres to standard CSS practices.

| CSS File                | Validation Result |
|-------------------------|-------------------|
| AuthForm.module.css     | Passed            |
| Comment.module.css      | Passed            |
| CommentForm.module.css  | Passed            |
| LogoutButton.module.css | Passed            |
| NavBar.module.css       | Passed            |
| PageNotFound.module.css | Passed            |
| Profile.module.css      | Passed            |
| ProfileEdit.module.css  | Passed            |
| ProfilePage.module.css  | Passed            |
| ProfilePic.module.css   | Passed            |
| Snap.module.css         | Passed            |
| SnapForm.module.css     | Passed            |
| SnapsFeed.module.css    | Passed            |
| Messagges.module.css    | Passed            |

All the listed CSS files have successfully passed the validation, indicating they conform to the CSS standards set by the W3C.

# JS Validation Results

- I installed js eslint to run through my project and make sure I have no errors... I had a couple pop up such as prop type errors.
[Screenshot of prop error](/src/assets/readme/prop-eslint.png)
- All eslint errors in files written by me have been corrected
- However there are some errors in App.test.js but due to it being built into my project I assumed I did not have to worry about these and they are the only ones that flag up when npx eslint . is ran.
[Screenshot of app.test.js eslint errors](/src/assets/readme/testjs-eslint.png)
- Since this screenshot I have imported react so the only errors are the undefined ones.

# Lighthouse testing
![Screenshot of lighthouse report](/src/assets/readme/lighthouse-report.png)
- Performance: 75 Accessibility: 90 Best Practices: 96 SEO: 100

# Wave Testing 
![Screenshot of wave report](/src/assets/readme/wave-report.png)

- The Wave report contained an alert about the noscript element. This was to flag that content within this element must be accessible. Since the element contains a simple text reminder that JavaScript must be enabled to use the website, I assumed that this was not to be an issue.  

# Unresolved Bugs
- The website will not let you log in when on a mobile device, like ios. After a lot of troubleshooting, which was difficult because there is no console on an iphone I contacted student support who said that there is a known bug and to change my settings. However it still did not work.
 This is because the Django Rest Framework API and the React front-end are hosted on separate domains using Heroku, and cross-domain requests from the front-end to the API are blocked by these anti-tracking features. It appears there is no solution to this, other than to host the API and front-end on the same domain (reference - https://stackoverflow.com/questions/56972162/is-there-a-workaround-for-safari-ios-prevent-cross-site-tracking-option-when).

![Student support screenshot](/src/assets/readme/iphone-issue.png)


 ### Project Deployment

The site was deployed via Heroku, and the live link can be found here - 
To deploy the project through Heroku I followed these steps:
* Sign up / Log in to [Heroku](https://www.heroku.com/)
* From the main Heroku Dashboard page select 'New' and then 'Create New App'
* Give the project a name - I entered The-Pantry and select a suitable region, then select create app. The name for the app must be unique.
* This will create the app within Heroku and bring you to the deploy tab. From the submenu at the top, navigate to the resources tab.
* Add the database to the app, in the add-ons section search for 'Heroku Postgres', select the package that appears and add 'Heroku Postgres' as the database
* Navigate to the setting tab, within the config vars section copy the DATABASE_URL to the clipboard for use in the Django configuration.
* Within the django app repository create a new file called env.py - within this file import the os library and set the environment variable for the DATABASE_URL pasting in the address copied from Heroku. The line should appear as os.environ["DATABASE_URL"]= "Paste the link in here"
* Add a secret key to the app using os.environ["SECRET_KEY"] = "your secret key goes here"
* Add the secret key just created to the Heroku Config Vars as SECRET_KEY for the KEY value and the secret key value you created as the VALUE
* In the settings.py file within the django app, `import Path from pathlib, import os and import dj_database_url`
* insert the line `if os.path.isfile("env.py"): import env`
* remove the insecure secret key that django has in the settings file by default and replace it with `SECRET_KEY = os.environ.get('SECRET_KEY')`
* replace the databases section with `DATABASES = { 'default': dj_database_url.parse(os.environ.get("DATABASE_URL"))}` ensure the correct indentation for python is used.
* In the terminal migrate the models over to the new database connection
* Navigate in a browser to cloudinary, log in, or create an account and log in. 
* From the dashboard - copy the CLOUDINARY_URL to the clipboard
* in the env.py file created earlier - add os.environ["CLOUDINARY_URL"] = "paste in the Url copied to the clipboard here"
* In Heroku, add the CLOUDINARY_URL and value copied to the clipboard to the config vars
* Also add the KEY - DISABLE_COLLECTSTATIC with the Value - 1 to the config vars
* this key value pair must be removed prior to final deployment
* Add the cloudinary libraries to the list of installed apps, the order they are inserted is important, `cloudinary_storage` goes above `django.contrib.staticfiles` and `cloudinary` goes below it.
* in the Settings.py file - add the STATIC files settings - the url, storage path, directory path, root path, media url and default file storage path.
* Link the file to the templates directory in Heroku `TEMPLATES_DIR = os.path.join(BASE_DIR, 'templates')`
* Change the templates directory to TEMPLATES_DIR - 'DIRS': [TEMPLATES_DIR]
* Add Heroku to the ALLOWED_HOSTS list the format will be the app name given in Heroku when creating the app followed by .herokuapp.com
* In your code editor, create three new top level folders, media, static, templates
* Create a new file on the top level directory - Procfile
* Within the Procfile add the code - web: guincorn PROJECT_NAME.wsgi
* In the terminal, add the changed files, commit and push to GitHub
* In Heroku, navigate to the deployment tab and deploy the branch manually - watch the build logs for any errors.
* Heroku will now build the app for you. Once it has completed the build process you will see a 'Your App Was Successfully Deployed' message and a link to the app to visit the live site.

#### Create a clone of this repository
Creating a clone enables you to make a copy of the repository at that point in time - this lets you run a copy of the project locally:
This can be done by:
* Navigate to https://github.com/PennyTrain/snapit
* click on the arrow on the green code button at the top of the list of files
* select the clone by https option and copy the URL it provides to the clipboard
* Navigate to your code editor of choice and within the terminal change the directory to the location you want to clone the repository to.
* type 'git clone' and paste the https link you copied from github
* press enter and git will clone the repository to your local machine







