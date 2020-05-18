var bSilent_Pass = true;
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

function testValue(actual, expected)
{
	var fEpsilon = 1.0e-7;
	if (expected != 0.0)
		return Math.abs((actual - expected) / expected) < fEpsilon;
	else
		return Math.abs(actual) < fEpsilon;
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

