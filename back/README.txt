Algunas notas:

Else TODO
- Use environment variables for connection string
- Utils file or class for handling responses with status codes

Routes TODO
	/users:
		- /create				Ready
		- /delete				Ready
		- /change_email			Ready
		- /change_password		Ready
	
	/vaccines: Vaccines should already be uploaded to the database once the child is created?
		- /create 				Ready -> Vaccines for a child could be created once a new child is created
		- /apply				Ready
		
	/parents:
		- Do we still need a parent object or db? Maybe this info can go to the user directly
		
	/childs
		- /create				Testing -> Missing vaccine creation if applicable
		- /change				Testing
		- /delete				Testing
		
	/controls:
		- /create				Testing
		- /delete				Testing