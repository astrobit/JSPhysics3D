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

var mXZY = new ThreeMatrix([1,0,0,0,0,1,0,1,0]);
var mYXZ = new ThreeMatrix([0,1,0,1,0,0,0,0,1]);
var mYZX = new ThreeMatrix([0,1,0,0,0,1,1,0,0]);
var mZXY = new ThreeMatrix([0,0,1,1,0,0,0,1,0]);
var mZYX = new ThreeMatrix([0,0,1,0,1,0,1,0,0]);

var mvX = new ThreeVector(1,0,0);
var mvY = new ThreeVector(0,1,0);
var mvZ = new ThreeVector(0,0,1);

var mN = new ThreeMatrix([1,2,3,4,5,6,7,8,9]);
var mIdent = new ThreeMatrix();
mIdent.loadIdentity();

var mZero = new ThreeMatrix();
mZero.loadZero();

iFailuresThreeMatrix.addEq(testValueAndReport(bSilent_Pass,"a(0,0) = 1",mA.at(0,0),1.0));
iFailuresThreeMatrix.addEq(testValueAndReport(bSilent_Pass,"a(0,1) = 0",mA.at(0,1),0.0));
iFailuresThreeMatrix.addEq(testValueAndReport(bSilent_Pass,"a(0,2) = 0",mA.at(0,2),0.0));
iFailuresThreeMatrix.addEq(testValueAndReport(bSilent_Pass,"a(1,0) = 0",mA.at(1,0),0.0));
iFailuresThreeMatrix.addEq(testValueAndReport(bSilent_Pass,"a(1,1) = 0",mA.at(1,1),0.0));
iFailuresThreeMatrix.addEq(testValueAndReport(bSilent_Pass,"a(1,2) = 0",mA.at(1,2),0.0));
iFailuresThreeMatrix.addEq(testValueAndReport(bSilent_Pass,"a(2,0) = 0",mA.at(2,0),0.0));
iFailuresThreeMatrix.addEq(testValueAndReport(bSilent_Pass,"a(2,1) = 0",mA.at(2,1),0.0));
iFailuresThreeMatrix.addEq(testValueAndReport(bSilent_Pass,"a(2,2) = 0",mA.at(2,2),0.0));

iFailuresThreeMatrix.addEq(testValueAndReport(bSilent_Pass,"b(0,0) = 0",mB.at(0,0),0.0));
iFailuresThreeMatrix.addEq(testValueAndReport(bSilent_Pass,"b(0,1) = 1",mB.at(0,1),1.0));
iFailuresThreeMatrix.addEq(testValueAndReport(bSilent_Pass,"b(0,2) = 0",mB.at(0,2),0.0));
iFailuresThreeMatrix.addEq(testValueAndReport(bSilent_Pass,"b(1,0) = 0",mB.at(1,0),0.0));
iFailuresThreeMatrix.addEq(testValueAndReport(bSilent_Pass,"b(1,1) = 0",mB.at(1,1),0.0));
iFailuresThreeMatrix.addEq(testValueAndReport(bSilent_Pass,"b(1,2) = 0",mB.at(1,2),0.0));
iFailuresThreeMatrix.addEq(testValueAndReport(bSilent_Pass,"b(2,0) = 0",mB.at(2,0),0.0));
iFailuresThreeMatrix.addEq(testValueAndReport(bSilent_Pass,"b(2,1) = 0",mB.at(2,1),0.0));
iFailuresThreeMatrix.addEq(testValueAndReport(bSilent_Pass,"b(2,2) = 0",mB.at(2,2),0.0));

iFailuresThreeMatrix.addEq(testValueAndReport(bSilent_Pass,"c(0,0) = 0",mC.at(0,0),0.0));
iFailuresThreeMatrix.addEq(testValueAndReport(bSilent_Pass,"c(0,1) = 0",mC.at(0,1),0.0));
iFailuresThreeMatrix.addEq(testValueAndReport(bSilent_Pass,"c(0,2) = 1",mC.at(0,2),1.0));
iFailuresThreeMatrix.addEq(testValueAndReport(bSilent_Pass,"c(1,0) = 0",mC.at(1,0),0.0));
iFailuresThreeMatrix.addEq(testValueAndReport(bSilent_Pass,"c(1,1) = 0",mC.at(1,1),0.0));
iFailuresThreeMatrix.addEq(testValueAndReport(bSilent_Pass,"c(1,2) = 0",mC.at(1,2),0.0));
iFailuresThreeMatrix.addEq(testValueAndReport(bSilent_Pass,"c(2,0) = 0",mC.at(2,0),0.0));
iFailuresThreeMatrix.addEq(testValueAndReport(bSilent_Pass,"c(2,1) = 0",mC.at(2,1),0.0));
iFailuresThreeMatrix.addEq(testValueAndReport(bSilent_Pass,"c(2,2) = 0",mC.at(2,2),0.0));

iFailuresThreeMatrix.addEq(testValueAndReport(bSilent_Pass,"d(0,0) = 0",mD.at(0,0),0.0));
iFailuresThreeMatrix.addEq(testValueAndReport(bSilent_Pass,"d(0,1) = 0",mD.at(0,1),0.0));
iFailuresThreeMatrix.addEq(testValueAndReport(bSilent_Pass,"d(0,2) = 0",mD.at(0,2),0.0));
iFailuresThreeMatrix.addEq(testValueAndReport(bSilent_Pass,"d(1,0) = 1",mD.at(1,0),1.0));
iFailuresThreeMatrix.addEq(testValueAndReport(bSilent_Pass,"d(1,1) = 0",mD.at(1,1),0.0));
iFailuresThreeMatrix.addEq(testValueAndReport(bSilent_Pass,"d(1,2) = 0",mD.at(1,2),0.0));
iFailuresThreeMatrix.addEq(testValueAndReport(bSilent_Pass,"d(2,0) = 0",mD.at(2,0),0.0));
iFailuresThreeMatrix.addEq(testValueAndReport(bSilent_Pass,"d(2,1) = 0",mD.at(2,1),0.0));
iFailuresThreeMatrix.addEq(testValueAndReport(bSilent_Pass,"d(2,2) = 0",mD.at(2,2),0.0));

iFailuresThreeMatrix.addEq(testValueAndReport(bSilent_Pass,"e(0,0) = 0",mE.at(0,0),0.0));
iFailuresThreeMatrix.addEq(testValueAndReport(bSilent_Pass,"e(0,1) = 0",mE.at(0,1),0.0));
iFailuresThreeMatrix.addEq(testValueAndReport(bSilent_Pass,"e(0,2) = 0",mE.at(0,2),0.0));
iFailuresThreeMatrix.addEq(testValueAndReport(bSilent_Pass,"e(1,0) = 0",mE.at(1,0),0.0));
iFailuresThreeMatrix.addEq(testValueAndReport(bSilent_Pass,"e(1,1) = 1",mE.at(1,1),1.0));
iFailuresThreeMatrix.addEq(testValueAndReport(bSilent_Pass,"e(1,2) = 0",mE.at(1,2),0.0));
iFailuresThreeMatrix.addEq(testValueAndReport(bSilent_Pass,"e(2,0) = 0",mE.at(2,0),0.0));
iFailuresThreeMatrix.addEq(testValueAndReport(bSilent_Pass,"e(2,1) = 0",mE.at(2,1),0.0));
iFailuresThreeMatrix.addEq(testValueAndReport(bSilent_Pass,"e(2,2) = 0",mE.at(2,2),0.0));

iFailuresThreeMatrix.addEq(testValueAndReport(bSilent_Pass,"f(0,0) = 0",mF.at(0,0),0.0));
iFailuresThreeMatrix.addEq(testValueAndReport(bSilent_Pass,"f(0,1) = 0",mF.at(0,1),0.0));
iFailuresThreeMatrix.addEq(testValueAndReport(bSilent_Pass,"f(0,2) = 0",mF.at(0,2),0.0));
iFailuresThreeMatrix.addEq(testValueAndReport(bSilent_Pass,"f(1,0) = 0",mF.at(1,0),0.0));
iFailuresThreeMatrix.addEq(testValueAndReport(bSilent_Pass,"f(1,1) = 0",mF.at(1,1),0.0));
iFailuresThreeMatrix.addEq(testValueAndReport(bSilent_Pass,"f(1,2) = 1",mF.at(1,2),1.0));
iFailuresThreeMatrix.addEq(testValueAndReport(bSilent_Pass,"f(2,0) = 0",mF.at(2,0),0.0));
iFailuresThreeMatrix.addEq(testValueAndReport(bSilent_Pass,"f(2,1) = 0",mF.at(2,1),0.0));
iFailuresThreeMatrix.addEq(testValueAndReport(bSilent_Pass,"f(2,2) = 0",mF.at(2,2),0.0));

iFailuresThreeMatrix.addEq(testValueAndReport(bSilent_Pass,"g(0,0) = 0",mG.at(0,0),0.0));
iFailuresThreeMatrix.addEq(testValueAndReport(bSilent_Pass,"g(0,1) = 0",mG.at(0,1),0.0));
iFailuresThreeMatrix.addEq(testValueAndReport(bSilent_Pass,"g(0,2) = 0",mG.at(0,2),0.0));
iFailuresThreeMatrix.addEq(testValueAndReport(bSilent_Pass,"g(1,0) = 0",mG.at(1,0),0.0));
iFailuresThreeMatrix.addEq(testValueAndReport(bSilent_Pass,"g(1,1) = 0",mG.at(1,1),0.0));
iFailuresThreeMatrix.addEq(testValueAndReport(bSilent_Pass,"g(1,2) = 0",mG.at(1,2),0.0));
iFailuresThreeMatrix.addEq(testValueAndReport(bSilent_Pass,"g(2,0) = 1",mG.at(2,0),1.0));
iFailuresThreeMatrix.addEq(testValueAndReport(bSilent_Pass,"g(2,1) = 0",mG.at(2,1),0.0));
iFailuresThreeMatrix.addEq(testValueAndReport(bSilent_Pass,"g(2,2) = 0",mG.at(2,2),0.0));

