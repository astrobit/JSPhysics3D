var iFailuresFourMatrix = new TestCount();

var mA = new FourMatrix([1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]);
var mB = new FourMatrix([[0,1,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0]]);
var mC = new FourMatrix([0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0]);
var mD = new FourMatrix([0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0]);
var mE = new FourMatrix([0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0]);
var mF = new FourMatrix([0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0]);
var mG = new FourMatrix([0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0]);
var mH = new FourMatrix([0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0]);
var mI = new FourMatrix([0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0]);
var mJ = new FourMatrix([0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0]);
var mK = new FourMatrix([0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0]);
var mL = new FourMatrix([0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0]);
var mM = new FourMatrix([0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0]);
var mN = new FourMatrix([0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0]);
var mO = new FourMatrix([0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0]);
var mP = new FourMatrix([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1]);

var mRand = new FourMatrix([0.18893418,0.510986168,0.529607806,0.743794614,0.282937897,0.972385316,0.194448,0.71574734,0.78645587,0.703070954,0.165803114,0.059270184,0.966363068,0.124061093
,0.970358617,0.578749882]);

var mSet = [mA,mB,mC,mD,mE,mF,mG,mH,mI,mJ,mK,mL,mM,mN,mO,mP];

var mTXYZ = new FourMatrix([[1,0,0,0],[0,1,0,0],[0,0,1,0],[0,0,0,1]]); // Identify matrix
var mTXZY = new FourMatrix([[1,0,0,0],[0,1,0,0],[0,0,0,1],[0,0,1,0]]);
var mTYXZ = new FourMatrix([[1,0,0,0],[0,0,1,0],[0,1,0,0],[0,0,0,1]]);
var mTYZX = new FourMatrix([[1,0,0,0],[0,0,1,0],[0,0,0,1],[0,1,0,0]]);
var mTZXY = new FourMatrix([[1,0,0,0],[0,0,0,1],[0,1,0,0],[0,0,1,0]]);
var mTZYX = new FourMatrix([[1,0,0,0],[0,0,0,1],[0,0,1,0],[0,1,0,0]]);

var mXTYZ = new FourMatrix([[0,1,0,0],[1,0,0,0],[0,0,1,0],[0,0,0,1]]);
var mXTZY = new FourMatrix([[0,1,0,0],[1,0,0,0],[0,0,0,1],[0,0,1,0]]);
var mYTXZ = new FourMatrix([[0,0,1,0],[1,0,0,0],[0,1,0,0],[0,0,0,1]]);
var mYTZX = new FourMatrix([[0,0,1,0],[1,0,0,0],[0,0,0,1],[0,1,0,0]]);
var mZTXY = new FourMatrix([[0,0,0,1],[1,0,0,0],[0,1,0,0],[0,0,1,0]]);
var mZTYX = new FourMatrix([[0,0,0,1],[1,0,0,0],[0,0,1,0],[0,1,0,0]]);

var mYXTZ = new FourMatrix([[0,0,1,0],[0,1,0,0],[1,0,0,0],[0,0,0,1]]);
var mZXTY = new FourMatrix([[0,0,0,1],[0,1,0,0],[1,0,0,0],[0,0,1,0]]);
var mXYTZ = new FourMatrix([[0,1,0,0],[0,0,1,0],[1,0,0,0],[0,0,0,1]]);
var mZYTX = new FourMatrix([[0,0,0,1],[0,0,1,0],[1,0,0,0],[0,1,0,0]]);
var mXZTY = new FourMatrix([[0,1,0,0],[0,0,0,1],[1,0,0,0],[0,0,1,0]]);
var mYZTX = new FourMatrix([[0,0,1,0],[0,0,0,1],[1,0,0,0],[0,1,0,0]]);

var mZXYT = new FourMatrix([[0,0,0,1],[0,1,0,0],[0,0,1,0],[1,0,0,0]]);
var mYXZT = new FourMatrix([[0,0,1,0],[0,1,0,0],[0,0,0,1],[1,0,0,0]]);
var mZYXT = new FourMatrix([[0,0,0,1],[0,0,1,0],[0,1,0,0],[1,0,0,0]]);
var mXYZT = new FourMatrix([[0,1,0,0],[0,0,1,0],[0,0,0,1],[1,0,0,0]]);
var mYZXT = new FourMatrix([[0,0,1,0],[0,0,0,1],[0,1,0,0],[1,0,0,0]]);
var mXZYT = new FourMatrix([[0,1,0,0],[0,0,0,1],[0,0,1,0],[1,0,0,0]]);

