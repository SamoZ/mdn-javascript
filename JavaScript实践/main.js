// 1. 定义变量和函数

const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

function randomValueFromArray(array) {
    return array[Math.floor(Math.random() * array.length)];
}

//2. 纯文本字符串

var storyText =
    'It was 94 fahrenheit outside, so :insertx: went for a walk. When they got to :inserty:, they stared in horror for a few moments, then :insertz:. Bob saw the whole thing, but was not surprised — :insertx: weighs 300 pounds, and it was a hot day.';

var insertX = 'Willy the Goblin Big Daddy Father Christmas';

var inserY = 'the soup kitchen Disneyland the White House';

var insertZ =
    'spontaneously combusted melted into a puddle on the sidewalk turned into a slug and crawled away';
