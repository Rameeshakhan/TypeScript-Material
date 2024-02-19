![Behaviour of Js](images/image.png)

The quirkiy behavior of Js. 
It should not allow adding two different datatypes

The typeScript is all about Type Safety.

What TypeScript do is 'Static Checking' 

As you write the code it will check for language types and highlight the problematic area. this is not being done in javaScript unless you run the code in chrome or in a node environment. 

TypeScript is a development tool, your code still run in JS.

![Indication of error in TS not in JS](images/image2.png)

As you can see the email property is not present in object bt js still shows no error , on the other hand the TS is doing that. 

To Install the TypeScript Globally in your system use npm 

```markdown
npm i -g typescript
```

![Installing TypeScript](images/image3.png)

# Types In TypeScript 

There are many data types in typescript language. Some are :
![Data Types](images/image4.png)

The primitive Data Types are 

- Boolean
- Number
- String

![Situations](images/image5.png)

# Syntax

![Syntax](images/image6.png)

defining all the types in lowercase.

# Function In TypeScript

we can degine the function in type script in a more safer format.
Like assigning data types to arguments that will be passed and assigning data types to the return type of a function , pretty cool right ? 

### See this as an example

#### Assigning Data Types to arguments and function itself
![Function](images/image7.png)

#### Assigning default values to arguments
![Function](images/image8.png)

#### Return type Union
![Return type Union](images/image9.png)

#### Arrow Function Syntax for type defining
![Arrow Function Syntax](images/image10.png)

# Objects in TypeScript 

![Object](images/image11.png)

# TypeAliases

It is like defining our own type 

![Type Aliases](images/image12.png)

#### ReadOnly Property 

![readonly](images/image13.png)

# Arrays 

![Arrays](images/image14.png)

# Union 

If you are not sure about type then instead of using any use union operator


![TypeAliases Vs Interface](images/image15.png)

