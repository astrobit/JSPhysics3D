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



for (i = 0; i < 9; i++)
{
	var letter = nToLetter(i);		
		
	for (j = 0; j < 9; j++)
	{
		var row = Math.floor(j / 3);
		var col = j % 3;
		if (i == j)
			iFailuresThreeMatrix.addEq(testValueAndReport(bSilent_Pass,letter + "(" + row + "," + col + ")",mSet[i].at(row,col),1.0));
		else
			iFailuresThreeMatrix.addEq(testValueAndReport(bSilent_Pass,letter + "(" + row + "," + col + ")",mSet[i].at(row,col),0.0));
	}
}

for (j = 0; j < 9; j++)
{
	var row = Math.floor(j / 3);
	var col = j % 3;
	if (row == col)
		iFailuresThreeMatrix.addEq(testValueAndReport(bSilent_Pass,"I(" + row + "," + col + ")",mIdent.at(row,col),1.0));
	else
		iFailuresThreeMatrix.addEq(testValueAndReport(bSilent_Pass,"I(" + row + "," + col + ")",mIdent.at(row,col),0.0));
}

for (j = 0; j < 9; j++)
{
	var row = Math.floor(j / 3);
	var col = j % 3;
	iFailuresThreeMatrix.addEq(testValueAndReport(bSilent_Pass,"0(" + row + "," + col + ")",mZero.at(row,col),0.0));
}

for (j = 0; j < 9; j++)
{
	var row = Math.floor(j / 3);
	var col = j % 3;
	iFailuresThreeMatrix.addEq(testValueAndReport(bSilent_Pass,"N(" + row + "," + col + ")",mNN.at(row,col),j + 1));
}

for (j = 0; j < 9; j++)
{
	var row = Math.floor(j / 3);
	var col = j % 3;
	iFailuresThreeMatrix.addEq(testValueAndReport(bSilent_Pass,"transpose N(" + row + "," + col + ")",mNN.transpose().at(row,col),mNN.at(col,row)));
}

for (j = 0; j < 9; j++)
{
	var row = Math.floor(j / 3);
	var col = j % 3;
	iFailuresThreeMatrix.addEq(testValueAndReport(bSilent_Pass,"-N(" + row + "," + col + ")",mNN.negate().at(row,col),-(j + 1)));
}

for (j = 0; j < 9; j++)
{
	var row = Math.floor(j / 3);
	var col = j % 3;
	iFailuresThreeMatrix.addEq(testValueAndReport(bSilent_Pass,"2N(" + row + "," + col + ")",mNN.scale(2).at(row,col),2*(j + 1)));
}

for (i = 0; i < 9; i++)
{
	var letter = nToLetter(i);		
		
	for (j = 0; j < 9; j++)
	{
		var row = Math.floor(j / 3);
		var col = j % 3;
		if (i == j)
			iFailuresThreeMatrix.addEq(testValueAndReport(bSilent_Pass,"(N + " + letter + ")(" + row + "," + col + ")",mNN.add(mSet[i]).at(row,col),2.0 + j));
		else
			iFailuresThreeMatrix.addEq(testValueAndReport(bSilent_Pass,"(N + " + letter + ")(" + row + "," + col + ")",mNN.add(mSet[i]).at(row,col),1 + j));
	}
}


for (i = 0; i < 9; i++)
{
	var letter = nToLetter(i);		
		
	for (j = 0; j < 9; j++)
	{
		var row = Math.floor(j / 3);
		var col = j % 3;
		if (i == j)
			iFailuresThreeMatrix.addEq(testValueAndReport(bSilent_Pass,"(N - " + letter + ")(" + row + "," + col + ")",mNN.subtract(mSet[i]).at(row,col),j));
		else
			iFailuresThreeMatrix.addEq(testValueAndReport(bSilent_Pass,"(N - " + letter + ")(" + row + "," + col + ")",mNN.subtract(mSet[i]).at(row,col),1 + j));
	}
}