iFailuresThreeMatrix.addEq(testValueAndReport(bSilent_Pass,"h(0,0) = 0",mH.at(0,0),0.0));
iFailuresThreeMatrix.addEq(testValueAndReport(bSilent_Pass,"h(0,1) = 0",mH.at(0,1),0.0));
iFailuresThreeMatrix.addEq(testValueAndReport(bSilent_Pass,"h(0,2) = 0",mH.at(0,2),0.0));
iFailuresThreeMatrix.addEq(testValueAndReport(bSilent_Pass,"h(1,0) = 0",mH.at(1,0),0.0));
iFailuresThreeMatrix.addEq(testValueAndReport(bSilent_Pass,"h(1,1) = 0",mH.at(1,1),0.0));
iFailuresThreeMatrix.addEq(testValueAndReport(bSilent_Pass,"h(1,2) = 0",mH.at(1,2),0.0));
iFailuresThreeMatrix.addEq(testValueAndReport(bSilent_Pass,"h(2,0) = 0",mH.at(2,0),0.0));
iFailuresThreeMatrix.addEq(testValueAndReport(bSilent_Pass,"h(2,1) = 1",mH.at(2,1),1.0));
iFailuresThreeMatrix.addEq(testValueAndReport(bSilent_Pass,"h(2,2) = 0",mH.at(2,2),0.0));

iFailuresThreeMatrix.addEq(testValueAndReport(bSilent_Pass,"i(0,0) = 0",mI.at(0,0),0.0));
iFailuresThreeMatrix.addEq(testValueAndReport(bSilent_Pass,"i(0,1) = 0",mI.at(0,1),0.0));
iFailuresThreeMatrix.addEq(testValueAndReport(bSilent_Pass,"i(0,2) = 0",mI.at(0,2),0.0));
iFailuresThreeMatrix.addEq(testValueAndReport(bSilent_Pass,"i(1,0) = 0",mI.at(1,0),0.0));
iFailuresThreeMatrix.addEq(testValueAndReport(bSilent_Pass,"i(1,1) = 0",mI.at(1,1),0.0));
iFailuresThreeMatrix.addEq(testValueAndReport(bSilent_Pass,"i(1,2) = 0",mI.at(1,2),0.0));
iFailuresThreeMatrix.addEq(testValueAndReport(bSilent_Pass,"i(2,0) = 0",mI.at(2,0),0.0));
iFailuresThreeMatrix.addEq(testValueAndReport(bSilent_Pass,"i(2,1) = 0",mI.at(2,1),0.0));
iFailuresThreeMatrix.addEq(testValueAndReport(bSilent_Pass,"i(2,2) = 1",mI.at(2,2),1.0));

iFailuresThreeMatrix.addEq(testValueAndReport(bSilent_Pass,"I(0,0) = 1",mIdent.at(0,0),1.0));
iFailuresThreeMatrix.addEq(testValueAndReport(bSilent_Pass,"I(0,1) = 0",mIdent.at(0,1),0.0));
iFailuresThreeMatrix.addEq(testValueAndReport(bSilent_Pass,"I(0,2) = 0",mIdent.at(0,2),0.0));
iFailuresThreeMatrix.addEq(testValueAndReport(bSilent_Pass,"I(1,0) = 0",mIdent.at(1,0),0.0));
iFailuresThreeMatrix.addEq(testValueAndReport(bSilent_Pass,"I(1,1) = 1",mIdent.at(1,1),1.0));
iFailuresThreeMatrix.addEq(testValueAndReport(bSilent_Pass,"I(1,2) = 0",mIdent.at(1,2),0.0));
iFailuresThreeMatrix.addEq(testValueAndReport(bSilent_Pass,"I(2,0) = 0",mIdent.at(2,0),0.0));
iFailuresThreeMatrix.addEq(testValueAndReport(bSilent_Pass,"I(2,1) = 0",mIdent.at(2,1),0.0));
iFailuresThreeMatrix.addEq(testValueAndReport(bSilent_Pass,"I(2,2) = 1",mIdent.at(2,2),1.0));

iFailuresThreeMatrix.addEq(testValueAndReport(bSilent_Pass,"0(0,0) = 0",mZero.at(0,0),0.0));
iFailuresThreeMatrix.addEq(testValueAndReport(bSilent_Pass,"0(0,1) = 0",mZero.at(0,1),0.0));
iFailuresThreeMatrix.addEq(testValueAndReport(bSilent_Pass,"0(0,2) = 0",mZero.at(0,2),0.0));
iFailuresThreeMatrix.addEq(testValueAndReport(bSilent_Pass,"0(1,0) = 0",mZero.at(1,0),0.0));
iFailuresThreeMatrix.addEq(testValueAndReport(bSilent_Pass,"0(1,1) = 0",mZero.at(1,1),0.0));
iFailuresThreeMatrix.addEq(testValueAndReport(bSilent_Pass,"0(1,2) = 0",mZero.at(1,2),0.0));
iFailuresThreeMatrix.addEq(testValueAndReport(bSilent_Pass,"0(2,0) = 0",mZero.at(2,0),0.0));
iFailuresThreeMatrix.addEq(testValueAndReport(bSilent_Pass,"0(2,1) = 0",mZero.at(2,1),0.0));
iFailuresThreeMatrix.addEq(testValueAndReport(bSilent_Pass,"0(2,2) = 0",mZero.at(2,2),0.0));

iFailuresThreeMatrix.addEq(testValueAndReport(bSilent_Pass,"N(0,0) = 1",mN.at(0,0),1.0));
iFailuresThreeMatrix.addEq(testValueAndReport(bSilent_Pass,"N(0,1) = 2",mN.at(0,1),2.0));
iFailuresThreeMatrix.addEq(testValueAndReport(bSilent_Pass,"N(0,2) = 3",mN.at(0,2),3.0));
iFailuresThreeMatrix.addEq(testValueAndReport(bSilent_Pass,"N(1,0) = 4",mN.at(1,0),4.0));
iFailuresThreeMatrix.addEq(testValueAndReport(bSilent_Pass,"N(1,1) = 5",mN.at(1,1),5.0));
iFailuresThreeMatrix.addEq(testValueAndReport(bSilent_Pass,"N(1,2) = 6",mN.at(1,2),6.0));
iFailuresThreeMatrix.addEq(testValueAndReport(bSilent_Pass,"N(2,0) = 7",mN.at(2,0),7.0));
iFailuresThreeMatrix.addEq(testValueAndReport(bSilent_Pass,"N(2,1) = 8",mN.at(2,1),8.0));
iFailuresThreeMatrix.addEq(testValueAndReport(bSilent_Pass,"N(2,2) = 9",mN.at(2,2),9.0));

iFailuresThreeMatrix.addEq(testValueAndReport(bSilent_Pass,"transpose N(0,0) = 1",mN.transpose().at(0,0),1.0));
iFailuresThreeMatrix.addEq(testValueAndReport(bSilent_Pass,"transpose N(0,1) = 4",mN.transpose().at(0,1),4.0));
iFailuresThreeMatrix.addEq(testValueAndReport(bSilent_Pass,"transpose N(0,2) = 7",mN.transpose().at(0,2),7.0));
iFailuresThreeMatrix.addEq(testValueAndReport(bSilent_Pass,"transpose N(1,0) = 2",mN.transpose().at(1,0),2.0));
iFailuresThreeMatrix.addEq(testValueAndReport(bSilent_Pass,"transpose N(1,1) = 5",mN.transpose().at(1,1),5.0));
iFailuresThreeMatrix.addEq(testValueAndReport(bSilent_Pass,"transpose N(1,2) = 8",mN.transpose().at(1,2),8.0));
iFailuresThreeMatrix.addEq(testValueAndReport(bSilent_Pass,"transpose N(2,0) = 3",mN.transpose().at(2,0),3.0));
iFailuresThreeMatrix.addEq(testValueAndReport(bSilent_Pass,"transpose N(2,1) = 6",mN.transpose().at(2,1),6.0));
iFailuresThreeMatrix.addEq(testValueAndReport(bSilent_Pass,"transpose N(2,2) = 9",mN.transpose().at(2,2),9.0));

iFailuresThreeMatrix.addEq(testValueAndReport(bSilent_Pass,"-N(0,0) = -1",mN.negate().at(0,0),-1.0));
iFailuresThreeMatrix.addEq(testValueAndReport(bSilent_Pass,"-N(0,1) = -2",mN.negate().at(0,1),-2.0));
iFailuresThreeMatrix.addEq(testValueAndReport(bSilent_Pass,"-N(0,2) = -3",mN.negate().at(0,2),-3.0));
iFailuresThreeMatrix.addEq(testValueAndReport(bSilent_Pass,"-N(1,0) = -4",mN.negate().at(1,0),-4.0));
iFailuresThreeMatrix.addEq(testValueAndReport(bSilent_Pass,"-N(1,1) = -5",mN.negate().at(1,1),-5.0));
iFailuresThreeMatrix.addEq(testValueAndReport(bSilent_Pass,"-N(1,2) = -6",mN.negate().at(1,2),-6.0));
iFailuresThreeMatrix.addEq(testValueAndReport(bSilent_Pass,"-N(2,0) = -7",mN.negate().at(2,0),-7.0));
iFailuresThreeMatrix.addEq(testValueAndReport(bSilent_Pass,"-N(2,1) = -8",mN.negate().at(2,1),-8.0));
iFailuresThreeMatrix.addEq(testValueAndReport(bSilent_Pass,"-N(2,2) = -9",mN.negate().at(2,2),-9.0));

