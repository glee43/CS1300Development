README

● Instructions on how to run your code if you submit your local files: 

Please navigate to the downloaded folder and run these commands:
npm install
npm start

● A paragraph about how your interface relates to the user interface design principles we have learned in class, how data is passed down through your components, and how user interactions can trigger changes in the state of components:

The interface has high learnability because users can easily accomplish a task during their first encounter and quickly become efficient at that task, high memorability because it is relatively easy for returning users to remember how to use the interface, and high efficiency because users can become very productive once they full understand how to work the interface. Also, the system miminizes the user's memory load and constantly keeps users informed about what is going on with clearly labeled and brightly colored labels and buttons. The search bar follows most user models and is clearly displayed at the top of the page as "Search by character name!" Careful design ensures consistency and standards: all of the filters and buttons are aligned along the top, and the display of characters adjusts according to the number of characters selected by the filter to maintain aesthetic. Each character has a "Favorite" button and lists the same types of features and relevant filter information below a clearly labeled image. Mistakes are never fatal or recoverable, as clicking on the wrong filter or mistyping a character name in the search bar can easily be altered, and a "Revert" button enables easy undoing of the filters. Data is passed down through components from the parent component to the child components (Character, FilteredList, and List) by passing the parent values as props of the cilld components. User interactions with the search bar, six filters/buttons across the top of the page, and individualized "Favorite" buttons for each character can trigger changes in the state of components. For example, if a user chooses to "Show Favorites!"/"Uncheck Favorites", the button will, respectively, either display only the characters the user selected using the "Favorite" buttons or undo said display to show all characters (with the user's favorites still indicated). Or, if a user chooses the filter "Zelda" from the "Franchise" dropdown, only characters with the "Zelda" listed as their "Franchise" label will be displayed.

"Show Favorites!"/"Uncheck Favorites", "Favorite" buttons beneath each character, and a "Revert" button trigger changes 

● A sentence or two on the high-level goal of your application and why it might be valuable to a user:

The high-level goal of the application is to create a fun and effortless way to filter your Smash Melee characters! It may be valuable to users who are new to Smash and simply interested in learning more about the different characters or to more experienced users looking for a quick system to filter their favorite characters.  

● A clear explanation of the purpose of your webpage to someone who is not familiar with the project, just as it states in the style guide:

Having trouble sifting through all the Smash Melee characters or want to learn more about their characteristics? Then this application might be just right for you! It is a fun and easy index of all the different Smash Melee characters that can be sorted in many different ways, from alphabetical ordering to a personalized listing of your favorites! 