for (i = 0; i < 9; i++)
{
	var letter = nToLetter(i);		
		
	iFailuresThreeMatrix.addEq(testValueAndReport(bSilent_Pass,"det(" + letter + ")",mSet[i].determinant(),0));
}

iFailuresThreeMatrix.addEq(testValueAndReport(bSilent_Pass,"det(rand)",mRand.determinant(),-0.240856277));
iFailuresThreeMatrix.addEq(testValueAndReport(bSilent_Pass,"det(N)",mNN.determinant(),0));
iFailuresThreeMatrix.addEq(testValueAndReport(bSilent_Pass,"det(I)",mIdent.determinant(),1));
iFailuresThreeMatrix.addEq(testValueAndReport(bSilent_Pass,"det(0)",mZero.determinant(),0));


for (i = 0; i < 9; i++)
{
	var letter = nToLetter(i);		
	if (i % 3 == Math.floor(i / 3))		
		iFailuresThreeMatrix.addEq(testValueAndReport(bSilent_Pass,"tr(" + letter + ")",mSet[i].trace(),1));
	else
		iFailuresThreeMatrix.addEq(testValueAndReport(bSilent_Pass,"tr(" + letter + ")",mSet[i].trace(),0));
}
iFailuresThreeMatrix.addEq(testValueAndReport(bSilent_Pass,"tr(rand)",mRand.trace(),1.32712261));
iFailuresThreeMatrix.addEq(testValueAndReport(bSilent_Pass,"tr(N)",mNN.trace(),15));
iFailuresThreeMatrix.addEq(testValueAndReport(bSilent_Pass,"tr(I)",mIdent.trace(),3));
iFailuresThreeMatrix.addEq(testValueAndReport(bSilent_Pass,"tr(0)",mZero.trace(),0));



for (j = 0; j < 3; j++)
{
	var letter;
	if (j == 0)
		letter = "vx";
	else if (j == 1)
		letter = "vy";
	else if (j == 2)
		letter = "vz";
		
	iFailuresThreeMatrix.addEq(testValueAndReport(bSilent_Pass,"N." + letter + ".x",mNN.dotVector(mvSet[j]).x,mNN.at(0,j)));
	iFailuresThreeMatrix.addEq(testValueAndReport(bSilent_Pass,"N." + letter + ".y",mNN.dotVector(mvSet[j]).y,mNN.at(1,j)));
	iFailuresThreeMatrix.addEq(testValueAndReport(bSilent_Pass,"N." + letter + ".z",mNN.dotVector(mvSet[j]).z,mNN.at(2,j)));
}


for (i = 0; i < 9; i++)
{
	var letter = nToLetter(i);		
		
	var rowi = Math.floor(i / 3);
	var coli = i % 3;
		
	for (j = 0; j < 9; j++)
	{
		var row = Math.floor(j / 3);
		var col = j % 3;
		if (Math.floor(coli) == Math.floor(col))
		{
			iFailuresThreeMatrix.addEq(testValueAndReport(bSilent_Pass,"(N * " + letter + ")(" + row + "," + col + ")", mNN.multiply(mSet[i]).at(row,col),mNN.at(row,rowi)));
		}
		else
		{
			iFailuresThreeMatrix.addEq(testValueAndReport(bSilent_Pass,"(N * " + letter + ")(" + row + "," + col + ")", mNN.multiply(mSet[i]).at(row,col),0));
		}
	}
}

for (i = 0; i < mSetI.length; i++)
{
	for (j = 0; j < 3; j++)
	{
		for (k =0; k < 3; k++)
		{
			iFailuresThreeMatrix.addEq(testValueAndReport(bSilent_Pass,"(" + i + ")^(-1)(" + j + "," + k + ")", mSetI[i].invert().at(j,k),mSetI[i].transpose().at(j,k)));
		}
	}
}	

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

