var iFailuresTwoMatrix = new TestCount();


var mA = new TwoMatrix([1,0,0,0]);
var mB = new TwoMatrix([[0,1],[0,0]]);
var mC = new TwoMatrix([0,0,1,0]);
var mD = new TwoMatrix([0,0,0,1]);

var mSet = [mA,mB,mC,mD];
var rank = Math.floor(Math.sqrt(mSet.length));

var mRand = new TwoMatrix([0.18893418,0.510986168,0.282937897,0.972385316]);

var mXY = new TwoMatrix([1,0,0,1]);
var mYX = new TwoMatrix([0,1,1,0]);

var mSetI = [mXY,mYX];

var mvX = new TwoVector(1,0);
var mvY = new TwoVector(0,1);
var mvSet = [mvX,mvY];

var mNN = new TwoMatrix([1,2,3,4]);
var mIdent = new TwoMatrix();
mIdent.loadIdentity();

var mZero = new TwoMatrix();
mZero.loadZero();

testMatrices(mSet,mvSet,mSetI,mIdent,mZero,mNN,iFailuresTwoMatrix);


iFailuresTwoMatrix.addEq(testValueAndReport(bSilent_Pass,"det(rand)",mRand.determinant(),0.039139470552492));
iFailuresTwoMatrix.addEq(testValueAndReport(bSilent_Pass,"tr(rand)",mRand.trace(),1.161319496));

iFailuresTwoMatrix.addEq(testValueAndReport(bSilent_Pass,"(rand)^(-1)(0,0)",mRand.invert().at(0,0),24.8441101086403));
iFailuresTwoMatrix.addEq(testValueAndReport(bSilent_Pass,"(rand)^(-1)(0,1)",mRand.invert().at(0,1),-13.0555207003806));

iFailuresTwoMatrix.addEq(testValueAndReport(bSilent_Pass,"(rand)^(-1)(1,0)",mRand.invert().at(1,0),-7.22896587526742));
iFailuresTwoMatrix.addEq(testValueAndReport(bSilent_Pass,"(rand)^(-1)(1,1)",mRand.invert().at(1,1),4.82720326394322));


iFailuresTwoMatrix.report("Two Matrix");

