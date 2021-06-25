# Cool Car App 
A react app that needs to be built within 3 hours timeframe.

# Discuss Result and Explanation

## Timing
* I have set myself 3 hours as requirement to do this task. But it is more time-consuming than I think. Start Time : 10 a.m, End Time : 1 p.m on Friday 25 Jun 2021

## Result and What would I do differently
* The result is closely match with what is required in terms of UI/UX, with some functionality not perfectly built. Due to the time constraint, I did not have time to implement unit testing, as well as set up Redux Slice for easy state management. And as it is only one level down so I used prop drilling to pass prop down.

* What missing is : 
- Form Validation, I did not have time to implement this, If I have time I will use Formik and Yup.
- Brand Selection, I should have implemented State and an onChangeHandler for the form, instead I used useRef, that created a lot of trouble when I want to get the value of Brand using Select and Option element, in the end I opt to use Text instead of dropdown select/option element.

## Conclusion :
* The app is built with a nice UI/UX and functionality as close to description as possible, with some not perfectly built. The only constraint that limits this app performance is timing. For me 2-3 hours is not enough to build this project as it also takes time to find photos etc. If I have more time then I will try to improve this app even better.





==========================================

* You have been asked to develop a front end by Fast Exotic Cars Pty Ltd
* The goal is to create a place for people to log and show off their "cool" cars

The application will consist of
* A dashboard showing a summary
* Details of each vehicle
* Information about how much the price of the vehicle has fallen
* Ability to add and remove vehicles

## Business Requirements
* You can only add cars from "cool" companies (as defined by Fast Exotic Cars Pty Ltd)
* Users will need to add in the purchase price of the vehicle when adding
* The UI/UX should be "exciting" to use and to show others

## Technical Constraints
* React or React Native
* Single Page Application is required for React
* Typescript is good to have, but not mandatory
* No persistent storage required
* No backend required

## Expectations

We're not just looking for any old solution that would solve the problem. We're looking for:

* production quality code
* good Object Oriented or functional practices
* a solid testing approach
* well thought out naming
* solid error handling
* extensibility/maintainability
* good design
* separation of concerns
* sensible breakdown of code into files/modules
* use of best practices when it comes to JS, CSS, testing etc.
* appropriate use of tools/frameworks

Basically treat the coding test as if it's part of a larger problem.

Please try to limit your time on this project to 2-3 hours.
If you don't have time to implement something please document it in the README and discuss what you would do with more time during the interview.
If you have any designs outside of code please bring them to the interview

Thank you!
