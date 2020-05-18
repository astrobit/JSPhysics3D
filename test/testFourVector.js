
function testFourVector(i_cVect, i_fT, i_fX, i_fY, i_fZ)
{
	return testValue(i_cVect.t,i_fT) && testValue(i_cVect.x,i_fX) && testValue(i_cVect.y,i_fY) && testValue(i_cVect.z , i_fZ);
}
function testAndReportFourVector(bSilent_Pass, i_psTest, i_cVect, i_fT, i_fX, i_fY, i_fZ)
{
	var iRet = 0;
	var sSuccess = "Pass";
	var bPrint = !bSilent_Pass;
	if (!testFourVector(i_cVect,i_fT,i_fX,i_fY,i_fZ))
	{
		iRet = 1;
		bPrint = true;
		sSuccess = "Fail";
	}
	if (bPrint)
	{
		displayMessage(sSuccess + ":  " + i_psTest + ": t=" + i_cVect.t + " (" + i_fT + ") x=" + i_cVect.x + " (" + i_fX + ") y=" + i_cVect.y + " (" + i_fY + ") z=" + i_cVect.z + " (" + i_fZ + ")");
	}
	return new TestCount(1,iRet);
}

function printFourVector(i_cVect)
{
	displayMessage("<" + i_cVect.x + ", " + i_cVect.y + ", " + i_cVect.z + ">");
}


var iFailuresFourVector = new TestCount();
var qA = new FourVector();
var qT = new FourVector(1,0,0,0);
var qX = new FourVector(0,1,0,0);
var qY = new FourVector(0,0,1,0);
var qZ = new FourVector(0,0,0,1);

iFailuresFourVector.addEq(testAndReportFourVector(bSilent_Pass,"T",qT,1,0,0,0));
iFailuresFourVector.addEq(testAndReportFourVector(bSilent_Pass,"X",qX,0,1,0,0));
iFailuresFourVector.addEq(testAndReportFourVector(bSilent_Pass,"Y",qY,0,0,1,0));
iFailuresFourVector.addEq(testAndReportFourVector(bSilent_Pass,"Z",qZ,0,0,0,1));
iFailuresFourVector.addEq(testAndReportFourVector(bSilent_Pass,"A",qA,0,0,0,0));

iFailuresFourVector.addEq(testValueAndReport(bSilent_Pass,"T . T",qT.dot(qT),1.0));
iFailuresFourVector.addEq(testValueAndReport(bSilent_Pass,"X . X",qX.dot(qX),1.0));
iFailuresFourVector.addEq(testValueAndReport(bSilent_Pass,"Y . Y",qY.dot(qY),1.0));
iFailuresFourVector.addEq(testValueAndReport(bSilent_Pass,"Z . Z",qZ.dot(qZ),1.0));
iFailuresFourVector.addEq(testValueAndReport(bSilent_Pass,"T . X",qT.dot(qX),0.0));
iFailuresFourVector.addEq(testValueAndReport(bSilent_Pass,"T . Y",qT.dot(qY),0.0));
iFailuresFourVector.addEq(testValueAndReport(bSilent_Pass,"T . Z",qT.dot(qZ),0.0));
iFailuresFourVector.addEq(testValueAndReport(bSilent_Pass,"X . T",qX.dot(qT),0.0));
iFailuresFourVector.addEq(testValueAndReport(bSilent_Pass,"X . Y",qX.dot(qY),0.0));
iFailuresFourVector.addEq(testValueAndReport(bSilent_Pass,"X . Z",qX.dot(qZ),0.0));
iFailuresFourVector.addEq(testValueAndReport(bSilent_Pass,"Y . T",qY.dot(qT),0.0));
iFailuresFourVector.addEq(testValueAndReport(bSilent_Pass,"Y . X",qY.dot(qX),0.0));
iFailuresFourVector.addEq(testValueAndReport(bSilent_Pass,"Y . Z",qY.dot(qZ),0.0));
iFailuresFourVector.addEq(testValueAndReport(bSilent_Pass,"Z . T",qZ.dot(qT),0.0));
iFailuresFourVector.addEq(testValueAndReport(bSilent_Pass,"Z . X",qZ.dot(qX),0.0));
iFailuresFourVector.addEq(testValueAndReport(bSilent_Pass,"Z . Y",qZ.dot(qY),0.0));

