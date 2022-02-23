const man = document.getElementById('man');
const nextBtn = document.querySelector('.Next');
const prevBtn = document.querySelector('.Prev');
const thought = document.querySelector('.container .story .man .thought');
const time = document.querySelector('.container .story .header .time');
const year = document.querySelector('.container .story .header .year');
const header = document.querySelector('.container .story .header');
const bg = document.querySelector('.bg');
const story = document.querySelector('.story');
const yearsLater = document.querySelector('.yearsLater');
var currentScene = 0;

function resetManLocation() {
    man.style.transition = 'none';
    man.style.left = `50%`;
    man.style.bottom = `100px`;
    setManSize(100);
}

function moveMan(left, bottom, time) {
    var compStyle = window.getComputedStyle(man);
    var currentLeft = compStyle.getPropertyValue('left');
    currentLeft = currentLeft.slice(0, -2);
    currentLeft = parseInt(currentLeft);
    var newLeft = currentLeft + left;
    var currentButtom = compStyle.getPropertyValue('bottom');
    currentButtom = currentButtom.slice(0, -2);
    currentButtom = parseInt(currentButtom);
    var newBottom = currentButtom + bottom;
    
    man.style.transition = `left ${time}s linear, bottom ${time}s linear, transform ${time}s linear`;
    man.style.left = `${newLeft}px`;
    man.style.bottom = `${newBottom}px`;
}
function setManSize(percent) {
    man.style.transform = `scale(${percent}%) translateX(-50%)`;
}

function changeMan(newMan) {
    man.style.backgroundImage = `url(${newMan})`;
}

function setThink(text) {
    thought.innerHTML = text;
    thought.style.display = "flex";
}

function hideThink() {
    thought.style.display = "none";
}

function setTime(newTime) {
    time.innerHTML = newTime;
    header.style.display = "flex";
}

function setYear(newYear) {
    year.innerHTML = newYear;
    header.style.display = "flex";
}

function changeBG(newBG) {
    bg.style.backgroundImage = "url(" + newBG + ")";
}

function hideStory() {
    story.style.display = 'none';
}

function showStory() {
    story.style.display = 'block';
}

function showYearsLater() {
    yearsLater.style.display = 'flex';
}

function hideYearsLater() {
    yearsLater.style.display = 'none';
}

function plan(forward) {
    if(forward) {
        if(currentScene < 13) {
            currentScene++;
        }
    }
    if(!forward) {
        if(currentScene > 1) {
            currentScene--;
        }
    }
    nextBtn.innerText = 'Next';
    prevBtn.style.display = 'block';
    if(currentScene == 1) {
        setThink('Wow! I reached a fork in this yellow wood! 😊');
        setTime('08:00');
        resetManLocation();
        changeBG(`TheRoadNotTaken.png`);
        showStory();
        hideYearsLater();
        changeMan('man.png');
    }
    if(currentScene == 2) {
        setThink('I don\'t know which road I should take.. 🤷‍♂️');
        setTime('08:05');
        resetManLocation();
        changeBG(`TheRoadNotTaken.png`);
        showStory();
        hideYearsLater();
    }
    if(currentScene == 3) {
        setThink('I feel so sorry I can\'t travel them both 😔');
        setTime('08:12');
        resetManLocation();
        changeBG(`TheRoadNotTaken.png`);
        showStory();
        hideYearsLater();
    }
    if(currentScene == 4) {
        setThink('Lets think which one is better and draw a comparison between them 💡');
        setTime('08:33');
        resetManLocation();
        changeBG(`TheRoadNotTaken.png`);
        showStory();
        hideYearsLater();
    }
    if(currentScene == 5) {
        setThink('Ohh, this is so discouraging, I\'m standing here so long... it\'s so hard to decide. <br /> They are very similar.');
        setTime('10:04');
        resetManLocation();
        changeBG(`TheRoadNotTaken.png`);
        showStory();
        hideYearsLater();
    }
    if(currentScene == 6) {
        setThink('I\'m trying to look down as far as I could, but unfortunately I can\'t see the end because it\'s bend to the undergrowth.')
        setTime('10:12');
        resetManLocation();
        changeBG(`TheRoadNotTaken.png`);
        showStory();
        hideYearsLater();
    }
    if(currentScene == 7) {
        setThink('Ok, I decided. I will take the other one, although both of the roads as just as fair. The other one is garssy and wanted wear. 🟢🛣️');
        setTime('10:21');
        resetManLocation();
        changeBG(`TheRoadNotTaken.png`);
        showStory();
        hideYearsLater();
    }
    if(currentScene == 8) {
        hideThink();
        setTime('10:25');
        moveMan(280, 240, 2);
        setManSize(50);
        changeBG(`TheRoadNotTaken.png`);
        showStory();
        hideYearsLater();
    }
    if(currentScene == 9) {
        hideThink();
        setTime('10:40');
        resetManLocation();
        changeBG(`TheRoadNotTaken2.png`);
        setThink('I want to keep the other road for another morning. But I doubt if I can ever do it, because I know how way leads on to way and I can\'t go back in time. 😐');
        showStory();
        hideYearsLater();
    }
    if(currentScene == 10) {
        hideThink();
        setTime('10:48');
        changeBG(`TheRoadNotTaken2.png`);
        hideThink();
        resetManLocation();
        moveMan(-40, 250, 2);
        setManSize(50);
        showStory();
        hideYearsLater();
    }
    if(currentScene == 11) {
        hideStory();
        showYearsLater();
        resetManLocation();
        changeMan('man.png');
    }
    if(currentScene == 12) {
        showStory();
        hideYearsLater();
        changeBG('TheRoadNotTaken3.jpg');
        resetManLocation();
        changeMan('man2.png');
        setManSize(130);
        moveMan(10, 50);
        setThink('Now, after 10 years since I have made my choice. I can surely say, my choice to take the less traveled by road has made all the difference❗')
        setYear(2032);
        setTime('12:58')
        currentScene = 0;
    }
}

nextBtn.onclick = () => {
    plan(true);
}
prevBtn.onclick = () => {
    plan(false);
}