var mSetI = [mTXYZ,mTXZY,mTYXZ,mTYZX,mTZXY,mTZYX,
			 mXTYZ, mXTZY, mYTXZ, mYTZX, mZTXY, mZTYX,
			 mYXTZ, mZXTY, mXYTZ, mZYTX, mXZTY, mYZTX,
			 mZXYT, mYXZT, mZYXT, mXYZT, mYZXT, mXZYT];

var mvT = new FourVector(1,0,0,0);
var mvX = new FourVector(0,1,0,0);
var mvY = new FourVector(0,0,1,0);
var mvZ = new FourVector(0,0,0,1);

var mvSet = [mvT,mvX,mvY,mvZ];

var mNN = new FourMatrix([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16]);
var mIdent = new FourMatrix();
mIdent.loadIdentity();

var mZero = new FourMatrix();
mZero.loadZero();

var i,j;

for (i = 0; i < 16; i++)
{
	var letter;
	if (i == 0)
		letter = 'a';
	else if (i == 1)
		letter = 'b';
	else if (i == 2)
		letter = 'c';
	else if (i == 3)
		letter = 'd';
	else if (i == 4)
		letter = 'e';
	else if (i == 5)
		letter = 'f';
	else if (i == 6)
		letter = 'g';
	else if (i == 7)
		letter = 'h';
	else if (i == 8)
		letter = 'i';
	else if (i == 9)
		letter = 'j';
	else if (i == 10)
		letter = 'k';
	else if (i == 11)
		letter = 'l';
	else if (i == 12)
		letter = 'm';
	else if (i == 13)
		letter = 'n';
	else if (i == 14)
		letter = 'o';
	else if (i == 15)
		letter = 'p';
		
	for (j = 0; j < 16; j++)
	{
		var row = Math.floor(j / 4);
		var col = j % 4;
		if (i == j)
			iFailuresFourMatrix.addEq(testValueAndReport(bSilent_Pass,letter + "(" + row + "," + col + ") = 1",mSet[i].at(row,col),1.0));
		else
			iFailuresFourMatrix.addEq(testValueAndReport(bSilent_Pass,letter + "(" + row + "," + col + ") = 0",mSet[i].at(row,col),0.0));
	}
}

for (j = 0; j < 16; j++)
{
	var row = Math.floor(j / 4);
	var col = j % 4;
	if (row == col)
		iFailuresFourMatrix.addEq(testValueAndReport(bSilent_Pass,"I(" + row + "," + col + ") = 1",mIdent.at(row,col),1.0));
	else
		iFailuresFourMatrix.addEq(testValueAndReport(bSilent_Pass,"I(" + row + "," + col + ") = 0",mIdent.at(row,col),0.0));
}

for (j = 0; j < 16; j++)
{
	var row = Math.floor(j / 4);
	var col = j % 4;
	iFailuresFourMatrix.addEq(testValueAndReport(bSilent_Pass,"0(" + row + "," + col + ") = 0",mZero.at(row,col),0.0));
}

for (j = 0; j < 16; j++)
{
	var row = Math.floor(j / 4);
	var col = j % 4;
	iFailuresFourMatrix.addEq(testValueAndReport(bSilent_Pass,"N(" + row + "," + col + ") = " + (j + 1),mNN.at(row,col),j + 1));
}

for (j = 0; j < 16; j++)
{
	var row = Math.floor(j / 4);
	var col = j % 4;
	iFailuresFourMatrix.addEq(testValueAndReport(bSilent_Pass,"transpose N(" + row + "," + col + ") = " + mNN.at(col,row),mNN.transpose().at(row,col),mNN.at(col,row)));
}

for (j = 0; j < 16; j++)
{
	var row = Math.floor(j / 4);
	var col = j % 4;
	iFailuresFourMatrix.addEq(testValueAndReport(bSilent_Pass,"-N(" + row + "," + col + ") = " + (-(j + 1)),mNN.negate().at(row,col),-(j + 1)));
}