iFailuresFourVector.addEq(testValueAndReport(bSilent_Pass,"||T||",qT.magnitude(),1.0));
iFailuresFourVector.addEq(testValueAndReport(bSilent_Pass,"||X||",qX.magnitude(),1.0));
iFailuresFourVector.addEq(testValueAndReport(bSilent_Pass,"||Y||",qY.magnitude(),1.0));
iFailuresFourVector.addEq(testValueAndReport(bSilent_Pass,"||Z||",qZ.magnitude(),1.0));
iFailuresFourVector.addEq(testValueAndReport(bSilent_Pass,"||A||",qA.magnitude(),0.0));

qA = new FourVector(2,0,0,0);
iFailuresFourVector.addEq(testAndReportFourVector(bSilent_Pass,"unit <2,0,0,0>",qA.unit(),1,0,0,0));
qA = new FourVector(0,2,0,0);
iFailuresFourVector.addEq(testAndReportFourVector(bSilent_Pass,"unit <0,2,0,0>",qA.unit(),0,1,0,0));
qA = new FourVector(0,0,2,0);
iFailuresFourVector.addEq(testAndReportFourVector(bSilent_Pass,"unit <0,0,2,0>",qA.unit(),0,0,1,0));
qA = new FourVector(0,0,0,2);
iFailuresFourVector.addEq(testAndReportFourVector(bSilent_Pass,"unit <0,0,0,2>",qA.unit(),0,0,0,1));

iFailuresFourVector.addEq(testAndReportFourVector(bSilent_Pass,"-T",qT.negate(),-1,0,0,0));
iFailuresFourVector.addEq(testAndReportFourVector(bSilent_Pass,"-X",qX.negate(),0,-1,0,0));
iFailuresFourVector.addEq(testAndReportFourVector(bSilent_Pass,"-Y",qY.negate(),0,0,-1,0));
iFailuresFourVector.addEq(testAndReportFourVector(bSilent_Pass,"-Z",qZ.negate(),0,0,0,-1));

iFailuresFourVector.addEq(testAndReportFourVector(bSilent_Pass,"T + T",qT.add(qT),2,0,0,0));
iFailuresFourVector.addEq(testAndReportFourVector(bSilent_Pass,"X + X",qX.add(qX),0,2,0,0));
iFailuresFourVector.addEq(testAndReportFourVector(bSilent_Pass,"Y + Y",qY.add(qY),0,0,2,0));
iFailuresFourVector.addEq(testAndReportFourVector(bSilent_Pass,"Z + Z",qZ.add(qZ),0,0,0,2));
iFailuresFourVector.addEq(testAndReportFourVector(bSilent_Pass,"T + X",qT.add(qX),1,1,0,0));
iFailuresFourVector.addEq(testAndReportFourVector(bSilent_Pass,"T + Y",qT.add(qY),1,0,1,0));
iFailuresFourVector.addEq(testAndReportFourVector(bSilent_Pass,"T + Z",qT.add(qZ),1,0,0,1));
iFailuresFourVector.addEq(testAndReportFourVector(bSilent_Pass,"X + T",qX.add(qT),1,1,0,0));
iFailuresFourVector.addEq(testAndReportFourVector(bSilent_Pass,"X + Y",qX.add(qY),0,1,1,0));
iFailuresFourVector.addEq(testAndReportFourVector(bSilent_Pass,"X + Z",qX.add(qZ),0,1,0,1));
iFailuresFourVector.addEq(testAndReportFourVector(bSilent_Pass,"Y + T",qY.add(qT),1,0,1,0));
iFailuresFourVector.addEq(testAndReportFourVector(bSilent_Pass,"Y + X",qY.add(qX),0,1,1,0));
iFailuresFourVector.addEq(testAndReportFourVector(bSilent_Pass,"Y + Z",qY.add(qZ),0,0,1,1));
iFailuresFourVector.addEq(testAndReportFourVector(bSilent_Pass,"Z + T",qZ.add(qT),1,0,0,1));
iFailuresFourVector.addEq(testAndReportFourVector(bSilent_Pass,"Z + X",qZ.add(qX),0,1,0,1));
iFailuresFourVector.addEq(testAndReportFourVector(bSilent_Pass,"Z + Y",qZ.add(qY),0,0,1,1));

