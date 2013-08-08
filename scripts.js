function checkform()
  {
		// Variables are declared
		var firstname = document.getElementById("firstname");
		var lastname = document.getElementById("lastname");
		var email = document.getElementById("email");
		var messagebox = document.getElementById("messagebox");
		var err_firstname = document.getElementById("err_firstname");
		var err_lastname = document.getElementById("err_lastname");
		var err_email = document.getElementById("err_email");
		var err_messagebox = document.getElementById("err_messagebox");
		var has_errors = false;
	
		// Validates each input box has a value and marks when they don't
		if (firstname.value.length == 0)
		{
			document.getElementById("firstname").className="novalue";
			err_firstname.innerHTML = "*";
			has_errors = true;
		}
		
		if (lastname.value.length == 0)
		{
			document.getElementById("lastname").className="novalue";
			err_lastname.innerHTML = "*";
			has_errors = true;
		}
		
		if (email.value.length == 0)
		{
			document.getElementById("email").className="novalue";
			err_email.innerHTML = "*";
			has_errors = true;
		}
		else if (email.value.indexOf("@") == -1 || email.value.indexOf(".") == -1)
		{
			document.getElementById("email").className="novalue";
			err_email.innerHTML = "*";
			alert("E-mail must contain an \"@\" and a \".\"");
			has_errors = true;
		}
		
		if (messagebox.value.length == 0)
		{
			document.getElementById("messagebox").className="novalue";
			err_messagebox.innerHTML = "*";
			has_errors = true;
		}
		else if (messagebox.value.length > 150)
		{
			document.getElementById("messagebox").className="novalue";
			err_messagebox.innerHTML = "*";
			alert("Max message length is 150 characters");
			has_errors = true;
		}
		
		// Variables are declared for the confirmation screen
		var firstname_results = "";
		var lastname_results = "";
		var email_results = "";
		var message_results = "";
		var confirmation_div = document.getElementById("confirmation");
		var con_results = document.getElementById("con_results");
		
		// Only displays confirmation screen if there are no errors
		if (!has_errors)
		{
		firstname_results += "First Name: " + firstname.value;
		lastname_results += "Last Name: " + lastname.value;
		email_results += "E-mail: " + email.value;
		message_results += "Message: " + messagebox.value;
		
		document.getElementById("email_form").style.display = "none";
		
		confirmation_div.style.display = "block";		
		con_results.innerHTML = "<div align=left><ul><li>" + firstname_results + "</li>" + "<li>" + lastname_results + "</li>" + "<li>" + email_results + "</li>" + "<li>" + message_results + "</li>" + "</ul></div>";
		}
	}