for (j = 0; j < 16; j++)
{
	var row = Math.floor(j / 4);
	var col = j % 4;
	iFailuresFourMatrix.addEq(testValueAndReport(bSilent_Pass,"2N(" + row + "," + col + ") = " + (2*(j + 1)),mNN.scale(2).at(row,col),2*(j + 1)));
}

for (i = 0; i < 16; i++)
{
	var letter;
	if (i == 0)
		letter = 'a';
	else if (i == 1)
		letter = 'b';
	else if (i == 2)
		letter = 'c';
	else if (i == 3)
		letter = 'd';
	else if (i == 4)
		letter = 'e';
	else if (i == 5)
		letter = 'f';
	else if (i == 6)
		letter = 'g';
	else if (i == 7)
		letter = 'h';
	else if (i == 8)
		letter = 'i';
	else if (i == 9)
		letter = 'j';
	else if (i == 10)
		letter = 'k';
	else if (i == 11)
		letter = 'l';
	else if (i == 12)
		letter = 'm';
	else if (i == 13)
		letter = 'n';
	else if (i == 14)
		letter = 'o';
	else if (i == 15)
		letter = 'p';
		
	for (j = 0; j < 16; j++)
	{
		var row = Math.floor(j / 4);
		var col = j % 4;
		if (i == j)
			iFailuresFourMatrix.addEq(testValueAndReport(bSilent_Pass,"(N + " + letter + ")(" + row + "," + col + ") = " + (2 + j),mNN.add(mSet[i]).at(row,col),2.0 + j));
		else
			iFailuresFourMatrix.addEq(testValueAndReport(bSilent_Pass,"(N + " + letter + ")(" + row + "," + col + ") = " + (1 + j),mNN.add(mSet[i]).at(row,col),1 + j));
	}
}


for (i = 0; i < 16; i++)
{
	var letter;
	if (i == 0)
		letter = 'a';
	else if (i == 1)
		letter = 'b';
	else if (i == 2)
		letter = 'c';
	else if (i == 3)
		letter = 'd';
	else if (i == 4)
		letter = 'e';
	else if (i == 5)
		letter = 'f';
	else if (i == 6)
		letter = 'g';
	else if (i == 7)
		letter = 'h';
	else if (i == 8)
		letter = 'i';
	else if (i == 9)
		letter = 'j';
	else if (i == 10)
		letter = 'k';
	else if (i == 11)
		letter = 'l';
	else if (i == 12)
		letter = 'm';
	else if (i == 13)
		letter = 'n';
	else if (i == 14)
		letter = 'o';
	else if (i == 15)
		letter = 'p';
		
	for (j = 0; j < 16; j++)
	{
		var row = Math.floor(j / 4);
		var col = j % 4;
		if (i == j)
			iFailuresFourMatrix.addEq(testValueAndReport(bSilent_Pass,"(N - " + letter + ")(" + row + "," + col + ") = " + (j),mNN.subtract(mSet[i]).at(row,col),j));
		else
			iFailuresFourMatrix.addEq(testValueAndReport(bSilent_Pass,"(N - " + letter + ")(" + row + "," + col + ") = " + (1 + j),mNN.subtract(mSet[i]).at(row,col),1 + j));
	}
}



for (i = 0; i < 16; i++)
{
	var letter;
	if (i == 0)
		letter = 'a';
	else if (i == 1)
		letter = 'b';
	else if (i == 2)
		letter = 'c';
	else if (i == 3)
		letter = 'd';
	else if (i == 4)
		letter = 'e';
	else if (i == 5)
		letter = 'f';
	else if (i == 6)
		letter = 'g';
	else if (i == 7)
		letter = 'h';
	else if (i == 8)
		letter = 'i';
	else if (i == 9)
		letter = 'j';
	else if (i == 10)
		letter = 'k';
	else if (i == 11)
		letter = 'l';
	else if (i == 12)
		letter = 'm';
	else if (i == 13)
		letter = 'n';
	else if (i == 14)
		letter = 'o';
	else if (i == 15)
		letter = 'p';
		
	iFailuresFourMatrix.addEq(testValueAndReport(bSilent_Pass,"det(" + letter + ") = 0",mSet[i].determinant(),0));
}

