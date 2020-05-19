
function testTwoVector(i_cVect, i_fX, i_fY)
{
	var fEpsilon = 1.0e-7;
	return testValue(i_cVect.x,i_fX) && testValue(i_cVect.y,i_fY);
}
function testAndReportTwoVector(bSilent_Pass, i_psTest, i_cVect, i_fX, i_fY)
{
	var iRet = 0;
	var sSuccess = "Pass";
	var bPrint = !bSilent_Pass;
	if (!testTwoVector(i_cVect,i_fX,i_fY))
	{
		iRet = 1;
		bPrint = true;
		sSuccess = "Fail";
	}
	if (bPrint)
	{
		displayMessage(sSuccess + ":  " + i_psTest + ": x=" + i_cVect.x + " (" + i_fX + ") y=" + i_cVect.y + " (" + i_fY + ")");
	}
	return new TestCount(1,iRet);
}

function printTwoVector(i_cVect)
{
	displayMessage("<" + i_cVect.x + ", " + i_cVect.y + ">");
}


var iFailuresTwoVector = new TestCount();
var qA = new TwoVector();
var qX = new TwoVector(1,0);
var qY = new TwoVector(0,1);

iFailuresTwoVector.addEq(testAndReportTwoVector(bSilent_Pass,"X",qX,1,0));
iFailuresTwoVector.addEq(testAndReportTwoVector(bSilent_Pass,"Y",qY,0,1));
iFailuresTwoVector.addEq(testAndReportTwoVector(bSilent_Pass,"A",qA,0,0));

iFailuresTwoVector.addEq(testValueAndReport(bSilent_Pass,"X . X",qX.dot(qX),1.0));
iFailuresTwoVector.addEq(testValueAndReport(bSilent_Pass,"Y . Y",qY.dot(qY),1.0));
iFailuresTwoVector.addEq(testValueAndReport(bSilent_Pass,"X . Y",qX.dot(qY),0.0));
iFailuresTwoVector.addEq(testValueAndReport(bSilent_Pass,"Y . X",qY.dot(qX),0.0));

iFailuresTwoVector.addEq(testValueAndReport(bSilent_Pass,"||X||",qX.magnitude(),1.0));
iFailuresTwoVector.addEq(testValueAndReport(bSilent_Pass,"||Y||",qY.magnitude(),1.0));
iFailuresTwoVector.addEq(testValueAndReport(bSilent_Pass,"||A||",qA.magnitude(),0.0));

qA = new TwoVector(2,0);
iFailuresTwoVector.addEq(testAndReportTwoVector(bSilent_Pass,"unit <2,0,0>",qA.unit(),1,0));
qA = new TwoVector(0,2);
iFailuresTwoVector.addEq(testAndReportTwoVector(bSilent_Pass,"unit <0,2,0>",qA.unit(),0,1));

iFailuresTwoVector.addEq(testAndReportTwoVector(bSilent_Pass,"-X",qX.negate(),-1,0));
iFailuresTwoVector.addEq(testAndReportTwoVector(bSilent_Pass,"-Y",qY.negate(),0,-1));

iFailuresTwoVector.addEq(testAndReportTwoVector(bSilent_Pass,"X + X",qX.add(qX),2,0));
iFailuresTwoVector.addEq(testAndReportTwoVector(bSilent_Pass,"Y + Y",qY.add(qY),0,2));
iFailuresTwoVector.addEq(testAndReportTwoVector(bSilent_Pass,"X + Y",qX.add(qY),1,1));
iFailuresTwoVector.addEq(testAndReportTwoVector(bSilent_Pass,"Y + X",qY.add(qX),1,1));

iFailuresTwoVector.addEq(testAndReportTwoVector(bSilent_Pass,"X - X",qX.subtract(qX),0,0));
iFailuresTwoVector.addEq(testAndReportTwoVector(bSilent_Pass,"Y - Y",qY.subtract(qY),0,0));
iFailuresTwoVector.addEq(testAndReportTwoVector(bSilent_Pass,"X - Y",qX.subtract(qY),1,-1));
iFailuresTwoVector.addEq(testAndReportTwoVector(bSilent_Pass,"Y - X",qY.subtract(qX),-1,1));

iFailuresTwoVector.addEq(testAndReportTwoVector(bSilent_Pass,"X * 2",qX.scale(2.0),2,0));
iFailuresTwoVector.addEq(testAndReportTwoVector(bSilent_Pass,"Y * 2",qY.scale(2.0),0,2));


iFailuresTwoVector.addEq(testAndReportTwoVector(bSilent_Pass,"X / 2",qX.divide(2.0),0.5,0));
iFailuresTwoVector.addEq(testAndReportTwoVector(bSilent_Pass,"Y / 2",qY.divide(2.0),0,0.5));


iFailuresTwoVector.addEq(testValueAndReport(bSilent_Pass,"X x X",qX.cross(qX),0));
iFailuresTwoVector.addEq(testValueAndReport(bSilent_Pass,"Y x Y",qY.cross(qY),0));
iFailuresTwoVector.addEq(testValueAndReport(bSilent_Pass,"X x Y",qX.cross(qY),1));
iFailuresTwoVector.addEq(testValueAndReport(bSilent_Pass,"Y x X",qY.cross(qX),-1));

qA.loadZero();
iFailuresTwoVector.addEq(testAndReportTwoVector(bSilent_Pass,"loadZero",qA,0,0));
qA.loadUnitX();
iFailuresTwoVector.addEq(testAndReportTwoVector(bSilent_Pass,"loadUnitX",qA,1,0));
qA.loadUnitY();
iFailuresTwoVector.addEq(testAndReportTwoVector(bSilent_Pass,"loadUnitY",qA,0,1));


iFailuresTwoVector.report("Two Vector");

