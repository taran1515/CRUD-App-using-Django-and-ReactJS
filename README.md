# CRUD App using Django and ReactJS

This application helps the user to Create, Read, Update andd Delete the Student List. The app uses django for the server side and React for the client side of the application.

<h3>Feautures:-</h3>
<ul>
<li>Single Page App</li>
<li>Create Student Information</li>
<li>Read Students Information</li>
<li>Update Studen Informationt</li>
<li>Delete Student Information</li>
</ul>

Anyone can create, read, update and delete the list of Students. The app doesn't contain any authentication. This is just a Simple CRUD App. The main motive of this app is to learn how to call APIs in react and manage the state of the application to update the view.

Please follow the setup instrutions as follow in order to view the complete app we need to setup our backend and frontend separately so be carefull otherwise there could be problems.

# Backend-Setup 

clone the repositroy:-
```
https://github.com/taran1515/CRUD-App-using-Django-and-ReactJS.git
```
Create Virtual env for django-part:-
```
cd crud_backend
virtualenv app
```
Activate Virtual env:-
```
app\scripts\activate
```
Install Dependencies:-
```
pip install -r requirements.txt
```
Make Migrations:-
```
./manage.py makemigrations
./manage.py migrate
```
Start server for your REST-API:-
```
./manage.py runserver
```
# Frontend Setup:-
Go to root and Open another terminal window
```
cd crud_frontend
```
Install Dependencies:-
```
npm install
```
Run Server:-
```
npm start
```

So apparently to server is running one is localhost:8000(clientside react) and second is localhost:8080(django-api) So to see live application open http://localhost:8000 in your browser window
