var navigate = (function() {
	$('.dd').toggle();
	$('.dd_btn').click(function() {
		var dataName = $(this).attr('data-name');
		$('.dd').hide();
		$('.' + dataName).toggle();
	});
})();

//file quiz_controller.js
function Quiz(questions) {
    this.score = 0;
    this.questions = questions;
    this.questionIndex = 0;
}

Quiz.prototype.getQuestionIndex = function () {
    return this.questions[this.questionIndex];
};

Quiz.prototype.guess = function (answer) {
    if (this.getQuestionIndex().isCorrectAnswer(answer)) {
        this.score++;
    }

    this.questionIndex++;
};

Quiz.prototype.isEnded = function () {
    return this.questionIndex === this.questions.length;
};

//file questions.js

function Question(text, choices, answer) {
    this.text = text;
    this.choices = choices;
    this.answer = answer;
}

Question.prototype.isCorrectAnswer = function (choice) {
    return this.answer === choice;
};

// file app.js
function populate() {
    if (quiz.isEnded()) {
        showScores();
    } else {
        // show question
        var element = document.getElementById("question");
        element.innerHTML = quiz.getQuestionIndex().text;

        // show options
        var choices = quiz.getQuestionIndex().choices;
        for (var i = 0; i < choices.length; i++) {
            var element = document.getElementById("choice" + i);
            element.innerHTML = choices[i];
            guess("btn" + i, choices[i]);
        }

        showProgress();
    }
}

function guess(id, guess) {
    var button = document.getElementById(id);
    button.onclick = function () {
        quiz.guess(guess);
        populate();
    }
}


function showProgress() {
    var currentQuestionNumber = quiz.questionIndex + 1;
    var element = document.getElementById("progress");
    element.innerHTML = "Question " + currentQuestionNumber + " of " + quiz.questions.length;
}

function showScores() {
    var gameOverHTML = "<h1>Result</h1>";
    gameOverHTML += "<h2 id='score'> Your score: " + quiz.score + "</h2>";
    var element = document.getElementById("quiz");
    element.innerHTML = gameOverHTML;
}

// create questions