iFailuresThreeMatrix.addEq(testValueAndReport(bSilent_Pass,"2N(0,0) = 2",mN.scale(2).at(0,0),2.0));
iFailuresThreeMatrix.addEq(testValueAndReport(bSilent_Pass,"2N(0,1) = 4",mN.scale(2).at(0,1),4.0));
iFailuresThreeMatrix.addEq(testValueAndReport(bSilent_Pass,"2N(0,2) = 6",mN.scale(2).at(0,2),6.0));
iFailuresThreeMatrix.addEq(testValueAndReport(bSilent_Pass,"2N(1,0) = 8",mN.scale(2).at(1,0),8.0));
iFailuresThreeMatrix.addEq(testValueAndReport(bSilent_Pass,"2N(1,1) = 10",mN.scale(2).at(1,1),10.0));
iFailuresThreeMatrix.addEq(testValueAndReport(bSilent_Pass,"2N(1,2) = 12",mN.scale(2).at(1,2),12.0));
iFailuresThreeMatrix.addEq(testValueAndReport(bSilent_Pass,"2N(2,0) = 14",mN.scale(2).at(2,0),14.0));
iFailuresThreeMatrix.addEq(testValueAndReport(bSilent_Pass,"2N(2,1) = 16",mN.scale(2).at(2,1),16.0));
iFailuresThreeMatrix.addEq(testValueAndReport(bSilent_Pass,"2N(2,2) = 18",mN.scale(2).at(2,2),18.0));

iFailuresThreeMatrix.addEq(testValueAndReport(bSilent_Pass,"(N + A)(0,0) = 2",mN.add(mA).at(0,0),2.0));
iFailuresThreeMatrix.addEq(testValueAndReport(bSilent_Pass,"(N + A)(0,1) = 2",mN.add(mA).at(0,1),2.0));
iFailuresThreeMatrix.addEq(testValueAndReport(bSilent_Pass,"(N + A)(0,2) = 3",mN.add(mA).at(0,2),3.0));
iFailuresThreeMatrix.addEq(testValueAndReport(bSilent_Pass,"(N + A)(1,0) = 4",mN.add(mA).at(1,0),4.0));
iFailuresThreeMatrix.addEq(testValueAndReport(bSilent_Pass,"(N + A)(1,1) = 5",mN.add(mA).at(1,1),5.0));
iFailuresThreeMatrix.addEq(testValueAndReport(bSilent_Pass,"(N + A)(1,2) = 6",mN.add(mA).at(1,2),6.0));
iFailuresThreeMatrix.addEq(testValueAndReport(bSilent_Pass,"(N + A)(2,0) = 7",mN.add(mA).at(2,0),7.0));
iFailuresThreeMatrix.addEq(testValueAndReport(bSilent_Pass,"(N + A)(2,1) = 8",mN.add(mA).at(2,1),8.0));
iFailuresThreeMatrix.addEq(testValueAndReport(bSilent_Pass,"(N + A)(2,2) = 9",mN.add(mA).at(2,2),9.0));

iFailuresThreeMatrix.addEq(testValueAndReport(bSilent_Pass,"(N + B)(0,0) = 1",mN.add(mB).at(0,0),1.0));
iFailuresThreeMatrix.addEq(testValueAndReport(bSilent_Pass,"(N + B)(0,1) = 3",mN.add(mB).at(0,1),3.0));
iFailuresThreeMatrix.addEq(testValueAndReport(bSilent_Pass,"(N + B)(0,2) = 3",mN.add(mB).at(0,2),3.0));
iFailuresThreeMatrix.addEq(testValueAndReport(bSilent_Pass,"(N + B)(1,0) = 4",mN.add(mB).at(1,0),4.0));
iFailuresThreeMatrix.addEq(testValueAndReport(bSilent_Pass,"(N + B)(1,1) = 5",mN.add(mB).at(1,1),5.0));
iFailuresThreeMatrix.addEq(testValueAndReport(bSilent_Pass,"(N + B)(1,2) = 6",mN.add(mB).at(1,2),6.0));
iFailuresThreeMatrix.addEq(testValueAndReport(bSilent_Pass,"(N + B)(2,0) = 7",mN.add(mB).at(2,0),7.0));
iFailuresThreeMatrix.addEq(testValueAndReport(bSilent_Pass,"(N + B)(2,1) = 8",mN.add(mB).at(2,1),8.0));
iFailuresThreeMatrix.addEq(testValueAndReport(bSilent_Pass,"(N + B)(2,2) = 9",mN.add(mB).at(2,2),9.0));

iFailuresThreeMatrix.addEq(testValueAndReport(bSilent_Pass,"(N + C)(0,0) = 1",mN.add(mC).at(0,0),1.0));
iFailuresThreeMatrix.addEq(testValueAndReport(bSilent_Pass,"(N + C)(0,1) = 2",mN.add(mC).at(0,1),2.0));
iFailuresThreeMatrix.addEq(testValueAndReport(bSilent_Pass,"(N + C)(0,2) = 4",mN.add(mC).at(0,2),4.0));
iFailuresThreeMatrix.addEq(testValueAndReport(bSilent_Pass,"(N + C)(1,0) = 4",mN.add(mC).at(1,0),4.0));
iFailuresThreeMatrix.addEq(testValueAndReport(bSilent_Pass,"(N + C)(1,1) = 5",mN.add(mC).at(1,1),5.0));
iFailuresThreeMatrix.addEq(testValueAndReport(bSilent_Pass,"(N + C)(1,2) = 6",mN.add(mC).at(1,2),6.0));
iFailuresThreeMatrix.addEq(testValueAndReport(bSilent_Pass,"(N + C)(2,0) = 7",mN.add(mC).at(2,0),7.0));
iFailuresThreeMatrix.addEq(testValueAndReport(bSilent_Pass,"(N + C)(2,1) = 8",mN.add(mC).at(2,1),8.0));
iFailuresThreeMatrix.addEq(testValueAndReport(bSilent_Pass,"(N + C)(2,2) = 9",mN.add(mC).at(2,2),9.0));

iFailuresThreeMatrix.addEq(testValueAndReport(bSilent_Pass,"(N + D)(0,0) = 1",mN.add(mD).at(0,0),1.0));
iFailuresThreeMatrix.addEq(testValueAndReport(bSilent_Pass,"(N + D)(0,1) = 2",mN.add(mD).at(0,1),2.0));
iFailuresThreeMatrix.addEq(testValueAndReport(bSilent_Pass,"(N + D)(0,2) = 3",mN.add(mD).at(0,2),3.0));
iFailuresThreeMatrix.addEq(testValueAndReport(bSilent_Pass,"(N + D)(1,0) = 5",mN.add(mD).at(1,0),5.0));
iFailuresThreeMatrix.addEq(testValueAndReport(bSilent_Pass,"(N + D)(1,1) = 5",mN.add(mD).at(1,1),5.0));
iFailuresThreeMatrix.addEq(testValueAndReport(bSilent_Pass,"(N + D)(1,2) = 6",mN.add(mD).at(1,2),6.0));
iFailuresThreeMatrix.addEq(testValueAndReport(bSilent_Pass,"(N + D)(2,0) = 7",mN.add(mD).at(2,0),7.0));
iFailuresThreeMatrix.addEq(testValueAndReport(bSilent_Pass,"(N + D)(2,1) = 8",mN.add(mD).at(2,1),8.0));
iFailuresThreeMatrix.addEq(testValueAndReport(bSilent_Pass,"(N + D)(2,2) = 9",mN.add(mD).at(2,2),9.0));

iFailuresThreeMatrix.addEq(testValueAndReport(bSilent_Pass,"(N + E)(0,0) = 1",mN.add(mE).at(0,0),1.0));
iFailuresThreeMatrix.addEq(testValueAndReport(bSilent_Pass,"(N + E)(0,1) = 2",mN.add(mE).at(0,1),2.0));
iFailuresThreeMatrix.addEq(testValueAndReport(bSilent_Pass,"(N + E)(0,2) = 3",mN.add(mE).at(0,2),3.0));
iFailuresThreeMatrix.addEq(testValueAndReport(bSilent_Pass,"(N + E)(1,0) = 4",mN.add(mE).at(1,0),4.0));
iFailuresThreeMatrix.addEq(testValueAndReport(bSilent_Pass,"(N + E)(1,1) = 6",mN.add(mE).at(1,1),6.0));
iFailuresThreeMatrix.addEq(testValueAndReport(bSilent_Pass,"(N + E)(1,2) = 6",mN.add(mE).at(1,2),6.0));
iFailuresThreeMatrix.addEq(testValueAndReport(bSilent_Pass,"(N + E)(2,0) = 7",mN.add(mE).at(2,0),7.0));
iFailuresThreeMatrix.addEq(testValueAndReport(bSilent_Pass,"(N + E)(2,1) = 8",mN.add(mE).at(2,1),8.0));
iFailuresThreeMatrix.addEq(testValueAndReport(bSilent_Pass,"(N + E)(2,2) = 9",mN.add(mE).at(2,2),9.0));

iFailuresThreeMatrix.addEq(testValueAndReport(bSilent_Pass,"(N + F)(0,0) = 1",mN.add(mF).at(0,0),1.0));
iFailuresThreeMatrix.addEq(testValueAndReport(bSilent_Pass,"(N + F)(0,1) = 2",mN.add(mF).at(0,1),2.0));
iFailuresThreeMatrix.addEq(testValueAndReport(bSilent_Pass,"(N + F)(0,2) = 3",mN.add(mF).at(0,2),3.0));
iFailuresThreeMatrix.addEq(testValueAndReport(bSilent_Pass,"(N + F)(1,0) = 4",mN.add(mF).at(1,0),4.0));
iFailuresThreeMatrix.addEq(testValueAndReport(bSilent_Pass,"(N + F)(1,1) = 5",mN.add(mF).at(1,1),5.0));
iFailuresThreeMatrix.addEq(testValueAndReport(bSilent_Pass,"(N + F)(1,2) = 7",mN.add(mF).at(1,2),7.0));
iFailuresThreeMatrix.addEq(testValueAndReport(bSilent_Pass,"(N + F)(2,0) = 7",mN.add(mF).at(2,0),7.0));
iFailuresThreeMatrix.addEq(testValueAndReport(bSilent_Pass,"(N + F)(2,1) = 8",mN.add(mF).at(2,1),8.0));
iFailuresThreeMatrix.addEq(testValueAndReport(bSilent_Pass,"(N + F)(2,2) = 9",mN.add(mF).at(2,2),9.0));

