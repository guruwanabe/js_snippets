function testReturnValue($value){
			var x = typeof $value;

			if (x == "string")
				alert("string")
			else if (x == "number")
				alert("number");
			else if (x == "undefined")
				alert('nothing returned');
			else if (x == "boolean")
				alert("boolean");
			else
				alert(x);
		}
