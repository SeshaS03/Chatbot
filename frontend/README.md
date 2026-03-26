TO CLONE AND START USING THE PROJECT IN SOMEONES LOCAL

1.TO GET THE PROJECT FROM GIT 
git clone "path"

2.IF YOU ALREADY HAVE THE CODE BASE (check you have angular version 19 and node version 20 in your local first then run the below commands)
npm install
npm start

3.



#############################




--------------------------------
1.To create a complete new application 

give the beloe command 

ng new chatbotFrontend --ssr --directory ./frontend --style=scss --routing

2.then usually need to install the dependencies using 
npm install

3.to start the app 
give npm start




SOME GIT COMMANDS USED :
1.to undo the commit done locally which is not yet pushed to git 
git reset --soft HEAD~1

2.to commit 
git commit -m "message"

3.to push
git push

2 & 3 commands should be given one after another to commit and push the code 

4.switch to another git profile
git config user.name "sonalisa"
git config user.email "xaviersonalisa@gmail.com"

git commit --author="sonalisa <xaviersonalisa@gmail.com>" -m "initial setup done"