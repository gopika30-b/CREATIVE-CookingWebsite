import express from "express";
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
const { Schema } = mongoose;
const app = express();
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
import {dirname} from "path";
import { fileURLToPath } from "url";
const __dirname = dirname(fileURLToPath(import.meta.url));
app.use(express.static("public"));
app.set("view engine","ejs");
mongoose.connect("mongodb+srv://gopika30:beYourself@cluster0.ija6j8j.mongodb.net/Creative", { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("Connected to MongoDB successfully");
  })
  .catch((err) => {
    console.error("Error connecting to MongoDB:", err);
  });
var userID = "";
app.get("/home",function(req,res){
    res.render("main",{
        pageTitle: "Home",
        pageContent:  `
        <div><span><p style="padding: 20px; border: 3px solid black;margin: 70px">A recipe is a set of instructions that describes how to prepare or make a dish. If life could only be as simple as following a recipe, we'd all be much happier. However, unlike food based recipes, life doesn't provide you with standardized ingredients as each lives their unique life. It means we must cook with what we have and see what we can come up with it. However, just like cooking ...life has a lot of similarities. For instance, while some people like to follow the recipe to the core, others like to experiment with the ingredients creating their unique take on something that might have been passed down from generation to generation.</p></span></div>
      `
    });
    
});

