# ASSESSMENT 6: Interview Practice Questions

Answer the following questions.

First, without external resources. Challenge yourself to answer from memory.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely on your own, there is always something more to learn. Write your researched answer in your OWN WORDS.

1. As a developer, I am creating a Rails application with a model called Cohort that has_many students, but OOPS! I forgot to add the foreign key. How can I fix this mistake? What is the name of the foreign key? Would the foreign key be on the Cohort model or the Student model?

Your answer:

You can fix this mistake by creating a foreign key. The name would be modelname_id and it will be in the student model.

Researched answer:

If you forget to a foreign key, we can create a migration to update our database. By convention, the name of the foreign key would be model_id and the data would be integer.In our case it would be Student id:, and this foreign key would be assigned to the Student model, to create association between the Cohort model and the Student model. 

We have used foreign keys many times during our challenges, and example would be when we were assigning many credit cards to an owner in the banking challenges.

2. Which RESTful routes must always be passed params? Why?

Your answer: 

The Restful routes that must be passed params are show, update and delete, because we must specify exactly we we want our users to be able to update, delete and get.

Researched answer:

The Restful routes that must be passed params are;

Show route: Requires params to be able to find required item by the params id

example: get '/resource/:id' => 'resources#show'
----------------------
Update route: Requires params to be able to update an existing item in the database. in order to update an item, I have to have the id of the item, Id gets passed by params.

example: put/patch '/resources/:id' => 'resources#update'
---------------------
Delete route: In order to be able to know what we are deleting, the delete action is mapped to resources/:id as shown below

example: delete '/resources/:id' => 'resources#destroy'

Something I found very interesting about Restful routes, is that they are an attempt to bring the operations that can be applied to an object into HTTP request.
Restful routes have been a bleassing during class because they have helped me have a clearer understanding on how building an application works.


3. Name three rails generator commands. What is created by each?

Your answer:

rails generate resouces - creates a database
rails generate model- Defines a model
rails generate controller - creates a controller


Researched answer:

 Rails generators save us a lot of time when building out our projects.Three rails generator commands and what is created by them are;

rails generate resouces - This rails generator makes a new resource including an empty model and controller for a Restful, resource-oriented app. This generator also invokes your figured ORM and testframe, along creating helpers and adding routes to config/routes.rb


rails generate model- Defines a model; creates the fewest number of files, giving you control of whats actually given. This generator stubs out a new model, passes the model name, and an and optimal list of attribute pairs as arguments. This generate will invoke your configured ORM and test framework.

rails generate controller - creates a new controller; verifies that directories are in our application, creates a controller file,a view file, a functional test file, a helper for the views, a js file, and a stylesheet file.

Something that I found really interesting here is how many files are actually added when you make a controller. While using all this generate commands in class for my projects, I was really unaware on how much running these commands actuslly helps us and how much time it saves us.

Examples of the  rails generator commands:

rails generate resource Animal name:string age:integer
rails generate model Contact name:string email:string phone_number: string
rails generate controller Main

4. Consider the Rails routes below. What is the name of the controller method that would be called by each route? What action would each of the controller methods perform?

action: "GET" location: /students -  The controller method that would be called, would be index which gets a list of all the students

action: "POST" location: /students - The controller method that would be called, would be create which would a new student

action: "GET" location: /students/new - The controller method that would be called, would be new, which return an HTML form for creating a new student

action: "GET" location: /students/2 -The controller method that would be called, would be show, which would display the specified student

action: "GET" location: /students/2/edit - The controller method that would be called, would be edit, which returns an HTML form for editing the specified student

action: "PATCH" location: /students/2 -The controller method that would be called, would be update, which will update the specified student.

action: "DELETE" location: /students/2 - The controller method that would be called, would be destroy, which will delete the specified student

5. As a developer, you are making an application to manage your to do list. Create 10 user stories that will help you get your application started. Read more about [user stories](https://www.atlassian.com/agile/project-management/user-stories).
 
 Story 1 : As a user, I must be able to see all the tasks on my to do list
 Story 2 : As a user, I must be able to see the details on one task on my to do list
 Story 3 : As a user, I must see a form where I can fill out information for a new task on my to do list
 Story 4 : As a user, I must be able to create a new task on my to do list
 Story 5: As a user,  I must be able to delete a task on my to do list
 Story 6 : As a user, I must be able to see a form where I can fill out information to edit an existing task on my to do list
 Story 7 : As a user, I must be able to update an existing task on my to do list
 Story 8 : As a user, I must be able to travel between the pages of my application by clicking a button
 Story 9: As a user, I must be able to leave comments, review and share my to do list
 Story 10 : As a user, I must see pleasant styling