iFailuresThreeMatrix.addEq(testValueAndReport(bSilent_Pass,"(N + G)(0,0) = 1",mN.add(mG).at(0,0),1.0));
iFailuresThreeMatrix.addEq(testValueAndReport(bSilent_Pass,"(N + G)(0,1) = 2",mN.add(mG).at(0,1),2.0));
iFailuresThreeMatrix.addEq(testValueAndReport(bSilent_Pass,"(N + G)(0,2) = 3",mN.add(mG).at(0,2),3.0));
iFailuresThreeMatrix.addEq(testValueAndReport(bSilent_Pass,"(N + G)(1,0) = 4",mN.add(mG).at(1,0),4.0));
iFailuresThreeMatrix.addEq(testValueAndReport(bSilent_Pass,"(N + G)(1,1) = 5",mN.add(mG).at(1,1),5.0));
iFailuresThreeMatrix.addEq(testValueAndReport(bSilent_Pass,"(N + G)(1,2) = 6",mN.add(mG).at(1,2),6.0));
iFailuresThreeMatrix.addEq(testValueAndReport(bSilent_Pass,"(N + G)(2,0) = 8",mN.add(mG).at(2,0),8.0));
iFailuresThreeMatrix.addEq(testValueAndReport(bSilent_Pass,"(N + G)(2,1) = 8",mN.add(mG).at(2,1),8.0));
iFailuresThreeMatrix.addEq(testValueAndReport(bSilent_Pass,"(N + G)(2,2) = 9",mN.add(mG).at(2,2),9.0));

iFailuresThreeMatrix.addEq(testValueAndReport(bSilent_Pass,"(N + H)(0,0) = 1",mN.add(mH).at(0,0),1.0));
iFailuresThreeMatrix.addEq(testValueAndReport(bSilent_Pass,"(N + H)(0,1) = 2",mN.add(mH).at(0,1),2.0));
iFailuresThreeMatrix.addEq(testValueAndReport(bSilent_Pass,"(N + H)(0,2) = 3",mN.add(mH).at(0,2),3.0));
iFailuresThreeMatrix.addEq(testValueAndReport(bSilent_Pass,"(N + H)(1,0) = 4",mN.add(mH).at(1,0),4.0));
iFailuresThreeMatrix.addEq(testValueAndReport(bSilent_Pass,"(N + H)(1,1) = 5",mN.add(mH).at(1,1),5.0));
iFailuresThreeMatrix.addEq(testValueAndReport(bSilent_Pass,"(N + H)(1,2) = 6",mN.add(mH).at(1,2),6.0));
iFailuresThreeMatrix.addEq(testValueAndReport(bSilent_Pass,"(N + H)(2,0) = 7",mN.add(mH).at(2,0),7.0));
iFailuresThreeMatrix.addEq(testValueAndReport(bSilent_Pass,"(N + H)(2,1) = 9",mN.add(mH).at(2,1),9.0));
iFailuresThreeMatrix.addEq(testValueAndReport(bSilent_Pass,"(N + H)(2,2) = 9",mN.add(mH).at(2,2),9.0));

iFailuresThreeMatrix.addEq(testValueAndReport(bSilent_Pass,"(N + I)(0,0) = 1",mN.add(mI).at(0,0),1.0));
iFailuresThreeMatrix.addEq(testValueAndReport(bSilent_Pass,"(N + I)(0,1) = 2",mN.add(mI).at(0,1),2.0));
iFailuresThreeMatrix.addEq(testValueAndReport(bSilent_Pass,"(N + I)(0,2) = 3",mN.add(mI).at(0,2),3.0));
iFailuresThreeMatrix.addEq(testValueAndReport(bSilent_Pass,"(N + I)(1,0) = 4",mN.add(mI).at(1,0),4.0));
iFailuresThreeMatrix.addEq(testValueAndReport(bSilent_Pass,"(N + I)(1,1) = 5",mN.add(mI).at(1,1),5.0));
iFailuresThreeMatrix.addEq(testValueAndReport(bSilent_Pass,"(N + I)(1,2) = 6",mN.add(mI).at(1,2),6.0));
iFailuresThreeMatrix.addEq(testValueAndReport(bSilent_Pass,"(N + I)(2,0) = 7",mN.add(mI).at(2,0),7.0));
iFailuresThreeMatrix.addEq(testValueAndReport(bSilent_Pass,"(N + I)(2,1) = 8",mN.add(mI).at(2,1),8.0));
iFailuresThreeMatrix.addEq(testValueAndReport(bSilent_Pass,"(N + I)(2,2) = 10",mN.add(mI).at(2,2),10.0));-

iFailuresThreeMatrix.addEq(testValueAndReport(bSilent_Pass,"(N - A)(0,0) = 0",mN.subtract(mA).at(0,0),0.0));
iFailuresThreeMatrix.addEq(testValueAndReport(bSilent_Pass,"(N - A)(0,1) = 2",mN.subtract(mA).at(0,1),2.0));
iFailuresThreeMatrix.addEq(testValueAndReport(bSilent_Pass,"(N - A)(0,2) = 3",mN.subtract(mA).at(0,2),3.0));
iFailuresThreeMatrix.addEq(testValueAndReport(bSilent_Pass,"(N - A)(1,0) = 4",mN.subtract(mA).at(1,0),4.0));
iFailuresThreeMatrix.addEq(testValueAndReport(bSilent_Pass,"(N - A)(1,1) = 5",mN.subtract(mA).at(1,1),5.0));
iFailuresThreeMatrix.addEq(testValueAndReport(bSilent_Pass,"(N - A)(1,2) = 6",mN.subtract(mA).at(1,2),6.0));
iFailuresThreeMatrix.addEq(testValueAndReport(bSilent_Pass,"(N - A)(2,0) = 7",mN.subtract(mA).at(2,0),7.0));
iFailuresThreeMatrix.addEq(testValueAndReport(bSilent_Pass,"(N - A)(2,1) = 8",mN.subtract(mA).at(2,1),8.0));
iFailuresThreeMatrix.addEq(testValueAndReport(bSilent_Pass,"(N - A)(2,2) = 9",mN.subtract(mA).at(2,2),9.0));

iFailuresThreeMatrix.addEq(testValueAndReport(bSilent_Pass,"(N - B)(0,0) = 1",mN.subtract(mB).at(0,0),1.0));
iFailuresThreeMatrix.addEq(testValueAndReport(bSilent_Pass,"(N - B)(0,1) = 1",mN.subtract(mB).at(0,1),1.0));
iFailuresThreeMatrix.addEq(testValueAndReport(bSilent_Pass,"(N - B)(0,2) = 3",mN.subtract(mB).at(0,2),3.0));
iFailuresThreeMatrix.addEq(testValueAndReport(bSilent_Pass,"(N - B)(1,0) = 4",mN.subtract(mB).at(1,0),4.0));
iFailuresThreeMatrix.addEq(testValueAndReport(bSilent_Pass,"(N - B)(1,1) = 5",mN.subtract(mB).at(1,1),5.0));
iFailuresThreeMatrix.addEq(testValueAndReport(bSilent_Pass,"(N - B)(1,2) = 6",mN.subtract(mB).at(1,2),6.0));
iFailuresThreeMatrix.addEq(testValueAndReport(bSilent_Pass,"(N - B)(2,0) = 7",mN.subtract(mB).at(2,0),7.0));
iFailuresThreeMatrix.addEq(testValueAndReport(bSilent_Pass,"(N - B)(2,1) = 8",mN.subtract(mB).at(2,1),8.0));
iFailuresThreeMatrix.addEq(testValueAndReport(bSilent_Pass,"(N - B)(2,2) = 9",mN.subtract(mB).at(2,2),9.0));

iFailuresThreeMatrix.addEq(testValueAndReport(bSilent_Pass,"(N - C)(0,0) = 1",mN.subtract(mC).at(0,0),1.0));
iFailuresThreeMatrix.addEq(testValueAndReport(bSilent_Pass,"(N - C)(0,1) = 2",mN.subtract(mC).at(0,1),2.0));
iFailuresThreeMatrix.addEq(testValueAndReport(bSilent_Pass,"(N - C)(0,2) = 2",mN.subtract(mC).at(0,2),2.0));
iFailuresThreeMatrix.addEq(testValueAndReport(bSilent_Pass,"(N - C)(1,0) = 4",mN.subtract(mC).at(1,0),4.0));
iFailuresThreeMatrix.addEq(testValueAndReport(bSilent_Pass,"(N - C)(1,1) = 5",mN.subtract(mC).at(1,1),5.0));
iFailuresThreeMatrix.addEq(testValueAndReport(bSilent_Pass,"(N - C)(1,2) = 6",mN.subtract(mC).at(1,2),6.0));
iFailuresThreeMatrix.addEq(testValueAndReport(bSilent_Pass,"(N - C)(2,0) = 7",mN.subtract(mC).at(2,0),7.0));
iFailuresThreeMatrix.addEq(testValueAndReport(bSilent_Pass,"(N - C)(2,1) = 8",mN.subtract(mC).at(2,1),8.0));
iFailuresThreeMatrix.addEq(testValueAndReport(bSilent_Pass,"(N - C)(2,2) = 9",mN.subtract(mC).at(2,2),9.0));

