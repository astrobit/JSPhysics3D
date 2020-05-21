var bSilent_Pass = true;
var i,j,k;

function displayMessage(message)
{
	var pElem = document.createElement("p");
	pElem.insertAdjacentText("beforeend",message);
	document.body.appendChild(pElem);
	console.log(message);	
}

class TestCount
{
	constructor(count, failures)
	{
		if (count != null)
			this._count = count;
		else
			this._count = 0;
		if (failures != null)
			this._failures = failures;
		else
			this._failures = 0;
	}
	get count() {return this._count;}
	get failures() {return this._failures = 0;}
	
	set count(value) {this._count = value;}
	set failures(value) {this._failures = value;}
	
	addEq(RHO)
	{
		this._count += RHO._count;
		this._failures += RHO._failures;
	}
	
	report(type)
	{
		displayMessage(type + " PASS: " + (this._count - this._failures) + " FAIL: " + this._failures);
	}
}
var fTestEpsilon = 1.0e-7;
function resetTestEpsilon()
{
	fTestEpsilon = 1.0e-7;
}
function setTestEpsilon(value)
{
	fTestEpsilon = value;
}

function testValue(actual, expected)
{
	if (actual == expected)
		return true;
	else if (actual == null && expected != null)
		return false;
	else if (actual == undefined && expected != undefined)
		return false;
	else if (expected != 0.0)
		return Math.abs((actual - expected) / expected) < fTestEpsilon;
	else
		return Math.abs(actual) < fTestEpsilon;
}

function testValueAndReport(bSilent_Pass, i_psTest, actual, expected)
{
	var iRet = 0;
	var sSuccess = "Pass";
	var bPrint = !bSilent_Pass;
	if (!testValue(actual,expected))
	{
		iRet = 1;
		bPrint = true;
		sSuccess = "Fail";
	}
	if (bPrint)
	{
		displayMessage(message = sSuccess + ": " + i_psTest + ":  s = " + actual + " (" + expected + ")");
	}
	return new TestCount(1,iRet);
}

function nToLetter(n)
{
	var letterset = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
	
	var letter = null;
	if (n >= 0 && n <= 25)
		letter = letterset[n];
	return letter;
}

