# Snap It!

## Introduction
This project provides a Django Reszt Framework API for [Snap It app livelink](https://snapit-2fde1c079281.herokuapp.com/) 
Snap It is an innovative social media platform tailored specifically for pet lovers, enabling them to share, connect, and celebrate the joy that animals bring into their lives. Think of Snap It as a specialized version of Facebook, but with a dedicated focus on pets, offering a unique blend of features that cater to pet owners and animal enthusiasts alike.

### User Stories

* Navigation
<br />
	As a user, I want to be able to easily navigate the page
    <br />
	As a user, I want to be able to navigate throughout the site quickly
    <br />
	As a user, I want to be logged in until I decide to log out
    

* Account management
<br />
	As a user, I want to be able to update my profile
    <br />
	As a user, I want to be able to change my profile picture
    <br />
	As a user, I want to be able to change my username
    <br />
	As a user, I want to be able to change my password
    <br />
	As a user, I want to be able to change my bio
    <br />
    As a user, I want to be able to friend other users
    <br />
    As a user, I want to be able to unfriend other users
    <br />
    As a user, I want to see the most popular users

* Account registration
<br />
	As a new user, I want to be able to register a new account
    <br />
	As a new user, I want there to be apparent features I am gaining when creating an account

* Account sign-in
<br />
	As a reoccuring user, I want an account unique to me
    <br />
	As a user, I want it to be clear that I am signed in

* Account sign-out
<br />
	As a user, I want to be able to sign out of my account so that it is secure
    <br />
	As a user, I want it to be clear that I am signed out
	
* Account deletion
<br />
	As a user, I want full control over my account allowing me to delete it if I wish

* Snap Managment
<br />
	As a user, I want to be able to snap a photo of my pet and post it
    <br />
	As a user, I want to be able to view my snaps
    <br />
	As a user, I want to be able to edit my snap
    <br />
	As a user, I want to be able to delete my snap
    <br />
	As a user, I do not want to be able to dislike my own snap
    <br />
	As a user, I do not want to be able to like my own snap
    <br />
	As a user, I want to be able to comment on my own snap
    <br />
	As a user, I want to be able to like others snaps
    <br />
	As a user, I want to be able to dislike others snaps
    <br />
	As a user, I want to be able to see other users snaps
	
* Comment Managment
<br />
	As a user, I want to be able to comment on snaps
    <br />
	As a user, I want to be able to attach a photo of my pet
    <br />
	As a user, I want to be able to include information about my pet
    <br />
	As a user, I want to be able to edit my comment
    <br />
	As a user, I want to be able to delete my comment
    <br />
	As a user, I want to be able to view my comments on a snap
    <br />
	As a user, I want to be able to view others comments on a snap

* Filtering and Searching
<br />
	As a user, I want to be able to filter through my friends uploaded snaps
    <br />
	As a user, I want to be able to filter through my liked snaps
    <br />
	As a user, I want to be able to filter through my disliked snaps
    <br />
	As a user, I want to be able to search through pet types
    <br />
	As a user, I want to be able to search through pet ages
    <br />
	As a user, I want to be able to search through pet breeds
    <br />
	As a user, I want to be able to search through other users snaps
    <br />
	As a user, I want to be able to search through pet names

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

### Future Improvements and Features

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


# RESUBMISSION

Snap It did not meet the standard I aspired to achieve due to a combination of time constraints and illness. Unfortunately, these factors impacted the development process, resulting in certain aspects of the application not meeting the desired level of quality. Time constraints limited the amount of attention and effort I could dedicate to the project, leading to compromises in various areas such as code organization, feature completeness, and user experience. Additionally, dealing with illness further disrupted the development schedule, reducing productivity and making it challenging to focus on implementing improvements and resolving issues effectively.

Here is the feedback I got back

## LO1 - Design an interactive Front-End web application using HTML, CSS and advanced JavaScript, based on component composition and separation of concerns

| Criterion | Meets Criterion | Reason |
|-----------|-----------------|--------|
| 1.1 | No | UX/UI issues present that severely restrict the user’s ability to understand and/or interact with the application. |
| 1.2 | No | JSX code is used for creating a dynamic application but there are issues present with the data manipulation. |
| 1.3 | Yes | The code meets the standards of readability and follows meaningful naming convention as per the defined standards. |
| 1.4 | Yes | The aspects for cross-platform compatibility are considered as the files have been named using the defined conventions e.g., PascalCase for naming components and camelCase for naming hooks. |
| 1.5 | Yes | The deployment process is specific and detailed to the point a user following this documentation could deploy the project without referencing outside resources. Steps on how to fork or clone the project may be included. |
| 1.6 | Yes | No sensitive information exists in the code base. Environment variables and .gitignore files have been used effectively. |
| 1.7 | Yes | React components have been used to implement modular functionality. There are separate JS and CSS files for different components in the codebase. |
| 1.8 | Yes | Functional and/or Class components have been used to build the application. |
| 1.9 | Yes | Minor UI responsive issues are present on different device sizes, however the application is usable across a range of device sizes. |
| 1.10 | Yes | Most user interactions in the application are handled effectively, however there are some inconsistencies in certain interactions due to mishandled events in the code base. |
| 1.11 | Yes | Most user actions run without issues in the application, however some actions may be encumbered by UI issues and/or do not produce expected results. |
| 1.12 | No | Manual testing steps are missing or lacking in any meaningful detail for the Front-End application. |
| 1.13 | Yes | Git usage is consistent, atomic commits have been made and commit messages clearly indicate the individual code change/documentation update being made within the commit. |
| 1.14 | Yes | The application is deployed successfully to a hosting platform such as Heroku and matches up to submitted content. |

Additional Notes:
- The application has a simple interface but is shipped with multiple functionality issues. For instance, UX/UI issues are prevalent such as lack of error messages on mismatched passwords in signup form, missing error messages on incorrect password entry in sign-in form, and "Page not found!" errors after logging in to edit profile options. Additionally, comment forms lack user feedback and unnecessary data fields are required without display purpose. Contrast issues and lack of testing details in the front-end readme are also noted.


## LO2 - Explain the key role that specialist Front-End developers perform in modern software development/delivery teams

| Criterion | Meets Criterion | Reason |
|-----------|-----------------|--------|
| 2.1 | Yes | Good understanding of React architecture displayed by the documentation of the reuse of React components. |
| 2.2 | Yes | The design process and its reasoning are documented, but could be improved. |
| 2.3 | Yes | A general description is present of the intention for the application. |
| 2.4 | Yes | User stories are present, but are not aligned specifically to project goals. |
| 2.5 | Yes | Agile methodologies have been implemented, however they can be expanded on. For example, by segmenting the development process into sprints with a dedicated GitHub project for each sprint. Additionally, user stories can be prioritized following the MoSCoW method through the use of GitHub labels and clear acceptance criteria identified for each issue. |
| 2.6 | Yes | The use of Front-End libraries is documented in the README, including the values provided by these libraries. The choices are well justified. |

Additional Notes:
- The readme documents the component reusability for this application. The project purpose is included, and the user stories have been aligned accordingly. However, it would be beneficial to explicitly identify the project goals and map the user stories to these goals. 
- The design documentation contains the color scheme and typography details, but wireframes are missing. Including wireframes for different pages and screen sizes would enhance clarity.
- The libraries used for this application are listed along with the reasoning behind their selection.
- Agile development tools such as GitHub issues and project board are used for project management, but there is room for improvement. User stories lack defined tasks and acceptance criteria, and labels are not created using the MoSCoW method to prioritize them. Milestones should be created to map epics and associate user stories with them. User stories marked as 'Done' in the project board should be closed in GitHub issues for clarity and completeness.


## LO3 - Create an Application Programming Interface (API) for consumption by 3rd party applications

| Criterion | Meets Criterion | Reason |
|-----------|-----------------|--------|
| 3.1 | Yes | The backend has been developed using the Django Rest Framework, which allows users to store and manipulate data records. |
| 3.2 | Yes | There is scope for further customization on the existing custom Django models. |
| 3.3 | Yes | Modest attempt to follow code standards with minor inconsistencies (e.g., not all functions contain docstrings, some long lines, etc.). |
| 3.4 | Yes | Demonstration of excellence displayed by custom code implementation of Python logic and idioms. |
| 3.5 | Yes | The codebase includes permissions, serializers, and class-based views. |
| 3.6 | Yes | The database schema for the application indicates a good understanding of the creation of related database models and their roles in REST API development. |
| 3.7 | Yes | CRUD operations are well-implemented for the API records. Users can perform Create, Update, and Delete operations for the frontend for models on the backend without issues. |
| 3.8 | Yes | Users can register and login to the application without issues. |
| 3.9 | Yes | Users are unable to effect changes to the database beyond the permissions assigned to them. |
| 3.10 | Yes | A full set of manual tests is present to indicate how all aspects of the Back-End application were tested to ensure good working order. Individual testing steps are detailed, along with actual outcomes of tests. |
| 3.11 | Yes | Git usage is consistent, atomic commits have been made, and commit messages clearly indicate the individual code change/documentation update being made within the commit. |
| 3.12 | Yes | The application has been deployed successfully to a cloud-based hosting platform where it is running without issues and matches the submitted content. |
| 3.13 | Yes | Environment variables have been used to hide all sensitive information from the final code. |
| 3.14 | Yes | The deployment process is present and detailed to the extent that a user could deploy the project based on the information provided without having to consult an alternate resource. |

Additional Notes:
- The backend of the application utilizes the Django Rest Framework, enabling seamless user registration and login functionality. Multiple models support data storage and manipulation operations on the UI, demonstrating a good understanding of database principles.
- Security aspects are well considered, with sensitive information like secret keys hidden using environment variables. The readme effectively documents the testing and deployment process, reflecting high-quality standards for the project.


## LO4 - Create an Interactive Front-End application that consumes API data

| Criterion | Meets Criterion | Reason |
|-----------|-----------------|--------|
| 4.1 | No | Expected CRUD routes are not accessible. |
| 4.2 | Yes | Appropriate notifications and/or automatic redirects implemented to inform users of successful CRUD operations. |
| 4.3 | No | API data is not displayed effectively on the front end, or is not manipulatable, such as to severely hamper user experience. |
| 4.4 | Yes | The exception handling is present for the API calls, e.g., if an API call is made for a non-existent resource, then it contains 'Not Found' in the details. |
| 4.5 | Yes | No major issues impacting functionality of the application. |
| 4.6 | Yes | At least two forms present for the enactment of CRUD functionality. Forms largely have appropriate validation with some exceptions, and/or messaging may not be clear to the users in cases of non-valid data entry. |
| 4.7 | Yes | Clear indication present to indicate login status to the user either in the main navigation or through some other UI element, such that there is no room for confusion/interpretation on behalf of the user. |
| 4.8 | Yes | No commented out code present. All links return status 200. Internal links work without issue. |

Additional Notes:
- The application successfully supports CRUD operations on the front end. However, there is a missing feature related to displaying notifications for these operations on the UI, which would provide real-time feedback to users for all data changes.
- The forms allow users to create, edit, and delete records from the UI, with proper validation checks to ensure only valid data entry. However, improvements are needed:
  - Ensure the snap creation form is accessible only to logged-in users to enhance security.
  - Validate the pet age field to accept only positive integers on the snap creation form.
- Each post displays all comments created, regardless of whether they are intended for that specific post, which may affect user experience.
- The navigation menu shows different labels based on the user's login status, which effectively indicates login status to users.