iFailuresThreeMatrix.addEq(testValueAndReport(bSilent_Pass,"(N - D)(0,0) = 1",mN.subtract(mD).at(0,0),1.0));
iFailuresThreeMatrix.addEq(testValueAndReport(bSilent_Pass,"(N - D)(0,1) = 2",mN.subtract(mD).at(0,1),2.0));
iFailuresThreeMatrix.addEq(testValueAndReport(bSilent_Pass,"(N - D)(0,2) = 3",mN.subtract(mD).at(0,2),3.0));
iFailuresThreeMatrix.addEq(testValueAndReport(bSilent_Pass,"(N - D)(1,0) = 3",mN.subtract(mD).at(1,0),3.0));
iFailuresThreeMatrix.addEq(testValueAndReport(bSilent_Pass,"(N - D)(1,1) = 5",mN.subtract(mD).at(1,1),5.0));
iFailuresThreeMatrix.addEq(testValueAndReport(bSilent_Pass,"(N - D)(1,2) = 6",mN.subtract(mD).at(1,2),6.0));
iFailuresThreeMatrix.addEq(testValueAndReport(bSilent_Pass,"(N - D)(2,0) = 7",mN.subtract(mD).at(2,0),7.0));
iFailuresThreeMatrix.addEq(testValueAndReport(bSilent_Pass,"(N - D)(2,1) = 8",mN.subtract(mD).at(2,1),8.0));
iFailuresThreeMatrix.addEq(testValueAndReport(bSilent_Pass,"(N - D)(2,2) = 9",mN.subtract(mD).at(2,2),9.0));

iFailuresThreeMatrix.addEq(testValueAndReport(bSilent_Pass,"(N - E)(0,0) = 1",mN.subtract(mE).at(0,0),1.0));
iFailuresThreeMatrix.addEq(testValueAndReport(bSilent_Pass,"(N - E)(0,1) = 2",mN.subtract(mE).at(0,1),2.0));
iFailuresThreeMatrix.addEq(testValueAndReport(bSilent_Pass,"(N - E)(0,2) = 3",mN.subtract(mE).at(0,2),3.0));
iFailuresThreeMatrix.addEq(testValueAndReport(bSilent_Pass,"(N - E)(1,0) = 4",mN.subtract(mE).at(1,0),4.0));
iFailuresThreeMatrix.addEq(testValueAndReport(bSilent_Pass,"(N - E)(1,1) = 4",mN.subtract(mE).at(1,1),4.0));
iFailuresThreeMatrix.addEq(testValueAndReport(bSilent_Pass,"(N - E)(1,2) = 6",mN.subtract(mE).at(1,2),6.0));
iFailuresThreeMatrix.addEq(testValueAndReport(bSilent_Pass,"(N - E)(2,0) = 7",mN.subtract(mE).at(2,0),7.0));
iFailuresThreeMatrix.addEq(testValueAndReport(bSilent_Pass,"(N - E)(2,1) = 8",mN.subtract(mE).at(2,1),8.0));
iFailuresThreeMatrix.addEq(testValueAndReport(bSilent_Pass,"(N - E)(2,2) = 9",mN.subtract(mE).at(2,2),9.0));

iFailuresThreeMatrix.addEq(testValueAndReport(bSilent_Pass,"(N - F)(0,0) = 1",mN.subtract(mF).at(0,0),1.0));
iFailuresThreeMatrix.addEq(testValueAndReport(bSilent_Pass,"(N + F)(0,1) = 2",mN.subtract(mF).at(0,1),2.0));
iFailuresThreeMatrix.addEq(testValueAndReport(bSilent_Pass,"(N - F)(0,2) = 3",mN.subtract(mF).at(0,2),3.0));
iFailuresThreeMatrix.addEq(testValueAndReport(bSilent_Pass,"(N - F)(1,0) = 4",mN.subtract(mF).at(1,0),4.0));
iFailuresThreeMatrix.addEq(testValueAndReport(bSilent_Pass,"(N - F)(1,1) = 5",mN.subtract(mF).at(1,1),5.0));
iFailuresThreeMatrix.addEq(testValueAndReport(bSilent_Pass,"(N - F)(1,2) = 5",mN.subtract(mF).at(1,2),5.0));
iFailuresThreeMatrix.addEq(testValueAndReport(bSilent_Pass,"(N - F)(2,0) = 7",mN.subtract(mF).at(2,0),7.0));
iFailuresThreeMatrix.addEq(testValueAndReport(bSilent_Pass,"(N - F)(2,1) = 8",mN.subtract(mF).at(2,1),8.0));
iFailuresThreeMatrix.addEq(testValueAndReport(bSilent_Pass,"(N - F)(2,2) = 9",mN.subtract(mF).at(2,2),9.0));

iFailuresThreeMatrix.addEq(testValueAndReport(bSilent_Pass,"(N - G)(0,0) = 1",mN.subtract(mG).at(0,0),1.0));
iFailuresThreeMatrix.addEq(testValueAndReport(bSilent_Pass,"(N - G)(0,1) = 2",mN.subtract(mG).at(0,1),2.0));
iFailuresThreeMatrix.addEq(testValueAndReport(bSilent_Pass,"(N - G)(0,2) = 3",mN.subtract(mG).at(0,2),3.0));
iFailuresThreeMatrix.addEq(testValueAndReport(bSilent_Pass,"(N - G)(1,0) = 4",mN.subtract(mG).at(1,0),4.0));
iFailuresThreeMatrix.addEq(testValueAndReport(bSilent_Pass,"(N - G)(1,1) = 5",mN.subtract(mG).at(1,1),5.0));
iFailuresThreeMatrix.addEq(testValueAndReport(bSilent_Pass,"(N - G)(1,2) = 6",mN.subtract(mG).at(1,2),6.0));
iFailuresThreeMatrix.addEq(testValueAndReport(bSilent_Pass,"(N - G)(2,0) = 6",mN.subtract(mG).at(2,0),6.0));
iFailuresThreeMatrix.addEq(testValueAndReport(bSilent_Pass,"(N - G)(2,1) = 8",mN.subtract(mG).at(2,1),8.0));
iFailuresThreeMatrix.addEq(testValueAndReport(bSilent_Pass,"(N - G)(2,2) = 9",mN.subtract(mG).at(2,2),9.0));

iFailuresThreeMatrix.addEq(testValueAndReport(bSilent_Pass,"(N - H)(0,0) = 1",mN.subtract(mH).at(0,0),1.0));
iFailuresThreeMatrix.addEq(testValueAndReport(bSilent_Pass,"(N - H)(0,1) = 2",mN.subtract(mH).at(0,1),2.0));
iFailuresThreeMatrix.addEq(testValueAndReport(bSilent_Pass,"(N - H)(0,2) = 3",mN.subtract(mH).at(0,2),3.0));
iFailuresThreeMatrix.addEq(testValueAndReport(bSilent_Pass,"(N - H)(1,0) = 4",mN.subtract(mH).at(1,0),4.0));
iFailuresThreeMatrix.addEq(testValueAndReport(bSilent_Pass,"(N - H)(1,1) = 5",mN.subtract(mH).at(1,1),5.0));
iFailuresThreeMatrix.addEq(testValueAndReport(bSilent_Pass,"(N - H)(1,2) = 6",mN.subtract(mH).at(1,2),6.0));
iFailuresThreeMatrix.addEq(testValueAndReport(bSilent_Pass,"(N - H)(2,0) = 7",mN.subtract(mH).at(2,0),7.0));
iFailuresThreeMatrix.addEq(testValueAndReport(bSilent_Pass,"(N - H)(2,1) = 7",mN.subtract(mH).at(2,1),7.0));
iFailuresThreeMatrix.addEq(testValueAndReport(bSilent_Pass,"(N - H)(2,2) = 9",mN.subtract(mH).at(2,2),9.0));

iFailuresThreeMatrix.addEq(testValueAndReport(bSilent_Pass,"(N - I)(0,0) = 1",mN.subtract(mI).at(0,0),1.0));
iFailuresThreeMatrix.addEq(testValueAndReport(bSilent_Pass,"(N - I)(0,1) = 2",mN.subtract(mI).at(0,1),2.0));
iFailuresThreeMatrix.addEq(testValueAndReport(bSilent_Pass,"(N - I)(0,2) = 3",mN.subtract(mI).at(0,2),3.0));
iFailuresThreeMatrix.addEq(testValueAndReport(bSilent_Pass,"(N - I)(1,0) = 4",mN.subtract(mI).at(1,0),4.0));
iFailuresThreeMatrix.addEq(testValueAndReport(bSilent_Pass,"(N - I)(1,1) = 5",mN.subtract(mI).at(1,1),5.0));
iFailuresThreeMatrix.addEq(testValueAndReport(bSilent_Pass,"(N - I)(1,2) = 6",mN.subtract(mI).at(1,2),6.0));
iFailuresThreeMatrix.addEq(testValueAndReport(bSilent_Pass,"(N - I)(2,0) = 7",mN.subtract(mI).at(2,0),7.0));
iFailuresThreeMatrix.addEq(testValueAndReport(bSilent_Pass,"(N - I)(2,1) = 8",mN.subtract(mI).at(2,1),8.0));
iFailuresThreeMatrix.addEq(testValueAndReport(bSilent_Pass,"(N - I)(2,2) = 8",mN.subtract(mI).at(2,2),8.0));

iFailuresThreeMatrix.addEq(testValueAndReport(bSilent_Pass,"det(N) = 0",mN.determinant(),0.0));
iFailuresThreeMatrix.addEq(testValueAndReport(bSilent_Pass,"det(a) = 0",mA.determinant(),0.0));
iFailuresThreeMatrix.addEq(testValueAndReport(bSilent_Pass,"det(b) = 0",mB.determinant(),0.0));
iFailuresThreeMatrix.addEq(testValueAndReport(bSilent_Pass,"det(c) = 0",mC.determinant(),0.0));
iFailuresThreeMatrix.addEq(testValueAndReport(bSilent_Pass,"det(d) = 0",mD.determinant(),0.0));
iFailuresThreeMatrix.addEq(testValueAndReport(bSilent_Pass,"det(e) = 0",mE.determinant(),0.0));
iFailuresThreeMatrix.addEq(testValueAndReport(bSilent_Pass,"det(f) = 0",mF.determinant(),0.0));
iFailuresThreeMatrix.addEq(testValueAndReport(bSilent_Pass,"det(g) = 0",mG.determinant(),0.0));
iFailuresThreeMatrix.addEq(testValueAndReport(bSilent_Pass,"det(h) = 0",mH.determinant(),0.0));
iFailuresThreeMatrix.addEq(testValueAndReport(bSilent_Pass,"det(i) = 0",mI.determinant(),0.0));
iFailuresThreeMatrix.addEq(testValueAndReport(bSilent_Pass,"det(I) = 1",mIdent.determinant(),1.0));
iFailuresThreeMatrix.addEq(testValueAndReport(bSilent_Pass,"det(0) = 0",mZero.determinant(),0.0));

