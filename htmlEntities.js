/**
	 * Convert all applicable characters to HTML entities
	 *
	 * @param $string
	 * @param $quotes
	 * @param $preserveAmp
	 * @return string
	 */
	function htmlEntities($string, $quotes, $preserveAmp){
		switch($quotes){
			case "ENT_QUOTES":
					//Will convert both double and single quotes.
				return String($string).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&quot;');
				break;
			case 'ENT_NOQUOTES':
					//Will leave both double and single quotes unconverted
				return String($string).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
				break;
			case 'ENT_COMPAT':
					//Will convert double-quotes and leave single-quotes alone.
				return String($string).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
				break;
			default:
		}

		if($preserveAmp){
			return String($string).replace(/&amp;/g, '&')
		}
	}