iFailuresFourVector.addEq(testAndReportFourVector(bSilent_Pass,"T - T",qT.subtract(qT),0,0,0,0));
iFailuresFourVector.addEq(testAndReportFourVector(bSilent_Pass,"X - X",qX.subtract(qX),0,0,0,0));
iFailuresFourVector.addEq(testAndReportFourVector(bSilent_Pass,"Y - Y",qY.subtract(qY),0,0,0,0));
iFailuresFourVector.addEq(testAndReportFourVector(bSilent_Pass,"Z - Z",qZ.subtract(qZ),0,0,0,0));
iFailuresFourVector.addEq(testAndReportFourVector(bSilent_Pass,"T - X",qT.subtract(qX),1,-1,0,0));
iFailuresFourVector.addEq(testAndReportFourVector(bSilent_Pass,"T - Y",qT.subtract(qY),1,0,-1,0));
iFailuresFourVector.addEq(testAndReportFourVector(bSilent_Pass,"T - Z",qT.subtract(qZ),1,0,0,-1));
iFailuresFourVector.addEq(testAndReportFourVector(bSilent_Pass,"X - T",qX.subtract(qT),-1,1,0,0));
iFailuresFourVector.addEq(testAndReportFourVector(bSilent_Pass,"X - Y",qX.subtract(qY),0,1,-1,0));
iFailuresFourVector.addEq(testAndReportFourVector(bSilent_Pass,"X - Z",qX.subtract(qZ),0,1,0,-1));
iFailuresFourVector.addEq(testAndReportFourVector(bSilent_Pass,"Y - T",qY.subtract(qT),-1,0,1,0));
iFailuresFourVector.addEq(testAndReportFourVector(bSilent_Pass,"Y - X",qY.subtract(qX),0,-1,1,0));
iFailuresFourVector.addEq(testAndReportFourVector(bSilent_Pass,"Y - Z",qY.subtract(qZ),0,0,1,-1));
iFailuresFourVector.addEq(testAndReportFourVector(bSilent_Pass,"Z - T",qZ.subtract(qT),-1,0,0,1));
iFailuresFourVector.addEq(testAndReportFourVector(bSilent_Pass,"Z - X",qZ.subtract(qX),0,-1,0,1));
iFailuresFourVector.addEq(testAndReportFourVector(bSilent_Pass,"Z - Y",qZ.subtract(qY),0,0,-1,1));

iFailuresFourVector.addEq(testAndReportFourVector(bSilent_Pass,"T * 2",qT.scale(2.0),2,0,0,0));
iFailuresFourVector.addEq(testAndReportFourVector(bSilent_Pass,"X * 2",qX.scale(2.0),0,2,0,0));
iFailuresFourVector.addEq(testAndReportFourVector(bSilent_Pass,"Y * 2",qY.scale(2.0),0,0,2,0));
iFailuresFourVector.addEq(testAndReportFourVector(bSilent_Pass,"Z * 2",qZ.scale(2.0),0,0,0,2));

iFailuresFourVector.addEq(testAndReportFourVector(bSilent_Pass,"T / 2",qT.divide(2.0),0.5,0,0,0));
iFailuresFourVector.addEq(testAndReportFourVector(bSilent_Pass,"X / 2",qX.divide(2.0),0,0.5,0,0));
iFailuresFourVector.addEq(testAndReportFourVector(bSilent_Pass,"Y / 2",qY.divide(2.0),0,0,0.5,0));
iFailuresFourVector.addEq(testAndReportFourVector(bSilent_Pass,"Z / 2",qZ.divide(2.0),0,0,0,0.5));



iFailuresFourVector.report("Four Vector");