iFailuresThreeMatrix.addEq(testValueAndReport(bSilent_Pass,"tr(N) = 15",mN.trace(),15.0));
iFailuresThreeMatrix.addEq(testValueAndReport(bSilent_Pass,"tr(a) = 1",mA.trace(),1.0));
iFailuresThreeMatrix.addEq(testValueAndReport(bSilent_Pass,"tr(b) = 0",mB.trace(),0.0));
iFailuresThreeMatrix.addEq(testValueAndReport(bSilent_Pass,"tr(c) = 0",mC.trace(),0.0));
iFailuresThreeMatrix.addEq(testValueAndReport(bSilent_Pass,"tr(d) = 0",mD.trace(),0.0));
iFailuresThreeMatrix.addEq(testValueAndReport(bSilent_Pass,"tr(e) = 1",mE.trace(),1.0));
iFailuresThreeMatrix.addEq(testValueAndReport(bSilent_Pass,"tr(f) = 0",mF.trace(),0.0));
iFailuresThreeMatrix.addEq(testValueAndReport(bSilent_Pass,"tr(g) = 0",mG.trace(),0.0));
iFailuresThreeMatrix.addEq(testValueAndReport(bSilent_Pass,"tr(h) = 0",mH.trace(),0.0));
iFailuresThreeMatrix.addEq(testValueAndReport(bSilent_Pass,"tr(i) = 1",mI.trace(),1.0));
iFailuresThreeMatrix.addEq(testValueAndReport(bSilent_Pass,"tr(I) = 3",mIdent.trace(),3.0));
iFailuresThreeMatrix.addEq(testValueAndReport(bSilent_Pass,"tr(0) = 0",mZero.trace(),0.0));

iFailuresThreeMatrix.addEq(testValueAndReport(bSilent_Pass,"N.vx.x = 1",mN.dotVector(mvX).x,1.0));
iFailuresThreeMatrix.addEq(testValueAndReport(bSilent_Pass,"N.vx.y = 4",mN.dotVector(mvX).y,4.0));
iFailuresThreeMatrix.addEq(testValueAndReport(bSilent_Pass,"N.vx.z = 7",mN.dotVector(mvX).z,7.0));

iFailuresThreeMatrix.addEq(testValueAndReport(bSilent_Pass,"N.vy.x = 2",mN.dotVector(mvY).x,2.0));
iFailuresThreeMatrix.addEq(testValueAndReport(bSilent_Pass,"N.vy.y = 5",mN.dotVector(mvY).y,5.0));
iFailuresThreeMatrix.addEq(testValueAndReport(bSilent_Pass,"N.vy.z = 8",mN.dotVector(mvY).z,8.0));

iFailuresThreeMatrix.addEq(testValueAndReport(bSilent_Pass,"N.vz.x = 3",mN.dotVector(mvZ).x,3.0));
iFailuresThreeMatrix.addEq(testValueAndReport(bSilent_Pass,"N.vz.y = 6",mN.dotVector(mvZ).y,6.0));
iFailuresThreeMatrix.addEq(testValueAndReport(bSilent_Pass,"N.vz.z = 9",mN.dotVector(mvZ).z,9.0));

iFailuresThreeMatrix.addEq(testValueAndReport(bSilent_Pass,"N[0,.].x = 1",mN.row(0).x,1.0));
iFailuresThreeMatrix.addEq(testValueAndReport(bSilent_Pass,"N[0,.].y = 2",mN.row(0).y,2.0));
iFailuresThreeMatrix.addEq(testValueAndReport(bSilent_Pass,"N[0,.].z = 3",mN.row(0).z,3.0));

iFailuresThreeMatrix.addEq(testValueAndReport(bSilent_Pass,"N[1,.].x = 4",mN.row(1).x,4.0));
iFailuresThreeMatrix.addEq(testValueAndReport(bSilent_Pass,"N[1,.].y = 5",mN.row(1).y,5.0));
iFailuresThreeMatrix.addEq(testValueAndReport(bSilent_Pass,"N[1,.].z = 6",mN.row(1).z,6.0));

iFailuresThreeMatrix.addEq(testValueAndReport(bSilent_Pass,"N[2,.].x = 7",mN.row(2).x,7.0));
iFailuresThreeMatrix.addEq(testValueAndReport(bSilent_Pass,"N[2,.].y = 8",mN.row(2).y,8.0));
iFailuresThreeMatrix.addEq(testValueAndReport(bSilent_Pass,"N[2,.].z = 9",mN.row(2).z,9.0));

iFailuresThreeMatrix.addEq(testValueAndReport(bSilent_Pass,"N[.,0].x = 1",mN.column(0).x,1.0));
iFailuresThreeMatrix.addEq(testValueAndReport(bSilent_Pass,"N[.,0].y = 4",mN.column(0).y,4.0));
iFailuresThreeMatrix.addEq(testValueAndReport(bSilent_Pass,"N[.,0].z = 7",mN.column(0).z,7.0));

iFailuresThreeMatrix.addEq(testValueAndReport(bSilent_Pass,"N[.,1].x = 2",mN.column(1).x,2.0));
iFailuresThreeMatrix.addEq(testValueAndReport(bSilent_Pass,"N[.,1].y = 5",mN.column(1).y,5.0));
iFailuresThreeMatrix.addEq(testValueAndReport(bSilent_Pass,"N[.,1].z = 8",mN.column(1).z,8.0));

iFailuresThreeMatrix.addEq(testValueAndReport(bSilent_Pass,"N[.,2].x = 3",mN.column(2).x,3.0));
iFailuresThreeMatrix.addEq(testValueAndReport(bSilent_Pass,"N[.,2].y = 6",mN.column(2).y,6.0));
iFailuresThreeMatrix.addEq(testValueAndReport(bSilent_Pass,"N[.,2].z = 9",mN.column(2).z,9.0));

iFailuresThreeMatrix.addEq(testValueAndReport(bSilent_Pass,"N*a(0,0) = 1",mN.multiply(mA).at(0,0),1.0));
iFailuresThreeMatrix.addEq(testValueAndReport(bSilent_Pass,"N*a(1,0) = 4",mN.multiply(mA).at(1,0),4.0));
iFailuresThreeMatrix.addEq(testValueAndReport(bSilent_Pass,"N*a(2,0) = 7",mN.multiply(mA).at(2,0),7.0));
iFailuresThreeMatrix.addEq(testValueAndReport(bSilent_Pass,"N*a(0,1) = 0",mN.multiply(mA).at(0,1),0.0));
iFailuresThreeMatrix.addEq(testValueAndReport(bSilent_Pass,"N*a(1,1) = 0",mN.multiply(mA).at(1,1),0.0));
iFailuresThreeMatrix.addEq(testValueAndReport(bSilent_Pass,"N*a(2,1) = 0",mN.multiply(mA).at(2,1),0.0));
iFailuresThreeMatrix.addEq(testValueAndReport(bSilent_Pass,"N*a(0,2) = 0",mN.multiply(mA).at(0,2),0.0));
iFailuresThreeMatrix.addEq(testValueAndReport(bSilent_Pass,"N*a(1,2) = 0",mN.multiply(mA).at(1,2),0.0));
iFailuresThreeMatrix.addEq(testValueAndReport(bSilent_Pass,"N*a(2,2) = 0",mN.multiply(mA).at(2,2),0.0));

iFailuresThreeMatrix.addEq(testValueAndReport(bSilent_Pass,"N*b(0,0) = 0",mN.multiply(mB).at(0,0),0.0));
iFailuresThreeMatrix.addEq(testValueAndReport(bSilent_Pass,"N*b(1,0) = 0",mN.multiply(mB).at(1,0),0.0));
iFailuresThreeMatrix.addEq(testValueAndReport(bSilent_Pass,"N*b(2,0) = 0",mN.multiply(mB).at(2,0),0.0));
iFailuresThreeMatrix.addEq(testValueAndReport(bSilent_Pass,"N*b(0,1) = 1",mN.multiply(mB).at(0,1),1.0));
iFailuresThreeMatrix.addEq(testValueAndReport(bSilent_Pass,"N*b(1,1) = 4",mN.multiply(mB).at(1,1),4.0));
iFailuresThreeMatrix.addEq(testValueAndReport(bSilent_Pass,"N*b(2,1) = 7",mN.multiply(mB).at(2,1),7.0));
iFailuresThreeMatrix.addEq(testValueAndReport(bSilent_Pass,"N*b(0,2) = 0",mN.multiply(mB).at(0,2),0.0));
iFailuresThreeMatrix.addEq(testValueAndReport(bSilent_Pass,"N*b(1,2) = 0",mN.multiply(mB).at(1,2),0.0));
iFailuresThreeMatrix.addEq(testValueAndReport(bSilent_Pass,"N*b(2,2) = 0",mN.multiply(mB).at(2,2),0.0));

