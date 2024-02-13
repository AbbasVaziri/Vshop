
<h2>Vshop (inspired by digikala.com)</h2>
<img src="https://github.com/AbbasVaziri/Vshop/assets/122804004/68b5b0f9-4d02-49b1-bf56-4155b6a440f4" alt="">

<h2>description</h2>
<p>
I built an e-commerce platform similar to Digikala.com, focusing on speed and a cool look thanks to Next.js. To make shopping easy, I used Redux and RTK for the shopping cart, so everything stays organized. I added some neat slides for showing off products with Swiper, and for all the signup and login forms, I chose Formik to keep things straightforward and Yup for making sure the info is right. Plus, I made sure everything's secure and talking smoothly to the server with Swagger, keeping user logins safe
</p>

<h2>Features 🚀</h2>
<p>• login user with access token</p>
<p>• signup user</p>
<p>• shopping Cart with Redux Toolkit and persist</p>
<p>• responsible slider with swiper</p>
<p>• custome carrousel with React-Slick like exactly Digikala</p>

<h2>Tech Stack 💻</h2>
<p>The following libraries and tools were utilized in the project:</p>
<p>• Nextjs</p>
<p>• Redux , Redux-toolkit</p>
<p>• Formik , Yup</p>
<p>• React-slick and swiper </p>
<p>• axios</p>
<p>• react-Spinner</p>
<p>• react-icones</p>


<h2>installation</h2>
<p>To start this application, you need to have the data file of this program, which I will put in another repository.
If you've never worked with java it's possible it might be hard at first to run the back-end on localhost, but I'll try my best to fully explain how to work with it.</p>


<h3>Before running the jar file</h3>
<p>ensure you have the following installed:
 Java: You need Java 17.0.2 to run the jar file. Download and install it from <a href="https://jdk.java.net/archive/">here</a>
</p>
<p>MySQL Database: This application requires a MySQL database.</p>

<h2>install java and run jar file</h2>

1. **Download the Jar File**: Download the latest version of the application jar file from the GitHub repository's Releases section.

2. **Prepare MySQL Database**:
   - Ensure your MySQL database is running.
   - Create a database for the application, if necessary.

3. **Configure Database Connection**:
   - You need to configure the database connection by setting your MySQL credentials in the `application.properties` file within the jar.
   - To access and modify the `application.properties` file, you can either extract the jar file using any standard archive tool (like WinRAR, 7-Zip) or directly edit the file within the archive:
     - Extract the jar: `jar xf yourapplication.jar`
     - Navigate to the extracted directory and open the `application.properties` file in a text editor.
     - Modify the database connection properties:
       ```
       spring.datasource.url=jdbc:mysql://localhost:3306/yourdatabasename
       spring.datasource.username=yourusername
       spring.datasource.password=yourpassword
       ```
     - Replace `yourdatabasename`, `yourusername`, and `yourpassword` with your actual database name, username, and password.
   - If you extracted and modified the properties file, repackage the jar file: `jar cf yourapplication.jar -C path/to/extracted/folder/ .`


To run the application, execute the following command in your terminal or command prompt:
```
java -jar path/to/yourapplication.jar
```
Make sure to replace `path/to/yourapplication.jar` with the actual path to the jar file you downloaded.

## Troubleshooting

- **Java Not Found**: Ensure Java is installed and properly set up in your system's PATH.
- **Database Connection Issues**: Verify that your MySQL server is running and that the `application.properties` file contains the correct connection details.


This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started
First , install dependencies:
```bash
npm install
 # or
yarn
```
second, run the development server:
```bash
npm run dev
# or
yarn dev
```
Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
