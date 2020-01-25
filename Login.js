 // Variable to count number of attempts.
// Below function Executes on click of login button.
function validate()
{
	var attempt = 3;
	var username = document.getElementById("username").value;
	var password = document.getElementById("password").value;
	if(username === "" || password === "")
	{
		document.getElementById("submit").disabled=true;
		return false;
	}
		else
		{
			if ( username == "root" && password == "abc123")
			{
				alert ("Login successfully");
				window.location = "Login.html"; // Redirecting to other page.
				return false;
			}
			else{
				attempt --;// Decrementing by one.
				
				// Disabling fields after 3 attempts.
					if( attempt == 0)
					{
						document.getElementById("username").disabled = true;
						document.getElementById("password").disabled = true;
						document.getElementById("submit").disabled = true;
						alert("Invalid Login !!! "+"\n You have left "+attempt+" attempt;");
						return false;
					}
				}
		}
}
