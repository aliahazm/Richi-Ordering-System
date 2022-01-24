# INFO 4302 Mobile Application Development 
# Group Project Report
# Project Title: Richi Ordering System
## Group: G
## Group Members

1. Muhammad Aidil Fahmiey Bin Osman (1819369) 
2. Ayunni Jasmine Binti Abdul Aziz @ Muhiyiddin (1816714)
3. Nor Aliah Binti Noor Azman (1814422)
4. Normunawwarah Binti Sanaludin (1810070)
5. Nur Farah Atiqah Binti Mohd Zahid (1817356)
6. Nur Sabrina Fasha Binti Zaidi Sham (1813526)

## Introduction
Currently, Richiamo Coffee's ordering system is still following the traditional way where customers have to order and make payment over the counter. It is quite a hassle when customers have to wait for a long queue just to make an order and then wait again to receive the order. Therefore, Richi Ordering System has been decided for this project to help make ordering easier and efficient for the customers and also the staffs. This system can help customers to make orders just from their smartphones without having to go to the counter.

## Objectives 
1. To ensure the smoothness of ordering process by making it more efficient.
2. To ensure that customer can order faster without having to go to the counter.
3. To help shorten the time in completing each order.

## Features and Functionalities of the Proposed Mobile Application
### Register and Login
Users are allowed to register an account in order to use this system and just login afterwards.  

<img src="https://user-images.githubusercontent.com/55779808/147249840-0414a599-b793-4379-a7a8-c67773a017bf.png" width=20% height=20%> <img src="https://user-images.githubusercontent.com/55779808/147249711-185289ad-1ab1-4496-aef3-e6447d4b0b33.png" width=20% height=20%>

### Menu Category and Listing
Menu page shows the list of menus that are available in Richiamo Coffee from which users can choose in the categories provided.

<img src="https://user-images.githubusercontent.com/55779808/147248288-984592fc-3063-46c7-aa85-f812ea3536d5.png" width=20% height=20%> <img src="https://user-images.githubusercontent.com/55779808/147248480-a8abf0fd-5fb5-4b5c-b540-48cb41ab3688.png" width=20% height=20%>

### Create Order
Users can place orders by clicking on any of the items from the menu list and then confirm the order before submitting it.

<img src="https://user-images.githubusercontent.com/55779808/147248983-893d4538-3bd2-418e-b389-bafb3ddc4889.png" width=20% height=20%> 

### Order Tracking
The current and past orders that the users have made will be displayed in the My Order page. Users can track all of their orders even from different outlets. 

<img src="https://github.com/aliahazm/Richi-Ordering-System/blob/main/My%20Order.png" width=20% height=20%> <img src="https://github.com/aliahazm/Richi-Ordering-System/blob/main/My%20Order%20Sequence.png" width=20% height=20%> 

### Account and Edit Profile
This Account page allows the user to view and edit their account information.

<img src="https://github.com/aliahazm/Richi-Ordering-System/blob/main/Account.png" width=20% height=20%> <img src="https://github.com/aliahazm/Richi-Ordering-System/blob/main/Account%20Sequence.png" width=20% height=20%> <img src="https://github.com/aliahazm/Richi-Ordering-System/blob/main/Account%20Sequence%202%20%E2%80%93%201.png" width=20% height=20%> 

## Interactions of the Proposed Mobile Application

<img src="https://github.com/aliahazm/Richi-Ordering-System/blob/main/SequenceDiagram.png" width=50% height=50%>

#### Navigation
1. We will have a login and sign up page.
2. After logging in, user will be at homepage.
3. There will be three buttons at the bottom navigation bar.
4. **Home button** will return the user to the homepage.
5. User can also check their current order and click the order received button if the order is being delivered.
6. **Menu button** will redirect user to the menu page with few categories that can be choose.
7. If the user select their preffered category, they will be redirect to the next page which display the menu in the category in detail.
8. User can make their order in that page by clicking the order now button in the page.
9. There will be an order confirmation page that display the menu that being selected by the user before they can proceed to order it.
10. **Account button** will redirect user to the user account detail page which display their private information.
11. User can alter their information in the account page.

#### Components
1. We will be using a lot of **Button** components in this project.
2. Next there will be a few **TextInput** components to capture some input from the user.
3. We're also planning on using some **Touchable** components in this project to make it more interactive.
4. **Scroll View** components will be use in this project to display more content to the user.

## Richi Ordering System Screens

### Sign Up Page
<img src="https://github.com/aliahazm/Richi-Ordering-System/blob/main/signup.jpg" width=20% height=20%>

Sign Up page help the new user to register a new account in order to gain access to the application. To register, user need to fill in a few information such as name, email, phone number and password. Below the text input field, there is button for user to pressed to able them to register. However, for the regular user that already have an account, there is a link below the button for them to click and they will be redirect to the login page.

