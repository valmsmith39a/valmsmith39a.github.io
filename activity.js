//  Only used in implementing navigation tabs: Method 2: Use jQuery with grid-layout (rows & columns) from Bootstrap
$(document).ready(function(){
  $('#aboutTab').click(function(){
    //$('#socialMedia').remove();
    $('#displayInfo').remove();
    $('#textDisplay').append('<div id=\"displayInfo\"><br>George is a student at Coding House, a web development bootcamp, studying to become a full stack web developer. He is familiar with the following programming languages, frameworks and tools: JavaScript, HTML, CSS, jQuery, Node.js, AngularJS, ReactJS, MongoDB, Swift and Objective-C. Before Coding House, he spent about one year developing iOS mobile applications, with two apps in the Apple Store. He holds a BA in Political Science from the University of California, San Diego, an MA in Government from Johns Hopkins University and MS in Finance from Peking University Shenzhen HSBC Business School.</div>');
  });

  $('#socialMediaNProjectsTab').click(function(){
    //$('#bio').remove();
    $('#displayInfo').remove();
    var socialMediaString = '<div id=\"displayInfo\"><br>Email: george.x.wee@gmail.com<br><br>LinkedIn: <a href="https://www.linkedin.com/in/georgewee">https://www.linkedin.com/in/georgewee</a><br><br>GitHub: <a href="https://github.com/valmsmith39a">https://github.com/valmsmith39a</a><br><br>StackExchange: <a href="http://stackexchange.com/users/7436960/valmsmith39a">http://stackexchange.com/users/7436960/valmsmith39a</a><br><br>Twitter: <a href="https://twitter.com/valmsmith39a">https://twitter.com/valmsmith39a</a><br><br>AngelList: <a href="https://angel.co/george-wee-1">https://angel.co/george-wee-1</a></div>';
    var socialMediaElement = $(socialMediaString);
    $('#textDisplay').append(socialMediaElement);
  });
});
