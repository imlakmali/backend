const express = require('express');
const app = express();
const port = 8080;

app.use(express.json());

app.use(express.static('public'));

app.listen(port, ()=>{
    console.log(`server is runing ${port}`);
});
let quote = [
  {"id": 1, "quote": "You must be the change you wish to see in the world.", "author": "Mahatma Gandhi"},
  {"id": 2, "quote": "Spread love everywhere you go. Let no one ever come to you without leaving happier.", "author": "Mother Teresa"},
  {"id": 3, "quote": "The only thing we have to fear is fear itself.", "author": "Franklin D. Roosevelt"},
  {"id": 4, "quote": "Darkness cannot drive out darkness; only light can do that. Hate cannot drive out hate: only love can do that.", "author": "Martin Luther King Jr."},
  {"id": 5, "quote": "Do one thing every day that scares you.", "author": "Eleanor Roosevelt"},
  {"id": 6, "quote": "Well done is better than well said.", "author": "Benjamin Franklin"},
  {"id": 7, "quote": "The best and most beautiful things in the world cannot be seen or even touched - they must be felt with the heart.", "author": "Helen Keller"},
  {"id": 8, "quote": "It is during our darkest moments that we must focus to see the light.", "author": "Aristotle"},
  {"id": 9, "quote": "Do not go where the path may lead; go instead where there is no path and leave a trail.", "author": "Ralph Waldo Emerson"},
  {"id": 10, "quote": "Be yourself; everyone else is already taken.", "author": "Oscar Wilde"},
  {"id": 11, "quote": "If life were predictable, it would cease to be life and be without flavor.", "author": "Eleanor Roosevelt"},
  {"id": 12, "quote": "In the end, it's not the years in your life that count. It's the life in your years.", "author": "Abraham Lincoln"},
  {"id": 13, "quote": "Life is a succession of lessons which must be lived to be understood.", "author": "Ralph Waldo Emerson"},
  {"id": 14, "quote": "You will face many defeats in life, but never let yourself be defeated.", "author": "Maya Angelou"},
  {"id": 15, "quote": "Never let the fear of striking out keep you from playing the game.", "author": "Babe Ruth"},
  {"id": 16, "quote": "Life is never fair, and perhaps it is a good thing for most of us that it is not.", "author": "Oscar Wilde"},
  {"id": 17, "quote": "The only impossible journey is the one you never begin.", "author": "Tony Robbins"},
  {"id": 18, "quote": "In this life, we cannot do great things. We can only do small things with great love.", "author": "Mother Teresa"},
  {"id": 19, "quote": "Only a life lived for others is a life worthwhile.", "author": "Albert Einstein"},
  {"id": 20, "quote": "The purpose of our lives is to be happy.", "author": "Dalai Lama"},
  {"id": 21, "quote": "You may say I‘m a dreamer, but I’m not the only one. I hope someday you'll join us. And the world will live as one.", "author": "John Lennon"},
  {"id": 22, "quote": "You only live once, but if you do it right, once is enough.", "author": "Mae West"},
  {"id": 23, "quote": "To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment.", "author": "Ralph Waldo Emerson"},
  {"id": 24, "quote": "Don't worry when you are not recognized but strive to be worthy of recognition.", "author": "Abraham Lincoln"},
  {"id": 25, "quote": "The greatest glory in living lies not in never falling, but in rising every time we fall.", "author": "Nelson Mandela"},
  {"id": 26, "quote": "Life is really simple, but we insist on making it complicated.", "author": "Confucius"},
  {"id": 27, "quote": "May you live all the days of your life.", "author": "Jonathan Swift"},
  {"id": 28, "quote": "Life itself is the most wonderful fairy tale.", "author": "Hans Christian Andersen"},
  {"id": 29, "quote": "Do not let making a living prevent you from making a life.", "author": "John Wooden"},
  {"id": 30, "quote": "Go confidently in the direction of your dreams! Live the life you've imagined.", "author": "Henry David Thoreau"},
  {"id": 31, "quote": "Keep smiling, because life is a beautiful thing and there's so much to smile about.", "author": "Marilyn Monroe"},
  {"id": 32, "quote": "In the depth of winter, I finally learned that within me there lay an invincible summer.", "author": "Albert Camus"},
  {"id": 33, "quote": "In three words, I can sum up everything I've learned about life: it goes on.", "author": "Robert Frost"},
  {"id": 34, "quote": "So we beat on, boats against the current, borne back ceaselessly into the past.", "author": "F. Scott Fitzgerald"},
  {"id": 35, "quote": "Life is either a daring adventure or nothing.", "author": "Helen Keller"},
  {"id": 36, "quote": "You have brains in your head. You have feet in your shoes. You can steer yourself any direction you choose.", "author": "Dr. Seuss"},
  {"id": 37, "quote": "Life is made of ever so many partings welded together.", "author": "Charles Dickens"},
  {"id": 38, "quote": "Your time is limited, so don't waste it living someone else's life. Don't be trapped by dogma — which is living with the results of other people's thinking.", "author": "Steve Jobs"},
  {"id": 39, "quote": "Life is trying things to see if they work.", "author": "Ray Bradbury"},
  {"id": 40, "quote": "Many of life's failures are people who did not realize how close they were to success when they gave up.", "author": "Thomas A. Edison"},
  {"id": 41, "quote": "The secret of success is to do the common thing uncommonly well.", "author": "John D. Rockefeller Jr."},
  {"id": 42, "quote": "I find that the harder I work, the more luck I seem to have.", "author": "Thomas Jefferson"},
  {"id": 43, "quote": "Success is not final; failure is not fatal: It is the courage to continue that counts.", "author": "Winston S. Churchill"},
  {"id": 44, "quote": "The way to get started is to quit talking and begin doing.", "author": "Walt Disney"},
  {"id": 45, "quote": "Don't be distracted by criticism. Remember — the only taste of success some people get is to take a bite out of you.", "author": "Zig Ziglar"},
  {"id": 46, "quote": "Success usually comes to those who are too busy to be looking for it.", "author": "Henry David Thoreau"},
  {"id": 47, "quote": "Everything you can imagine is real.", "author": "Pablo Picasso"},
  {"id": 48, "quote": "If you want to make your dreams come true, the first thing you have to do is wake up.", "author": "J.M. Power"},
  {"id": 49, "quote": "There are no secrets to success. It is the result of preparation, hard work, and learning from failure.", "author": "Colin Powell"},
  {"id": 50, "quote": "The real test is not whether you avoid this failure, because you won't. It's whether you let it harden or shame you into inaction, or whether you learn from it; whether you choose to persevere.", "author": "Barack Obama"}
            ]
  

app.get('/quote', (res,req)=>{
    req.send(quote[0])
});