iFailuresFourMatrix.addEq(testValueAndReport(bSilent_Pass,"det(rand) = -0.08929531",mRand.determinant(),-0.08929531));
iFailuresFourMatrix.addEq(testValueAndReport(bSilent_Pass,"det(N) = 0",mN.determinant(),0));
iFailuresFourMatrix.addEq(testValueAndReport(bSilent_Pass,"det(I) = 1",mIdent.determinant(),1));
iFailuresFourMatrix.addEq(testValueAndReport(bSilent_Pass,"det(0) = 0",mZero.determinant(),0));


for (i = 0; i < 16; i++)
{
	var letter;
	if (i == 0)
		letter = 'a';
	else if (i == 1)
		letter = 'b';
	else if (i == 2)
		letter = 'c';
	else if (i == 3)
		letter = 'd';
	else if (i == 4)
		letter = 'e';
	else if (i == 5)
		letter = 'f';
	else if (i == 6)
		letter = 'g';
	else if (i == 7)
		letter = 'h';
	else if (i == 8)
		letter = 'i';
	else if (i == 9)
		letter = 'j';
	else if (i == 10)
		letter = 'k';
	else if (i == 11)
		letter = 'l';
	else if (i == 12)
		letter = 'm';
	else if (i == 13)
		letter = 'n';
	else if (i == 14)
		letter = 'o';
	else if (i == 15)
		letter = 'p';
	if (i % 4 == Math.floor(i / 4))		
		iFailuresFourMatrix.addEq(testValueAndReport(bSilent_Pass,"tr(" + letter + ") = 1",mSet[i].trace(),1));
	else
		iFailuresFourMatrix.addEq(testValueAndReport(bSilent_Pass,"tr(" + letter + ") = 0",mSet[i].trace(),0));
}
iFailuresFourMatrix.addEq(testValueAndReport(bSilent_Pass,"tr(rand) = 34",mRand.trace(),1.905872492));
iFailuresFourMatrix.addEq(testValueAndReport(bSilent_Pass,"tr(N) = 34",mNN.trace(),34));
iFailuresFourMatrix.addEq(testValueAndReport(bSilent_Pass,"tr(I) = 4",mIdent.trace(),4));
iFailuresFourMatrix.addEq(testValueAndReport(bSilent_Pass,"tr(0) = 0",mZero.trace(),0));



for (j = 0; j < 4; j++)
{
	var letter;
	if (j == 0)
		letter = "vt";
	else if (j == 1)
		letter = "vx";
	else if (j == 2)
		letter = "vy";
	else if (j == 3)
		letter = "vz";
		
	iFailuresFourMatrix.addEq(testValueAndReport(bSilent_Pass,"N." + letter + ".t = " + mNN.at(0,j),mNN.dotVector(mvSet[j]).t,mNN.at(0,j)));
	iFailuresFourMatrix.addEq(testValueAndReport(bSilent_Pass,"N." + letter + ".x = " + mNN.at(1,j),mNN.dotVector(mvSet[j]).x,mNN.at(1,j)));
	iFailuresFourMatrix.addEq(testValueAndReport(bSilent_Pass,"N." + letter + ".y = " + mNN.at(2,j),mNN.dotVector(mvSet[j]).y,mNN.at(2,j)));
	iFailuresFourMatrix.addEq(testValueAndReport(bSilent_Pass,"N." + letter + ".z = " + mNN.at(3,j),mNN.dotVector(mvSet[j]).z,mNN.at(3,j)));
}


