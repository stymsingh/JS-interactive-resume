// Defines the Bio Object to be used in the Resume
var bio = {
	"name": 'Satyam Singh',
	"role": 'Front-end Web Developer',
	"contacts": { // Contacts Object
		"mobile": '752-287-3852',
		"email": 'anonymoussatyam1997@hotmail.com',
	"github": 'stymsingh',
        "location": 'New Delhi , India'
	},
	"welcomeMessage": '',
	"skills": [ // Skills Array
		"HTML5", 'CSS3', 'JavaScript', 'Git', 'Github' ,'Python', 'c++', 'ADA & DS','Bootstrap','Django','Android'
	],
	"bioPic": [
				'images/satyam_pic.png'
	]
};


// Appends the Skills from the Bio Object to the page using a for in loop
bio.display = function() {
	$("#header").append(HTMLskillsStart);
	for (var skills in bio.skills) {
		var formattedSkills = HTMLskills.replace("%data%", bio.skills[skills]);
		$("#skills").append(formattedSkills);
	}


	// creates the header content
	var formattedName = HTMLheaderName.replace("%data%", bio.name);
	var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
	var formattedWelcomeMsg = HTMLWelcomeMsg.replace("%data%", bio.welcomeMessage);
	var formattedBioPic = HTMLbioPic.replace("%data%", bio.bioPic);

	// Appends the Header content to the page
	$("#header").prepend(formattedName, formattedRole, formattedBioPic);
	$("#topContacts").append(formattedWelcomeMsg);

	// Appends contact information in the page with the for in loop
	for (var contact in bio.contacts) {
	var formattedContact = HTMLcontactGeneric.replace("%contact%", contact).replace("%data%", bio.contacts[contact]);

	$("#topContacts, #footerContacts").append(formattedContact);
	};
}

bio.display();
// Education Object to be used in the Resume
var education = {
	"schools": [
	{
		"name": 'GTBIT',
		"location": 'Rajauri Garden, New Delhi',
		"degree": 'B.Tech',
		"major": 'Electronics',
		"dates": "2015-2019",
		"website": 'www.gtbit.org/'

	}
	],
	"onlineCourses": [ // onlineCourses array
	{
		"title": 'Intro to HTML and CSS',
		"school": 'Udacity',
		"dates": 2016,
		"url": 'http://udacity.com'
	},
	{
		"title": 'Programming foundations with Python',
		"school": 'Udacity',
		"dates": 2016,
		"url": 'http://udacity.com'
	},
	{
		"title": 'JavaScript Basics',
		"school": 'Udacity',
		"dates": 2016,
		"url": 'http://udacity.com'
	},

	]
};

// Appends all education information to the page using the education-entry class
education.display = function() {

	$("#education").append(HTMLschoolStart);
	for (var school in education.schools) {
		 formattedName = HTMLschoolName.replace("%data%", education.schools[school].name);
		 formattedDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
		 formattedDates = HTMLschoolDates.replace("%data%", education.schools[school].dates);
		 formattedCity = HTMLschoolLocation.replace("%data%", education.schools[school].location);
		 formattedMajor = HTMLschoolMajor.replace("%data%", education.schools[school].major);

		$(".education-entry").append(formattedName, formattedDegree, formattedDates, formattedCity, formattedMajor);
	}



	$(".education-entry:last").append(HTMLonlineClasses);
		for(var course in education.onlineCourses) {
			formattedOnlineTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[course].title);
			formattedOnlineSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[course].school);
			formattedOnlineDates = HTMLonlineDates.replace("%data%", education.onlineCourses[course].dates);
			formattedUrl = HTMLonlineURL.replace("%data%", education.onlineCourses[course].url);

			$(".education-entry").append(formattedOnlineTitle, formattedOnlineSchool, formattedOnlineDates, formattedUrl); // Appends entire Oline Education section in one statement.
		}
};

education.display();
// work object
var work = {
	"jobs": [
	{
		"employer": 'FoodCham',
		"location": 'New Delhi',
		"role": 'Web Developer intern',
		"dates":'March 2016 - July 2016',
		"description": 'Worked on the front end of the website using latest tools and technologies'
	},
	{
		"employer": 'Hello World!!',
		"location": 'New Delhi',
		"role": 'Python and Web instructor',
		"dates": 'August 2016 - present',
		"description": 'Helped students learn Python programming through various projects and quizzes.'
	}
	]

};

// Creates Display work function and appends all work history to the page
work.display = function() {
	for (var job in work.jobs) {
		$("#workExperience").append(HTMLworkStart);

		var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
		var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].role);
		var formattedEmployerTitle = formattedEmployer + formattedTitle;
		var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
		var formattedWorkLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
		var formattedWorkDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);

		$(".work-entry:last").append(formattedEmployerTitle, formattedDates, formattedWorkLocation, formattedWorkDescription); // Appends entire work section in one statement.
	}
}
// Call to Work Function
work.display();

// projects object
var projects = {
	"projects": [
	{
		"title": 'Build a Portfolio Site',
		"dates": 2016,
		"description": 'Responsive HTML and CSS site built using Bootstrap 3 with responsive design techniques.',
		"images": ['images/a.jpg', 'images/b.jpg', 'images/c.jpg'
		]
	},
	{
		"title": 'Build a NGO site- IIT Delhi Hackathon',
		"dates": 2016,
		"description": 'Responsive HTML and CSS site built using Bootstrap with responsive design techniques using PHP as the backend.',
		"images": ['images/1.jpg', 'images/2.jpg', 'images/3.jpg'
		]
	},
	{
		"title": 'A movie trailer website ',
		"dates": 2016,
		"description": 'Responsive HTML and CSS site built using Python with responsive design techniques.',
		"images": ['images/r.jpg', 'images/q.jpg', 'images/p.jpg'
		]
	},

	]
};
// Appends project information to the page
projects.display = function() {
	for (var project in projects.projects) {
		$("#projects").append(HTMLprojectStart);

		var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
		$(".project-entry:last").append(formattedTitle);

		var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
		$(".project-entry:last").append(formattedDates);

		var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
		$(".project-entry:last").append(formattedDescription);

		if(projects.projects[project].images.length > 0) {
			for (var image in projects.projects[project].images) {
				var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[project].images[image]);
				$(".project-entry:last").append(formattedImage);
			}
		}
	}
};

// call to projects function
projects.display();
 // Displays Google Map at bottom of the page
$("#mapDiv").append(googleMap);