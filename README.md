# Snap It!

## Introduction
This project provides a Django Reszt Framework API for [Snap It app livelink](https://snapit-2fde1c079281.herokuapp.com/) 
Snap It is an innovative social media platform tailored specifically for pet lovers, enabling them to share, connect, and celebrate the joy that animals bring into their lives. Think of Snap It as a specialized version of Facebook, but with a dedicated focus on pets, offering a unique blend of features that cater to pet owners and animal enthusiasts alike.
![Am I responsive? Screenshot](/src/assets/readme/amiresponsive.png)

## Table of Contents
1. [Introduction](#introduction)
2. [Project Goals](#project-goals)
3. [User Stories](#user-stories)
4. [Prioritization and Milestones](#prioritization-and-milestones)
5. [Wireframes](#wireframes)
6. [Features](#features)
7. [Agile Development Methodology](#agile-development-methodology)
8. [Design: Colours and Font](#design-colours-and-font)
9. [CRUD Functionality](#crud-functionality)
10. [Future Improvements](#future-improvements)
11. [Reusable Components](#reusable-components)
12. [Custom Hooks](#custom-hooks)
13. [Frameworks, Libraries, and Dependencies](#frameworks-libraries-and-dependencies)
14. [Credits](#credits)
15. [Acknowledgements](#acknowledgements)7

### [Click here to see resubmission details!](./RESUBMISSION.md)
### [Click here to see all the testing!](./TESTING.md)



### Project Goals

1. Provide an intuitive and seamless user experience for navigating the site.
2. Enable comprehensive account management features.
3. Facilitate easy and engaging snap management.
4. Support robust commenting and interaction on snaps.
5. Implement effective filtering and searching functionalities.

### User Stories

- [Click here to view the user stories on github](https://github.com/users/PennyTrain/projects/11/views/1?sortedBy%5Bdirection%5D=asc&sortedBy%5BcolumnId%5D=Labels)

- Here is a screenshot of them
![Screenshot of github user story board](/src/assets/readme/github-stories.png)

- And heres an EPIC 
![Screenshot of EPIC](/src/assets/readme/Epic.png)

### 1. Navigation

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

### 2. Account Management

### Goal: Enable comprehensive account management features

**As a user, I want to be able to update my profile**
- **Acceptance Criteria:**
  - Users can change their personal information (name, etc.).

**As a user, I want to be able to change my profile picture**
- **Acceptance Criteria:**
  - Users can upload and save a new profile picture.

**As a user, I want to be able to change my username**
- **Acceptance Criteria:**
  - Users can update their username, given it’s unique.

**As a user, I want to be able to change my password**
- **Acceptance Criteria:**
  - Users can change their password.

**As a user, I want to be able to change my bio**
- **Acceptance Criteria:**
  - Users can add/edit a bio on their profile.

### 3. Account Registration

### Goal: Facilitate easy and engaging account registration

**As a new user, I want to be able to register a new account**
- **Acceptance Criteria:**
  - Registration form includes fields for username and password.

**As a new user, I want there to be apparent features I am gaining when creating an account**
- **Acceptance Criteria:**
  - Features of having an account are highlighted on the registration page.

### 4. Account Sign-In

### Goal: Support secure and unique user accounts

**As a recurring user, I want an account unique to me**
- **Acceptance Criteria:**
  - Unique usernames and passwords are enforced.

**As a user, I want it to be clear that I am signed in**
- **Acceptance Criteria:**
  - User’s name or profile picture is displayed when logged in.

### 5. Account Sign-Out

### Goal: Ensure user account security

**As a user, I want to be able to sign out of my account so that it is secure**
- **Acceptance Criteria:**
  - A clear sign-out button is available.
  - Sessions are terminated after sign-out.

**As a user, I want it to be clear that I am signed out**
- **Acceptance Criteria:**
  - No personal information is displayed after sign-out.

### 6. Snap Management

### Goal: Facilitate easy and engaging snap management

**As a user, I want to be able to snap a photo of my pet and post it**
- **Acceptance Criteria:**
  - Users can take or upload a photo and post it as a snap.

**As a user, I want to be able to view my snaps**
- **Acceptance Criteria:**
  - Users can see a gallery of their posted snaps.

**As a user, I want to be able to edit my snap**
- **Acceptance Criteria:**
  - Users can edit on their snaps.

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

### 7. Comment Management

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

### 8. Filtering and Searching

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

## Prioritization and Milestones

### Must Have
- Basic navigation
- Account registration and sign-in
- Basic snap management

### Should Have
- Advanced account management (changing profile picture, username, etc.)
- Comment management

### Could Have
- Advanced filtering and searching

### Won't Have
- Popular users feature

--- 

## Milestones
#### Milestone 1: Basic Navigation and Account Management (MVP)

* Implement basic navigation bar and session persistence (1.1, 1.2, 1.3).
* Allow users to register, sign in, and sign out (3.1, 4.1, 4.2, 5.1, 5.2).
* Enable users to update their profile (2.1, 2.2, 2.3, 2.5).

#### Milestone 2: Core Snap and Comment Management (MVP)

* Implement snap posting, viewing, liking, and disliking (6.1, 6.2, 6.5, 6.6, 6.8, 6.9, 6.10).
* Allow users to comment on snaps and view comments (7.1, 7.5, 7.7).

#### Milestone 3: Advanced Search and Filtering (MVP)

* Implement basic search functionalities (8.3, 8.4, 8.5).

#### Milestone 4: Enhancements and Additional Features

* Enable profile picture updates and password changes (2.4).
* Implement snap editing and deletion (6.3, 6.4, 6.7).
* Enhance comment functionalities (7.2, 7.3, 7.4, 7.6).
* Implement additional filtering and search features (8.1, 8.2, 8.6, 8.7).


### WireFrames

- This is the Snap It view of the homepage when not currently logged in!
- ![](/src/assets/readme/frame-a.png)
---
- This is the Snap It view of the homepage when users try to like, dislike or comment on any snap.
I have also used this method to display a "You cannot like your own snaps" for when the user is the owner.
- ![](/src/assets/readme/frame-b.png)
---
- This is the Snap It view of the homepage when the user is logged in.
- ![](/src/assets/readme/frame-c.png)
---
- This is the Snap It view of the homepage when the user is logged in and has interacted by disliking/liking the snaps.
- ![](/src/assets/readme/frame-d.png)
---
- This is the Snap It view of the snap when clicked on, the comments will be listed underneath!
- ![](/src/assets/readme/frame-e.png)
---
- This is the Snap It view of the snap when the edit button is clicked on taking the user to a pre-populated form to make changes.
- ![](/src/assets/readme/frame-f.png)
---
- This is the Snap It view of the snap when the Add Snap button is clicked, taking the user to a form to fill out.
- ![](/src/assets/readme/frame-g.png)
---
- This is the Snap It view of the snap when the owner clicks on their own snap. Displaying a hamburger button that when clicked offers to update or delete the snap.
- ![](/src/assets/readme/frame-h.png)
---
- This is the Snap It view of the comment form.
- ![](/src/assets/readme/frame-i.png)
---
- This is the Snap It view of the comment edit 
form with the fields already filled with previous data!
-![](/src/assets/readme/frame-j.png)
---
- This is the Snap It view of a users profile.
- ![](/src/assets/readme/frame-k.png)
---
- This is the Snap It view of a users profile, when the user is the owner.
- ![](/src/assets/readme/frame-l.png)
---
- This is the view of when you want to edit your own profile
- ![](/src/assets/readme/frame-m.png)
--- 
- Snap it view from a mobile device
- ![](/src/assets/readme/frame-n.png)
--- 
- Snap it detail view from a mobile device
- ![](/src/assets/readme/frame-o.png)
--- 
- Snap it create view from a mobile device
- ![](/src/assets/readme/frame-p.png)
---
- Snap it profile view on mobile
- ![](/src/assets/readme/frame-q.png)
---
- Snap it view from a mobile device, navbar drop down display.
- ![](/src/assets/readme/frame-r.png)
---



### Features

#### Snap
![Snap screenshot](/src/assets/readme/snap.png)
- View individual snaps shared by users.
---

#### Create Snap
![Create comment screenshot](/src/assets/readme/create-snap.png)
- Easily create and share a new snap with the community.
---

#### Edit Snap
![Edit comment screenshot](/src/assets/readme/edit-comment.png)
- Edit your previously shared snaps.
---

#### Comment
![Comment screenshot](/src/assets/readme/comment.png) 
- Comment on snaps to engage with other users.
--- 

#### Create Comment
![Create comment screenshot](/src/assets/readme/create-comment.png) 
- Add a new comment to a snap to join the conversation.
--- 

#### Edit Comment
![Edit comment screenshot](/src/assets/readme/edit-comment.png)
- Modify your existing comments on snaps.
--- 

#### Profile
![Profile screenshot](/src/assets/readme/profile.png)
- View your profile with all your snaps and personal information.
--- 

#### Profile Edit
![Profile edit screenshot](/src/assets/readme/profile-edit1.png)
- Edit your profile details to keep your information up-to-date.
---

#### Username Change
![Profile username change screenshot](/src/assets/readme/profile-edit2.png)
- Change your username to personalize your profile.
---

#### Password Change
![Profile password change screenshot](/src/assets/readme/profile-edit3.png)
- Update your password for better security.
---

#### Login Form
![Login form screenshot](/src/assets/readme/login-form.png)
- Log in to your account to access personalized features.
--- 

#### Register Form
![Register form screenshot](/src/assets/readme/register-form.png)
- Register a new account to join the Snap It community.
---

#### Dislike Filter
![Dislike filter screenshot](/src/assets/readme/dislike-filter.png)
- Filter snaps by the number of dislikes via the search bar.
--- 
#### Like Filter
![Like filter screenshot](/src/assets/readme/like-filter.png)
- Filter snaps by the number of likes via the search bar.
---

#### Owner Filter
![Owner filter screenshot](/src/assets/readme/owner-filte.png)
- Filter snaps by their owner via the search bar.
--- 
#### Pet Filter
![Pet Filter Screenshot](/src/assets/readme/filter-pet.png)
- Filter snaps by the type of pet via the search bar.
---


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