#### Navigation and Components
1. [TouchableOpacity](https://github.com/aliahazm/Richi-Ordering-System/blob/master/components/signup.js) : This component by react native is used in this page to make the 'Sign Up' title touchable as a button. This button will navigate user to the Login page and execute the 'registerUser() function if pressed.
2. [TextInput](https://github.com/aliahazm/Richi-Ordering-System/blob/master/components/signup.js) : This component write input field value from the user (name, email, password and phone number ). This component can be subscribe to the onChangeText events to read the user input.

### Login Page 
<img src="https://github.com/aliahazm/Richi-Ordering-System/blob/main/login.jpg" width=20% height=20%>

Login page help user to login to the applications with their credential such as email and password. However, if the user that are in the Login page did not have an account or want to create new account, they can pressed the link below the Sign In button to go to the Sign Up page.

#### Navigation and Components
1. [TouchableOpacity](https://github.com/aliahazm/Richi-Ordering-System/blob/master/components/login.js) : This component by react native is used in this page to make the 'Sign Up' title touchable as a button. This button will navigate user to the Home page and execute the 'userLogin() function if pressed.
2. [TextInput](https://github.com/aliahazm/Richi-Ordering-System/blob/master/components/login.js) : This component write input field value from the user (email, and password). This component can be subscribe to the onChangeText events to read the user input.

### Home Page

<img src="https://github.com/aliahazm/Richi-Ordering-System/blob/main/HomeScreen1.jpg" width=20% height=20%> <img src="https://github.com/aliahazm/Richi-Ordering-System/blob/main/HomeScreen2.jpg" width=20% height=20%>

Home Page welcomes and allows user to view the sneak peek of the latest news, menus or promotions from Richiamo Coffee. Additionally, there shortcut buttons provided which will direct user to hot pick menu categories page at Richiamo Coffee which are Hot Beverages, Cold Beverages and Ice Blended Menu Page. At the bottom part of the page, there is 'Recent Orders' section to allow user to view two recent order history summary. There is also a button situated next to the 'Recent Orders' title, which if pressed by the user will navigate user to the My Orders page.

#### Navigation and Components
1. [DisplayName](https://github.com/aliahazm/Richi-Ordering-System/blob/master/components/DisplayName.js) : This component is created to display welcome message to user, by calling user's name from the Firebase which has been input during the registration.
2. [ImageSlider](https://github.com/aliahazm/Richi-Ordering-System/blob/master/app/components/ImageSlider.js) : This component is created to present an image slider to provide latest news, promotions and menus in Richiamo Coffee by user's sliding action.
3. [AppButton](https://github.com/aliahazm/Richi-Ordering-System/blob/master/app/components/AppButton.js) &  [Shortcut Buttons](https://github.com/aliahazm/Richi-Ordering-System/blob/master/app/screens/Home.js) : AppButton is a component created which to make it reusable for the display of shortcut buttons in the page. This component is called at the Home screen code implementation by entering props such as title, color and onPress function. The shortcut buttons will navigate user to Hot Beverages, Cold Beverages and Ice Blended Menu Page, if pressed.
4. [TouchableOpacity](https://github.com/aliahazm/Richi-Ordering-System/blob/master/app/screens/Home.js) : This component by react native is used in this page to make the 'Recent Orders' title touchable as a button. This button will navigate user to the My Order page if pressed.
5. [Bottom Tab Navigation](https://github.com/aliahazm/Richi-Ordering-System/blob/master/app/navigation/AppNavigator.js) : This component is created as a tab navigator to allow user to easily navigate to the main functions of the application which are Home Page, Menu Page, Outlet Page and My Account Page.

### My Order Page

<img src=https://github.com/aliahazm/Richi-Ordering-System/blob/main/MyOrder-1.PNG width=20% height=20%> <img src=https://github.com/aliahazm/Richi-Ordering-System/blob/main/MyOrder-2.PNG width=20% height=20%>

My Order Page allows users to see the details of their current order in progress and the details of their past orders. This page also allows users to give approval when they have received their order by clicking on the Order Received button.

#### Components
1.  [TouchableOpacity](https://github.com/aliahazm/Richi-Ordering-System/blob/master/app/screens/MyOrder.js) : This component by react native is used in this page to make the 'Order Received' as a button. This button triggers an alert with a message "Thank you for your order!".
2.  [MyOrderCard](https://github.com/aliahazm/Richi-Ordering-System/blob/master/app/components/MyOrderCard.js) : This component is created for styling purposes to display the details of past orders.

### Menu Page
<img src=https://github.com/aliahazm/Richi-Ordering-System/blob/main/Menu_Category.jpg width=20% height=20%> <img src=https://github.com/aliahazm/Richi-Ordering-System/blob/main/Menu_List.jpg width=20% height=20%>

Menu Page allows user to choose which category the user wants to order. When clicked on one of the categories, the user will be able to view the list of menus available and it will also display the list of name and price. Once the user click on one of the listed menu, it will display the button add quantity and the "Order Now" button will redirect to add to cart page and displays the total amount. Finally, the user will click "Place Order" button to send the order to the restaurant. 

#### Components
1.  [TouchableOpacity](https://github.com/aliahazm/Richi-Ordering-System/blob/master/app/components/MenuCategory.js) : This component by react native is used in this page to navigate to the chosen category page. When it is clicked, the page will be navigated to the screenDisplay initialized in the menuCategory array.  

### Outlet Page
<img src="https://github.com/aliahazm/Richi-Ordering-System/blob/main/map.jpeg" width=20% height=20%>

Outlet page allows user to see the location of outlet available that may be ease for them to find the nearest one. This page also shows the pinned location as well as the name of the outlet.

#### Components
1.  [Map](https://github.com/aliahazm/Richi-Ordering-System/blob/master/components/map.js) : This component is created to display the map that will show the exact location of each available outlet.
2.  [Callout](https://github.com/aliahazm/Richi-Ordering-System/blob/master/components/map.js) : This components by react native maps is used in this page to show the name of the outlet once user clicked on the pinned location.

### My Account Page
<img src="https://github.com/aliahazm/Richi-Ordering-System/blob/main/MyAccount-1.PNG" width=20% height=20%> <img src="https://github.com/aliahazm/Richi-Ordering-System/blob/main/MyAccount-2.PNG" width=20% height=20%>

My account page displays all information that related to the user such as profile photo, name, etc and also enables users to update their details. There’s also Logout button that can use to end the user session and then redirect them to the login page. 

#### Components
1. [TouchableOpacity](https://github.com/aliahazm/Richi-Ordering-System/blob/75fc513a4561ce4dfbb4bc9e7222dafcf8ef6ff7/components/Profile.js) : this component by react native is used in this page to make the ‘Logout’ button title touchable as a button. This button will end user session and navigate them to the login page. 

## Project Constraint

In this section, an overview regarding the limitations that occurred during the development of the project will be defined. Some of the major constraints that occurred are as follows :

1. The sudden changes made towards the end of project completion which results in not enough resources to deliver the promised quality.
2. The limitation in terms of skills in using React Native and JavaScript programming language as we learn it in only 4 months time especially for the database part.
3. The features applied are mostly beyond from what we have learned in the class. The complexity of the features are hardly to apply as we have learned only the basics in a short period of time.
4. //
5. //
6. //


## References
1. Pusher logo&gt;. Create a food ordering app in React Native - Part 1: Making an order. (n.d.). Retrieved December 28, 2021, from https://pusher.com/tutorials/food-ordering-app-react-native-part-1/ 
2. Rufo, P. (2019, June 17). Design for the dark theme. Medium. Retrieved December 28, 2021, from https://medium.com/snapp-mobile/design-for-the-dark-theme-9a2185bbb1d5 
3. [YouTube Presentation Link](https://youtu.be/AhT93tzOUSo), from https://youtu.be/AhT93tzOUSo
4. [Richi Ordering System Mock Up](https://xd.adobe.com/view/b67f2a9b-1de6-40ee-86bf-301dff9aaff5-e32c/), from https://xd.adobe.com/view/b67f2a9b-1de6-40ee-86bf-301dff9aaff5-e32c/

## Task Distributions

| Group Member     | Mobile Application Development | Final Report     |
| :---:        |    :----   |          :--- |
|    Aidil   | Sign Up Page, Login Page, User Authentication, Components, Use of Media     | Richi Ordering System Screens (Sign Up Page, Login Page), Project Constraints |
|    Ayunni  | Menu Pages, Firebase for Data Storage, Components, Use of Media      | Richi Ordering System Screens (Menu Page), Project Constraints |
|    Aliah   | My Order Page, Styling, Components, Use of Media     | Richi Ordering System Screens (My Order Page), Project Constraints |
|    Normunawwarah   | My Account Page, Outlet Page, APIs, Components, Use of Media    | Richi Ordering System Screens (Outlet Page, My Account Page), Project Constraints |
|    Farah   | Menu Category Page, Firebase for Data Storage, Components, Use of Media      | Richi Ordering System Screens (Menu Page), Project Constraints |
|    Sabrina   | Home Page , Navigations, Components, Use of Media       | Richi Ordering System Screens (Home Page), Project Constraints |