app.get("/aboutus",function(req,res){
    res.render("main",{
        pageTitle: "About Us",
        pageContent: `
        <div> <span> <p style="padding: 20px; border: 3px solid black; margin: 70px">Hi I'm Gopika! the cook and writter behind this webpage. I've grown up in the kitchen along side my mum and grandmothers and conversations in my family are always about the next meal. I've picked up their love for food along the way, and with this webpage, I share my food story with you. Simply Recipes is here to help you cook delicious meals with less stress and more joy. We offer recipes and cooking advice for home cooks. Helping create “<b>KITCHEN WINS</b>” is what I am all about. Everyone is welcome at the Simply Recipes table: people of all races, religions, genders, sexual orientations, ages, backgrounds, and abilities. We strive to be a resource for every home cook, and I consciously work to make this inclusion felt in every part of the site. We're not perfect, but we hope to get more right than we get wrong. As we all know, cooking is not just about preparing meals; it's also a way to express ourselves, to show our creativity, and to connect with our emotions. Cooking can be a therapeutic activity that can help us deal with stress, anxiety, and other emotions that we may be experiencing. When we cook, we can focus on the task at hand and forget about our worries, even if it's just for a little while. The next time you step into the kitchen, take a moment to appreciate the emotional aspect of cooking and enjoy the process of creating something delicious and meaningful.</p></span></div><br><br>
        `
    });
    
});
app.get("/",function(req,res){
    res.render("main",{
        pageTitle: "Recipes",
        pageContent : `
        <div class="g0" style="padding: 20px; border: 3px solid black;">
        <h3>Snacks</h3>
        <p>Snacks are like little bursts of happiness that can brighten up any day. They are the bite-sized superheroes of the food world, providing us with the fuel we need to power through the day. They are the tasty sidekicks that make our day-to-day adventures a little bit more exciting.</p>
        <div class="row">
          <div class="column">
            <div class="card">
              <img src="../images/potato_balls.jpg" alt="Potato Balls" width="200px" height="200px">
              <div class="container">
                <h4>Potato Balls</h4>
                <p class="title">#potato #snack</p>
                <p><button class="button1" onclick="window.location.href='/potatoballs'">View</button></p>
              </div>
            </div>
          </div>
        
          <div class="column">
            <div class="card">
              <img src="../images/chicken_popcorn.jpg" alt="Chicken Popcorn" width="200px" height="200px">
              <div class="container">
                <h4>Chicken Popcorn</h4>
                <p class="title">#snack #non-veg</p>
                <p><button class="button1" onclick="window.location.href='/chickenpopcorn'">View</button></p>
              </div>
            </div>
          </div>
          
          <div class="column">
            <div class="card">
              <img src="../images/chicken_donut.jpg" alt="Chicken Donut" width="200px" height="200px">
              <div class="container">
                <h4>Chicken Donut</h4>
                <p class="title">#snack #non-veg</p>
                <p><button class="button1" onclick="window.location.href='/chickendonut'">View</button></p>
              </div>
            </div>
          </div>
          
          <div class="column">
            <div class="card">
              <img src="../images/maggie.jpg" alt="Maggie Recipe" width="200px" height="200px">
              <div class="container">
                <h4>Maggie Recipe</h4>
                <p class="title">#noodles #spicy</p>
                <p><button class="button1" onclick="window.location.href='/maggierecipe'">View</button></p>
              </div>
            </div>
          </div>
          
          <div class="column">
            <div class="card">
              <img src="../images/potato_smiley.jpeg" alt="Potato Smiley" width="200px" height="200px">
              <div class="container">
                <h4>Potato Smiley</h4>
                <p class="title">#potato #snack</p>
                <p><button class="button1" onclick="window.location.href='/potatosmiley'">View</button></p>
              </div>
            </div>
          </div>
        </div>
        
    </div>
    <div class="g0" style="padding: 20px; border: 3px solid black;">
      <h3>Indian recipes</h3>
      <p>Indian cuisine is known for its diversity, flavors, and spices. There are so many delicious Indian recipes that are not only tasty but also fun to make. From the traditional biryanis to the street food favorites like chaat, Indian food offers a wide range of options to satisfy any palate.</p>
      <div class="row">
        <div class="column">
          <div class="card">
            <img src="../images/dosa.jpg" alt="Dosa" width="200px" height="200px">
            <div class="container">
              <h4>Dosa</h4>
              <p class="title">#breakfast</p>
              <p><button class="button1" onclick="window.location.href='/dosa'">View</button></p>
            </div>
          </div>
        </div>
      
        <div class="column">
          <div class="card">
            <img src="../images/coconut_rice.jpg" alt="Coconut Rice" width="200px" height="200px">
            <div class="container">
              <h4>Coconut Rice</h4>
              <p class="title">#coconut #veg</p>
              <p><button class="button1" onclick="window.location.href='/coconutrice'">View</button></p>
            </div>
          </div>
        </div>
        
        <div class="column">
          <div class="card">
            <img src="../images/black_pepper_rice.jpg" alt="Black Pepper Rice" width="200px" height="200px">
            <div class="container">
              <h4>Black Pepper Rice</h4>
              <p class="title">#pepper #veg</p>
              <p><button class="button1" onclick="window.location.href='/blackpepperrice'">View</button></p>
            </div>
          </div>
        </div>
        
        <div class="column">
          <div class="card">
            <img src="../images/appam.jpg" alt="Appam" width="200px" height="200px">
            <div class="container">
              <h4>Appam</h4>
              <p class="title">#breakfast</p>
              <p><button class="button1" onclick="window.location.href='/appam'">View</button></p>
            </div>
          </div>
        </div>
        
        <div class="column">
          <div class="card">
            <img src="../images/sambar_powder.jpg" alt="Sambar Powder" width="200px" height="200px">
            <div class="container">
              <h4>Sambar Powder</h4>
              <p class="title">#powder #sambar</p>
              <p><button class="button1" onclick="window.location.href='/sambarpowder'">View</button></p>
            </div>
          </div>
        </div>

        <div class="column">
          <div class="card">
            <img src="../images/rasam_powder.jpg" alt="Rasam Powder" width="200px" height="200px">
            <div class="container">
              <h4>Rasam Powder</h4>
              <p class="title">#rasam #powder</p>
              <p><button class="button1" onclick="window.location.href='/rasampowder'">View</button></p>
            </div>
          </div>
        </div>
      </div>
      
  </div>
        `
    });
    
});
app.get("/user/recipes",function(req,res){
  res.render("mainUser",{
      pageTitle: "Recipes",
      pageContent : `
      <div class="g0" style="padding: 20px; border: 3px solid black;">
      <h3>Snacks</h3>
      <p>Snacks are like little bursts of happiness that can brighten up any day. They are the bite-sized superheroes of the food world, providing us with the fuel we need to power through the day. They are the tasty sidekicks that make our day-to-day adventures a little bit more exciting.</p>
      <div class="row">
        <div class="column">
          <div class="card">
            <img src="../images/potato_balls.jpg" alt="Potato Balls" width="200px" height="200px">
            <div class="container">
              <h4>Potato Balls</h4>
              <p class="title">#potato #snack</p>
              <p><button class="button1" onclick="window.location.href='/potatoballs'">View</button></p>
            </div>
          </div>
        </div>
      
        <div class="column">
          <div class="card">
            <img src="../images/chicken_popcorn.jpg" alt="Chicken Popcorn" width="200px" height="200px">
            <div class="container">
              <h4>Chicken Popcorn</h4>
              <p class="title">#snack #non-veg</p>
              <p><button class="button1" onclick="window.location.href='/chickenpopcorn'">View</button></p>
            </div>
          </div>
        </div>
        
        <div class="column">
          <div class="card">
            <img src="../images/chicken_donut.jpg" alt="Chicken Donut" width="200px" height="200px">
            <div class="container">
              <h4>Chicken Donut</h4>
              <p class="title">#snack #non-veg</p>
              <p><button class="button1" onclick="window.location.href='/chickendonut'">View</button></p>
            </div>
          </div>
        </div>
        
        <div class="column">
          <div class="card">
            <img src="../images/maggie.jpg" alt="Maggie Recipe" width="200px" height="200px">
            <div class="container">
              <h4>Maggie Recipe</h4>
              <p class="title">#noodles #spicy</p>
              <p><button class="button1" onclick="window.location.href='/maggierecipe'">View</button></p>
            </div>
          </div>
        </div>
        
        <div class="column">
          <div class="card">
            <img src="../images/potato_smiley.jpeg" alt="Potato Smiley" width="200px" height="200px">
            <div class="container">
              <h4>Potato Smiley</h4>
              <p class="title">#potato #snack</p>
              <p><button class="button1" onclick="window.location.href='/potatosmiley'">View</button></p>
            </div>
          </div>
        </div>
      </div>
      
  </div>
  <div class="g0" style="padding: 20px; border: 3px solid black;">
    <h3>Indian recipes</h3>
    <p>Indian cuisine is known for its diversity, flavors, and spices. There are so many delicious Indian recipes that are not only tasty but also fun to make. From the traditional biryanis to the street food favorites like chaat, Indian food offers a wide range of options to satisfy any palate.</p>
    <div class="row">
      <div class="column">
        <div class="card">
          <img src="../images/dosa.jpg" alt="Dosa" width="200px" height="200px">
          <div class="container">
            <h4>Dosa</h4>
            <p class="title">#breakfast</p>
            <p><button class="button1" onclick="window.location.href='/dosa'">View</button></p>
          </div>
        </div>
      </div>
    
      <div class="column">
        <div class="card">
          <img src="../images/coconut_rice.jpg" alt="Coconut Rice" width="200px" height="200px">
          <div class="container">
            <h4>Coconut Rice</h4>
            <p class="title">#coconut #veg</p>
            <p><button class="button1" onclick="window.location.href='/coconutrice'">View</button></p>
          </div>
        </div>
      </div>
      
      <div class="column">
        <div class="card">
          <img src="../images/black_pepper_rice.jpg" alt="Black Pepper Rice" width="200px" height="200px">
          <div class="container">
            <h4>Black Pepper Rice</h4>
            <p class="title">#pepper #veg</p>
            <p><button class="button1" onclick="window.location.href='/blackpepperrice'">View</button></p>
          </div>
        </div>
      </div>
      
      <div class="column">
        <div class="card">
          <img src="../images/appam.jpg" alt="Appam" width="200px" height="200px">
          <div class="container">
            <h4>Appam</h4>
            <p class="title">#breakfast</p>
            <p><button class="button1" onclick="window.location.href='/appam'">View</button></p>
          </div>
        </div>
      </div>
      
      <div class="column">
        <div class="card">
          <img src="../images/sambar_powder.jpg" alt="Sambar Powder" width="200px" height="200px">
          <div class="container">
            <h4>Sambar Powder</h4>
            <p class="title">#powder #sambar</p>
            <p><button class="button1" onclick="window.location.href='/sambarpowder'">View</button></p>
          </div>
        </div>
      </div>

      <div class="column">
        <div class="card">
          <img src="../images/rasam_powder.jpg" alt="Rasam Powder" width="200px" height="200px">
          <div class="container">
            <h4>Rasam Powder</h4>
            <p class="title">#rasam #powder</p>
            <p><button class="button1" onclick="window.location.href='/rasampowder'">View</button></p>
          </div>
        </div>
      </div>
    </div>
    
</div>
      `
  });
  
});
function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
app.get("/verification", function(req, res) {
  var a = getRandomNumber(1, 999);
  var b = getRandomNumber(1, 999);
  var result = a + b;

  res.render("main", {
    pageTitle: "Bot Check",
    pageContent: `
    <div class="check">
      <p id="d1"></p><br>
      <input type="number" id="getvalue" placeholder="Enter the sum of above two numbers"><br>
      <button onclick="addcheck()">Proceed</button>
      <br><br><br><br><br>
    </div>
    <script>
      window.onload = function() {
        document.getElementById("d1").innerHTML = ${a} + " + " + ${b};
      }

      function addcheck() {
        var sum = document.getElementById("getvalue").value;
        if (sum == ${result}) {
          window.location.href = '/feedback';
        } else {
          alert("Incorrect Captcha Value");
          location.reload();
        }
      }
    </script>
    `
  });
});
app.get("/feedback",function(req,res){
    res.render("main",{
        pageTitle: "Feedback",
        pageContent:`
        <form class="fb">
		<label for="name">Name:</label>
		<input type="text" id="name" name="name" class="fbT" required placeholder=" Enter your name ">
		<label for="email">Email:</label>
		<input type="email" id="email" name="email" class="fbT" required placeholder=" Enter your email ">
		<label for="feedback">Feedback:</label>
		<textarea id="feedback" name="feedback" class="fbT" required></textarea>
		<button onclick="disalert()" class="fbB">Submit</button>
	</form>
    <script>
		function disalert() {
			var name = document.getElementById("name").value;
			var email = document.getElementById("email").value;
			var feedback = document.getElementById("feedback").value;
			if (name.length!=0 && email.length!=0 && feedback.length!=0 ){
                window.location.href='/recipes';
                alert("Thank you for your feedback "+name+" !");
	        }}
	</script>
        `
    });
    
});
const recipeSchema = new Schema({
  rootURL : String,
  pageTitle: String,
  ingredients: [{ name: String, quantity: String }],
  recipeSteps: [String],
}, { collection: 'recipeAdmin' });
const Recipe = mongoose.model('Recipe', recipeSchema);
app.get("/:page", async function(req, res) {
  try {
    const page = req.params.page;
    const recipe = await Recipe.findOne({ rootURL: page }).exec();
    if (!recipe) {
      return res.status(404).json({ error: "Content not found" });
    }
    const ingredients = recipe.ingredients;
    const recipeSteps = recipe.recipeSteps;
    const pageTitle = recipe.pageTitle;
    res.render("sub1", { ingredients, recipeSteps, pageTitle, rootURL: `/${page}/buylist` });
  } catch (err) {
    return res.status(500).json({ error: "An error occurred" });
  }
});
const buyListSchema = new Schema({
  rootURLBL : String,
  pageTitleBL: String,
  buylist: [String],
}, { collection: 'buyListAdmin' });
const BuyList = mongoose.model('BuyList', buyListSchema);
app.get("/:page/buylist",async function(req, res) {
  try {
    const pageBuyList = req.params.page;
    const buylist = await BuyList.findOne({ rootURLBL : pageBuyList }).exec();
    if (!buylist) {
      return res.status(404).json({ error: "Content not found" });
    }
    const ingredients = buylist.buylist;
    const pageTitle = buylist.pageTitleBL;
    res.render("sub2", { ingredients, pageTitle});
  } catch (err) {
    return res.status(500).json({ error: "An error occurred" });
  }
});
const userSchema = new Schema({
  fullName: String,
  userID: String,
  password: String,
  type: String,
}, { collection: 'userInfo' }, { collection: 'userInfo' });
const User = mongoose.model('User', userSchema);
app.post("/signup", function (req, res) {
  const { fullName, userID, password } = req.body;
  User.findOne({ userID: userID })
    .then((existingUser) => {
      if (existingUser) {
        return res.status(409).json({ error: "User ID already taken" });
      } else {
        const newUser = new User({
          fullName: fullName,
          userID: userID,
          password: password,
          type : "regular"
        });
        newUser.save()
          .then(() => {
            return res.json({ success: true });
          })
          .catch((err) => {
            return res.status(500).json({ error: "An error occurred" });
          });
      }
    })
    .catch((err) => {
      return res.status(500).json({ error: "An error occurred" });
    });
});