iFailuresThreeMatrix.addEq(testValueAndReport(bSilent_Pass,"N*c(0,0) = 0",mN.multiply(mC).at(0,0),0.0));
iFailuresThreeMatrix.addEq(testValueAndReport(bSilent_Pass,"N*c(1,0) = 0",mN.multiply(mC).at(1,0),0.0));
iFailuresThreeMatrix.addEq(testValueAndReport(bSilent_Pass,"N*c(2,0) = 0",mN.multiply(mC).at(2,0),0.0));
iFailuresThreeMatrix.addEq(testValueAndReport(bSilent_Pass,"N*c(0,1) = 0",mN.multiply(mC).at(0,1),0.0));
iFailuresThreeMatrix.addEq(testValueAndReport(bSilent_Pass,"N*c(1,1) = 0",mN.multiply(mC).at(1,1),0.0));
iFailuresThreeMatrix.addEq(testValueAndReport(bSilent_Pass,"N*c(2,1) = 0",mN.multiply(mC).at(2,1),0.0));
iFailuresThreeMatrix.addEq(testValueAndReport(bSilent_Pass,"N*c(0,2) = 1",mN.multiply(mC).at(0,2),1.0));
iFailuresThreeMatrix.addEq(testValueAndReport(bSilent_Pass,"N*c(1,2) = 4",mN.multiply(mC).at(1,2),4.0));
iFailuresThreeMatrix.addEq(testValueAndReport(bSilent_Pass,"N*c(2,2) = 7",mN.multiply(mC).at(2,2),7.0));

iFailuresThreeMatrix.addEq(testValueAndReport(bSilent_Pass,"N*d(0,0) = 2",mN.multiply(mD).at(0,0),2.0));
iFailuresThreeMatrix.addEq(testValueAndReport(bSilent_Pass,"N*d(1,0) = 5",mN.multiply(mD).at(1,0),5.0));
iFailuresThreeMatrix.addEq(testValueAndReport(bSilent_Pass,"N*d(2,0) = 8",mN.multiply(mD).at(2,0),8.0));
iFailuresThreeMatrix.addEq(testValueAndReport(bSilent_Pass,"N*d(0,1) = 0",mN.multiply(mD).at(0,1),0.0));
iFailuresThreeMatrix.addEq(testValueAndReport(bSilent_Pass,"N*d(1,1) = 0",mN.multiply(mD).at(1,1),0.0));
iFailuresThreeMatrix.addEq(testValueAndReport(bSilent_Pass,"N*d(2,1) = 0",mN.multiply(mD).at(2,1),0.0));
iFailuresThreeMatrix.addEq(testValueAndReport(bSilent_Pass,"N*d(0,2) = 0",mN.multiply(mD).at(0,2),0.0));
iFailuresThreeMatrix.addEq(testValueAndReport(bSilent_Pass,"N*d(1,2) = 0",mN.multiply(mD).at(1,2),0.0));
iFailuresThreeMatrix.addEq(testValueAndReport(bSilent_Pass,"N*d(2,2) = 0",mN.multiply(mD).at(2,2),0.0));

iFailuresThreeMatrix.addEq(testValueAndReport(bSilent_Pass,"N*e(0,0) = 0",mN.multiply(mE).at(0,0),0.0));
iFailuresThreeMatrix.addEq(testValueAndReport(bSilent_Pass,"N*e(1,0) = 0",mN.multiply(mE).at(1,0),0.0));
iFailuresThreeMatrix.addEq(testValueAndReport(bSilent_Pass,"N*e(2,0) = 0",mN.multiply(mE).at(2,0),0.0));
iFailuresThreeMatrix.addEq(testValueAndReport(bSilent_Pass,"N*e(0,1) = 2",mN.multiply(mE).at(0,1),2.0));
iFailuresThreeMatrix.addEq(testValueAndReport(bSilent_Pass,"N*e(1,1) = 5",mN.multiply(mE).at(1,1),5.0));
iFailuresThreeMatrix.addEq(testValueAndReport(bSilent_Pass,"N*e(2,1) = 8",mN.multiply(mE).at(2,1),8.0));
iFailuresThreeMatrix.addEq(testValueAndReport(bSilent_Pass,"N*e(0,2) = 0",mN.multiply(mE).at(0,2),0.0));
iFailuresThreeMatrix.addEq(testValueAndReport(bSilent_Pass,"N*e(1,2) = 0",mN.multiply(mE).at(1,2),0.0));
iFailuresThreeMatrix.addEq(testValueAndReport(bSilent_Pass,"N*e(2,2) = 0",mN.multiply(mE).at(2,2),0.0));

iFailuresThreeMatrix.addEq(testValueAndReport(bSilent_Pass,"N*f(0,0) = 0",mN.multiply(mF).at(0,0),0.0));
iFailuresThreeMatrix.addEq(testValueAndReport(bSilent_Pass,"N*f(1,0) = 0",mN.multiply(mF).at(1,0),0.0));
iFailuresThreeMatrix.addEq(testValueAndReport(bSilent_Pass,"N*f(2,0) = 0",mN.multiply(mF).at(2,0),0.0));
iFailuresThreeMatrix.addEq(testValueAndReport(bSilent_Pass,"N*f(0,1) = 0",mN.multiply(mF).at(0,1),0.0));
iFailuresThreeMatrix.addEq(testValueAndReport(bSilent_Pass,"N*f(1,1) = 0",mN.multiply(mF).at(1,1),0.0));
iFailuresThreeMatrix.addEq(testValueAndReport(bSilent_Pass,"N*f(2,1) = 0",mN.multiply(mF).at(2,1),0.0));
iFailuresThreeMatrix.addEq(testValueAndReport(bSilent_Pass,"N*f(0,2) = 2",mN.multiply(mF).at(0,2),2.0));
iFailuresThreeMatrix.addEq(testValueAndReport(bSilent_Pass,"N*f(1,2) = 5",mN.multiply(mF).at(1,2),5.0));
iFailuresThreeMatrix.addEq(testValueAndReport(bSilent_Pass,"N*f(2,2) = 8",mN.multiply(mF).at(2,2),8.0));

iFailuresThreeMatrix.addEq(testValueAndReport(bSilent_Pass,"N*g(0,0) = 3",mN.multiply(mG).at(0,0),3.0));
iFailuresThreeMatrix.addEq(testValueAndReport(bSilent_Pass,"N*g(1,0) = 6",mN.multiply(mG).at(1,0),6.0));
iFailuresThreeMatrix.addEq(testValueAndReport(bSilent_Pass,"N*g(2,0) = 9",mN.multiply(mG).at(2,0),9.0));
iFailuresThreeMatrix.addEq(testValueAndReport(bSilent_Pass,"N*g(0,1) = 0",mN.multiply(mG).at(0,1),0.0));
iFailuresThreeMatrix.addEq(testValueAndReport(bSilent_Pass,"N*g(1,1) = 0",mN.multiply(mG).at(1,1),0.0));
iFailuresThreeMatrix.addEq(testValueAndReport(bSilent_Pass,"N*g(2,1) = 0",mN.multiply(mG).at(2,1),0.0));
iFailuresThreeMatrix.addEq(testValueAndReport(bSilent_Pass,"N*g(0,2) = 0",mN.multiply(mG).at(0,2),0.0));
iFailuresThreeMatrix.addEq(testValueAndReport(bSilent_Pass,"N*g(1,2) = 0",mN.multiply(mG).at(1,2),0.0));
iFailuresThreeMatrix.addEq(testValueAndReport(bSilent_Pass,"N*g(2,2) = 0",mN.multiply(mG).at(2,2),0.0));

iFailuresThreeMatrix.addEq(testValueAndReport(bSilent_Pass,"N*h(0,0) = 0",mN.multiply(mH).at(0,0),0.0));
iFailuresThreeMatrix.addEq(testValueAndReport(bSilent_Pass,"N*h(1,0) = 0",mN.multiply(mH).at(1,0),0.0));
iFailuresThreeMatrix.addEq(testValueAndReport(bSilent_Pass,"N*h(2,0) = 0",mN.multiply(mH).at(2,0),0.0));
iFailuresThreeMatrix.addEq(testValueAndReport(bSilent_Pass,"N*h(0,1) = 3",mN.multiply(mH).at(0,1),3.0));
iFailuresThreeMatrix.addEq(testValueAndReport(bSilent_Pass,"N*h(1,1) = 6",mN.multiply(mH).at(1,1),6.0));
iFailuresThreeMatrix.addEq(testValueAndReport(bSilent_Pass,"N*h(2,1) = 9",mN.multiply(mH).at(2,1),9.0));
iFailuresThreeMatrix.addEq(testValueAndReport(bSilent_Pass,"N*h(0,2) = 0",mN.multiply(mH).at(0,2),0.0));
iFailuresThreeMatrix.addEq(testValueAndReport(bSilent_Pass,"N*h(1,2) = 0",mN.multiply(mH).at(1,2),0.0));
iFailuresThreeMatrix.addEq(testValueAndReport(bSilent_Pass,"N*h(2,2) = 0",mN.multiply(mH).at(2,2),0.0));

iFailuresThreeMatrix.addEq(testValueAndReport(bSilent_Pass,"N*i(0,0) = 0",mN.multiply(mI).at(0,0),0.0));
iFailuresThreeMatrix.addEq(testValueAndReport(bSilent_Pass,"N*i(1,0) = 0",mN.multiply(mI).at(1,0),0.0));
iFailuresThreeMatrix.addEq(testValueAndReport(bSilent_Pass,"N*i(2,0) = 0",mN.multiply(mI).at(2,0),0.0));
iFailuresThreeMatrix.addEq(testValueAndReport(bSilent_Pass,"N*i(0,1) = 0",mN.multiply(mI).at(0,1),0.0));
iFailuresThreeMatrix.addEq(testValueAndReport(bSilent_Pass,"N*i(1,1) = 0",mN.multiply(mI).at(1,1),0.0));
iFailuresThreeMatrix.addEq(testValueAndReport(bSilent_Pass,"N*i(2,1) = 0",mN.multiply(mI).at(2,1),0.0));
iFailuresThreeMatrix.addEq(testValueAndReport(bSilent_Pass,"N*i(0,2) = 3",mN.multiply(mI).at(0,2),3.0));
iFailuresThreeMatrix.addEq(testValueAndReport(bSilent_Pass,"N*i(1,2) = 6",mN.multiply(mI).at(1,2),6.0));
iFailuresThreeMatrix.addEq(testValueAndReport(bSilent_Pass,"N*i(2,2) = 9",mN.multiply(mI).at(2,2),9.0));

