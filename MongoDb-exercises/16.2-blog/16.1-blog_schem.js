

const users = [
	{
		"user_id": "1",
		"firstName": "A",
		"lastName": "B",
		"emailAddress": "a.b@mail.com",
		"posts": [
			{
				"post_id": "",
				"title": "",
				"text": "",
				"date":"",
				"recent_comments": [{
					"user_id": "",
					"comment_id": "",
					"post_id": "", 
					"title": "",
					"text": "",
					"date":"just now",
				}],
				"more_comments": ["reference_to_old_comment_id"]
			}
		]
	},
	{
		"_id": "2",
		"firstName": "C",
		"lastName": "D",
		"emailAddress": "c.d@mail.com",
		"posts": [
			{
				"id": "",
				"title": "",
				"text": "",
				"date":"",
				"recent_comments": [{
					"comment_id": ""
				}],
				"more_comments": ["reference_to_old_comment_id"]
			}
		]
	},
]


const more_comments = [
	{
		"user_id": "",
		"comment_id": "",
		"post_id": "", 
		"title": "",
		"text": "",
		"date":"really old comment",
	},
	{
		"user_id": "",
		"comment_id": "",
		"post_id": "", 
		"title": "",
		"text": "",
		"date":"really old comment",
	}
];


const mongoose_exercise_data = [
	{
		
	}
]

module.exports = {
	users: users,
	more_comments: more_comments
}