for (i = 0; i < 16; i++)
{
	var letter;
	if (i == 0)
		letter = 'a';
	else if (i == 1)
		letter = 'b';
	else if (i == 2)
		letter = 'c';
	else if (i == 3)
		letter = 'd';
	else if (i == 4)
		letter = 'e';
	else if (i == 5)
		letter = 'f';
	else if (i == 6)
		letter = 'g';
	else if (i == 7)
		letter = 'h';
	else if (i == 8)
		letter = 'i';
	else if (i == 9)
		letter = 'j';
	else if (i == 10)
		letter = 'k';
	else if (i == 11)
		letter = 'l';
	else if (i == 12)
		letter = 'm';
	else if (i == 13)
		letter = 'n';
	else if (i == 14)
		letter = 'o';
	else if (i == 15)
		letter = 'p';
		
	var rowi = Math.floor(i / 4);
	var coli = i % 4;
		
	for (j = 0; j < 16; j++)
	{
		var row = Math.floor(j / 4);
		var col = j % 4;
		if (Math.floor(coli) == Math.floor(col))
		{
			iFailuresFourMatrix.addEq(testValueAndReport(bSilent_Pass,"(N * " + letter + ")(" + row + "," + col + ") = " + mNN.at(row,rowi),mNN.multiply(mSet[i]).at(row,col),mNN.at(row,rowi)));
		}
		else
		{
			iFailuresFourMatrix.addEq(testValueAndReport(bSilent_Pass,"(N * " + letter + ")(" + row + "," + col + ") = 0",mNN.multiply(mSet[i]).at(row,col),0));
		}
	}
}

for (i = 0; i < mSetI.length; i++)
{
	for (j = 0; j < 4; j++)
	{
		for (k =0; k < 4; k++)
		{
			iFailuresFourMatrix.addEq(testValueAndReport(bSilent_Pass,"(" + i + ")^(-1)(" + j + "," + k + ") = 0",mSetI[i].invert().at(j,k),mSetI[i].transpose().at(j,k)));
		}
	}
}	

iFailuresFourMatrix.addEq(testValueAndReport(bSilent_Pass,"(rand)^(-1)(0,0)",mRand.invert().at(0,0),-4.852150656));
iFailuresFourMatrix.addEq(testValueAndReport(bSilent_Pass,"(rand)^(-1)(0,1)",mRand.invert().at(0,1),3.36166264));
iFailuresFourMatrix.addEq(testValueAndReport(bSilent_Pass,"(rand)^(-1)(0,2)",mRand.invert().at(0,2),-1.517028055));
iFailuresFourMatrix.addEq(testValueAndReport(bSilent_Pass,"(rand)^(-1)(0,3)",mRand.invert().at(0,3),2.233809463));

iFailuresFourMatrix.addEq(testValueAndReport(bSilent_Pass,"(rand)^(-1)(1,0)",mRand.invert().at(1,0),4.088085145));
iFailuresFourMatrix.addEq(testValueAndReport(bSilent_Pass,"(rand)^(-1)(1,1)",mRand.invert().at(1,1),-2.743571684));
iFailuresFourMatrix.addEq(testValueAndReport(bSilent_Pass,"(rand)^(-1)(1,2)",mRand.invert().at(1,2),2.621390499));
iFailuresFourMatrix.addEq(testValueAndReport(bSilent_Pass,"(rand)^(-1)(1,3)",mRand.invert().at(1,3),-2.129351406));

iFailuresFourMatrix.addEq(testValueAndReport(bSilent_Pass,"(rand)^(-1)(2,0)",mRand.invert().at(2,0),7.730636486));
iFailuresFourMatrix.addEq(testValueAndReport(bSilent_Pass,"(rand)^(-1)(2,1)",mRand.invert().at(2,1),-6.278094633));
iFailuresFourMatrix.addEq(testValueAndReport(bSilent_Pass,"(rand)^(-1)(2,2)",mRand.invert().at(2,2),3.510917916));
iFailuresFourMatrix.addEq(testValueAndReport(bSilent_Pass,"(rand)^(-1)(2,3)",mRand.invert().at(2,3),-2.530573299));

iFailuresFourMatrix.addEq(testValueAndReport(bSilent_Pass,"(rand)^(-1)(3,0)",mRand.invert().at(3,0),-5.736023366));
iFailuresFourMatrix.addEq(testValueAndReport(bSilent_Pass,"(rand)^(-1)(3,1)",mRand.invert().at(3,1),5.501145147));
iFailuresFourMatrix.addEq(testValueAndReport(bSilent_Pass,"(rand)^(-1)(3,2)",mRand.invert().at(3,2),-3.915442938));
iFailuresFourMatrix.addEq(testValueAndReport(bSilent_Pass,"(rand)^(-1)(3,3)",mRand.invert().at(3,3),2.697300425));

iFailuresFourMatrix.report("Four Matrix");

