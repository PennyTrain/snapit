# Snap It!

## Introduction
This project provides a Django Reszt Framework API for [Snap It app livelink](https://snapit-2fde1c079281.herokuapp.com/) 
Snap It is an innovative social media platform tailored specifically for pet lovers, enabling them to share, connect, and celebrate the joy that animals bring into their lives. Think of Snap It as a specialized version of Facebook, but with a dedicated focus on pets, offering a unique blend of features that cater to pet owners and animal enthusiasts alike.

# [Click here to see resubmission details!](./RESUBMISSION.md)

# Project Goals

1. Provide an intuitive and seamless user experience for navigating the site.
2. Enable comprehensive account management features.
3. Facilitate easy and engaging snap management.
4. Support robust commenting and interaction on snaps.
5. Implement effective filtering and searching functionalities.

# User Stories

## 1. Navigation

### Goal: Provide an intuitive and seamless user experience for navigating the site

**As a user, I want to be able to easily navigate the page**
- **Acceptance Criteria:**
  - Navigation bar is present on all pages.
  - Links are clearly labeled and functional.

**As a user, I want to be able to navigate throughout the site quickly**
- **Acceptance Criteria:**
  - Page load times are under 2 seconds.
  - Navigation menu is accessible from any page.

**As a user, I want to be logged in until I decide to log out**
- **Acceptance Criteria:**
  - Sessions persist even after closing the browser.
  - Manual logout button is available.

## 2. Account Management

### Goal: Enable comprehensive account management features

**As a user, I want to be able to update my profile**
- **Acceptance Criteria:**
  - Users can change their personal information (name, email, etc.).

**As a user, I want to be able to change my profile picture**
- **Acceptance Criteria:**
  - Users can upload and save a new profile picture.

**As a user, I want to be able to change my username**
- **Acceptance Criteria:**
  - Users can update their username, given it’s unique.

**As a user, I want to be able to change my password**
- **Acceptance Criteria:**
  - Users can change their password after providing the current one.

**As a user, I want to be able to change my bio**
- **Acceptance Criteria:**
  - Users can add/edit a bio on their profile.

## 3. Account Registration

### Goal: Facilitate easy and engaging account registration

**As a new user, I want to be able to register a new account**
- **Acceptance Criteria:**
  - Registration form includes fields for username, email, and password.

**As a new user, I want there to be apparent features I am gaining when creating an account**
- **Acceptance Criteria:**
  - Features of having an account are highlighted on the registration page.

## 4. Account Sign-In

### Goal: Support secure and unique user accounts

**As a recurring user, I want an account unique to me**
- **Acceptance Criteria:**
  - Unique usernames and email addresses are enforced.

**As a user, I want it to be clear that I am signed in**
- **Acceptance Criteria:**
  - User’s name or profile picture is displayed when logged in.

## 5. Account Sign-Out

### Goal: Ensure user account security

**As a user, I want to be able to sign out of my account so that it is secure**
- **Acceptance Criteria:**
  - A clear sign-out button is available.
  - Sessions are terminated after sign-out.

**As a user, I want it to be clear that I am signed out**
- **Acceptance Criteria:**
  - No personal information is displayed after sign-out.

## 6. Account Deletion

### Goal: Provide full control over user accounts

**As a user, I want full control over my account allowing me to delete it if I wish**
- **Acceptance Criteria:**
  - Users can delete their account after confirmation.
  - All personal data is removed upon deletion.

## 7. Snap Management

### Goal: Facilitate easy and engaging snap management

**As a user, I want to be able to snap a photo of my pet and post it**
- **Acceptance Criteria:**
  - Users can take or upload a photo and post it as a snap.

**As a user, I want to be able to view my snaps**
- **Acceptance Criteria:**
  - Users can see a gallery of their posted snaps.

**As a user, I want to be able to edit my snap**
- **Acceptance Criteria:**
  - Users can edit captions or tags on their snaps.

**As a user, I want to be able to delete my snap**
- **Acceptance Criteria:**
  - Users can delete their snaps.

**As a user, I do not want to be able to dislike my own snap**
- **Acceptance Criteria:**
  - The dislike button is disabled for the user’s own snaps.

**As a user, I do not want to be able to like my own snap**
- **Acceptance Criteria:**
  - The like button is disabled for the user’s own snaps.

**As a user, I want to be able to comment on my own snap**
- **Acceptance Criteria:**
  - Users can comment on their own snaps.

**As a user, I want to be able to like others snaps**
- **Acceptance Criteria:**
  - Users can like snaps posted by others.

**As a user, I want to be able to dislike others snaps**
- **Acceptance Criteria:**
  - Users can dislike snaps posted by others.

**As a user, I want to be able to see other users snaps**
- **Acceptance Criteria:**
  - Users can view a feed or gallery of other users' snaps.

## 8. Comment Management

### Goal: Support robust commenting and interaction on snaps

**As a user, I want to be able to comment on snaps**
- **Acceptance Criteria:**
  - Users can leave comments on snaps.

**As a user, I want to be able to attach a photo of my pet**
- **Acceptance Criteria:**
  - Users can attach a photo in the comment section.

**As a user, I want to be able to include information about my pet**
- **Acceptance Criteria:**
  - Users can add text information about their pet in comments.

**As a user, I want to be able to edit my comment**
- **Acceptance Criteria:**
  - Users can edit their comments after posting.

**As a user, I want to be able to delete my comment**
- **Acceptance Criteria:**
  - Users can delete their comments.

**As a user, I want to be able to view my comments on a snap**
- **Acceptance Criteria:**
  - Users can see a list of their comments on snaps.

**As a user, I want to be able to view others comments on a snap**
- **Acceptance Criteria:**
  - Users can see comments from others on snaps.

## 9. Filtering and Searching

### Goal: Implement effective filtering and searching functionalities

**As a user, I want to be able to filter through my liked snaps**
- **Acceptance Criteria:**
  - Users can filter snaps to only show those they have liked.

**As a user, I want to be able to filter through my disliked snaps**
- **Acceptance Criteria:**
  - Users can filter snaps to only show those they have disliked.

**As a user, I want to be able to search through pet types**
- **Acceptance Criteria:**
  - Users can search snaps by pet types (e.g., dogs, cats).

**As a user, I want to be able to search through pet ages**
- **Acceptance Criteria:**
  - Users can search snaps by pet ages.

**As a user, I want to be able to search through pet breeds**
- **Acceptance Criteria:**
  - Users can search snaps by pet breeds.

**As a user, I want to be able to search through other users snaps**
- **Acceptance Criteria:**
  - Users can search for snaps by other users.

**As a user, I want to be able to search through pet names**
- **Acceptance Criteria:**
  - Users can search snaps by pet names.

# Prioritization and Milestones

## Must Have
- Basic navigation
- Account registration and sign-in
- Basic snap management

## Should Have
- Advanced account management (changing profile picture, username, etc.)
- Comment management

## Could Have
- Advanced filtering and searching


## Won't Have
- Popular users feature

[User Stories Github](https://github.com/users/PennyTrain/projects/8/views/1)
![Screenshot of github user stories](../snapit/src/assets/readme/github-userstories.png)

### WireFrames

- Since the wireframes were made the project has gone through some major changes! Along with that I changed the color scheme to green considering it looked too much like my last project with the blue! 

* Home Page
---
![](../readme/browser-home.png)
![](../readme/phone-home.png)


### Agile Development Methodology

I've used GitHub's project board and issue tracking system to create a smooth development process. By breaking down tasks into user stories and issues. I have understood the Agile principle of incremental development, allowing me to focus on delivering value to users in small, manageable parts. This approach not only helps maintain a clear map for the project but also means that I can respond quickly to changing requirements and priorities, ensuring to stay adaptable and flexible throughout the development cycle.

### Design: Colours and Font

The color scheme, predominantly featuring shades of green, works well together and is particularly suitable for an application called "Snap it," which implies capturing moments or snapshots. Green is often associated with nature, growth, and freshness, which aligns with the theme of sharing photos of pets. The use of various shades of green, complemented by black and white accents, creates a harmonious and visually appealing interface.

Additionally, the chosen font, "Comic Sans MS," adds a playful and informal touch to the design, which is suitable for a platform focused on pets and casual photo sharing. Its rounded edges and relaxed style contribute to a friendly and approachable user experience, fostering a sense of warmth and enjoyment while interacting with the application. Overall, the color scheme and font choice contribute to creating a cohesive and inviting atmosphere for users to engage with Snap it and share moments with their beloved pets.

### CRUD Functionality

SnapIt offers complete Create, Read, Update, and Delete (CRUD) functionality through its user-friendly interface implemented in React and its robust backend powered by Django Rest Framework API.

#### Create
Users can register a new account, allowing them to join the SnapIt community. Once registered, users can create various types of content:
<br />
Comments: 
<br />
Authenticated users can create comments on snaps with additional details such as pet name, age, breed, and type.
<br />
Snaps:
<br />
Users can create new snaps featuring their pets, including images and detailed descriptions.

#### Read
SnapIt ensures that authenticated users can easily access and view content:
<br />
Snaps:
Users can browse and view snaps posted by the community, enjoying a feed filled with pet photos and stories.
<br />
Comments:
Users can view comments on each snap, providing a space for interaction and engagement. 
<br />
User Profiles:
Users can view their profile image and display name, along with those of other community members.

#### Update
SnapIt allows users to update and manage their content seamlessly:
<br />
Profile Updates: Authenticated users can update their profile image, display name, and password to keep their account information current.
<br />
Comment Edits: Users can edit and save comments they have created, ensuring their interactions remain accurate and relevant.
<br />
- Snap Edits: Users can edit snaps they have posted, including updating images and descriptions to reflect any changes.

#### Delete
SnapIt provides users with control over their content by enabling them to delete various elements:
<br />
Comments: Users can delete comments they have created, managing their interactions on the platform.
<br />
Snaps: Users can delete snaps they have posted, allowing them to remove content that is no longer relevant or desired.
<br />
User Accounts: Users can delete their accounts, removing all their data from the platform.
<br />
By offering these comprehensive CRUD functionalities, SnapIt ensures a dynamic, user-centric experience, empowering pet lovers to create, manage, and share content effortlessly.

### Future Improvements

* In the future, I would love to add:

- Pet-Friendly Marketplace:
<br />
A marketplace section allows users to buy and sell pet-related products, from handmade pet toys to grooming supplies. Users can also find services such as pet sitting, walking, and training.

- Pet Care Resources:
<br />
The app includes a library of articles and videos on pet care, training, nutrition, and health. Users can also find recommendations for vets, groomers, and pet-friendly places in their area.

- Adoption and Rescue:
<br />
Snap It partners with animal shelters and rescue organizations to feature pets in need of adoption. Users can browse adoptable pets, share their profiles, and even apply for adoption through the app.

- Community and Groups:
<br />
Users can join or create groups based on their interests, such as specific breeds, pet care tips, or animal rescue efforts. This fosters a sense of community and allows for the exchange of advice, stories, and support among like-minded individuals.

### Reusable Components

- Profile
<br />
Because Profile is self-contained and relies on props, it can be reused across the application wherever profile information needs to be displayed. This reduces code duplication and ensures that any changes to the profile display logic only need to be made in one place.

- Snap
<br />
The Snap component is highly reusable due to its modular design and use of props, which allow it to be easily integrated into various parts of an application with different data. By handling actions like like, dislike, comment, edit, and delete within the component, it centralizes functionality and maintains consistency across the application. Additionally, it adapts to user roles (owner or not) and current user status (logged in or not), enhancing its flexibility and reusability.

- Navbar
<br />
The NavBar component demonstrates reusability through its modular structure, incorporating reusable subcomponents like ProfilePic and LogoutButton. By leveraging props and context, it dynamically adapts to whether a user is logged in or not, offering different navigation links accordingly. The component utilizes useCloseBurgerToggle custom hook to manage the responsive burger menu state, making it adaptable for various screen sizes. CSS modules are used for styling, ensuring that styles are scoped locally to the component and preventing conflicts. Overall, the component's design allows it to be easily integrated and reused across different parts of an application, enhancing maintainability and consistency.

- Profile Pic
<br />
The ProfilePic component is reusable because it is parameterized with props, allowing for customization of the image source, size, and accompanying text. It encapsulates styling using CSS modules, ensuring consistent and conflict-free presentation across different parts of the application. Its simplicity and focused functionality make it easy to integrate into various contexts like user profiles, comment sections, and navigation bars, promoting consistent user interface design.
- Log out Button

### Custom Hooks

#### UseImageUpload

The useImageUpload custom hook in React provides a set of functionalities for handling image upload processes within a component. It manages the image state using the useState hook, allowing for storing the uploaded image's data. The hook also utilizes the useRef hook to keep a reference to the file input element, which is necessary for programmatically triggering the file selection dialog and accessing the selected files.

Specifically, useImageUpload offers several functions: handleChangeImage reads the selected image file and sets its data as the image state using a FileReader; handleOpenFileDialog programmatically opens the file selection dialog; and resetImage clears the image state, resetting it to null. This hook returns these functions and states, along with the image data and file input reference, enabling easy integration of image upload capabilities into any component.

### Frameworks, Libraries and Dependencys

* React-Router-DOM
<br />
react-router-dom - this library enables 'client side routing' for React web applications, and is used to implement basic routing in Snap It, i.e. to implement the links on register, sign-in and sign-out links. And the navbar.
* ReactDOM

* Axios
<br />
Axios - the axios library was chosen to simplify making HTTP requests to the REST API (e.g. not having to manually configure HTTP headers), and because it enables simple implementation of 'interceptors' which are used to request a refresh token in the event of a HTTP 401 error. This enhances the user experience beacuse an authenticated user remains signed in for up to 24 hours, rather than having to sign in again after five minutes.

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

#### Installing requirements.txt
Due to certian packages being required the system nneds to know which ones in order to runt his project as successfully as possible.
* Everytime I installed a new package to use on the development I ran the command `pip freeze --local > requirements.txt`
* This saves the current packages that are required to the requirements.txt file itself. 

* However when Cloning or starting in a new workspaces the content(packages) within the requirements.txt will need to be installed this is done by the following command `pip install -r requirements.txt`

#### Packages Used

* VS Code was used to develop the site
* Git was utilized for version control and transferring files between the code editor and the repository
* GitHub was utilized for storing the files for this project

## Credits
--- 
### Content
---
* The text for all pages was created by myself.
* Icons used for the various links on the site were taken from [Font Awesome](https://fontawesome.com/)
* The reference material on HTML and CSS provided by [w3schools.com](https://www.w3schools.com/)

### Media
---
* The css reset was provided by [css reset](http://meyerweb.com/eric/tools/css/reset/)
* The Favicon, links and meta code were generated by [Realfavicongenerator.net](https://realfavicongenerator.net).

### Resources Used

* The Django documentation was used extensively during development of this project
* The Cloudinary documentation was used extensively during development to setup the configuration between django and the cloudinary apis
* The Code Institute reference material was used as a general reference for things that I had previously done during the course.
* W3 Schools was used as a reference point for HTML, CSS and Python.

### Acknowledgements

* I'd like to thank the following:
- Matt Bodden, for the significant ideas for my project - your guidance truly made a difference!
- Oliver Train, for all his help regarding his patience and pointing me in the right direction.
- Jubril, for all his help during this project as my mentor.
- Code Institute Moments and API Walkthroughs: Code Institute provided valuable learning resources and guidance through moments and API walkthroughs. These helped me understand how to integrate APIs into your app effectively. 
- In crafting Snap It, I found inspiration from my time at the Code Institute, particularly through moments and API walkthroughs. These resources provided invaluable guidance on integrating APIs effectively into my app, influencing my approach to problem-solving and implementation. Additionally, I made extensive use of community resources such as Slack and YouTube throughout the development process. Slack facilitated communication and collaboration, enabling me to discuss ideas and seek assistance from peers, while YouTube served as a rich source of tutorials and insights into various technologies essential for Snap It's development. Overall, the combination of Code Institute's educational materials and Google's platforms significantly contributed to the successful creation of Snap It.