var questions = [
    new Question("1. What does HTML stand for?", ["Hyperlinks and Text Markup Language", "Hyper Text Markup Language", "Home Tool Markup Language", "None of the above"], "Hyper Text Markup Language"),
    new Question("2. Who is making the Web standards?", ["Moxilla", "Google", "The World Wide Web Consortium", "Microsoft"], "The World Wide Web Consortium"),
    new Question("3. Choose the correct HTML element for the largest heading:", ["<pre><code class=html tag start-tag>&lt;h1&gt;&lt;/h1&gt;</code></pre>", "<pre><code class=html tag start-tag>&lt;head&gt;&lt/head&gt</code></pre>", "<pre><code class=html tag start-tag>&lt;h6&gt;&lt;/h6&gt;</code></pre>", "<pre><code class=html tag start-tag>&lt;heading&gt;&lt;/heading&gt;</code></pre>"], "<pre><code class=html tag start-tag>&lt;h1&gt;&lt;/h1&gt;</code></pre>"),
    new Question("4. What is the correct HTML element for inserting a line break?", ["<pre><code class=html tag start-tag>&lt;break&gt;&lt/break&gt;</code></pre>", "<pre><code class=html tag start-tag>&lt;lb&gt;&lt/lb&gt;</code></pre>", "<pre><code class=html tag start-tag>&lt;br&gt;</code></pre>"], "<pre><code class=html tag start-tag>&lt;br&gt;</code></pre>"),
    new Question("5. What is the correct HTML for adding a background color?", ["<pre><code class=html tag start-tag>&lt;background&gt;yellow&lt;/background&gt;</code></pre>", "<pre><code class=html tag start-tag>&lt;body&ensp;style&equals;&apos;background&hyphen;color&colon;&ensp;yellow&apos;&semi;&gt;</code></pre>", "<pre><code class=html tag start-tag>&lt;body&ensp;bg&equals;&apos;yellow&apos;&gt;</code></pre>", "<pre><code class=html tag start-tag>&period;background&hyphen;color&colon;&ensp;yellow</code></pre>"], "<pre><code class=html tag start-tag>&lt;body&ensp;style&equals;&apos;background&hyphen;color&colon;&ensp;yellow&apos;&semi;&gt;</code></pre>"),
    new Question("6. Choose the correct HTML element to define important text", ["<pre><code class=html tag start-tag>&lt;important&gt;</code></pre>", "<pre><code class=html tag start-tag>&lt;i&gt;&lt;&sol;i&gt;</code></pre>", "<pre><code class=html tag start-tag>&lt;b&gt;&lt;&sol;b&gt;</code></pre>", "<pre><code class=html tag start-tag>&lt;strong&gt;&lt;&sol;strong&gt;</code></pre>"], "<pre><code class=html tag start-tag>&lt;strong&gt;&lt;&sol;strong&gt;</code></pre>"),
    new Question("7. What is the correct HTML for creating a hyperlink?", ["<pre><code class=html tag start-tag>&lt;a&gt;http&colon;&sol;&sol;www&period;w3schools&period;com&lt;&sol;a&gt;</code></pre>", "<pre><code class=html tag start-tag>&lt;a&ensp;name&equals;&quot;http&colon;&sol;&sol;www&period;w3schools&period;com&quot;&gt;W3Schools&period;com&lt;&sol;a&gt;</code></pre>", "<pre><code class=html tag start-tag>&lt;a&ensp;url&equals;&quot;http&colon;&sol;www&period;w3schools&period;com&quot;&gt;W3Schools&period;com&lt;&sol;a&gt;</code></pre>", "<pre><code class=html tag start-tag>&lt;a&ensp;href&equals;&quot;http&colon;&sol;&sol;www&period;w3schools&period;com&quot;&gt;W3Schools&lt;&sol;a&gt;</code></pre>"], "<pre><code class=html tag start-tag>&lt;a&ensp;href&equals;&quot;http&colon;&sol;&sol;www&period;w3schools&period;com&quot;&gt;W3Schools&lt;&sol;a&gt;</code></pre>"),
    new Question("8. Choose the correct HTML element to define emphasized text", ["<pre><code class=html tag start-tag>&lt;i&gt;&lt;&sol;i&gt;</code></pre>", "<pre><code class=html tag start-tag>&lt;em&gt;&lt;&sol;em&gt;</code></pre>", "<pre><code class=html tag start-tag>&lt;italic&gt;&lt;&sol;italic&gt;</code></pre>", "<pre><code class=html tag start-tag>&lt;strong&gt;&lt;&sol;strong&gt;</code></pre>"], "<pre><code class=html tag start-tag>&lt;em&gt;&lt;&sol;em&gt;</code></pre>"),
    new Question("9. Which tag would you use to create a hyperlink?", ["<pre><code class=html tag start-tag>&lt;a&gt;&lt;&sol;a&gt;</code></pre>", "<pre><code class=html tag start-tag>&lt;img&gt;</code></pre>", "<pre><code class=html tag start-tag>&lt;dl&gt;&lt;&sol;dl&gt;</code></pre>", "<pre><code class=html tag start-tag>&lt;strong&gt;&lt;&sol;strong&gt;</code></pre>"], "<pre><code class=html tag start-tag>&lt;a&gt;&lt;&sol;a&gt;</code></pre>"),
    new Question("10. Which character is used to indicate an end tag?", ["<pre><code class=html tag start-tag>&lt;</code></pre>", "<pre><code class=html tag start-tag>&Hat;</code></pre>", "<pre><code class=html tag start-tag>&ast;</code></pre>", "<pre><code class=html tag start-tag>&sol;</code></pre>"], "<pre><code class=html tag start-tag>&sol;</code></pre>"),
  new Question("11. How can you open a link in a new tab/browser window?", ["<pre><code class=html tag start-tag>&lt;a&ensp;href&equals;&quot;url&quot;&ensp;target&equals;&quot;new&quot;></code></pre>", "<pre><code class=html tag start-tag>&lt;a&ensp;href&equals;&quot;url&quot;&ensp;new&gt;</code></pre>", "<pre><code class=html tag start-tag>&lt;a&ensp;href&equals;&quot;url&quot;&ensp;target&equals;&quot;&UnderBar;blank&quot;&gt;</code></pre>", "<pre><code class=html tag start-tag>&lt;a&ensp;href&equals;&quot;url&quot;&ensp;new&ensp;blank&gt;</code></pre>"], '<pre><code class=html tag start-tag>&lt;a&ensp;href&equals;&quot;url&quot;&ensp;target&equals;&quot;&UnderBar;blank&quot;&gt;</code></pre>'),
  new Question("12. Inline elements are normally displayed without starting a new line.", ["True", "False", "IDK", "Not Enough Info"], "True"),
  new Question("13. Which input type defines a slider control?", ["range", "slider", "search", "controls"], "range"),
  new Question("14. In HTML, what does the <pre><code class=html tag start-tag>&lt;aside&gt;</code></pre> element define?", ["Content aside from the page content", "A navigation list to be shown at the left side of the page", "The ASCII character-set; to send information between computers on the Internet", "None of the above"], "Content aside from the page content"),
  new Question('15. The HTML global attribute, "contenteditable " is used to:', ["Specifies a context menu for an element. The menu appears when a user right-clicks on the element", "Specify whether the content of an element should be editable or not", "Return the position of the first found occurrence of content inside a string", "Update content from the server"], "Specify whether the content of an element should be editable or not"),
  new Question("16. In HTML, onblur and onfocus are:", ["Style attributes", "Event attributes", "HTML elements", "None of these above"], "Event attributes"),
  new Question("17. Graphics defined by SVG is in which format?", ["XML", "HTML", "CSS", "JS"], "XML"),
  new Question("18. The HTML canvas element is used to:", ["create draggable elements", "draw graphics", "manipulate data in MySQL", "display database records"], "draw graphics"),
  new Question("19. In HTML, which attribute is used to specify that an input field must be filled out?", ["placeholder", "required", "validate", "formvalidate"], "required"),
  new Question("20. In HTML, you can embed SVG elements directly into an HTML page.", ["True", "False", "I don't Know", "Not enough Info"], "True"),
  new Question("21. Which HTML attribute specifies an alternate text for an image, if the image cannot be displayed?", ["src", "alt", "title", "longdesc"], "alt"),
  new Question("22. Block elements are normally displayed without starting a new line.", ["False", "True", "Both", "Not Sure"], "False"),
  new Question("23. An <pre><code class=html tag start-tag>&lt;iframe&gt;</code></pre> is used to display a web page within a web page.", ["There is no such thing as an iframe", "True", "False", "Not Sure"], "True"),
  new Question("24. How can you make a numbered list?", ["<pre><code class=html tag start-tag>&lt;h1&gt;&lt;&sol;h1&gt;&hyphen;&lt;h6&gt;&lt;&sol;h6&gt;</code></pre>", "<pre><code class=html tag start-tag>&lt;ul&gt;&lt;&sol;ul&gt;</code></pre>", "<pre><code class=html tag start-tag>&lt;ol&gt;&lt;&sol;ol&gt;</code></pre>", "<pre><code class=html tag start-tag>&lt;list&gt;&lt;&sol;list&gt;</code></pre>"], "<pre><code class=html tag start-tag>&lt;ol&gt;&lt;&sol;ol&gt;</code></pre>"),
  new Question("25. The HTML ________ element defines a column within a table and is used for defining common semantics on all common cells.", ["<pre><code class=html tag start-tag>&lt;th&gt;&lt;&sol;th&gt;</code></pre>", "<pre><code class=html tag start-tag>&lt;tfoot&gt;&lt;&sol;tfoot&gt;</code></pre>", "<pre><code class=html tag start-tag>&lt;col&gt;&lt;&sol;col&gt;</code></pre>", "<pre><code class=html tag start-tag>&lt;article&gt;&lt;&sol;article&gt;</code></pre>"], "<pre><code class=html tag start-tag>&lt;col&gt;&lt;&sol;col&gt;</code></pre>"),
  new Question("26. The HTML _________ element defines a set of rows summarizing the columns of the table.", ["<pre><code class=html tag start-tag>&lt;tbody&gt;&lt;&sol;tbody&gt;</code></pre>", "<pre><code class=html tag start-tag>&lt;tfoot&gt;&lt;&sol;tfoot&gt;</code></pre>", "<pre><code class=html tag start-tag>&lt;thead&gt;&lt;&sol;thead&gt;</code></pre>", "<pre><code class=html tag start-tag>&lt;tr&gt;&lt;&sol;tr&gt;</code></pre>"], "<pre><code class=html tag start-tag>&lt;tfoot&gt;&lt;&sol;tfoot&gt;</code></pre>"),
  new Question("27. What is the correct HTML for making a drop-down list?", ["<pre><code class=html tag start-tag>&lt;label&gt;&lt;&sol;label&gt;</code></pre>", "<pre><code class=html tag start-tag>&lt;input&gt;&lt;&sol;input&gt;</code></pre>", "<pre><code class=html tag start-tag>&lt;select&gt;&lt;&sol;select&gt;</code></pre>", "<pre><code class=html tag start-tag>&lt;form&gt;&lt;&sol;form&gt;</code></pre>"], "<pre><code class=html tag start-tag>&lt;select&gt;&lt;&sol;select&gt;</code></pre>"),
  new Question("28. What is the correct HTML for making a text area?", ["<pre><code class=html tag start-tag>&lt;progress&gt;&lt;&sol;progress&gt;</code></pre>", "<pre><code class=html tag start-tag>&lt;option&gt;&lt;&sol;option&gt;</code></pre>", "<pre><code class=html tag start-tag>&lt;output&gt;&lt;&sol;output&gt;</code></pre>", "<pre><code class=html tag start-tag>&lt;textarea&gt;&lt;&sol;textarea&gt;</code></pre>"], "<pre><code class=html tag start-tag>&lt;textarea&gt;&lt;&sol;textarea&gt;</code></pre>"),
  new Question("29. The HTML _____________ element represents a caption for an item in a user interface.", ["<pre><code class=html tag start-tag>&lt;label&gt;</code></pre>", "<pre><code class=html tag start-tag>&lt;progress&gt;</code></pre>", "<pre><code class=html tag start-tag>&lt;input&gt;</code></pre>", "<pre><code class=html tag start-tag>&lt;form&gt;</code></pre>"], "<pre><code class=html tag start-tag>&lt;label&gt;</code></pre>"),
  new Question("30. Which doctype is correct for HTML5?", ["<pre><code class=html tag start-tag>&lt;!DOCTYPE&ensp;html&gt;</code></pre>", "<pre><code class=html tag start-tag>&lt;!doctype&ensp;HTML&gt;</code></pre>", "<pre><code class=html tag start-tag>&lt;DOCTYPE&ensp;HTML&gt;</code></pre>", "<pre><code class=html tag start-tag>&lt;!DOCTYPE&gt;</code></pre>"], "<pre><code class=html tag start-tag>&lt;!DOCTYPE&ensp;html&gt;</code></pre>"),
    new Question("31. What is the correct HTML element for playing video files?", ["<pre><code class=html tag start-tag>&lt;!DOCTYPE&ensp;html&gt;</code></pre>", "<pre><code class=html tag start-tag>&lt;video&gt;</code></pre>", "<pre><code class=html tag start-tag>&lt;audio&gt;</code></pre>", "<pre><code class=html tag start-tag>&lt;track&gt;</code></pre>"], "<pre><code class=html tag start-tag>&lt;video&gt;</code></pre>"),
  new Question("32. How can you make a bulleted list?", ["<pre><code class=html tag start-tag>&lt;h1&gt;&lt;&sol;h1&gt;&hyphen;&lt;h6&gt;&lt;&sol;h6&gt;</code></pre>", "<pre><code class=html tag start-tag>&lt;ul&gt;&lt;&sol;ul&gt;</code></pre>", "<pre><code class=html tag start-tag>&lt;ol&gt;&lt;&sol;ol&gt;</code></pre>", "<pre><code class=html tag start-tag>&lt;list&gt;&lt;&sol;list&gt;</code></pre>"], "<pre><code class=html tag start-tag>&lt;ul&gt;&lt;&sol;ul&gt;</code></pre>"),
  new Question("33. What is the correct HTML element for playing audio files?", ["<pre><code class=html tag start-tag>&lt;video&gt;</code></pre>", "<pre><code class=html tag start-tag>&lt;audio&gt;</code></pre>", "<pre><code class=html tag start-tag>&lt;mp3&gt;</code></pre>", "<pre><code class=html tag start-tag>&lt;sound&gt;</code></pre>"], "<pre><code class=html tag start-tag>&lt;audio&gt;</code></pre>"),
  new Question("34. HTML uses", ["User defined tags", "Pre-specified tags", "Fixed tags defined by the language", "Tags only for linking"], "Fixed tags defined by the language"),
  new Question("35. Fundamental HTML Block is known as ________.", ["HTML Body", "HTML Tag", "HTML Attribute", "HTML Element"], "HTML Tag"),
  new Question("36. Tags and test that are not directly displayed on the page are written in ______ section.", ["<pre><code class=html tag start-tag>&lt;head&gt;</code></pre>", "<pre><code class=html tag start-tag>&lt;title&gt;</code></pre>", "<pre><code class=html tag start-tag>&lt;body&gt;</code></pre>", "<pre><code class=html tag start-tag>&lt;html&gt;</code></pre>"], "<pre><code class=html tag start-tag>&lt;head&gt;</code></pre>"),
  new Question("37. Specifies that a text area should automatically get focus when the page loads.", ["<pre><code class=html tag start-tag>&lt;dirname&gt;</code></pre>", "<pre><code class=html tag start-tag>&lt;autofocus&gt;</code></pre>", "<pre><code class=html tag start-tag>&lt;placeholder&gt;</code></pre>", "<pre><code class=html tag start-tag>&lt;maxlength&gt;</code></pre>"], "<pre><code class=html tag start-tag>&lt;autofocus&gt;</code></pre>"),
  new Question("38. Script to be run after the document is printed", ["<pre><code class=html tag start-tag>&lt;onbeforeunload&gt;</code></pre>", "<pre><code class=html tag start-tag>&lt;onafterprint&gt;</code></pre>", "<pre><code class=html tag start-tag>&lt;onerror&gt;</code></pre>", "<pre><code class=html tag start-tag>&lt;onload&gt;</code></pre>"], "<pre><code class=html tag start-tag>&lt;onafterprint&gt;</code></pre>"),
  new Question("39. What is HTML?", ["HTML stands for Hyper Text Markup Language & HTML describes the structure of Web pages using markup", "HTML elements are the building blocks of HTML pages & HTML elements are represented by tags", "HTML tags label pieces of content such as 'heading', 'paragraph', 'table', and so on & Browsers do not display the HTML tags, but use them to render the content of the page", "all of the above"], "all of the above"),
  new Question("40. HTML Paragraphs are defined with the ______ tag: " , ["<pre><code class=html tag start-tag>&lt;h1&gt;</code></pre>", "<pre><code class=html tag start-tag>&lt;p&gt;</code></pre>", "<pre><code class=html tag start-tag>&lt;a&gt;</code></pre>", "<pre><code class=html tag start-tag>&lt;src&gt;</code></pre>"], "<pre><code class=html tag start-tag>&lt;p&gt;</code></pre>"),
  new Question("41. The _______ attribute is used to specify the styling of an element, like color, font, size etc." , ["src", "alt", "style", "lang"], "style")
];

//create quiz
var quiz = new Quiz(questions);

// display quiz
populate();