iFailuresThreeMatrix.addEq(testValueAndReport(bSilent_Pass,"XYZ^(-1)(0,0) = 1",mIdent.invert().at(0,0),1.0));
iFailuresThreeMatrix.addEq(testValueAndReport(bSilent_Pass,"XYZ^(-1)(1,0) = 0",mIdent.invert().at(1,0),0.0));
iFailuresThreeMatrix.addEq(testValueAndReport(bSilent_Pass,"XYZ^(-1)(2,0) = 0",mIdent.invert().at(2,0),0.0));
iFailuresThreeMatrix.addEq(testValueAndReport(bSilent_Pass,"XYZ^(-1)(0,1) = 0",mIdent.invert().at(0,1),0.0));
iFailuresThreeMatrix.addEq(testValueAndReport(bSilent_Pass,"XYZ^(-1)(1,1) = 1",mIdent.invert().at(1,1),1.0));
iFailuresThreeMatrix.addEq(testValueAndReport(bSilent_Pass,"XYZ^(-1)(2,1) = 0",mIdent.invert().at(2,1),0.0));
iFailuresThreeMatrix.addEq(testValueAndReport(bSilent_Pass,"XYZ^(-1)(0,2) = 0",mIdent.invert().at(0,2),0.0));
iFailuresThreeMatrix.addEq(testValueAndReport(bSilent_Pass,"XYZ^(-1)(1,2) = 0",mIdent.invert().at(1,2),0.0));
iFailuresThreeMatrix.addEq(testValueAndReport(bSilent_Pass,"XYZ^(-1)(2,2) = 1",mIdent.invert().at(2,2),1.0));

iFailuresThreeMatrix.addEq(testValueAndReport(bSilent_Pass,"XZY^(-1)(0,0) = 1",mXZY.invert().at(0,0),1.0));
iFailuresThreeMatrix.addEq(testValueAndReport(bSilent_Pass,"XZY^(-1)(1,0) = 0",mXZY.invert().at(1,0),0.0));
iFailuresThreeMatrix.addEq(testValueAndReport(bSilent_Pass,"XZY^(-1)(2,0) = 0",mXZY.invert().at(2,0),0.0));
iFailuresThreeMatrix.addEq(testValueAndReport(bSilent_Pass,"XZY^(-1)(0,1) = 0",mXZY.invert().at(0,1),0.0));
iFailuresThreeMatrix.addEq(testValueAndReport(bSilent_Pass,"XZY^(-1)(1,1) = 0",mXZY.invert().at(1,1),0.0));
iFailuresThreeMatrix.addEq(testValueAndReport(bSilent_Pass,"XZY^(-1)(2,1) = 1",mXZY.invert().at(2,1),1.0));
iFailuresThreeMatrix.addEq(testValueAndReport(bSilent_Pass,"XZY^(-1)(0,2) = 0",mXZY.invert().at(0,2),0.0));
iFailuresThreeMatrix.addEq(testValueAndReport(bSilent_Pass,"XZY^(-1)(1,2) = 1",mXZY.invert().at(1,2),1.0));
iFailuresThreeMatrix.addEq(testValueAndReport(bSilent_Pass,"XZY^(-1)(2,2) = 0",mXZY.invert().at(2,2),0.0));

iFailuresThreeMatrix.addEq(testValueAndReport(bSilent_Pass,"YXZ^(-1)(0,0) = 0",mYXZ.invert().at(0,0),0.0));
iFailuresThreeMatrix.addEq(testValueAndReport(bSilent_Pass,"YXZ^(-1)(1,0) = 1",mYXZ.invert().at(1,0),1.0));
iFailuresThreeMatrix.addEq(testValueAndReport(bSilent_Pass,"YXZ^(-1)(2,0) = 0",mYXZ.invert().at(2,0),0.0));
iFailuresThreeMatrix.addEq(testValueAndReport(bSilent_Pass,"YXZ^(-1)(0,1) = 1",mYXZ.invert().at(0,1),1.0));
iFailuresThreeMatrix.addEq(testValueAndReport(bSilent_Pass,"YXZ^(-1)(1,1) = 0",mYXZ.invert().at(1,1),0.0));
iFailuresThreeMatrix.addEq(testValueAndReport(bSilent_Pass,"YXZ^(-1)(2,1) = 0",mYXZ.invert().at(2,1),0.0));
iFailuresThreeMatrix.addEq(testValueAndReport(bSilent_Pass,"YXZ^(-1)(0,2) = 0",mYXZ.invert().at(0,2),0.0));
iFailuresThreeMatrix.addEq(testValueAndReport(bSilent_Pass,"YXZ^(-1)(1,2) = 0",mYXZ.invert().at(1,2),0.0));
iFailuresThreeMatrix.addEq(testValueAndReport(bSilent_Pass,"YXZ^(-1)(2,2) = 1",mYXZ.invert().at(2,2),1.0));

iFailuresThreeMatrix.addEq(testValueAndReport(bSilent_Pass,"YZX^(-1)(0,0) = 0",mYZX.invert().at(0,0),0.0));
iFailuresThreeMatrix.addEq(testValueAndReport(bSilent_Pass,"YZX^(-1)(1,0) = 1",mYZX.invert().at(1,0),1.0));
iFailuresThreeMatrix.addEq(testValueAndReport(bSilent_Pass,"YZX^(-1)(2,0) = 0",mYZX.invert().at(2,0),0.0));
iFailuresThreeMatrix.addEq(testValueAndReport(bSilent_Pass,"YZX^(-1)(0,1) = 0",mYZX.invert().at(0,1),0.0));
iFailuresThreeMatrix.addEq(testValueAndReport(bSilent_Pass,"YZX^(-1)(1,1) = 0",mYZX.invert().at(1,1),0.0));
iFailuresThreeMatrix.addEq(testValueAndReport(bSilent_Pass,"YZX^(-1)(2,1) = 1",mYZX.invert().at(2,1),1.0));
iFailuresThreeMatrix.addEq(testValueAndReport(bSilent_Pass,"YZX^(-1)(0,2) = 1",mYZX.invert().at(0,2),1.0));
iFailuresThreeMatrix.addEq(testValueAndReport(bSilent_Pass,"YZX^(-1)(1,2) = 0",mYZX.invert().at(1,2),0.0));
iFailuresThreeMatrix.addEq(testValueAndReport(bSilent_Pass,"YZX^(-1)(2,2) = 0",mYZX.invert().at(2,2),0.0));

iFailuresThreeMatrix.addEq(testValueAndReport(bSilent_Pass,"ZXY^(-1)(0,0) = 0",mZXY.invert().at(0,0),0.0));
iFailuresThreeMatrix.addEq(testValueAndReport(bSilent_Pass,"ZXY^(-1)(1,0) = 0",mZXY.invert().at(1,0),0.0));
iFailuresThreeMatrix.addEq(testValueAndReport(bSilent_Pass,"ZXY^(-1)(2,0) = 1",mZXY.invert().at(2,0),1.0));
iFailuresThreeMatrix.addEq(testValueAndReport(bSilent_Pass,"ZXY^(-1)(0,1) = 1",mZXY.invert().at(0,1),1.0));
iFailuresThreeMatrix.addEq(testValueAndReport(bSilent_Pass,"ZXY^(-1)(1,1) = 0",mZXY.invert().at(1,1),0.0));
iFailuresThreeMatrix.addEq(testValueAndReport(bSilent_Pass,"ZXY^(-1)(2,1) = 0",mZXY.invert().at(2,1),0.0));
iFailuresThreeMatrix.addEq(testValueAndReport(bSilent_Pass,"ZXY^(-1)(0,2) = 0",mZXY.invert().at(0,2),0.0));
iFailuresThreeMatrix.addEq(testValueAndReport(bSilent_Pass,"ZXY^(-1)(1,2) = 1",mZXY.invert().at(1,2),1.0));
iFailuresThreeMatrix.addEq(testValueAndReport(bSilent_Pass,"ZXY^(-1)(2,2) = 0",mZXY.invert().at(2,2),0.0));

iFailuresThreeMatrix.addEq(testValueAndReport(bSilent_Pass,"ZYX^(-1)(0,0) = 0",mZYX.invert().at(0,0),0.0));
iFailuresThreeMatrix.addEq(testValueAndReport(bSilent_Pass,"ZYX^(-1)(1,0) = 0",mZYX.invert().at(1,0),0.0));
iFailuresThreeMatrix.addEq(testValueAndReport(bSilent_Pass,"ZYX^(-1)(2,0) = 1",mZYX.invert().at(2,0),1.0));
iFailuresThreeMatrix.addEq(testValueAndReport(bSilent_Pass,"ZYX^(-1)(0,1) = 0",mZYX.invert().at(0,1),0.0));
iFailuresThreeMatrix.addEq(testValueAndReport(bSilent_Pass,"ZYX^(-1)(1,1) = 1",mZYX.invert().at(1,1),1.0));
iFailuresThreeMatrix.addEq(testValueAndReport(bSilent_Pass,"ZYX^(-1)(2,1) = 0",mZYX.invert().at(2,1),0.0));
iFailuresThreeMatrix.addEq(testValueAndReport(bSilent_Pass,"ZYX^(-1)(0,2) = 1",mZYX.invert().at(0,2),1.0));
iFailuresThreeMatrix.addEq(testValueAndReport(bSilent_Pass,"ZYX^(-1)(1,2) = 0",mZYX.invert().at(1,2),0.0));
iFailuresThreeMatrix.addEq(testValueAndReport(bSilent_Pass,"ZYX^(-1)(2,2) = 0",mZYX.invert().at(2,2),0.0));

iFailuresThreeMatrix.report("Three Matrix");

