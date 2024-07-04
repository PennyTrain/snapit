# Testing Rubric for "Snap It"

- While testing snapit I used manual testing throughout the development!


--- 

| Feature | Category | Priority | User Story | Acceptance Criteria | Pass/Fail |
|-----|-----|-----|-----|-----|-----|
| Navigation | Navigation | 1 | As a user, I want to be able to easily navigate the page. | Navigation bar is present on all pages. Links are clearly labeled and functional. | Pass |
| Navigation | Navigation | 1 | As a user, I want to be able to navigate throughout the site quickly. | Page load times are under 2 seconds. Navigation menu is accessible from any page. | Pass |
| Navigation | Navigation | 1 | As a user, I want to be logged in until I decide to log out. | Sessions persist even after closing the browser. Manual logout button is available. | Pass |
| Account Management | Profile Edit | 1 | As a user, I want to be able to update my profile. | Users can change their personal information (name, email, etc.). | Pass |
| Account Management | Profile Edit | 1 | As a user, I want to be able to change my profile picture. | Users can upload and save a new profile picture. | Pass |
| Account Management | Profile Edit | 1 | As a user, I want to be able to change my username. | Users can update their username, given it’s unique. | Pass |
| Account Management | Profile Edit | 1 | As a user, I want to be able to change my password. | Users can change their password after providing the current one. | Pass |
| Account Management | Profile Edit | 1 | As a user, I want to be able to change my bio. | Users can add/edit a bio on their profile. | Pass     |
| Account Registration | Registration | 1 | As a new user, I want to be able to register a new account. | Registration form includes fields for username, email, and password. | Pass |
| Account Registration | Registration | 1 | As a new user, I want there to be apparent features I am gaining when creating an account. | Features of having an account are highlighted on the registration page. | Pass |
| Account Sign-In | Sign-In | 1 | As a recurring user, I want an account unique to me. | Unique usernames and email addresses are enforced. | Pass |
| Account Sign-In | Sign-In | 1 | As a user, I want it to be clear that I am signed in. | User’s name or profile picture is displayed when logged in. | Pass |
| Account Sign-Out | Sign-Out | 1 | As a user, I want to be able to sign out of my account so that it is secure. | A clear sign-out button is available. Sessions are terminated after sign-out. | Pass |
| Account Sign-Out | Sign-Out | 1 | As a user, I want it to be clear that I am signed out. | No information is displayed after sign-out. | Pass |
| Snap Management | Create Snap | 1 | As a user, I want to be able to snap a photo of my pet and post it. | Users can take or upload a photo and post it as a snap. | Pass |
| Snap Management | View Snap | 1 | As a user, I want to be able to view my snaps. | Users can see a gallery of their posted snaps. | Pass |
| Snap Management | Edit Snap | 1 | As a user, I want to be able to edit my snap. | Users can edit captions or tags on their snaps. | Pass |
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

All the listed CSS files have successfully passed the validation, indicating they conform to the CSS standards set by the W3C.


# JS Validation Results

- I installed js eslint to run through my project and make sure I have no errors... I had a couple pop up such as prop type erros.
[Screenshot of prop error](./src/assets/readme/prop-eslint.png)
- All eslint errors in files written by me have been corrected
- However there are some errors in App.test.js but due to it being built into my project I assumed I did not have to worry about these and they are the only ones that flag up when npx eslint . is ran.
[Screenshot of app.test.js eslint errors](./src/assets/readme/testjs-eslint.png)
- Since this screenshot I have imported react so the only errors are the undefined ones.






