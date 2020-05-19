var iFailuresThreeMatrix = new TestCount();

var mA = new ThreeMatrix([1,0,0,0,0,0,0,0,0]);
var mB = new ThreeMatrix([[0,1,0],[0,0,0],[0,0,0]]);
var mC = new ThreeMatrix([0,0,1,0,0,0,0,0,0]);
var mD = new ThreeMatrix([0,0,0,1,0,0,0,0,0]);
var mE = new ThreeMatrix([0,0,0,0,1,0,0,0,0]);
var mF = new ThreeMatrix([0,0,0,0,0,1,0,0,0]);
var mG = new ThreeMatrix([0,0,0,0,0,0,1,0,0]);
var mH = new ThreeMatrix([0,0,0,0,0,0,0,1,0]);
var mI = new ThreeMatrix([0,0,0,0,0,0,0,0,1]);

var mSet = [mA,mB,mC,mD,mE,mF,mG,mH,mI];
var rank = Math.floor(Math.sqrt(mSet.length));

var mRand = new ThreeMatrix([0.18893418,0.510986168,0.529607806,0.282937897,0.972385316,0.194448,0.78645587,0.703070954,0.165803114]);

var mXYZ = new ThreeMatrix([1,0,0,0,1,0,0,0,1]);
var mXZY = new ThreeMatrix([1,0,0,0,0,1,0,1,0]);
var mYXZ = new ThreeMatrix([0,1,0,1,0,0,0,0,1]);
var mYZX = new ThreeMatrix([0,1,0,0,0,1,1,0,0]);
var mZXY = new ThreeMatrix([0,0,1,1,0,0,0,1,0]);
var mZYX = new ThreeMatrix([0,0,1,0,1,0,1,0,0]);

var mSetI = [mXYZ,mXZY,mYXZ,mYZX,mZXY,mZYX];

var mvX = new ThreeVector(1,0,0);
var mvY = new ThreeVector(0,1,0);
var mvZ = new ThreeVector(0,0,1);
var mvSet = [mvX,mvY,mvZ];

var mNN = new ThreeMatrix([1,2,3,4,5,6,7,8,9]);
var mIdent = new ThreeMatrix();
mIdent.loadIdentity();

var mZero = new ThreeMatrix();
mZero.loadZero();


testMatrices(mSet,mvSet,mSetI,mIdent,mZero,mNN,iFailuresThreeMatrix);



iFailuresThreeMatrix.addEq(testValueAndReport(bSilent_Pass,"det(rand)",mRand.determinant(),-0.240856277));
iFailuresThreeMatrix.addEq(testValueAndReport(bSilent_Pass,"tr(rand)",mRand.trace(),1.32712261));

iFailuresThreeMatrix.addEq(testValueAndReport(bSilent_Pass,"(rand)^(-1)(0,0)",mRand.invert().at(0,0),-0.101777594));
iFailuresThreeMatrix.addEq(testValueAndReport(bSilent_Pass,"(rand)^(-1)(0,1)",mRand.invert().at(0,1),-1.194192531));
iFailuresThreeMatrix.addEq(testValueAndReport(bSilent_Pass,"(rand)^(-1)(0,2)",mRand.invert().at(0,2),1.725604247));

iFailuresThreeMatrix.addEq(testValueAndReport(bSilent_Pass,"(rand)^(-1)(1,0)",mRand.invert().at(1,0),-0.440149569));
iFailuresThreeMatrix.addEq(testValueAndReport(bSilent_Pass,"(rand)^(-1)(1,1)",mRand.invert().at(1,1),1.599241243));
iFailuresThreeMatrix.addEq(testValueAndReport(bSilent_Pass,"(rand)^(-1)(1,2)",mRand.invert().at(1,2),-0.469608875));

iFailuresThreeMatrix.addEq(testValueAndReport(bSilent_Pass,"(rand)^(-1)(2,0)",mRand.invert().at(2,0),2.349171583));
iFailuresThreeMatrix.addEq(testValueAndReport(bSilent_Pass,"(rand)^(-1)(2,1)",mRand.invert().at(2,1),-1.116989517));
iFailuresThreeMatrix.addEq(testValueAndReport(bSilent_Pass,"(rand)^(-1)(2,2)",mRand.invert().at(2,2),-0.162501351));


iFailuresThreeMatrix.report("Three Matrix");

