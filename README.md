#SUBASTA Client

Singel page application for subasta application

##Development Procedure:

__Make sure to install webpack [npm install webpack -g]__

1. Clone the repo __git clone git@github.com:jdltechworks/substa.git__
2. Go to the subasta folder and __npm install__
3. Set node env to development on windows __set NODE_ENV=development__
3. Mac or Linux __NODE_ENV=development__
4. To start the local server __npm run dev__

##Production procedure:

__Note: Still on your subasta folder using your terminal / command prompt__

1. Set node env to __set NODE_ENV=production__ for windows
2. Mac or Linux ENV_NODE=prodcution
3. Pull the latest code on our master branch and merge it to your branch
4. type __webpack__
5. __git add [files that you want to add]__
5. __git commit -m "Your message"__
6. __git push [your branch]__
7. Create a pull request on github for code review

##Generating a documentation

1. Go to your subasta folder in your terminal
2. npm run generate-docs