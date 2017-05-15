/**
 * Convert all applicable characters to HTML entities
 *
 * @param $string
 * @param $quotes
 * @param $preserveAmp
 * @return string
 */
function htmlEntities($string, $quotes, $preserveAmp){
	var string;

	switch($quotes){
		case "ENT_QUOTES":
			//Will convert both double and single quotes.
			string = String($string).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&quot;');
			break;
		case 'ENT_NOQUOTES':
			//Will leave both double and single quotes unconverted
			string = String($string).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
			break;
		case 'ENT_COMPAT':
			//Will convert double-quotes and leave single-quotes alone.
			string = String($string).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
			break;
		default:
	}

	if($preserveAmp){
		string = String($string).replace(/&amp;/g, '&')
	}

	return string;
}