app.post('/login', async function (req, res){
  const { userID2, psw } = req.body;
  try {
    const user = await User.findOne({ userID: userID2 });
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }
    if (user.password !== psw) {
      return res.status(401).json({ error: 'Invalid password' });
    }
    const userType = user.type;
    const userName = user.fullName;
    userID = user.userID;
    return res.json({ userType, userName });
  } catch (err) {
    return res.status(500).json({ error: 'Internal server error' });
  }
});

const userRecipeSchema = new Schema({
  rootURL : String,
  pageTitle: String,
  ingredients: [{ name: String, quantity: String }],
  recipeSteps: [String],
}, { collection: 'userRecipes' });
const userRecipe = mongoose.model('userRecipe', userRecipeSchema);
app.get("/user/addrecipe", function(req,res){
  const { pageTitle } = req.body;

  if (pageTitle.trim() === "") {
    res.status(400).json({ message: "Page Title cannot be empty." });
  } else {
    // Create a new recipe with the provided pageTitle
    const newRecipe = new UserRecipe({ pageTitle });
    newRecipe.save((err, recipe) => {
      if (err) {
        console.error("Error saving recipe:", err);
        res.status(500).json({ message: "Internal server error." });
      } else {
        res.status(200).json({ message: "Recipe added successfully." });
      }
    });
  }
});

app.listen(3000, function(){
    console.log("Server running on port 3000");
}); 